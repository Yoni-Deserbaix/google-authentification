export default function SiteHeader() {
  return (
    <header className="flex justify-between mx-4 max-w-7xl">
      <div className="flex gap-4">
        <p>Logo</p>
        <p>Title</p>
      </div>
      <p>Search area</p>
      <div className="flex gap-4">
        <p>About</p>
        <p>Services</p>
        <p>Vision</p>
        <p>ThemeToggle</p>
      </div>
    </header>
  );
}
