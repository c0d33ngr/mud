// SPDX-License-Identifier: MIT
pragma solidity >=0.8.21;

import { WorldContextConsumer } from "./WorldContext.sol";
import { IWorldContextConsumer } from "./IWorldContextConsumer.sol";
import { IModule, IModule } from "./IModule.sol";
import { IERC165 } from "./IERC165.sol";
import { InstalledModules } from "./codegen/tables/InstalledModules.sol";

/**
 * @title Module
 * @dev Abstract contract that implements the ERC-165 supportsInterface function for IModule.
 */
abstract contract Module is IModule, WorldContextConsumer {
  address internal immutable __self = address(this);

  /**
   * @notice Checks if the given interfaceId is supported by this contract.
   * @dev Overrides the functionality from IERC165 and WorldContextConsumer to check for supported interfaces.
   * @param interfaceId The bytes4 identifier for the interface.
   * @return true if the interface is supported, false otherwise.
   */
  function supportsInterface(
    bytes4 interfaceId
  ) public pure virtual override(IERC165, WorldContextConsumer) returns (bool) {
    return
      interfaceId == type(IModule).interfaceId ||
      interfaceId == type(IWorldContextConsumer).interfaceId ||
      interfaceId == type(IERC165).interfaceId;
  }

  /**
   * @dev Check if a module with the given name and arguments is installed.
   * @param moduleAddress The address of the module.
   * @param args The arguments for the module installation.
   * @return true if the module is installed, false otherwise.
   */
  function isInstalled(address moduleAddress, bytes memory args) internal view returns (bool) {
    return InstalledModules.get(moduleAddress, keccak256(args));
  }

  /**
   * @dev Revert if the module with the given name and arguments is already installed.
   * @param moduleAddress The address of the module.
   * @param args The arguments for the module installation.
   */
  function requireNotInstalled(address moduleAddress, bytes memory args) internal view {
    if (isInstalled(moduleAddress, args)) {
      revert Module_AlreadyInstalled();
    }
  }
}
