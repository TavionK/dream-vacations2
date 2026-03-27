import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 gap-0 justify-center items-center px-4 text-center">
      <div className="relative w-50 h-50">
        <Image
          src="/images/Dreamvacations2.svg"
          alt="Logo"
          fill
          loading="eager"
        />
      </div>
      <h1 className="text-5xl font-semibold mb-2">Coming Soon</h1>
      <p className="uppercase">Your next adventure awaits</p>
    </main>
  );
}
