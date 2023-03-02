import Image from "next/image";
import Link from "next/link";
import LOGO from "../../public/nextLOGO.png";

/**
 * @returns: navigation bar
 */

function MainNavigation() {
  return (
    <nav className="w-2/4 h-5/6 flex flex-row justify-center items-center">
      <ul className="flex flex-row justify-center items-center">
        <li className="transition-all hover:scale-110 ease-in-out duration-500">
          <Link
            href="/"
            className="font-bold text-white bg-black px-5 py-1 rounded-md mr-2"
          >
            Home
          </Link>
        </li>
        <li>
          <Image src={LOGO} width={38} className="z-10"></Image>
        </li>
        <li className="transition-all hover:scale-110 ease-in-out duration-500">
          <Link
            href="/issues"
            className="font-bold text-white bg-black px-5 py-1 rounded-md ml-2"
          >
            Issues
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainNavigation;
