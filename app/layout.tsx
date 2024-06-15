import { Inter } from "next/font/google";
import "@styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dat Boi on Base | $DATBOI",
  description: "Dat Boi Token on BASE $DATBOI",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="favicon3.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
