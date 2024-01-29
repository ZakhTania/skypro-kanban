import { Link, useParams } from "react-router-dom";
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
  PopBrowseStatus,
  FormBrowseAreaLabel,
  PopBrowseStatusP,
  StatusThemes,
  CategoriesTheme,
  ThemeP,
  PopBrowseBtnEdit,
  BtnGroup,
  BtnBG,
  BtnBOR,
  CategoriesP,
} from "./PopEditCard.styled";

import useTasks from "../../hooks/useTasks";
import { changeTask, delTask } from "../../API";
import { useEffect, useState } from "react";
import { statusList } from "../../lib/statusList";
import StatusToolbar from "../StatusToolbar/StatusToolbar";

function PopEditCard() {
  const { id } = useParams();
  const { tasks, updateTasks } = useTasks();
  const taskData = tasks.find((task) => {
    return task._id == id;
  });

  const [selected, setSelected] = useState(taskData.date);
  const [cardData, setCardData] = useState({
    id: taskData._id,
    title: taskData.title,
    topic: taskData.topic,
    description: taskData.description,
    status: taskData.status,
    date: taskData.date,
  });

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
    await delTask(id)
      .then((data) => {
        updateTasks({ data });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  useEffect(() => {
    setCardData({
      ...cardData,
      date: selected,
    });
  }, [selected]);

  async function handleChange() {
    console.log(cardData);
    await changeTask({ id, cardData })
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
              <PopBrowseStatusP>Статус</PopBrowseStatusP>
              <StatusThemes>
                {statusList.map((status, index) => {
                  return (
                    <StatusToolbar
                      key={`status${index}`}
                      status={status}
                      index={index}
                      checked={cardData.status === status ? true : false}
                      onChange={(e) =>
                        setCardData({ ...cardData, status: e.target.value })
                      }
                    />
                  );
                })}
              </StatusThemes>
            </PopBrowseStatus>
            <PopBrowseTopWrap>
              <PopBrowseTopForm>
                <FormBrowseBlock>
                  <FormBrowseAreaLabel htmlFor="editTextArea01">
                    Описание задачи
                  </FormBrowseAreaLabel>
                  <FormBrowseArea
                    id="editTextArea01"
                    defaultValue={taskData.description}
                    placeholder="Описание задачи..."
                    onChange={(e) =>
                      setCardData({
                        ...cardData,
                        description: e.target.value,
                      })
                    }
                  />
                </FormBrowseBlock>
              </PopBrowseTopForm>
              <Calendar selected={selected} setSelected={setSelected} />
            </PopBrowseTopWrap>
            <CategoriesP>Категория</CategoriesP>
            <CategoriesTheme $themeColor={color} $top={false}>
              <ThemeP>{taskData.topic}</ThemeP>
            </CategoriesTheme>
            <PopBrowseBtnEdit>
              <BtnGroup>
                <BtnBG onClick={handleChange}>Сохранить</BtnBG>
                <BtnBOR>
                  <Link to={AppRoutes.HOME}>Отменить</Link>
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

export default PopEditCard;
