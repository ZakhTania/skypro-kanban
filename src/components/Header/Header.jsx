import { useState } from "react";
import PopUserSet from "../PopUserSet/PopUserSet";
import {
  HeaderBlock,
  HeaderBtnNew,
  HeaderLogo,
  HeaderNav,
  HeaderUser,
  StyledHeader,
} from "./Header.styled";
import { Container } from "../Common/Common.styled";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../lib/appRoutes";
import useUser from "../../hooks/useUser";

function Header() {
  const {user} = useUser();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <StyledHeader>
      <Container>
        <HeaderBlock>
          <HeaderLogo>
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </HeaderLogo>
          {/* <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </div> */}
          <HeaderNav>
            <Link to={AppRoutes.ADD_CARD}>
              <HeaderBtnNew> Создать новую задачу</HeaderBtnNew>
            </Link>
            <HeaderUser onClick={toggleDropdown}>{user.name}</HeaderUser>
            {isOpen && <PopUserSet />}
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </StyledHeader>
  );
}

export default Header;
