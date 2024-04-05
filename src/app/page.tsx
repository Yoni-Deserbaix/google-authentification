import { Button } from "@/components/ui/button";
import SignInButton from "./components/SigninButton";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6">
      <div className="px-10 pt-10">
        <h1 className="text-4xl font-extrabold">Home Page</h1>
        <p className="pt-16 text-xl w-1/2">
          The perfect landing page to sign in with your Google account! You can also check out the documentation on the button below!
        </p>
        <div className="flex flex-row gap-5 pt-10">
          <SignInButton />
          <Button className="bg-blue-500 text-white hover:text-black">
            <a href="https://next-auth.js.org/" target="bla k">
              Next-Auth Documentation
            </a>
          </Button>
        </div>
      </div>
    </main>
  );
}
