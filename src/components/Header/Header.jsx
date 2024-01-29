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
import {  useState } from "react";
import { useEffect } from "react";
import useTheme from "../../hooks/useTheme";


function Header({ isOpen, toggleDropdown }) {
  const { user } = useUser();
  const { theme } = useTheme();
  const [ imgURL, setImgURL ] = useState("images/logo.png");

  useEffect(() => {
  if (theme === "light") {
      setImgURL("images/logo.png");
    } else {
      setImgURL("images/logo_dark.png");
    }
  }, [theme])
  

  return (
    <StyledHeader>
      <Container>
        <HeaderBlock>
          <HeaderLogo>
            <Link to={AppRoutes.HOME}>
              <img src={imgURL} alt="logo" />
            </Link>
          </HeaderLogo>
          {/* <div className="header__logo _dark">
            <a href="" target="_self">
                     <img src="images/logo.png" alt="logo" />   
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </div> */}
          <HeaderNav>
            <Link to={AppRoutes.ADD_CARD}>
              <HeaderBtnNew> Создать новую задачу</HeaderBtnNew>
            </Link>
            <HeaderUser onClick={toggleDropdown}>{user.name}</HeaderUser>
            {isOpen && <PopUserSet toggleDropdown={toggleDropdown} />}
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </StyledHeader>
  );
}

export default Header;
