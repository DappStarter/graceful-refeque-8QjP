require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow flee skull guard render remind erosion grid clog front skin'; 
let testAccounts = [
"0x0b8619f4d406265b5ea5aaf83fc4876e9aeeb146fee1fcedf940ee607fa9e660",
"0x1d98014aaa0a0979f397e2245af19db0fd7e94d53b2fb565c18ff522389adc05",
"0x870897933d6184b4176b3113dadd5f52bb8b5292b9fc1075d65dd1f3408f5d6b",
"0xa0613bda69db8f4f586dd566106582bf802453d15c20d6494d5d1536e8998737",
"0x7d4a587f4f830d0c56e7a3c6642121807af6a6496fc4752f3293c83dcfa360a7",
"0x49474aa68eabd7ff09c725cc890f71a6f672ede9bd305b468b095fba06d773cd",
"0x08dca68d5e88c752b0c0f634d4b748a63280e3c4c66910297b3b25b468a7c4d7",
"0xcad24518fe0d9bcf4a500df40ff134105f24108b1df7df35b1adce742e861144",
"0x8c9e0741fbdc71c39483a75b907e24139ece709bfb773e0704e01302ffff34bf",
"0x3362b74fc163cb6d4340ab581240686f1d44937e2b2388767fa083084fcf25f9"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

