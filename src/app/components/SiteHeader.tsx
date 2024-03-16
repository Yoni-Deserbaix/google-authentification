import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function SiteHeader() {
  return (
    <header className="flex justify-between mx-4 max-w-7xl font-semibold items-center h-20 border-b bg-background">
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
        <p>About</p>
        <p>Services</p>
        <p>Vision</p>
        <ThemeToggle />
      </div>
    </header>
  );
}
