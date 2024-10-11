import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-9xl flex justify-center m-auto px-5 md:px-50">
      <Image
        src="/images/International_Pokémon_logo.svg"
        alt="Pokemon logo"
        width={180}
        height={38}
        priority
      />
    </div>
  );
}