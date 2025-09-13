import Image from "next/image";
import { cormorantGaramond } from "./fonts";

export default function Home() {
  return (
    <div>
      <h1 className={`${cormorantGaramond.className} text-3xl font-bold`}>
        HomePage
      </h1>
    </div>
  );
}
