
function Roadmap() {
    const phases = [
        {
            title:'Phase 1 (COMPLETE)', 
            subpoints: ['Deployment','DEX Listings','Ownership Renounced','Community Takeover']
        },
        {
            title:'Phase 2', 
            subpoints: ['Establish web presence','Decide goals & future','Partnerships','Community Contests']
        },
        {
            title:'Phase 3', 
            subpoints: ['Official merchandise','Gaming DAPP','Advertising','Media campaign']
        },
        {
            title:'Phase 4', 
            subpoints: ['NFT Collection','Commercial deals','DeFi Staking','Gold check mark on X']
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