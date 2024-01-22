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
import useUser from "../../hooks/useUser";

function PopUserSet() {

const { user } = useUser();

  return (
    <HeaderPopUserSet>
      <PopUserSetName>{user.name}</PopUserSetName>
      <PopUserSetMail>{user.login}</PopUserSetMail>
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
