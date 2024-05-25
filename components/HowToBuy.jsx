

function HowToBuy() {
    return (
        <div id="how-to-buy" className="py-28 text-center  min-h-[100vh]">
            <h1 className="text-3xl pb-24">How To Buy</h1>
            <div className="flex flex-col max-w-[60vw] mx-auto rounded-lg gap-4">
                <div className=" bg-gray-600 bg-opacity-50 hover:bg-opacity-70 hover:scale-110 rounded-lg border-white border-2">
                    <p className="underline">Step 1 - Create a Wallet</p>
                    Sign up for a decentralized wallet such as 
                    <a className=" text-green-600 underline" href="https://metamask.io/" target="_blank">Metamask</a> 
                    or <a className="text-green-600 underline" href="https://www.coinbase.com/wallet" target="_blank">Coinbase Wallet</a>. 
                    Make sure to save your recovery phrase somewhere secure.
                </div>
                <div className=" bg-gray-600 bg-opacity-50 hover:bg-opacity-70 hover:scale-110 rounded-lg border-white border-2">
                    <p className="underline">Step 2 - Add (base) ETH to your Wallet</p>
                    Send Ethereum to your wallet from a centralized exchange 
                    such as <a className="text-green-600 underline" href="https://www.coinbase.com/" target="_blank">Coinbase</a> or 
                    <a className="text-green-600 underline" href="https://www.binance.com/" target="_blank">Binance</a>.  You will use the Ethereum
                    address of your new wallet as the receiving address. If you don't send over the BASE chain,
                    you will have to Bridge from Ethereum to Base.  Both Metamask and Coinbase Wallet have the ability
                    to bridge within the wallet.
                </div>
                <div className=" bg-gray-600 bg-opacity-50 hover:bg-opacity-70 hover:scale-110 rounded-lg border-white border-2">
                    <p className="underline">Step 3 - Connect to Uniswap</p>
                    Go to <a className="underline text-green-600" href="https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x53ec0454273c75a453c02947caB6d92522793D5b&chain=base" 
                    target="_blank" >Uniswap</a>
                    , connect your wallet, and if not already selected:
                     Set 'Network' = 'Base', 'Sell Token' = 'Ethereum', 'Buy Token' = Contract Address
                </div>
            </div>
        </div>
    )
}

export default HowToBuy;