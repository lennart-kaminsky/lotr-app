import { introduction } from "@/lib/data";
import { volumes } from "@/lib/data";
import { useRouter } from "next/router";
import { TitleOne, TitleTwo } from "@/components/Headlines";
import styled from "styled-components";
import { StyledLink } from "@/components/Link";
import Image from "next/image";

export default function HomePage() {
  const router = useRouter();

  function getRandomVolume() {
    return volumes[Math.floor(Math.random() * volumes.length)];
  }

  return (
    <div>
      <TitleOne>Lord of the Rings</TitleOne>
      <p>{introduction}</p>
      <TitleTwo>All Volumes</TitleTwo>
      <StyledList>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <StyledLink $isFlexColumn href={"./volumes/" + volume.slug}>
              <StyledImage
                src={volume.cover}
                alt={volume.title}
                width={574}
                height={931}
              />
              <div>{volume.title}</div>
            </StyledLink>
          </li>
        ))}
      </StyledList>
      <StyledButton
        type="button"
        onClick={() => {
          router.push(`./volumes/${getRandomVolume().slug}`);
        }}
      >
        Random Volume
      </StyledButton>
    </div>
  );
}

const StyledImage = styled(Image)`
  width: 100%;
  max-width: 200px;
  height: auto;
`;

const StyledList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  column-gap: 4%;
`;

const StyledButton = styled.button`
  background-color: transparent;
  color: var(--color-smoke);
  border: 1px solid var(--color-smoke);
  border-radius: 0.7rem;
  padding: 0.7rem 1.2rem;
  margin-block: 0.7rem;
  &:hover {
    transform: scale(0.9, 0.9);
  }
`;
