import { Link } from "react-router-dom";
import Calendar from "../Calendar/Calendar";
import { AppRoutes } from "../../lib/appRoutes";
import {
  PopBrowseBlock,
  PopBrowseContainer,
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
import useTasks from "../../hooks/useTasks";
import { delTask } from "../../API";

function PopBrowse({ id }) {
  const { tasks, updateTasks } = useTasks();

  const taskData = tasks[id - 1];
  const delId = taskData._id;

   async function handleDel() {
    await delTask(delId).then((data) => {
      updateTasks({data});
    })
  }

  return (
    <StyledPopBrowse>
      <PopBrowseContainer>
        <PopBrowseBlock>
          <PopBrowseContent>
            <PopBrowseTopBlock>
              <PopBrowseTtl>{taskData.title}</PopBrowseTtl>
              <div className="categories__theme theme-top _orange _active-category">
                <p className="_orange">{taskData.topic}</p>
              </div>
            </PopBrowseTopBlock>
            <div className="pop-browse__status status">
              <p className="status__p subttl">{taskData.status}</p>
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
                    {taskData.text ? (
                      <FormBrowseArea
                        value={taskData.text}
                        placeholder="Описание задачи..."
                      />
                    ) : (
                      <FormBrowseArea placeholder="Описание задачи..." />
                    )}
                  </Subttl>
                </FormBrowseBlock>
              </PopBrowseTopForm>
              <Calendar>
                <p className="calendar__p date-end">
                  Срок исполнения:{" "}
                  <span className="date-control">{taskData.date}</span>
                </p>
              </Calendar>
            </PopBrowseTopWrap>
            <div className="theme-down__categories theme-down">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__theme _orange _active-category">
                <p className="_orange">{taskData.topic}</p>
              </div>
            </div>
            <div className="pop-browse__btn-browse ">
              <div className="btn-group">
                <button className="btn-browse__edit _btn-bor _hover03">
                  <a href="#">Редактировать задачу</a>
                </button>
                <button
                  className="btn-browse__delete _btn-bor _hover03"
                  onClick={handleDel}
                >
                  Удалить задачу
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
                  Удалить задачу
                </button>
              </div>
              <button className="btn-edit__close _btn-bg _hover01">
                <a href="#">Закрыть</a>
              </button>
            </div>
          </PopBrowseContent>
        </PopBrowseBlock>
      </PopBrowseContainer>
    </StyledPopBrowse>
  );
}

export default PopBrowse;
