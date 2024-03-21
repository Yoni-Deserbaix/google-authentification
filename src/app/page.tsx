import { Button } from "@/components/ui/button";
import SignInButton from "./components/SigninButton";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6">
      <div className="px-10 pt-10">
        <h1 className="text-4xl font-extrabold">Home Page</h1>
        <p className="py-16 text-xl">The perfect landing page</p>
        <div className="flex flex-row gap-5 pt-10">
        <SignInButton />
          <Button>
            <a href="https://next-auth.js.org/" target="bla k">
              Documentation
            </a>
          </Button>
        </div>
      </div>
    </main>
  );
}
