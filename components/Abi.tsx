//from https://basescan.org/address/0x53ec0454273c75a453c02947cab6d92522793d5b#code > Contract > Code > Contract ABI
const abi =
    [
        {
        "inputs": [
            {
            "internalType": "string",
            "name": "name_",
            "type": "string"
            },
            {
            "internalType": "string",
            "name": "symbol_",
            "type": "string"
            },
            {
            "internalType": "uint256",
            "name": "initialSupplyToSet",
            "type": "uint256"
            },
            {
            "internalType": "uint8",
            "name": "decimalsToSet",
            "type": "uint8"
            },
            {
            "internalType": "address",
            "name": "tokenOwner",
            "type": "address"
            },
            {
            "components": [
                {
                "internalType": "bool",
                "name": "_isMintable",
                "type": "bool"
                },
                {
                "internalType": "bool",
                "name": "_isBurnable",
                "type": "bool"
                },
                {
                "internalType": "bool",
                "name": "_isDocumentAllowed",
                "type": "bool"
                },
                {
                "internalType": "bool",
                "name": "_isMaxAmountOfTokensSet",
                "type": "bool"
                },
                {
                "internalType": "bool",
                "name": "_isMaxSupplySet",
                "type": "bool"
                },
                {
                "internalType": "bool",
                "name": "_isTaxable",
                "type": "bool"
                },
                {
                "internalType": "bool",
                "name": "_isDeflationary",
                "type": "bool"
                },
                {
                "internalType": "bool",
                "name": "_isReflective",
                "type": "bool"
                }
            ],
            "internalType": "struct DefiV4Token.ERC20ConfigProps",
            "name": "customConfigProps",
            "type": "tuple"
            },
            {
            "internalType": "string",
            "name": "newDocumentUri",
            "type": "string"
            },
            {
            "internalType": "address",
            "name": "_taxAddress",
            "type": "address"
            },
            {
            "internalType": "uint256[3]",
            "name": "bpsParams",
            "type": "uint256[3]"
            },
            {
            "internalType": "uint256[2]",
            "name": "amountParams",
            "type": "uint256[2]"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
        },
        {
        "inputs": [],
        "name": "BurningNotEnabled",
        "type": "error"
        },
        {
        "inputs": [
            {
            "internalType": "address",
            "name": "addr",
            "type": "address"
            }
        ],
        "name": "DestBalanceExceedsMaxAllowed",
        "type": "error"
        },
        {
        "inputs": [],
        "name": "DocumentUriNotAllowed",
        "type": "error"
        },
        {
        "inputs": [
            {
            "internalType": "address",
            "name": "recipient",
            "type": "address"
            },
            {
            "internalType": "uint256",
            "name": "fromBalance",
            "type": "uint256"
            },
            {
            "internalType": "uint256",
            "name": "balance",
            "type": "uint256"
            }
        ],
        "name": "ERC20InsufficientBalance",
        "type": "error"
        },
        {
        "inputs": [
            {
            "internalType": "uint8",
            "name": "decimals",
            "type": "uint8"
            }
        ],
        "name": "InvalidDecimals",
        "type": "error"
        },
        {
        "inputs": [],
        "name": "InvalidMaxSupplyConfig",
        "type": "error"
        },
        {
        "inputs": [
            {
            "internalType": "uint256",
            "name": "maxTokenAmount",
            "type": "uint256"
            }
        ],
        "name": "InvalidMaxTokenAmount",
        "type": "error"
        },
        {
        "inputs": [],
        "name": "InvalidReflectiveConfig",
        "type": "error"
        },
        {
        "inputs": [
            {
            "internalType": "uint256",
            "name": "bps",
            "type": "uint256"
            }
        ],
        "name": "InvalidTotalBPS",
        "type": "error"
        },
        {
        "inputs": [],
        "name": "MaxTokenAmountNotAllowed",
        "type": "error"
        },
        {
        "inputs": [],
        "name": "MaxTokenAmountPerAddrLtPrevious",
        "type": "error"
        },
        {
        "inputs": [],
        "name": "MintingNotEnabled",
        "type": "error"
        },
        {
        "inputs": [],
        "name": "TokenIsNotDeflationary",
        "type": "error"
        },
        {
        "inputs": [],
        "name": "TokenIsNotReflective",
        "type": "error"
        },
        {
        "inputs": [],
        "name": "TokenIsNotTaxable",
        "type": "error"
        },
        {
        "inputs": [],
        "name": "TotalReflectionTooSmall",
        "type": "error"
        },
        {
        "inputs": [],
        "name": "TotalSupplyExceedsMaxAllowedAmount",
        "type": "error"
        },
        {
        "inputs": [],
        "name": "ZeroTransferError",
        "type": "error"
        },
        {
        "anonymous": false,
        "inputs": [
            {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
            },
            {
            "indexed": true,
            "internalType": "address",
            "name": "spender",
            "type": "address"
            },
            {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
        },
        {
        "anonymous": false,
        "inputs": [
            {
            "indexed": true,
            "internalType": "uint256",
            "name": "_deflationBPS",
            "type": "uint256"
            }
        ],
        "name": "DeflationConfigSet",
        "type": "event"
        },
        {
        "anonymous": false,
        "inputs": [
            {
            "indexed": false,
            "internalType": "string",
            "name": "newDocUri",
            "type": "string"
            }
        ],
        "name": "DocumentUriSet",
        "type": "event"
        },
        {
        "anonymous": false,
        "inputs": [
            {
            "indexed": false,
            "internalType": "uint256",
            "name": "newMaxTokenAmount",
            "type": "uint256"
            }
        ],
        "name": "MaxTokenAmountPerSet",
        "type": "event"
        },
        {
        "anonymous": false,
        "inputs": [
            {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
            },
            {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
        },
        {
        "anonymous": false,
        "inputs": [
            {
            "indexed": true,
            "internalType": "uint256",
            "name": "_feeBPS",
            "type": "uint256"
            }
        ],
        "name": "ReflectionConfigSet",
        "type": "event"
        },
        {
        "anonymous": false,
        "inputs": [
            {
            "indexed": true,
            "internalType": "address",
            "name": "_taxAddress",
            "type": "address"
            },
            {
            "indexed": true,
            "internalType": "uint256",
            "name": "_taxBPS",
            "type": "uint256"
            }
        ],
        "name": "TaxConfigSet",
        "type": "event"
        },
        {
        "anonymous": false,
        "inputs": [
            {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
            },
            {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
            },
            {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
        },
        {
        "inputs": [],
        "name": "CONTRACT_HASH",
        "outputs": [
            {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        },
        {
        "inputs": [],
        "name": "CONTRACT_NAME",
        "outputs": [
            {
            "internalType": "string",
            "name": "",
            "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        },
        {
        "inputs": [],
        "name": "VERSION",
        "outputs": [
            {
            "internalType": "string",
            "name": "",
            "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        },
        {
        "inputs": [],
        "name": "_tTotal",
        "outputs": [
            {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        },
        {
        "inputs": [
            {
            "internalType": "address",
            "name": "owner",
            "type": "address"
            },
            {
            "internalType": "address",
            "name": "spender",
            "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        },
        {
        "inputs": [
            {
            "internalType": "address",
            "name": "spender",
            "type": "address"
            },
            {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
            "internalType": "bool",
            "name": "",
            "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "inputs": [
            {
            "internalType": "address",
            "name": "account",
            "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        },
        {
        "inputs": [
            {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
            }
        ],
        "name": "burn",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
            "internalType": "uint8",
            "name": "",
            "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        },
        {
        "inputs": [
            {
            "internalType": "address",
            "name": "spender",
            "type": "address"
            },
            {
            "internalType": "uint256",
            "name": "subtractedValue",
            "type": "uint256"
            }
        ],
        "name": "decreaseAllowance",
        "outputs": [
            {
            "internalType": "bool",
            "name": "",
            "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "inputs": [],
        "name": "deflationBPS",
        "outputs": [
            {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        },
        {
        "inputs": [],
        "name": "documentUri",
        "outputs": [
            {
            "internalType": "string",
            "name": "",
            "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        },
        {
        "inputs": [
            {
            "internalType": "address",
            "name": "spender",
            "type": "address"
            },
            {
            "internalType": "uint256",
            "name": "addedValue",
            "type": "uint256"
            }
        ],
        "name": "increaseAllowance",
        "outputs": [
            {
            "internalType": "bool",
            "name": "",
            "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "inputs": [],
        "name": "initialDocumentUri",
        "outputs": [
            {
            "internalType": "string",
            "name": "",
            "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        },
        {
        "inputs": [],
        "name": "initialMaxTokenAmountPerAddress",
        "outputs": [
            {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        },
        {
        "inputs": [],
        "name": "initialSupply",
        "outputs": [
            {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        },
        {
        "inputs": [],
        "name": "initialTokenOwner",
        "outputs": [
            {
            "internalType": "address",
            "name": "",
            "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        },
        {
        "inputs": [],
        "name": "isBurnable",
        "outputs": [
            {
            "internalType": "bool",
            "name": "",
            "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        },
        {
        "inputs": [],
        "name": "isDeflationary",
        "outputs": [
            {
            "internalType": "bool",
            "name": "",
            "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        },
        {
        "inputs": [],
        "name": "isDocumentUriAllowed",
        "outputs": [
            {
            "internalType": "bool",
            "name": "",
            "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        },
        {
        "inputs": [],
        "name": "isMaxAmountOfTokensSet",
        "outputs": [
            {
            "internalType": "bool",
            "name": "",
            "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        },
        {
        "inputs": [],
        "name": "isMaxSupplySet",
        "outputs": [
            {
            "internalType": "bool",
            "name": "",
            "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        },
        {
        "inputs": [],
        "name": "isMintable",
        "outputs": [
            {
            "internalType": "bool",
            "name": "",
            "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        },
        {
        "inputs": [],
        "name": "isReflective",
        "outputs": [
            {
            "internalType": "bool",
            "name": "",
            "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        },
        {
        "inputs": [],
        "name": "isTaxable",
        "outputs": [
            {
            "internalType": "bool",
            "name": "",
            "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        },
        {
        "inputs": [],
        "name": "maxTokenAmountPerAddress",
        "outputs": [
            {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        },
        {
        "inputs": [],
        "name": "maxTotalSupply",
        "outputs": [
            {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        },
        {
        "inputs": [
            {
            "internalType": "address",
            "name": "to",
            "type": "address"
            },
            {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
            }
        ],
        "name": "mint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
            "internalType": "string",
            "name": "",
            "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        },
        {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
            "internalType": "address",
            "name": "",
            "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        },
        {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "inputs": [
            {
            "internalType": "uint256",
            "name": "_deflationBPS",
            "type": "uint256"
            }
        ],
        "name": "setDeflationConfig",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "inputs": [
            {
            "internalType": "string",
            "name": "newDocumentUri",
            "type": "string"
            }
        ],
        "name": "setDocumentUri",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "inputs": [
            {
            "internalType": "uint256",
            "name": "newMaxTokenAmount",
            "type": "uint256"
            }
        ],
        "name": "setMaxTokenAmountPerAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "inputs": [
            {
            "internalType": "uint256",
            "name": "_feeBPS",
            "type": "uint256"
            }
        ],
        "name": "setReflectionConfig",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "inputs": [
            {
            "internalType": "address",
            "name": "_taxAddress",
            "type": "address"
            },
            {
            "internalType": "uint256",
            "name": "_taxBPS",
            "type": "uint256"
            }
        ],
        "name": "setTaxConfig",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
            "internalType": "string",
            "name": "",
            "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        },
        {
        "inputs": [],
        "name": "tFeeBPS",
        "outputs": [
            {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        },
        {
        "inputs": [],
        "name": "taxAddress",
        "outputs": [
            {
            "internalType": "address",
            "name": "",
            "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        },
        {
        "inputs": [],
        "name": "taxBPS",
        "outputs": [
            {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        },
        {
        "inputs": [
            {
            "internalType": "uint256",
            "name": "rAmount",
            "type": "uint256"
            }
        ],
        "name": "tokenFromReflection",
        "outputs": [
            {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        },
        {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        },
        {
        "inputs": [
            {
            "internalType": "address",
            "name": "to",
            "type": "address"
            },
            {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
            "internalType": "bool",
            "name": "",
            "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "inputs": [
            {
            "internalType": "address",
            "name": "from",
            "type": "address"
            },
            {
            "internalType": "address",
            "name": "to",
            "type": "address"
            },
            {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
            "internalType": "bool",
            "name": "",
            "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "inputs": [
            {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
        }
    ]



export default abi;