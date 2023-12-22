import {
  HeaderBlock,
  HeaderBtnNew,
  HeaderNav,
  HeaderUser,
  StyledHeader,
} from "./Header.styled";
import { Container } from "../Common/Common.styled";
import PopUserSet from "../PopUserSet/PopUserSet";
import { useState } from "react";

function Header({ addCard }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <StyledHeader>
      <Container>
        <HeaderBlock>
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </div>
          <HeaderNav>
            <HeaderBtnNew onClick={addCard}> Создать новую задачу</HeaderBtnNew>
            <HeaderUser onClick={toggleDropdown}>Ivan Ivanov</HeaderUser>
            {isOpen && <PopUserSet />}
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </StyledHeader>
  );
}

export default Header;
