// SPDX-License-Identifier: MIT
pragma solidity >=0.8.21;

/* Autogenerated file. Do not edit manually. */

import { IStore } from "@latticexyz/store/src/IStore.sol";
import { IWorldKernel } from "../../IWorldKernel.sol";

import { ICoreRegistrationSystem } from "./ICoreRegistrationSystem.sol";
import { IAccessManagementSystem } from "./IAccessManagementSystem.sol";
import { IBalanceTransferSystem } from "./IBalanceTransferSystem.sol";
import { IBatchCallSystem } from "./IBatchCallSystem.sol";
import { IModuleInstallationSystem } from "./IModuleInstallationSystem.sol";
import { IWorldRegistrationSystem } from "./IWorldRegistrationSystem.sol";

/**
 * @title IBaseWorld
 * @notice This interface integrates all systems and associated function selectors
 * that are dynamically registered in the World during deployment.
 * @dev This is an autogenerated file; do not edit manually.
 */
interface IBaseWorld is
  IStore,
  IWorldKernel,
  ICoreRegistrationSystem,
  IAccessManagementSystem,
  IBalanceTransferSystem,
  IBatchCallSystem,
  IModuleInstallationSystem,
  IWorldRegistrationSystem
{

}
