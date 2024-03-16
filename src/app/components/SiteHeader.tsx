import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="flex justify-between mx-4 font-semibold items-center h-20 border-b bg-background">
      <div className="flex gap-4 items-center px-4">Next App!</div>
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
      <div className="flex gap-4">
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/vision">Vision</Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
