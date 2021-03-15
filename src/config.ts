import { ChainId } from 'goswap-sdk';
import { Configuration } from './go-farm/config';
import { FarmInfo, VaultInfo } from './go-farm';

const configurations: { [env: string]: Configuration } = {
  development: {
    chainId: ChainId.HECOTEST,
    etherscanUrl: 'https://testnet.hecoinfo.com',
    defaultProvider: 'https://http-testnet.hecochain.com',
    MasterChef: '0xC9FAA89989bd6562dbc67f34F825028A79f4f1B1',
    GetApy: '0x0462d64E23CDA9A5ECEE2896356875B8d3B81fD9',
    deployments: require('./go-farm/deployments/deployments.testnet.json'),
    externalTokens: {
      GOT: ['0xA7d5b5Dbc29ddef9871333AD2295B2E7D6F12391', 18],
      GOS: ['0x36b29B53c483bd00978D40126E614bb7e45d8354', 18],
      GOC: ['0x271B54EBe36005A7296894F819D626161C44825C', 18],
      USDT: ['0x4a0795da0044e083EA82207E6F8a75194A2f11D0', 18],
      HUSD: ['0x0f548051B135fa8f7F6190cb78Fd13eCB544fEE6', 8],
      BTC: ['0x4139d24c6C25Cc44F1F405405aC4BF44682F37C6', 18],
      ETH: ['0x6B958fe634e4bb5fe8Fd363E1D9E85C14e61fBF4', 18],
      HT: ['0x50B29a42c9e4d0f940292c386207f492458eE358', 18],
      DOT: ['0xE9ab18781dcB3709c45Edb72688706435B17052f', 18],
      'GOT_HUSD-LP': ['0xc31b9f33fb2c54b789c263781ccee9b23b747677', 18],
      'GOT_USDT-LP': ['0xb13598584a6b73644460e1bfacedcef95c17c650', 18],
      'GOT_BTC-LP': ['0x3c21d92c83de04d026db7795e656d8a247cb984d', 18],
      'GOT_ETH-LP': ['0x334c271f41ab4415032f37e6190c4f8f6a8527c8', 18],
      'GOT_HT-LP': ['0x61a02786895c9c4ac1c017247bcd6070f0e18e17', 18],
      'GOT_DOT-LP': ['0x704ba9f70560467e9fd868c040184d116e1b52bd', 18],
      'GOT_GOS-LP': ['0x0226a0a7493dad879fbed7aa60692fd593510f99', 18],
      'GOT_GOC-LP': ['0xb666d590a8593bfca34c557251a7445798320d6d', 18],
      'GOC_HUSD-LP': ['0x28bfcd3c234b710d93232b5e51a2e8b8a5bb9d2f', 18],
      'GOC_USDT-LP': ['0xe5c67f26c4112d07af265ab07994afdb34200738', 18],
      'GOC_BTC-LP': ['0x4e33a6db97d4b2b752af793fff1c977c6d3cc64e', 18],
      'GOC_ETH-LP': ['0xd8fb79abe7714c3d9829d58f4a21e62df12f2689', 18],
      'GOC_HT-LP': ['0xc93c141288340efc45d36e85ca40c2dca378d2d2', 18],
      'GOC_DOT-LP': ['0x93363d362da93acd4dbb2656f74bbaa7a6a0878c', 18],
      'GOS_HUSD-LP': ['0xd0e8d781fae230e3da6e45ed881c99ba639ca400', 18],
      'GOS_USDT-LP': ['0xf577e0caf94472801fbcbabb45e8b974e2439ea8', 18],
    },
    refreshInterval: 10000,
    gasLimitMultiplier: 1.1
  },
  production: {
    chainId: ChainId.HECOMAIN,
    etherscanUrl: 'https://hecoinfo.com',
    defaultProvider: 'https://http-mainnet.huobichain.com',
    MasterChef: '0x7dCeBC34F55b52df742C91581089ebD0BCBD254F',
    GetApy: '0xE453Fd8FF38b46fBda57f236103f6336CBf50594',
    deployments: require('./go-farm/deployments/deployments.mainnet.json'),
    externalTokens: {
      GOT: ['0xA7d5b5Dbc29ddef9871333AD2295B2E7D6F12391', 18],
      GOS: ['0x3bb34419a8E7d5E5c68B400459A8eC1AFfe9c56E', 18],
      GOC: ['0x271B54EBe36005A7296894F819D626161C44825C', 18],
      USDT: ['0xa71EdC38d189767582C38A3145b5873052c3e47a', 18],
      HUSD: ['0x0298c2b32eaE4da002a15f36fdf7615BEa3DA047', 8],
      BTC: ['0x66a79D23E58475D2738179Ca52cd0b41d73f0BEa', 18],
      ETH: ['0x64FF637fB478863B7468bc97D30a5bF3A428a1fD', 18],
      HT: ['0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f', 18],
      DOT: ['0xa2c49cee16a5e5bdefde931107dc1fae9f7773e3', 18],
      'GOT_HUSD-LP': ['0x11d6a89Ce4Bb44138219ae11C1535F52E16B7Bd2', 18],
      'GOT_USDT-LP': ['0xbb12324A015785076D966f654CF0123A70970D1d', 18],
      'GOT_BTC-LP': ['0xaA8569CBe4BfC57F8Ffa48920D4B01EbEeD24df8', 18],
      'GOT_ETH-LP': ['0x533085DD6E39Bde0Ac8B75Df338C62077d60FFf5', 18],
      'GOT_HT-LP': ['0x9513D6C2FD765E03369D086CA11C04d99E2b835c', 18],
      'GOT_DOT-LP': ['0x5BdC5d27596d7DF546B178c5E7bdd063DF3a6579', 18],
      'GOT_GOS-LP': ['0x009994eD69e9bCB8180Aa2BBe6Bf46Fb735Bb682', 18],
      'GOT_GOC-LP': ['0xB7f69A9acb0d71FAa689F8f0021EB6dbc6cD6214', 18],
      'GOC_HUSD-LP': ['0xEe09490789564e22c9b6252a2419A57055957a47', 18],
      'GOC_USDT-LP': ['0xB5C88Ec8F5C75bb5AB5349fe9ECC46380cF44A95', 18],
      'GOC_BTC-LP': ['0xE7aea89D9cB20e5D2f1A7a70Fc97B91BDB66227f', 18],
      'GOC_ETH-LP': ['0x8242C3cBdF180863BbD23B4Ef9A1Fa38Fe8eDBB2', 18],
      'GOC_HT-LP': ['0x228a8073A6c1d3B4402E01c70305261319b0F67D', 18],
      'GOC_DOT-LP': ['0x31641cC22c6139FA8724410BB499c829BC9B5Dc0', 18],
      'GOS_HUSD-LP': ['0xdaDE2b002d135c5796f7cAAd544f9Bc043D05C9B', 18],
      'GOS_USDT-LP': ['0xE4224d87F2502216A85F3b46eBb5f61F2004EfC2', 18],
    },
    refreshInterval: 30000,
    gasLimitMultiplier: 1.7
  },
};

export const bankDefinitions: { [contractName: string]: FarmInfo } = {
  pool_0: {
    name: '火星土豆',
    depositTokenName: 'GOT_HUSD-LP',
    TokenA: 'GOT',
    TokenB: 'HUSD',
    earnTokenName: 'GOT',
    finished: false,
    sort: 1,
    pid: 0,
  },
  pool_1: {
    name: '月球大米',
    depositTokenName: 'GOT_USDT-LP',
    earnTokenName: 'GOT',
    TokenA: 'GOT',
    TokenB: 'USDT',
    finished: false,
    sort: 2,
    pid: 1,
  },
  pool_2: {
    name: '土卫六葡萄',
    depositTokenName: 'GOT_BTC-LP',
    earnTokenName: 'GOT',
    TokenA: 'GOT',
    TokenB: 'BTC',
    finished: false,
    sort: 3,
    pid: 2,
  },
  pool_3: {
    name: '木卫三西瓜',
    depositTokenName: 'GOT_ETH-LP',
    earnTokenName: 'GOT',
    TokenA: 'GOT',
    TokenB: 'ETH',
    finished: false,
    sort: 4,
    pid: 3,
  },
  pool_4: {
    name: '海卫一紫菜',
    depositTokenName: 'GOT_HT-LP',
    earnTokenName: 'GOT',
    TokenA: 'GOT',
    TokenB: 'HT',
    finished: false,
    sort: 5,
    pid: 4,
  },
  pool_5: {
    name: '反重力花生',
    depositTokenName: 'GOT_DOT-LP',
    earnTokenName: 'GOT',
    TokenA: 'GOT',
    TokenB: 'DOT',
    finished: false,
    sort: 6,
    pid: 5,
  },
  pool_6: {
    name: '脉冲星竹笋',
    depositTokenName: 'GOT_GOS-LP',
    earnTokenName: 'GOT',
    TokenA: 'GOT',
    TokenB: 'GOS',
    finished: false,
    sort: 7,
    pid: 6,
  },
  pool_7: {
    name: '暗物质蘑菇',
    depositTokenName: 'GOT_GOC-LP',
    earnTokenName: 'GOT',
    TokenA: 'GOT',
    TokenB: 'GOC',
    finished: false,
    sort: 8,
    pid: 7,
  },
  pool_8: {
    name: '中微子芝麻',
    depositTokenName: 'GOC_HUSD-LP',
    earnTokenName: 'GOT',
    TokenA: 'GOC',
    TokenB: 'HUSD',
    finished: false,
    sort: 9,
    pid: 8,
  },
  pool_9: {
    name: '奥尔特云豆',
    depositTokenName: 'GOC_USDT-LP',
    earnTokenName: 'GOT',
    TokenA: 'GOC',
    TokenB: 'USDT',
    finished: false,
    sort: 10,
    pid: 9,
  },
  pool_10: {
    name: '柯伊伯带豆角',
    depositTokenName: 'GOC_BTC-LP',
    earnTokenName: 'GOT',
    TokenA: 'GOC',
    TokenB: 'BTC',
    finished: false,
    sort: 11,
    pid: 10,
  },
  pool_11: {
    name: '洛希极限丝瓜',
    depositTokenName: 'GOC_ETH-LP',
    earnTokenName: 'GOT',
    TokenA: 'GOC',
    TokenB: 'ETH',
    finished: false,
    sort: 12,
    pid: 11,
  },
  pool_12: {
    name: '引力波豆芽',
    depositTokenName: 'GOC_HT-LP',
    earnTokenName: 'GOT',
    TokenA: 'GOC',
    TokenB: 'HT',
    finished: false,
    sort: 13,
    pid: 12,
  },
  pool_13: {
    name: '拉格朗日菠菜',
    depositTokenName: 'GOC_DOT-LP',
    earnTokenName: 'GOT',
    TokenA: 'GOC',
    TokenB: 'DOT',
    finished: false,
    sort: 14,
    pid: 15,
  },
  pool_14: {
    name: '二向箔生菜',
    depositTokenName: 'GOS_HUSD-LP',
    earnTokenName: 'GOT',
    TokenA: 'GOS',
    TokenB: 'HUSD',
    finished: false,
    sort: 15,
    pid: 13,
  },
  pool_15: {
    name: '黑暗森林木耳',
    depositTokenName: 'GOS_USDT-LP',
    earnTokenName: 'GOT',
    TokenA: 'GOS',
    TokenB: 'USDT',
    finished: false,
    sort: 16,
    pid: 14,
  },
};
export const vaultDefinitions: { [contractName: string]: VaultInfo } = {
  pool_0: {
    name: 'HUSD',
    depositTokenName: 'HUSD',
    finished: false,
    sort: 1,
    id: 1,
  },
  pool_1: {
    name: 'HT',
    depositTokenName: 'HT',
    finished: false,
    sort: 2,
    id: 2,
  },
  pool_2: {
    name: 'USDT',
    depositTokenName: 'USDT',
    finished: false,
    sort: 3,
    id: 3,
  },
  pool_3: {
    name: 'BTC',
    depositTokenName: 'BTC',
    finished: false,
    sort: 4,
    id: 4,
  },
  pool_4: {
    name: 'ETH',
    depositTokenName: 'ETH',
    finished: false,
    sort: 5,
    id: 5,
  },
  pool_5: {
    name: 'BCH',
    depositTokenName: 'BCH',
    finished: false,
    sort: 6,
    id: 6,
  },
  pool_6: {
    name: 'LTC',
    depositTokenName: 'LTC',
    finished: false,
    sort: 7,
    id: 7,
  },
  pool_7: {
    name: 'DOT',
    depositTokenName: 'DOT',
    finished: false,
    sort: 8,
    id: 8,
  },
  pool_8: {
    name: 'HPT',
    depositTokenName: 'HPT',
    finished: false,
    sort: 9,
    id: 9,
  },
  pool_9: {
    name: 'GOT',
    depositTokenName: 'GOT',
    finished: false,
    sort: 0,
    id: 0,
  }
};
// export default configurations[process.env.NODE_ENV || "development"];
export default configurations["production"];
// export default configurations["development"];
