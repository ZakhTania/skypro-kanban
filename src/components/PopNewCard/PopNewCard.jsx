import { useState } from "react";
import Calendar from "../Calendar/Calendar";
import {
  FormNewBlock,
  FormNewCreateBtn,
  FormNewInput,
  FormNewLabel,
  FormNewTextarea,
  PopNewCardBlock,
  PopNewCardClose,
  PopNewCardContainer,
  PopNewCardContent,
  PopNewCardForm,
  PopNewCardTtl,
  PopNewCardWrap,
  StyledPopNewCard,
  TextError,
} from "./PopNewCard.styled";
import {
  CategoriesP,
  Checkbox,
  GreenLabel,
  OrangeLabel,
  PurpleLabel,
  RadioToolbar,
  RadioToolbarInput,
} from "../Common/CategoriesToolbar.styled";
import { AppRoutes } from "../../lib/appRoutes";
import { Link } from "react-router-dom";
import { addTask } from "../../API";
import useTasks from "../../hooks/useTasks";

function PopNewCard() {
  const { updateTasks } = useTasks();
  const [error, setError] = useState(false);
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
    if (
      !cardData.title ||
      !cardData.topic ||
      !cardData.description ||
      !cardData.date
    ) {
      setError(
        "Недостаточно данных, проверьте все ли поля заполнены и повторите попытку."
      );
      return;
    }
    addTask({ cardData })
      .then((data) => {
        updateTasks({ data });
      })
      .catch((error) => {
        console.log(error.message);
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
                  <FormNewLabel>
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
                      onClick={() => {
                        setError(false);
                      }}
                    />
                  </FormNewLabel>
                </FormNewBlock>
                <FormNewBlock>
                  <FormNewLabel>
                    Описание задачи
                    <FormNewTextarea
                      name="text"
                      placeholder="Введите описание задачи..."
                      value={newCard.text}
                      onChange={(e) =>
                        setNewCard({ ...newCard, description: e.target.value })
                      }
                      onClick={() => {
                        setError(false);
                      }}
                    />
                  </FormNewLabel>
                </FormNewBlock>
              </PopNewCardForm>
              <Calendar
                selected={selected}
                setSelected={setSelected}
                onClick={() => {
                  setError(false);
                }}
              />
            </PopNewCardWrap>
            <Checkbox>
              <CategoriesP>Категория</CategoriesP>
              <RadioToolbar>
                <RadioToolbarInput
                  type="radio"
                  id="web-design"
                  name="radios"
                  value="Web Design"
                  onChange={(e) =>
                    setNewCard({ ...newCard, topic: e.target.value })
                  }
                  onClick={() => {
                    setError(false);
                  }}
                />
                <OrangeLabel htmlFor="web-design">Web Design</OrangeLabel>

                <RadioToolbarInput
                  type="radio"
                  id="research"
                  name="radios"
                  value="Research"
                  onChange={(e) =>
                    setNewCard({ ...newCard, topic: e.target.value })
                  }
                  onClick={() => {
                    setError(false);
                  }}
                />
                <GreenLabel htmlFor="research">Research</GreenLabel>

                <RadioToolbarInput
                  type="radio"
                  id="copywriting"
                  name="radios"
                  value="Copywriting"
                  onChange={(e) =>
                    setNewCard({ ...newCard, topic: e.target.value })
                  }
                  onClick={() => {
                    setError(false);
                  }}
                />
                <PurpleLabel htmlFor="copywriting">Copywriting</PurpleLabel>
              </RadioToolbar>
            </Checkbox>
            {error ? (
              <>
                <TextError>{error}</TextError>
                <FormNewCreateBtn disabled $err={true}>
                  Создать задачу
                </FormNewCreateBtn>
              </>
            ) : (
              <FormNewCreateBtn onClick={onBtnSubmit}>
                Создать задачу
              </FormNewCreateBtn>
            )}
          </PopNewCardContent>
        </PopNewCardBlock>
      </PopNewCardContainer>
    </StyledPopNewCard>
  );
}

export default PopNewCard;
