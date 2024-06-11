import Image from "next/image";
import imageTokenomics from "@public/assets/tokenomics chart.png";

function Tokenomics() {
  return (
    <div id="tokenomics" className="py-28 w-full text-center min-h-[100vh]">
      <h1 className="text-3xl text mb-24">Tokenomics</h1>
      <p
        className="max-w-[70vw] mx-auto bg-gray-600 bg-opacity-50 hover:bg-opacity-70 hover:scale-110
                 rounded-lg border-white border-2 mb-12"
      >
        This diagram shows our token distribution between our biggest wallets
        and holders. The creator wallet (top left,
        0xee4ee8164210de2dc880e373a3eef247a9a7fe11) has retained 1% of supply,
        or 10 000 000 $DATBOI, 49 000 000 $DATBOI have been burned and sent to
        the null wallet (top right, 0x0000000000000000000000000000000000000000)
        and the third biggest address at 39 000 000 (2nd from top, right,
        0x028e2b29ecfba168b54645cd8a214b12ddf9d647) is the Uniswap V3 pool.
        There is also a Uniswap V2 pool with ~2.1% or 20 900 000 tokens at
        0x94cd5eb2bf28f4d1490dd16986b167a6d4b8fc8d.
      </p>
      <Image
        src={imageTokenomics}
        className="max-w-[70vw] h-auto mx-auto my-8
            hover:bg-opacity-70 hover:scale-105 rounded-lg border-white border-2"
        alt="Tokenomics"
      />
      <p
        className="max-w-[70vw] mx-auto bg-gray-600 bg-opacity-50 hover:bg-opacity-70 hover:scale-110
                 rounded-lg border-white border-2 mb-12"
      >
        37% of the Uniswap V3 pool is locked. 28% was locked for one year and
        ~9% was locked for 256 years.
      </p>
    </div>
  );

  /*const points = [
        {title:'Total Supply', subpoints: ['1,000,000,000']},
        {title:'Initial Distribution', subpoints: ['99% into Uniswap Liquidity Pool']},
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
    */
}

export default Tokenomics;
