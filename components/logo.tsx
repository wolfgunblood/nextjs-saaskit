import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <>
      <Link href="/" className="inline-flex" aria-label="simple">
        <Image
          src="/logo.svg"
          alt="logo"
          width={50}
          height={50}
          quality={100}
          className="w-7 h-7"
        />
      </Link>
    </>
  );
}
