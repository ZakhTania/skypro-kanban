import {StyledHeader} from "./Header.styled"
import {Container} from "../Common/Common.styled"
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
        <div className="header__block">
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
          <nav className="header__nav">
            <button
              className="header__btn-main-new _hover01"
              id="btnMainNew"
              onClick={addCard}
            >
              {/* <a href="#popNewCard">Создать новую задачу</a> */}
              Создать новую задачу
            </button>
            <a className="header__user _hover02" onClick={toggleDropdown}>
              Ivan Ivanov
            </a>
            {isOpen && <PopUserSet />}
          </nav>
        </div>
      </Container>
      </ StyledHeader>
  );
}

export default Header;
