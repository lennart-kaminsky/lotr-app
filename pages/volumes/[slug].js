import Link from "next/link";
import { volumes } from "@/lib/data";
import Image from "next/image";
import { useRouter } from "next/router";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volume = volumes.find((volume) => volume.slug === slug);
  const currentIndex = volumes.indexOf(volume);

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

      {currentIndex > 0 && (
        <p>
          <Link href={"./" + volumes[currentIndex - 1].slug}>
            Previous Volume: {volumes[currentIndex - 1].title}{" "}
          </Link>
        </p>
      )}
      {currentIndex < volumes.length - 1 && (
        <p>
          <Link href={"./" + volumes[currentIndex + 1].slug}>
            {" "}
            Next Volume: {volumes[currentIndex + 1].title}
          </Link>
        </p>
      )}

      <Image
        src={volume.cover}
        alt={"Cover of" + volume.title}
        width={140}
        height={230}
      />
    </div>
  );
}
