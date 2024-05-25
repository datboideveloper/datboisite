
function Tokenomics() {
    const points = [
        {title:'Total Supply', subpoints: ['1,000,000,000']},
        {title:'Initial Distribution', subpoints: ['100% into Uniswap Liquidity Pool']},
        {title:'Taxes', subpoints: ['0%']},
        //{title:'Liquidity Pool', subpoints: ['Locked for 100 years']},
        {title:'Ownership', subpoints: ['Contract Renounced']},
        {title:'Contract Address', subpoints: ['0x53ec0454273c75a453c02947caB6d92522793D5b']}
    ]


    return (
        <div id="tokenomics" className="py-28 text-center min-h-[100vh]">
            <h1 className="text-3xl">Tokenomics</h1>
            <div className="flex flex-wrap gap-y-5 gap-x-3 justify-around py-24 align-middle max-w-[90vw] mx-auto">
                {points.map(point => {return (
                    <div className="bg-gray-600 bg-opacity-50 hover:bg-opacity-70 hover:scale-110 rounded-lg border-white border-2 p-2">
                        <div className="text-xl font-bold underline">{point.title}</div>

                        {point.subpoints.map(subpoint => {return (
                            <div className="">{subpoint}</div>
                        )})}
                    </div>

                )})}
            </div>
        </div>
    )
}

export default Tokenomics;