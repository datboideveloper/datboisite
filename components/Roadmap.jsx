
function Roadmap() {
    const phases = [
        {
            title:'Stage 1', 
            subpoints: ['Deployment ✅','DEX Listings ✅','Ownership Renounced ✅','Community Takeover ✅']
        },
        {
            title:'Stage 2', 
            subpoints: ['Establish Web Presence ✅','Decide on Goals for Token Future ✅','Partnerships','Community Contests']
        },
        {
            title:'Stage 3', 
            subpoints: ['Official Merch','Gaming DAPP','Advertising ✅','Media Campaign']
        },
        {
            title:'Stage 4', 
            subpoints: ['NFT Collection','Commercial Deals','DeFi Staking/Yield','Gold Check Mark on X']
        }
    ]

    return (
        <div id="roadmap" className="py-28 text-center  min-h-[100vh]">
            <h1 className="text-3xl pb-24">Roadmap</h1>
            <div className="flex flex-wrap justify-around gap-4 align-middle">
                {phases.map(phase => {return (
                    <div className="bg-gray-600 bg-opacity-50 hover:bg-opacity-70 hover:scale-110 rounded-lg border-white border-2">
                        <div className="text-xl font-bold underline">{phase.title}</div>

                        {phase.subpoints.map(subpoint => {return (
                            <div className="px-2">{subpoint}</div>
                        )})}
                    </div>

                )})}
            </div>
        </div>
    )
}

export default Roadmap;