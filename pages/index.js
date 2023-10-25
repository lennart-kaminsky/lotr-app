import Link from "next/link";
import { introduction } from "@/lib/data";
import { volumes } from "@/lib/data";
import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();

  function getRandomVolume() {
    return volumes[Math.floor(Math.random() * volumes.length)];
  }

  return (
    <div>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={"./volumes/" + volume.slug}>{volume.title}</Link>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => {
          router.push(`./volumes/${getRandomVolume().slug}`);
        }}
      >
        Random Volume
      </button>
    </div>
  );
}
