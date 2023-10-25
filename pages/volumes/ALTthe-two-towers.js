import Link from "next/link";
import { volumes } from "@/lib/data";
import Image from "next/image";

export default function FellowshipOfTheRings() {
  const volume = volumes.find(({ slug }) => slug === "the-two-towers");
  console.log("volumes: ", volumes);
  console.log("volume: ", volume);
  return (
    <div>
      <p>
        <Link href="/">← All Volumes</Link>
      </p>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book) => (
          <li key={book.ordinal}>{book.ordinal + ": " + book.title}</li>
        ))}
      </ul>
      <Image
        src={volume.cover}
        alt={"Cover of" + volume.title}
        width={140}
        height={230}
      />
    </div>
  );
}
