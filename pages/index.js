import Image from "next/image";
import { Inter } from "next/font/google";
import RightComponent from "@/Components/Auth/RightComponent";
import LeftComponent from "@/Components/Auth/LeftComponent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="w-[100vw] bg-cover overflow-hidden flex items-center justify-between h-[100vh] bg-no-repeat bg-[url('/bg-img.jpg')]">
        {/* Left side  */}
        <div className="hidden sm:flex w-1/2">
          <LeftComponent />
        </div>
        {/* Right side */}
        <div className=" w-full md:w-1/2">
          <RightComponent />
        </div>
      </div>
    </>
  );
}
