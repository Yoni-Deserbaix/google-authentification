import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function SiteHeader() {
  return (
    <header className="flex justify-between mx-4 max-w-7xl font-semibold items-center h-20 border-b">
      <div className="flex gap-4 items-center">
        <Image src="/next.svg" alt="logo" height={10} width={10} className="w-10 h-10"></Image>
      </div>
      <p>Search area</p>
      <div className="flex gap-4">
        <p>About</p>
        <p>Services</p>
        <p>Vision</p>
        <ThemeToggle />
      </div>
    </header>
  );
}
