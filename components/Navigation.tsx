"use client";

import icon from "../public/assets/icon logo 3.png";
import ArrowUp from "../public/assets/ArrowUp.svg";
import Image from "next/image";

const pages = [
  { text: "Home", link: "#intro" },
  //{text:'Intro',link:'#intro'},
  { text: "About", link: "#about" },
  { text: "How To Buy", link: "#how-to-buy" },
  { text: "Tokenomics", link: "#tokenomics" },
  { text: "Roadmap", link: "#roadmap" },
];

function Navigation() {
  return (
    <nav
      id="navbar"
      className=" flex justify-between align-middle bg-opacity-30 bg-blue-100 hover:bg-opacity-70"
    >
      <a href="/" className="">
        <Image
          src={icon}
          className="h-10 w-auto py-0 overflow-hidden block bg-transparent"
          alt="Navigation"
        />
      </a>
      <ul
        id="navbar-links"
        className="flex gap-3 list-none justify-end align-middle px-4"
      >
        {pages.map((page) => {
          return (
            <>
              <li className="my-auto text-center">
                <a className="overrideClick" href={page.link}>
                  {page.text}
                </a>
              </li>
            </>
          );
        })}
        <li
          id="menu-button"
          className="my-auto text-center hidden px-4 cursor-pointer"
          onClick={toggleSidebar}
        >
          ☰
        </li>
      </ul>
      <Sidebar />
      <ScrollToTopButton />
    </nav>
  );
}

function Sidebar() {
  return (
    <ul
      id="sidebar"
      className="hidden fixed top-0 right-0 h-[100vh] w-64 z-50 flex-col align-top justify-start bg-black overflow-auto opacity-70"
    >
      <li
        id="close-button"
        className="text-center py-3 cursor-pointer"
        onClick={toggleSidebar}
      >
        X
      </li>
      {pages.map((page) => {
        return (
          <>
            <li className="text-center py-6">
              <a className="overrideClick" href={page.link}>
                {page.text}
              </a>
            </li>
          </>
        );
      })}
    </ul>
  );
}

function ScrollToTopButton() {
  return (
    <button
      id="scrollToTopBtn"
      className="fixed right-[2vh] bottom-[2vh] z-40 hover:scale-110 px-2 py-2"
      onClick={ScrollToTop}
    >
      <Image className="bg-opacity-50" src={ArrowUp} alt="Navigation" />
    </button>
  );
}

function toggleSidebar() {
  const sidebar = document.querySelector("#sidebar");
  if (!sidebar) return;
  if (
    (sidebar as HTMLElement).style.display === "none" ||
    !(sidebar as HTMLElement).style.display
  ) {
    (sidebar as HTMLElement).style.display = "flex";
  } else {
    (sidebar as HTMLElement).style.display = "none";
  }
}

function ScrollToTop() {
  document.documentElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function scrollToId(id) {
  console.log(id);
  if (id.startsWith("#")) {
    id = id.substring(1);
  }
  console.log(id);
  let scrollId = document.getElementById(id);
  console.log(scrollId);
  if (!scrollId) return;
  scrollId.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  console.log("reached end");
}

export default Navigation;
export { toggleSidebar };
