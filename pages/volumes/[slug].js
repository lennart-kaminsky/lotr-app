import Link from "next/link";
import { volumes } from "@/lib/data";
import Image from "next/image";
import { useRouter } from "next/router";
import { StyledLink } from "@/components/Link";
import { TitleOne } from "@/components/Headlines";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volume = volumes.find((volume) => volume.slug === slug);
  const currentIndex = volumes.indexOf(volume);

  return (
    <div>
      <p>
        <StyledLink href="/volumes">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          All Volumes
        </StyledLink>
      </p>
      <TitleOne>{volume.title}</TitleOne>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book) => (
          <li key={book.ordinal}>{book.ordinal + ": " + book.title}</li>
        ))}
      </ul>

      {currentIndex > 0 && (
        <p>
          <Link href={`./${volumes[currentIndex - 1].slug}`}>
            Previous Volume: {volumes[currentIndex - 1].title}{" "}
          </Link>
        </p>
      )}
      {currentIndex < volumes.length - 1 && (
        <p>
          <Link href={`./${volumes[currentIndex + 1].slug}`}>
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
