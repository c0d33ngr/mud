/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  EmbodiedSystemArgumentComponent,
  EmbodiedSystemArgumentComponentInterface,
} from "../EmbodiedSystemArgumentComponent";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "world",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "getEntities",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "value",
        type: "bytes",
      },
    ],
    name: "getEntitiesWithValue",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getID",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "entity",
        type: "uint256",
      },
    ],
    name: "getRawValue",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "entity",
        type: "uint256",
      },
    ],
    name: "getValue",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "entity",
        type: "uint256",
      },
    ],
    name: "has",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "indexer",
        type: "address",
      },
    ],
    name: "registerIndexer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "entity",
        type: "uint256",
      },
    ],
    name: "remove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "entity",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "value",
        type: "bytes",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "world",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620021b1380380620021b18339810160408190526200003491620001a9565b600080546001600160a01b0319166001600160a01b038316908117909155819063f303477030620000827f0187e81a3a92b0d0cbf329dd843ad56df485cc23bd1186a3b42cddf2138015a390565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401600060405180830381600087803b158015620000c957600080fd5b505af1158015620000de573d6000803e3d6000fd5b50505050604051620000f0906200018d565b604051809103906000f0801580156200010d573d6000803e3d6000fd5b50600280546001600160a01b0319166001600160a01b03929092169190911790556040516200013c906200019b565b604051809103906000f08015801562000159573d6000803e3d6000fd5b50600380546001600160a01b03929092166001600160a01b0319928316179055600180549091163317905550620001db9050565b610438806200188f83390190565b6104ea8062001cc783390190565b600060208284031215620001bc57600080fd5b81516001600160a01b0381168114620001d457600080fd5b9392505050565b6116a480620001eb6000396000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c80638da5cb5b11610081578063b8bc073d1161005b578063b8bc073d146101f8578063cccf7a8e1461020b578063f2fde38b1461022e57600080fd5b80638da5cb5b14610197578063ab9dbd07146101b7578063b361be46146101e557600080fd5b80634cc82215116100b25780634cc822151461015c57806375c0669c146101715780638b2829471461018457600080fd5b80630ff4c916146100d957806330b67baa1461010257806331b933b914610147575b600080fd5b6100ec6100e73660046110d0565b610241565b6040516100f99190611163565b60405180910390f35b6000546101229073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100f9565b61014f610252565b6040516100f99190611176565b61016f61016a3660046110d0565b61030d565b005b61016f61017f3660046111ba565b61062d565b61016f6101923660046112fc565b6107b5565b6001546101229073ffffffffffffffffffffffffffffffffffffffff1681565b6040517f0187e81a3a92b0d0cbf329dd843ad56df485cc23bd1186a3b42cddf2138015a381526020016100f9565b61014f6101f3366004611343565b610b7b565b6100ec6102063660046110d0565b610c39565b61021e6102193660046110d0565b610cdb565b60405190151581526020016100f9565b61016f61023c3660046111ba565b610d6f565b606061024c82610c39565b92915050565b600254604080517f410d59cc000000000000000000000000000000000000000000000000000000008152905160609273ffffffffffffffffffffffffffffffffffffffff169163410d59cc9160048083019260009291908290030181865afa1580156102c2573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526103089190810190611380565b905090565b60015473ffffffffffffffffffffffffffffffffffffffff163314610393576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f4f4e4c595f434f4e54524143545f4f574e45520000000000000000000000000060448201526064015b60405180910390fd5b60035460008281526004602052604090819020905173ffffffffffffffffffffffffffffffffffffffff90921691636526db7a916103d091611479565b60405190819003812060e083901b7fffffffff00000000000000000000000000000000000000000000000000000000168252600482015260248101849052604401600060405180830381600087803b15801561042b57600080fd5b505af115801561043f573d6000803e3d6000fd5b50506002546040517f4cc822150000000000000000000000000000000000000000000000000000000081526004810185905273ffffffffffffffffffffffffffffffffffffffff9091169250634cc822159150602401600060405180830381600087803b1580156104af57600080fd5b505af11580156104c3573d6000803e3d6000fd5b50505060008281526004602052604081206104df925090610ffa565b60005b60055481101561059f57600581815481106104ff576104ff61154b565b6000918252602090912001546040517f4cc822150000000000000000000000000000000000000000000000000000000081526004810184905273ffffffffffffffffffffffffffffffffffffffff90911690634cc8221590602401600060405180830381600087803b15801561057457600080fd5b505af1158015610588573d6000803e3d6000fd5b5050505080806105979061157a565b9150506104e2565b506000546040517fd803064a0000000000000000000000000000000000000000000000000000000081523060048201526024810183905273ffffffffffffffffffffffffffffffffffffffff9091169063d803064a90604401600060405180830381600087803b15801561061257600080fd5b505af1158015610626573d6000803e3d6000fd5b5050505050565b60015473ffffffffffffffffffffffffffffffffffffffff1633146106ae576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f4f4e4c595f434f4e54524143545f4f574e455200000000000000000000000000604482015260640161038a565b6106d8817f4ede9a2d00000000000000000000000000000000000000000000000000000000610e37565b61073e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f476976656e2061646472657373206973206e6f7420616e20696e64657865722e604482015260640161038a565b600580546001810182556000919091527f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db00180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60015473ffffffffffffffffffffffffffffffffffffffff163314610836576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f4f4e4c595f434f4e54524143545f4f574e455200000000000000000000000000604482015260640161038a565b6002546040517f1003e2d20000000000000000000000000000000000000000000000000000000081526004810184905273ffffffffffffffffffffffffffffffffffffffff90911690631003e2d290602401600060405180830381600087803b1580156108a257600080fd5b505af11580156108b6573d6000803e3d6000fd5b505060035460008581526004602052604090819020905173ffffffffffffffffffffffffffffffffffffffff9092169350636526db7a92506108f791611479565b60405190819003812060e083901b7fffffffff00000000000000000000000000000000000000000000000000000000168252600482015260248101859052604401600060405180830381600087803b15801561095257600080fd5b505af1158015610966573d6000803e3d6000fd5b5050506000838152600460209081526040909120835161098b93509091840190611037565b50600354815160208301206040517f771602f700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9092169163771602f7916109f2918690600401918252602082015260400190565b600060405180830381600087803b158015610a0c57600080fd5b505af1158015610a20573d6000803e3d6000fd5b5050505060005b600554811015610aea5760058181548110610a4457610a4461154b565b6000918252602090912001546040517f0216b83800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff90911690630216b83890610aa590869086906004016115d9565b600060405180830381600087803b158015610abf57600080fd5b505af1158015610ad3573d6000803e3d6000fd5b505050508080610ae29061157a565b915050610a27565b506000546040517faf104e4000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9091169063af104e4090610b45903090869086906004016115f2565b600060405180830381600087803b158015610b5f57600080fd5b505af1158015610b73573d6000803e3d6000fd5b505050505050565b600354815160208301206040517f796c5e94000000000000000000000000000000000000000000000000000000008152600481019190915260609173ffffffffffffffffffffffffffffffffffffffff169063796c5e9490602401600060405180830381865afa158015610bf3573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261024c9190810190611380565b6000818152600460205260409020805460609190610c5690611426565b80601f0160208091040260200160405190810160405280929190818152602001828054610c8290611426565b8015610ccf5780601f10610ca457610100808354040283529160200191610ccf565b820191906000526020600020905b815481529060010190602001808311610cb257829003601f168201915b50505050509050919050565b6002546040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810183905260009173ffffffffffffffffffffffffffffffffffffffff169063cccf7a8e90602401602060405180830381865afa158015610d4b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061024c9190611630565b60015473ffffffffffffffffffffffffffffffffffffffff163314610df0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f4f4e4c595f434f4e54524143545f4f574e455200000000000000000000000000604482015260640161038a565b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6000610e4283610e5a565b8015610e535750610e538383610ebe565b9392505050565b6000610e86827f01ffc9a700000000000000000000000000000000000000000000000000000000610ebe565b801561024c5750610eb7827fffffffff00000000000000000000000000000000000000000000000000000000610ebe565b1592915050565b604080517fffffffff00000000000000000000000000000000000000000000000000000000831660248083019190915282518083039091018152604490910182526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f01ffc9a7000000000000000000000000000000000000000000000000000000001790529051600091908290819073ffffffffffffffffffffffffffffffffffffffff87169061753090610f78908690611652565b6000604051808303818686fa925050503d8060008114610fb4576040519150601f19603f3d011682016040523d82523d6000602084013e610fb9565b606091505b5091509150602081511015610fd4576000935050505061024c565b818015610ff0575080806020019051810190610ff09190611630565b9695505050505050565b50805461100690611426565b6000825580601f10611016575050565b601f01602090049060005260206000209081019061103491906110bb565b50565b82805461104390611426565b90600052602060002090601f01602090048101928261106557600085556110ab565b82601f1061107e57805160ff19168380011785556110ab565b828001600101855582156110ab579182015b828111156110ab578251825591602001919060010190611090565b506110b79291506110bb565b5090565b5b808211156110b757600081556001016110bc565b6000602082840312156110e257600080fd5b5035919050565b60005b838110156111045781810151838201526020016110ec565b83811115611113576000848401525b50505050565b600081518084526111318160208601602086016110e9565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081526000610e536020830184611119565b6020808252825182820181905260009190848201906040850190845b818110156111ae57835183529284019291840191600101611192565b50909695505050505050565b6000602082840312156111cc57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff81168114610e5357600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611266576112666111f0565b604052919050565b600082601f83011261127f57600080fd5b813567ffffffffffffffff811115611299576112996111f0565b6112ca60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8401160161121f565b8181528460208386010111156112df57600080fd5b816020850160208301376000918101602001919091529392505050565b6000806040838503121561130f57600080fd5b82359150602083013567ffffffffffffffff81111561132d57600080fd5b6113398582860161126e565b9150509250929050565b60006020828403121561135557600080fd5b813567ffffffffffffffff81111561136c57600080fd5b6113788482850161126e565b949350505050565b6000602080838503121561139357600080fd5b825167ffffffffffffffff808211156113ab57600080fd5b818501915085601f8301126113bf57600080fd5b8151818111156113d1576113d16111f0565b8060051b91506113e284830161121f565b81815291830184019184810190888411156113fc57600080fd5b938501935b8385101561141a57845182529385019390850190611401565b98975050505050505050565b600181811c9082168061143a57607f821691505b602082108103611473577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b600080835481600182811c91508083168061149557607f831692505b602080841082036114cd577f4e487b710000000000000000000000000000000000000000000000000000000086526022600452602486fd5b8180156114e157600181146115105761153d565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0086168952848901965061153d565b60008a81526020902060005b868110156115355781548b82015290850190830161151c565b505084890196505b509498975050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036115d2577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b8281526040602082015260006113786040830184611119565b73ffffffffffffffffffffffffffffffffffffffff841681528260208201526060604082015260006116276060830184611119565b95945050505050565b60006020828403121561164257600080fd5b81518015158114610e5357600080fd5b600082516116648184602087016110e9565b919091019291505056fea2646970667358221220f2659a3506dda2479dc276bca9353c3571dec229e616cececa4fd2850c78272364736f6c634300080d0033608060405234801561001057600080fd5b50610418806100206000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c80634cc82215116100505780634cc822151461009f578063949d225d146100b2578063cccf7a8e146100c357600080fd5b80631003e2d21461006c578063410d59cc14610081575b600080fd5b61007f61007a3660046102e9565b6100e6565b005b610089610138565b6040516100969190610302565b60405180910390f35b61007f6100ad3660046102e9565b610190565b600054604051908152602001610096565b6100d66100d13660046102e9565b610286565b6040519015158152602001610096565b6100ef81610286565b156100f75750565b600080548282526001602081905260408320829055810182559080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5630155565b6060600080548060200260200160405190810160405280929190818152602001828054801561018657602002820191906000526020600020905b815481526020019060010190808311610172575b5050505050905090565b61019981610286565b6101a05750565b600080546101b090600190610346565b815481106101c0576101c0610384565b906000526020600020015460006001600084815260200190815260200160002054815481106101f1576101f1610384565b6000918252602080832090910192909255828152600191829052604081205481549092919081908490811061022857610228610384565b90600052602060002001548152602001908152602001600020819055506001600082815260200190815260200160002060009055600080548061026d5761026d6103b3565b6001900381819060005260206000200160009055905550565b60008054810361029857506000919050565b60008281526001602052604081205490036102d45781600080815481106102c1576102c1610384565b9060005260206000200154149050919050565b50600090815260016020526040902054151590565b6000602082840312156102fb57600080fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b8181101561033a5783518352928401929184019160010161031e565b50909695505050505050565b60008282101561037f577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfea2646970667358221220306162261924bfa673cd43a39edda8526afef2615cf36bb707b4d6df0e25306264736f6c634300080d0033608060405234801561001057600080fd5b506104ca806100206000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c8063796c5e9411610050578063796c5e941461009457806385edea13146100bd578063a0265ff8146100eb57600080fd5b80636526db7a1461006c578063771602f714610081575b600080fd5b61007f61007a366004610379565b61010e565b005b61007f61008f366004610379565b61023d565b6100a76100a236600461039b565b610286565b6040516100b491906103b4565b60405180910390f35b6100dd6100cb36600461039b565b60009081526020819052604090205490565b6040519081526020016100b4565b6100fe6100f9366004610379565b6102e6565b60405190151581526020016100b4565b61011882826102e6565b610120575050565b6000828152602081905260409020805461013c906001906103f8565b8154811061014c5761014c610436565b6000918252602080832090910154848352828252604080842060018452818520868652909352909220548154811061018657610186610436565b6000918252602080832090910192909255838152600182526040808220848352808452818320548684528385529183208584529381905283549193909291849081106101d4576101d4610436565b6000918252602080832090910154835282810193909352604091820181209390935584835260018252808320848452825280832083905584835290829052902080548061022357610223610465565b600190038181906000526020600020016000905590555050565b61024782826102e6565b15610250575050565b60009182526020828152604080842080546001808552838720868852855292862081905585845291820181558452922090910155565b600081815260208181526040918290208054835181840281018401909452808452606093928301828280156102da57602002820191906000526020600020905b8154815260200190600101908083116102c6575b50505050509050919050565b600082815260208190526040812054810361030357506000610373565b60008381526001602090815260408083208584529091528120549003610355576000838152602081905260408120805484929061034257610342610436565b9060005260206000200154149050610373565b50600082815260016020908152604080832084845290915290205415155b92915050565b6000806040838503121561038c57600080fd5b50508035926020909101359150565b6000602082840312156103ad57600080fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b818110156103ec578351835292840192918401916001016103d0565b50909695505050505050565b600082821015610431577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfea26469706673582212208c218a8c7d3ab9222585f9b09c88ea5422fcaa84788321247b9fcd758613a5a964736f6c634300080d0033";

type EmbodiedSystemArgumentComponentConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EmbodiedSystemArgumentComponentConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EmbodiedSystemArgumentComponent__factory extends ContractFactory {
  constructor(...args: EmbodiedSystemArgumentComponentConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "EmbodiedSystemArgumentComponent";
  }

  deploy(
    world: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<EmbodiedSystemArgumentComponent> {
    return super.deploy(world, overrides || {}) as Promise<EmbodiedSystemArgumentComponent>;
  }
  getDeployTransaction(world: string, overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(world, overrides || {});
  }
  attach(address: string): EmbodiedSystemArgumentComponent {
    return super.attach(address) as EmbodiedSystemArgumentComponent;
  }
  connect(signer: Signer): EmbodiedSystemArgumentComponent__factory {
    return super.connect(signer) as EmbodiedSystemArgumentComponent__factory;
  }
  static readonly contractName: "EmbodiedSystemArgumentComponent";
  public readonly contractName: "EmbodiedSystemArgumentComponent";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EmbodiedSystemArgumentComponentInterface {
    return new utils.Interface(_abi) as EmbodiedSystemArgumentComponentInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): EmbodiedSystemArgumentComponent {
    return new Contract(address, _abi, signerOrProvider) as EmbodiedSystemArgumentComponent;
  }
}
