import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./Toggle";
import SigninButton from "../SigninButton";

export default function SiteHeader() {
  return (
    <header className="flex justify-between mx-4 items-center h-20 border-b border-gray-700 bg-background">
      <div className="flex gap-4 items-center px-4">
        <Link href="/">Next App!</Link>
      </div>
      <form className="hidden md:inline-block">
        <input
          id="search"
          name="search"
          type="search"
          autoComplete="off"
          placeholder="Search something.."
          className="h-9 lg:w-[300px] bg-background border-b-2 outline-none"
        />
      </form>
      <div className="flex gap-10">
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/vision">Vision</Link>

      </div>
      <SigninButton />
      <ModeToggle />
    </header>
  );
}
