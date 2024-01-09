import { Link } from "react-router-dom";
import Calendar from "../Calendar/Calendar";
import { AppRoutes } from "../../lib/appRoutes";
import {
  PopBrowseBlock,
  PopBrowseConteiner,
  PopBrowseContent,
  PopBrowseTopBlock,
  PopBrowseTopForm,
  PopBrowseTopWrap,
  PopBrowseTtl,
  FormBrowseBlock,
  StyledPopBrowse,
  FormBrowseArea,
} from "./PopBrowse.styled";
import { Subttl } from "../Common/Common.styled";

function PopBrowse() {
  return (
    <StyledPopBrowse>
      <PopBrowseConteiner>
        <PopBrowseBlock>
          <PopBrowseContent>
            <PopBrowseTopBlock>
              <PopBrowseTtl>Название задачи</PopBrowseTtl>
              <div className="categories__theme theme-top _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
            </PopBrowseTopBlock>
            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              <div className="status__themes">
                <div className="status__theme _hide">
                  <p>Без статуса</p>
                </div>
                <div className="status__theme _gray">
                  <p className="_gray">Нужно сделать</p>
                </div>
                <div className="status__theme _hide">
                  <p>В работе</p>
                </div>
                <div className="status__theme _hide">
                  <p>Тестирование</p>
                </div>
                <div className="status__theme _hide">
                  <p>Готово</p>
                </div>
              </div>
            </div>
            <PopBrowseTopWrap>
              <PopBrowseTopForm>
                <FormBrowseBlock>
                  <Subttl>
                    Описание задачи
                  <FormBrowseArea placeholder="Введите описание задачи..." />
                  </Subttl>
                </FormBrowseBlock>
              </PopBrowseTopForm>
              <Calendar>
                <p className="calendar__p date-end">
                  Срок исполнения:{" "}
                  <span className="date-control">09.09.23</span>
                </p>
              </Calendar>
            </PopBrowseTopWrap>
            <div className="theme-down__categories theme-down">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__theme _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
            </div>
            <div className="pop-browse__btn-browse ">
              <div className="btn-group">
                <button className="btn-browse__edit _btn-bor _hover03">
                  <a href="#">Редактировать задачу</a>
                </button>
                <button className="btn-browse__delete _btn-bor _hover03">
                  <a href="#">Удалить задачу</a>
                </button>
              </div>
              <button className="btn-browse__close _btn-bg _hover01">
                <Link to={AppRoutes.HOME}>Закрыть</Link>
              </button>
            </div>
            <div className="pop-browse__btn-edit _hide">
              <div className="btn-group">
                <button className="btn-edit__edit _btn-bg _hover01">
                  <a href="#">Сохранить</a>
                </button>
                <button className="btn-edit__edit _btn-bor _hover03">
                  <a href="#">Отменить</a>
                </button>
                <button
                  className="btn-edit__delete _btn-bor _hover03"
                  id="btnDelete"
                >
                  <a href="#">Удалить задачу</a>
                </button>
              </div>
              <button className="btn-edit__close _btn-bg _hover01">
                <a href="#">Закрыть</a>
              </button>
            </div>
          </PopBrowseContent>
        </PopBrowseBlock>
      </PopBrowseConteiner>
    </StyledPopBrowse>
  );
}

export default PopBrowse;
