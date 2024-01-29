import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "./Calendar.css";
import { ru } from "date-fns/locale";
import { format } from "date-fns";
import {
  CalendarP,
  CalendarPeriod,
  CalendarTtl,
  StyledCalendar,
} from "./Calendar.styled";

function Calendar({ selected, setSelected }) {
  let footer = (
    <CalendarPeriod>
      <CalendarP>Выберите срок исполнения</CalendarP>
    </CalendarPeriod>
  );

  if (selected) {
    footer = (
      <CalendarPeriod>
        <CalendarP>
          Срок исполнения:{" "}
          <span>{format(selected, "dd.MM.yy", { locale: ru })}</span>
        </CalendarP>
      </CalendarPeriod>
    );
  }
  return (
    <>
      <StyledCalendar>
        <CalendarTtl>Дата</CalendarTtl>
        <DayPicker
          mode="single"
          selected={selected}
          onSelect={setSelected}
          footer={footer}
          locale={ru}
        />
      </StyledCalendar>
    </>
  );
}

export default Calendar;
