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
} from "./PopEditCard.styled";

import useTasks from "../../hooks/useTasks";
import { changeTask, delTask } from "../../API";
import { useState } from "react";
import {
  CategoriesP,
  Checkbox,
  GreenLabel,
  OrangeLabel,
  PurpleLabel,
  RadioToolbar,
  RadioToolbarInput,
} from "../Common/CategoriesToolbar.styled";
import { statusList } from "../../lib/statusList";
import StatusToolbar from "../StatusToolbar/StatusToolbar";

function PopEditCard() {
  const { id } = useParams();

  const { tasks, updateTasks } = useTasks();

console.log(tasks);

  const taskData = tasks.find((task) => {
    console.log(id);
    console.log(task);

    return task._id == id;
  });
  console.log(taskData);
  const taskId = taskData;
  const [selected, setSelected] = useState(taskData.date);
  const [cardData, setCardData] = useState({
    id: taskData._id,
    title: taskData.title,
    topic: taskData.topic,
    description: "",
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
    await delTask(taskId).then((data) => {
      updateTasks({ data });
    });
  }

  async function handleChange() {
    console.log(taskId);
    console.log(cardData);
    await changeTask({ taskId, cardData }).then((data) => {
      updateTasks({ data });
      console.log(tasks);
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
                    value={taskData.description}
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
              <Calendar selected={selected} setSelected={setSelected}>
                <p className="calendar__p date-end">
                  Срок исполнения:
                  <span className="date-control">{taskData.date}</span>
                </p>
              </Calendar>
            </PopBrowseTopWrap>
            <Checkbox>
              <CategoriesP>Категория</CategoriesP>
              <RadioToolbar>
                <RadioToolbarInput
                  type="radio"
                  id="radio1"
                  name="radios"
                  value="Web Design"
                  onChange={(e) =>
                    setCardData({ ...cardData, topic: e.target.value })
                  }
                />
                <OrangeLabel htmlFor="radio1">Web Design</OrangeLabel>

                <RadioToolbarInput
                  type="radio"
                  id="radio2"
                  name="radios"
                  value="Research"
                  onChange={(e) =>
                    setCardData({ ...cardData, topic: e.target.value })
                  }
                />
                <GreenLabel htmlFor="radio2">Research</GreenLabel>

                <RadioToolbarInput
                  type="radio"
                  id="radio3"
                  name="radios"
                  value="Copywriting"
                  onChange={(e) => {
                    setCardData({ ...cardData, topic: e.target.value });
                  }}
                />
                <PurpleLabel htmlFor="radio3">Copywriting</PurpleLabel>
              </RadioToolbar>
            </Checkbox>
            <div className="pop-browse__btn-edit ">
              <div className="btn-group">
                <button
                  className="btn-edit__edit _btn-bg _hover01"
                  onClick={handleChange}
                >
                  Сохранить
                </button>
                <Link to={AppRoutes.HOME}>
                  <button className="btn-edit__edit _btn-bor _hover03">
                    Отменить
                  </button>
                </Link>
                <button
                  className="btn-edit__delete _btn-bor _hover03"
                  id="btnDelete"
                  onClick={handleDel}
                >
                  Удалить задачу
                </button>
              </div>
              <button className="btn-edit__close _btn-bg _hover01">
                <Link to={AppRoutes.HOME}>Закрыть</Link>
              </button>
            </div>
          </PopBrowseContent>
        </PopBrowseBlock>
      </PopBrowseContainer>
    </StyledPopBrowse>
  );
}

export default PopEditCard;
