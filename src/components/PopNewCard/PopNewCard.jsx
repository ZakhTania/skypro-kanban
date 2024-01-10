import Calendar from "../Calendar/Calendar";
import { Subttl } from "../Common/Common.styled";
import {
  FormNewBlock,
  FormNewCreateBtn,
  FormNewInput,
  FormNewTextarea,
  PopNewCardBlock,
  PopNewCardClose,
  PopNewCardContainer,
  PopNewCardContent,
  PopNewCardForm,
  PopNewCardTtl,
  PopNewCardWrap,
  StyledPopNewCard,
} from "./PopNewCard.styled";

function PopNewCard() {
  return (
    <StyledPopNewCard>
      <PopNewCardContainer>
        <PopNewCardBlock>
          <PopNewCardContent>
            <PopNewCardTtl>Создание задачи</PopNewCardTtl>
            <PopNewCardClose href="#">&#10006;</PopNewCardClose>
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
                    />
                  </Subttl>
                </FormNewBlock>
                <FormNewBlock>
                  <Subttl>
                    Описание задачи
                    <FormNewTextarea
                      name="text"
                      placeholder="Введите описание задачи..."
                    />
                  </Subttl>
                </FormNewBlock>
              </PopNewCardForm>
              <Calendar>
                <p className="calendar__p date-end">
                  Выберите срок исполнения{" "}
                  <span className="date-control"></span>.
                </p>
              </Calendar>
            </PopNewCardWrap>
            <div className="pop-new-card__categories categories">
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
            </div>
            <FormNewCreateBtn>Создать задачу</FormNewCreateBtn>
          </PopNewCardContent>
        </PopNewCardBlock>
      </PopNewCardContainer>
    </StyledPopNewCard>
  );
}

export default PopNewCard;
