import { Link } from "react-router-dom";
import { AppRoutes } from "../../lib/appRoutes";
import {
  HeaderPopUserSet,
  PopUserSetBtn,
  PopUserSetMail,
  PopUserSetName,
  PopUserSetTheme,
  PopUserSetThemeInput,
  PopUserSetThemeP,
} from "./PopUserSet.styled";

function PopUserSet() {
  return (
    <HeaderPopUserSet>
      <PopUserSetName>Ivan Ivanov</PopUserSetName>
      <PopUserSetMail>ivan.ivanov@gmail.com</PopUserSetMail>
      <PopUserSetTheme>
        <PopUserSetThemeP>Темная тема</PopUserSetThemeP>
        <PopUserSetThemeInput type="checkbox" />
      </PopUserSetTheme>
      <Link to={AppRoutes.EXIT}>
        <PopUserSetBtn>Выйти</PopUserSetBtn>
      </Link>
    </HeaderPopUserSet>
  );
}

export default PopUserSet;
