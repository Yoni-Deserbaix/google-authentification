"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Confetti from "react-confetti";

const Dashboard = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/");
    },
  });

  return (
    <main className="mx-auto max-w-6xl px-6">
      <div>
        <div className="px-10 pt-10 text-left leading-3">
          <h1 className="text-4xl font-extrabold tracking-normal">
            Dashboard Page
          </h1>
          {session?.user && (
            <>
            <div className="grid place-items-center">
              <p className="py-4 text-2xl font-bold">
                Connected !
              </p>
              <p className="py-2 text-xl">
                Hey<i className="font-bold"> <u>{session?.user?.name} 👋</u></i>
              </p>
              <p className="py-2 text-xl font-semibold">Email : {session?.user?.email}</p>
              <p className="py-2 text-xl text-green-400 font-semibold">
                Your email is verified.
              </p>
              <Confetti run={true} recycle={false} /></div>
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
