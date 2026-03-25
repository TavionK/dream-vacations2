import Image from "next/image";

export default function Home() {
  return (
    <main className={"flex flex-col flex-1 gap-0 justify-center items-center"}>
      <Image
        src="/images/Dreamvacations2.png"
        className="block mx-auto"
        alt="Dream Vacations 2 logo"
        width={500}
        height={500}
      />
      <h1 className={"text-2xl font-geist"}>Coming Soon</h1>
    </main>
  );
}
