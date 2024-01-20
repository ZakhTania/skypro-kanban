import { useState } from "react";
import Calendar from "../Calendar/Calendar";
import { Subttl } from "../Common/Common.styled";
import {
  CategoriesP,
  Checkbox,
  FormNewBlock,
  FormNewCreateBtn,
  FormNewInput,
  FormNewTextarea,
  GreenLabel,
  OrangeLabel,
  PopNewCardBlock,
  PopNewCardClose,
  PopNewCardContainer,
  PopNewCardContent,
  PopNewCardForm,
  PopNewCardTtl,
  PopNewCardWrap,
  PurpleLabel,
  RadioToolbar,
  RadioToolbarInput,
  StyledPopNewCard,
} from "./PopNewCard.styled";
import { AppRoutes } from "../../lib/appRoutes";
import { Link } from "react-router-dom";
import { addTask } from "../../API";
import useTasks from "../../hooks/useTasks";

function PopNewCard() {
  const { updateTasks } = useTasks();
  const [selected, setSelected] = useState(null);
  const [newCard, setNewCard] = useState({
    title: "",
    topic: "",
    description: "",
  });

  function onBtnSubmit() {
    const cardData = {
      ...newCard,
      date: selected,
    };

    addTask({ cardData }).then((data) => {
      updateTasks({ data });
    });
  }

  return (
    <StyledPopNewCard>
      <PopNewCardContainer>
        <PopNewCardBlock>
          <PopNewCardContent>
            <PopNewCardTtl>Создание задачи</PopNewCardTtl>
            <Link to={AppRoutes.HOME}>
              <PopNewCardClose>&#10006;</PopNewCardClose>
            </Link>
            <PopNewCardWrap>
              <PopNewCardForm>
                <FormNewBlock>
                  <Subttl>
                    Название задачи
                    <FormNewInput
                      type="text"
                      name="name"
                      placeholder="Введите название задачи..."
                      autoFocus
                      value={newCard.title}
                      onChange={(e) =>
                        setNewCard({ ...newCard, title: e.target.value })
                      }
                    />
                  </Subttl>
                </FormNewBlock>
                <FormNewBlock>
                  <Subttl>
                    Описание задачи
                    <FormNewTextarea
                      name="text"
                      placeholder="Введите описание задачи..."
                      value={newCard.text}
                      onChange={(e) =>
                        setNewCard({ ...newCard, description: e.target.value })
                      }
                    />
                  </Subttl>
                </FormNewBlock>
              </PopNewCardForm>
              <Calendar selected={selected} setSelected={setSelected}>
                <p className="calendar__p date-end">
                  Выберите срок исполнения{" "}
                  <span className="date-control"></span>.
                </p>
              </Calendar>
            </PopNewCardWrap>
            {/* <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__themes">
                <div className="categories__theme _orange _active-category">
                  <p className="_orange">Web Design</p>
                </div>
                <div className="categories__theme _green">
                  <p className="_green">Research</p>
                </div>
                <div className="categories__theme _purple">
                  <p className="_purple">Copywriting</p>
                </div>
              </div>
            </div> */}
            
            <Checkbox>
             <CategoriesP>Категория</CategoriesP> 
              <RadioToolbar>
                <RadioToolbarInput
                  type="radio"
                  id="radio1"
                  name="radios"
                  value="Web Design"
                  onChange={(e) =>
                    setNewCard({ ...newCard, topic: e.target.value })
                  }
                />
                <OrangeLabel htmlFor="radio1">Web Design</OrangeLabel>
               

                <RadioToolbarInput
                $themeColor={"_green"}
                  type="radio"
                  id="radio2"
                  name="radios"
                  value="Research"
                  onChange={(e) =>
                    setNewCard({ ...newCard, topic: e.target.value })
                  }
                />
                <GreenLabel htmlFor="radio2">Research</GreenLabel>
              

                <RadioToolbarInput
                  type="radio"
                  id="radio3"
                  name="radios"
                  value="Copywriting"
                  onChange={(e) =>
                    setNewCard({ ...newCard, topic: e.target.value })
                  }
                />
                <PurpleLabel htmlFor="radio3">Copywriting</PurpleLabel>
              </RadioToolbar>
            </Checkbox>
            <FormNewCreateBtn onClick={onBtnSubmit}>
              Создать задачу
            </FormNewCreateBtn>
          </PopNewCardContent>
        </PopNewCardBlock>
      </PopNewCardContainer>
    </StyledPopNewCard>
  );
}

export default PopNewCard;
