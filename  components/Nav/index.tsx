import Link from "next/link";
import { StyledNavList, Wrapper } from "./styled";
import links from "./util";

const Nav = () => (
  <Wrapper>
    <Link href="/">
      <p className="title">Artsy</p>
    </Link>
    <StyledNavList>
      {links.map(link => (<li>{link.text}</li>))}
    </StyledNavList>
  </Wrapper>
)

export default Nav;
