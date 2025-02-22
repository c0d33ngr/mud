// SPDX-License-Identifier: MIT
pragma solidity >=0.8.21;

/* Autogenerated file. Do not edit manually. */

// Import schema type
import { SchemaType } from "@latticexyz/schema-type/src/solidity/SchemaType.sol";

// Import store internals
import { IStore } from "@latticexyz/store/src/IStore.sol";
import { StoreSwitch } from "@latticexyz/store/src/StoreSwitch.sol";
import { StoreCore } from "@latticexyz/store/src/StoreCore.sol";
import { Bytes } from "@latticexyz/store/src/Bytes.sol";
import { Memory } from "@latticexyz/store/src/Memory.sol";
import { SliceLib } from "@latticexyz/store/src/Slice.sol";
import { EncodeArray } from "@latticexyz/store/src/tightcoder/EncodeArray.sol";
import { FieldLayout, FieldLayoutLib } from "@latticexyz/store/src/FieldLayout.sol";
import { Schema, SchemaLib } from "@latticexyz/store/src/Schema.sol";
import { PackedCounter, PackedCounterLib } from "@latticexyz/store/src/PackedCounter.sol";
import { ResourceId } from "@latticexyz/store/src/ResourceId.sol";
import { RESOURCE_TABLE, RESOURCE_OFFCHAIN_TABLE } from "@latticexyz/store/src/storeResourceTypes.sol";

// Import user types
import { ResourceId } from "@latticexyz/store/src/ResourceId.sol";

ResourceId constant _tableId = ResourceId.wrap(
  bytes32(abi.encodePacked(RESOURCE_TABLE, bytes14("world"), bytes16("FunctionSelector")))
);
ResourceId constant FunctionSelectorsTableId = _tableId;

FieldLayout constant _fieldLayout = FieldLayout.wrap(
  0x0024020020040000000000000000000000000000000000000000000000000000
);

library FunctionSelectors {
  /**
   * @notice Get the table values' field layout.
   * @return _fieldLayout The field layout for the table.
   */
  function getFieldLayout() internal pure returns (FieldLayout) {
    return _fieldLayout;
  }

  /**
   * @notice Get the table's key schema.
   * @return _keySchema The key schema for the table.
   */
  function getKeySchema() internal pure returns (Schema) {
    SchemaType[] memory _keySchema = new SchemaType[](1);
    _keySchema[0] = SchemaType.BYTES4;

    return SchemaLib.encode(_keySchema);
  }

  /**
   * @notice Get the table's value schema.
   * @return _valueSchema The value schema for the table.
   */
  function getValueSchema() internal pure returns (Schema) {
    SchemaType[] memory _valueSchema = new SchemaType[](2);
    _valueSchema[0] = SchemaType.BYTES32;
    _valueSchema[1] = SchemaType.BYTES4;

    return SchemaLib.encode(_valueSchema);
  }

  /**
   * @notice Get the table's key field names.
   * @return keyNames An array of strings with the names of key fields.
   */
  function getKeyNames() internal pure returns (string[] memory keyNames) {
    keyNames = new string[](1);
    keyNames[0] = "functionSelector";
  }

  /**
   * @notice Get the table's value field names.
   * @return fieldNames An array of strings with the names of value fields.
   */
  function getFieldNames() internal pure returns (string[] memory fieldNames) {
    fieldNames = new string[](2);
    fieldNames[0] = "systemId";
    fieldNames[1] = "systemFunctionSelector";
  }

  /**
   * @notice Register the table with its config.
   */
  function register() internal {
    StoreSwitch.registerTable(_tableId, _fieldLayout, getKeySchema(), getValueSchema(), getKeyNames(), getFieldNames());
  }

  /**
   * @notice Register the table with its config.
   */
  function _register() internal {
    StoreCore.registerTable(_tableId, _fieldLayout, getKeySchema(), getValueSchema(), getKeyNames(), getFieldNames());
  }

  /**
   * @notice Get systemId.
   */
  function getSystemId(bytes4 functionSelector) internal view returns (ResourceId systemId) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32(functionSelector);

    bytes32 _blob = StoreSwitch.getStaticField(_tableId, _keyTuple, 0, _fieldLayout);
    return ResourceId.wrap(bytes32(_blob));
  }

  /**
   * @notice Get systemId.
   */
  function _getSystemId(bytes4 functionSelector) internal view returns (ResourceId systemId) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32(functionSelector);

    bytes32 _blob = StoreCore.getStaticField(_tableId, _keyTuple, 0, _fieldLayout);
    return ResourceId.wrap(bytes32(_blob));
  }

  /**
   * @notice Set systemId.
   */
  function setSystemId(bytes4 functionSelector, ResourceId systemId) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32(functionSelector);

    StoreSwitch.setStaticField(_tableId, _keyTuple, 0, abi.encodePacked(ResourceId.unwrap(systemId)), _fieldLayout);
  }

  /**
   * @notice Set systemId.
   */
  function _setSystemId(bytes4 functionSelector, ResourceId systemId) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32(functionSelector);

    StoreCore.setStaticField(_tableId, _keyTuple, 0, abi.encodePacked(ResourceId.unwrap(systemId)), _fieldLayout);
  }

  /**
   * @notice Get systemFunctionSelector.
   */
  function getSystemFunctionSelector(bytes4 functionSelector) internal view returns (bytes4 systemFunctionSelector) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32(functionSelector);

    bytes32 _blob = StoreSwitch.getStaticField(_tableId, _keyTuple, 1, _fieldLayout);
    return (bytes4(_blob));
  }

  /**
   * @notice Get systemFunctionSelector.
   */
  function _getSystemFunctionSelector(bytes4 functionSelector) internal view returns (bytes4 systemFunctionSelector) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32(functionSelector);

    bytes32 _blob = StoreCore.getStaticField(_tableId, _keyTuple, 1, _fieldLayout);
    return (bytes4(_blob));
  }

  /**
   * @notice Set systemFunctionSelector.
   */
  function setSystemFunctionSelector(bytes4 functionSelector, bytes4 systemFunctionSelector) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32(functionSelector);

    StoreSwitch.setStaticField(_tableId, _keyTuple, 1, abi.encodePacked((systemFunctionSelector)), _fieldLayout);
  }

  /**
   * @notice Set systemFunctionSelector.
   */
  function _setSystemFunctionSelector(bytes4 functionSelector, bytes4 systemFunctionSelector) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32(functionSelector);

    StoreCore.setStaticField(_tableId, _keyTuple, 1, abi.encodePacked((systemFunctionSelector)), _fieldLayout);
  }

  /**
   * @notice Get the full data.
   */
  function get(bytes4 functionSelector) internal view returns (ResourceId systemId, bytes4 systemFunctionSelector) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32(functionSelector);

    (bytes memory _staticData, PackedCounter _encodedLengths, bytes memory _dynamicData) = StoreSwitch.getRecord(
      _tableId,
      _keyTuple,
      _fieldLayout
    );
    return decode(_staticData, _encodedLengths, _dynamicData);
  }

  /**
   * @notice Get the full data.
   */
  function _get(bytes4 functionSelector) internal view returns (ResourceId systemId, bytes4 systemFunctionSelector) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32(functionSelector);

    (bytes memory _staticData, PackedCounter _encodedLengths, bytes memory _dynamicData) = StoreCore.getRecord(
      _tableId,
      _keyTuple,
      _fieldLayout
    );
    return decode(_staticData, _encodedLengths, _dynamicData);
  }

  /**
   * @notice Set the full data using individual values.
   */
  function set(bytes4 functionSelector, ResourceId systemId, bytes4 systemFunctionSelector) internal {
    bytes memory _staticData = encodeStatic(systemId, systemFunctionSelector);

    PackedCounter _encodedLengths;
    bytes memory _dynamicData;

    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32(functionSelector);

    StoreSwitch.setRecord(_tableId, _keyTuple, _staticData, _encodedLengths, _dynamicData);
  }

  /**
   * @notice Set the full data using individual values.
   */
  function _set(bytes4 functionSelector, ResourceId systemId, bytes4 systemFunctionSelector) internal {
    bytes memory _staticData = encodeStatic(systemId, systemFunctionSelector);

    PackedCounter _encodedLengths;
    bytes memory _dynamicData;

    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32(functionSelector);

    StoreCore.setRecord(_tableId, _keyTuple, _staticData, _encodedLengths, _dynamicData, _fieldLayout);
  }

  /**
   * @notice Decode the tightly packed blob of static data using this table's field layout.
   */
  function decodeStatic(bytes memory _blob) internal pure returns (ResourceId systemId, bytes4 systemFunctionSelector) {
    systemId = ResourceId.wrap(Bytes.slice32(_blob, 0));

    systemFunctionSelector = (Bytes.slice4(_blob, 32));
  }

  /**
   * @notice Decode the tightly packed blobs using this table's field layout.
   * @param _staticData Tightly packed static fields.
   *
   *
   */
  function decode(
    bytes memory _staticData,
    PackedCounter,
    bytes memory
  ) internal pure returns (ResourceId systemId, bytes4 systemFunctionSelector) {
    (systemId, systemFunctionSelector) = decodeStatic(_staticData);
  }

  /**
   * @notice Delete all data for given keys.
   */
  function deleteRecord(bytes4 functionSelector) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32(functionSelector);

    StoreSwitch.deleteRecord(_tableId, _keyTuple);
  }

  /**
   * @notice Delete all data for given keys.
   */
  function _deleteRecord(bytes4 functionSelector) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32(functionSelector);

    StoreCore.deleteRecord(_tableId, _keyTuple, _fieldLayout);
  }

  /**
   * @notice Tightly pack static (fixed length) data using this table's schema.
   * @return The static data, encoded into a sequence of bytes.
   */
  function encodeStatic(ResourceId systemId, bytes4 systemFunctionSelector) internal pure returns (bytes memory) {
    return abi.encodePacked(systemId, systemFunctionSelector);
  }

  /**
   * @notice Encode all of a record's fields.
   * @return The static (fixed length) data, encoded into a sequence of bytes.
   * @return The lengths of the dynamic fields (packed into a single bytes32 value).
   * @return The dynamic (variable length) data, encoded into a sequence of bytes.
   */
  function encode(
    ResourceId systemId,
    bytes4 systemFunctionSelector
  ) internal pure returns (bytes memory, PackedCounter, bytes memory) {
    bytes memory _staticData = encodeStatic(systemId, systemFunctionSelector);

    PackedCounter _encodedLengths;
    bytes memory _dynamicData;

    return (_staticData, _encodedLengths, _dynamicData);
  }

  /**
   * @notice Encode keys as a bytes32 array using this table's field layout.
   */
  function encodeKeyTuple(bytes4 functionSelector) internal pure returns (bytes32[] memory) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32(functionSelector);

    return _keyTuple;
  }
}
