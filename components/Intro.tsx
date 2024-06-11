"use client";

import Image from "next/image";
import iconBasescan from "@public/assets/icon basescan.png";
//import iconDexscreener from '@public/assets/icon dexscreener.png'
import iconTelegram from "@public/assets/icon telegram.png";
import iconTwitter from "@public/assets/icon twitter.png";
import iconUniswap from "@public/assets/icon uniswap.png";
import iconGithub from "@public/assets/icon github.png";
//import iconDextools from '@public/assets/icon dextools.png'
import iconInstagram from "@public/assets/IGLogo.png";
import iconCoingecko from "@public/assets/icon coingecko.png";
//import whitepaper from '@public/assets/whitepaper.pdf'
//import roadmap from '@public/assets/roadmap.pdf'

function Intro() {
  return (
    <div
      id="intro"
      className="flex justify-around py-28 flex-wrap min-h-[100vh] text-3xl align-normal max-w-[100vw]"
    >
      <div>
        <p className="fade1 pb-24 text-center">Here Comes Dat Boi!</p>
        <p className="fade2 pb-24 text-center"> O Shid Waddup!</p>
      </div>
      <div>
        <div className="fade3 flex flex-col align-middle">
          <div className="bg-gray-600 bg-opacity-50 hover:bg-opacity-70 hover:scale-110 rounded-lg border-white border-2 mb-8">
            <p className="text-3xl text-center">Contract Address:</p>
            <p id="address" className=" text-sm text-center">
              0x53ec0454273c75a453c02947caB6d92522793D5b
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-evenly pb-4">
            <button
              onClick={copyToClipboard}
              className="text-3xl px-8 py-2 bg-green-800 rounded-lg border-solid
                             border-black border-[1px] opacity-70 hover:opacity-100"
            >
              Copy
            </button>
            <a
              href="https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x53ec0454273c75a453c02947caB6d92522793D5b&chain=base"
              target="_blank"
              className="text-3xl px-8 py-2 bg-green-800 rounded-lg border-solid
                             border-black border-[1px] opacity-70 hover:opacity-100"
            >
              Buy Now
            </a>
          </div>
          <div className="flex flex-wrap gap-3 justify-evenly pb-4">
            <a
              href="./assets/whitepaper.pdf"
              download="whitepaper.pdf"
              target="_blank"
              className="text-3xl px-8 py-2 bg-green-800 rounded-lg border-solid
                             border-black border-[1px] opacity-70 hover:opacity-100"
            >
              White Paper
            </a>
            <a
              href="./assets/roadmap.pdf"
              download="roadmap.pdf"
              target="_blank"
              className="text-3xl px-8 py-2 bg-green-800 rounded-lg border-solid
                             border-black border-[1px] opacity-70 hover:opacity-100"
            >
              Road Map
            </a>
          </div>
          <div className="flex flex-wrap gap-3 justify-evenly">
            <a
              href="https://www.geckoterminal.com/base/pools/0x028e2b29ecfba168b54645cd8a214b12ddf9d647"
              target="_blank"
              className="opacity-70 hover:opacity-100 hover:scale-110"
            >
              <Image
                src={iconCoingecko}
                className=" h-10 w-auto"
                alt="Coingecko"
              />
            </a>
            <a
              href="https://t.me/datboibase"
              target="_blank"
              className="opacity-70 hover:opacity-100 hover:scale-110"
            >
              <Image
                src={iconTelegram}
                className=" h-10 w-auto"
                alt="Telegram"
              />
            </a>
            <a
              href="https://github.com/datboideveloper"
              target="_blank"
              className="opacity-70 hover:opacity-100 hover:scale-110"
            >
              <Image src={iconGithub} className=" h-10 w-auto" alt="Github" />
            </a>
            <a
              href="https://www.instagram.com/basedatboi/"
              target="_blank"
              className="opacity-70 hover:opacity-100 hover:scale-110"
            >
              <Image
                src={iconInstagram}
                className=" h-10 w-auto"
                alt="Instagram"
              />
            </a>
            <a
              href="https://x.com/basedatboi"
              target="_blank"
              className="opacity-70 hover:opacity-100 hover:scale-110"
            >
              <Image src={iconTwitter} className=" h-10 w-auto" alt="X" />
            </a>
            <a
              href="https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x53ec0454273c75a453c02947caB6d92522793D5b&chain=base"
              target="_blank"
              className="opacity-70 hover:opacity-100 hover:scale-110"
            >
              <Image src={iconUniswap} className=" h-10 w-auto" alt="Uniswap" />
            </a>
            <a
              href="https://basescan.org/address/0x53ec0454273c75a453c02947cab6d92522793d5b"
              target="_blank"
              className="opacity-70 hover:opacity-100 hover:scale-110"
            >
              <Image
                src={iconBasescan}
                className=" h-10 w-auto"
                alt="BaseScan"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function copyToClipboard() {
  // Get the text field
  var copyText = document.getElementById("address").textContent;

  console.log(copyText);

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText);

  // Alert the copied text
  alert("Copied the text: " + copyText);
}

export default Intro;
