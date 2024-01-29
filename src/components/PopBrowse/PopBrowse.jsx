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
  PopBrowseBtnEdit,
  BtnGroup,
  BtnBG,
  BtnBOR,
  PopBrowseStatus,
  StatusP,
  StatusThemes,
  CategoriesP,
} from "./PopBrowse.styled";
import useTasks from "../../hooks/useTasks";
import { delTask } from "../../API";
import { useParams } from "react-router-dom";

function PopBrowse() {
  const { category, id } = useParams();

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
    await delTask(taskId)
      .then((data) => {
        updateTasks({ data });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  return (
    <StyledPopBrowse>
      <PopBrowseContainer>
        <PopBrowseBlock>
          <PopBrowseContent>
            <PopBrowseTopBlock>
              <PopBrowseTtl>{taskData.title}</PopBrowseTtl>
              <CategoriesTheme $themeColor={color} $top={true}>
                <ThemeP>{taskData.topic}</ThemeP>
              </CategoriesTheme>
            </PopBrowseTopBlock>
            <PopBrowseStatus>
              <StatusP>Статус</StatusP>
              <StatusThemes>
                <StatusThemeGray>
                  <GrayP>{taskData.status}</GrayP>
                </StatusThemeGray>
              </StatusThemes>
            </PopBrowseStatus>
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
              <Calendar selected={taskData.date} />
            </PopBrowseTopWrap>
            <CategoriesP>Категория</CategoriesP>
            <CategoriesTheme $themeColor={color} $top={false}>
              <ThemeP>{taskData.topic}</ThemeP>
            </CategoriesTheme>
            <PopBrowseBtnEdit>
              <BtnGroup>
                <BtnBOR>
                  <Link to={`/edit-card/${category}/${id}`}>
                    Редактировать задачу
                  </Link>
                </BtnBOR>
                <BtnBOR onClick={handleDel}>Удалить задачу</BtnBOR>
              </BtnGroup>
              <BtnBG>
                <Link to={AppRoutes.HOME}>Закрыть</Link>
              </BtnBG>
            </PopBrowseBtnEdit>
          </PopBrowseContent>
        </PopBrowseBlock>
      </PopBrowseContainer>
    </StyledPopBrowse>
  );
}

export default PopBrowse;
