// Import global styles and fonts
import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { cormorantGaramond } from "./fonts";
import Button from "./ui/components/Button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={inter.className}>
      <body className="mx-auto w-screen h-screen flex flex-col items-center justify-center">
        <h1 className="leading-none">Oops! Page not found</h1>
        <p
          className={`${cormorantGaramond.className} text-[300px] font-bold p-0 m-0 leading-none `}
        >
          404
        </p>
        <p className="leading-none mb-2">
          We&apos;re sorry, but the page you are looking for does not exist.
        </p>
        <Button
          label="Homepage"
          href="/"
          className="hover:bg-black border-black hover:text-white"
        />
      </body>
    </html>
  );
}
