import styled from "styled-components";
import Image from "next/image";
import { useIsMobile } from "../hooks/useIsMobile";
import Link from "next/link";
import { scrollIntoView } from "../lib/scroll";
import { useRouter } from "next/router";
import { AiOutlineMenu } from "react-icons/ai";
import { Dispatch, SetStateAction } from "react";
import Menu from "./Menu";
import { RxCross2 } from "react-icons/rx";
import { BLOG_URL } from "../lib/constants";

export const TopBar = ({
  menuOpened,
  setMenuOpened,
}: {
  menuOpened: boolean;
  setMenuOpened: Dispatch<SetStateAction<boolean>>;
}) => {
  const isMobile = useIsMobile();
  const router = useRouter();
  const isHome = router.asPath !== "/contact";

  return (
    <div>
      <Container id="top">
        <LinkBox href="/">
          <ImageBox
            src="/logo.svg"
            width={isMobile ? 50 : 80}
            height={isMobile ? 50 : 80}
            alt="busshiDev"
          />
        </LinkBox>
        {isMobile ? (
          <MenuIcon onClick={() => setMenuOpened(menuOpened ? false : true)}>
            {menuOpened ? <RxCross2 size={24} /> : <AiOutlineMenu size={24} />}
          </MenuIcon>
        ) : (
          <Buttons>
            <Button
              onClick={() =>
                isHome
                  ? scrollIntoView("solutions")
                  : router.push("/#solutions")
              }
            >
              Solutions
            </Button>
            <Link href={BLOG_URL}>
              <Button>About me</Button>
            </Link>
            <Button
              onClick={() =>
                isHome
                  ? scrollIntoView("testi", "center")
                  : router.push("/#testi")
              }
            >
              Testimonials
            </Button>
            <Link href="/contact">
              <Button>Contact</Button>
            </Link>
          </Buttons>
        )}
      </Container>
      {menuOpened && <Menu setMenuOpened={setMenuOpened} />}
    </div>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 1rem;
  // width: 100%;
  // padding-top: 1.5rem;

  // @media (max-width: 768px) {
  //   padding-top: 1rem;
  // }

  @media (prefers-color-scheme: dark) {
    img {
      filter: invert(1);
    }
  }
`;

const LinkBox = styled(Link)`
  cursor: pointer;
`;

const ImageBox = styled(Image)`
  margin: 1rem;
`;

const MenuIcon = styled.div`
  cursor: pointer;
  margin: 0 1rem 0 0;
`;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
  margin-right: 1rem;
`;

const Button = styled.div`
  padding: 0 1rem 0.5rem 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: var(--middle-font-color);

  transition: color var(--transition-delay) ease;
  :hover {
    color: var(--main-light-font-color);
  }

  @media (prefers-color-scheme: dark) {
    :hover {
      color: var(--main-dark-font-color);
    }
  }
`;

export default TopBar;