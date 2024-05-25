
function Roadmap() {
    const phases = [
        {
            title:'Phase 1', 
            subpoints: ['Initial Launch','DEX Listings','Ownership Renounced','Community Takeover']
        },
        {
            title:'Phase 2', 
            subpoints: ['CEX Listings','10,000+ Holders','Partnerships','Community Contests']
        },
        {
            title:'Phase 3', 
            subpoints: ['Tier 1 Listings','Official Merch','50,000+ Holders','Frog Crossover Event?']
        },
        {
            title:'Phase 4', 
            subpoints: ['NFT Collection','100,000+ Holders','Normie Recognition']
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