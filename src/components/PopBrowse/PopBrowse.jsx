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
  GrayP,
  StatusThemeGray,
  FormBrowseAreaLabel,
  CategoriesTheme,
  ThemeP,
} from "./PopBrowse.styled";
import useTasks from "../../hooks/useTasks";
import { delTask } from "../../API";


function PopBrowse({ category, id }) {

  const { tasks, updateTasks } = useTasks();
  const taskData = tasks.find((task) => task._id === id);
  const taskId = taskData._id;
  let color;
  switch (taskData.topic) {
    case "Web Design":
      color = "_orange";
      break;
    case "Copywriting":
      color = "_purple";
      break;
    case "Research":
      color = "_green";
      break;
    default:
      color = "_gray";
  }

  async function handleDel() {
    await delTask(taskId).then((data) => {
      updateTasks({ data });
    });
  }

  return (
    <StyledPopBrowse>
      <PopBrowseContainer>
        <PopBrowseBlock>
          <PopBrowseContent>
            <PopBrowseTopBlock>
              <PopBrowseTtl>{taskData.title}</PopBrowseTtl>
              <CategoriesTheme $themeColor={color}>
                <ThemeP>{taskData.topic}</ThemeP>
                </CategoriesTheme>
              {/* <div className="categories__theme theme-top _orange _active-category">
                <p className="_orange">{taskData.topic}</p>
              </div> */}
            </PopBrowseTopBlock>
            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
                <div className="status__themes">
                  <StatusThemeGray>
                    <GrayP>{taskData.status}</GrayP>
                  </StatusThemeGray>
                </div>
            </div>
            <PopBrowseTopWrap>
              <PopBrowseTopForm>
                <FormBrowseBlock>
                  <FormBrowseAreaLabel>
                    Описание задачи
                      <FormBrowseArea
                        value={taskData.description}
                        placeholder="Описание задачи..."
                        readOnly
                      />
                 </FormBrowseAreaLabel>
                </FormBrowseBlock>
              </PopBrowseTopForm>
                <Calendar readOnly>
                  <p className="calendar__p date-end">
                    Срок исполнения:
                    <span className="date-control">{taskData.date}</span>
                  </p>
                </Calendar>
            </PopBrowseTopWrap>
            <div className="pop-browse__btn-browse ">
              <div className="btn-group">
                <button
                  className="btn-browse__edit _btn-bor _hover03"
                >
                  <Link to={`/edit-card/${category}/${id}`}>Редактировать задачу</Link>
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
          </PopBrowseContent>
        </PopBrowseBlock>
      </PopBrowseContainer>
    </StyledPopBrowse>
  );
}

export default PopBrowse;
