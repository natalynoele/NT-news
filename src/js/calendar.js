import { Notify } from 'notiflix/build/notiflix-notify-aio';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { refs } from './refs';
import { formatDate } from './functions/helper';

if (
  window.location.pathname === '/' ||
  window.location.pathname === '/index.html'
) {
  const options = {
    dateFormat: 'd/m/Y',
    maxDate: new Date(),
    monthSelectorType: 'static',
    clickOpens: false,
    locale: {
      firstDayOfWeek: 1, // start week on Monday
    },
    onClose: function (selectedDates, dateStr, instance) {
      instance.input.nextElementSibling.classList.remove('open');
      instance.input.nextElementSibling.classList.add('close');
      isDateSelect(selectedDates[0]);
      instance.input.setAttribute(
        'data-date',
        formatDate(selectedDates[0], 'd.m.y')
      );
      instance.input.parentNode.classList.add('active');
    },
    onOpen: function (selectedDates, dateStr, instance) {
      instance.input.nextElementSibling.classList.remove('close');
      instance.input.nextElementSibling.classList.add('open');
    },
    onMonthChange(selectedDates, dateStr, instance) {
      isDateSelect(selectedDates[0]);
      selectedDates[0] = new Date(
        selectedDates[0].setMonth(instance.currentMonth)
      );
      selectedDates[0] = new Date(
        selectedDates[0].setFullYear(instance.currentYear)
      );
      instance.selectedDateElem.dateObj = selectedDates[0];
      insertSelectedDate(selectedDates, dateStr, instance);
      setSelectedElementClass(selectedDates, instance);
      return { selectedDates, dateStr };
    },
    onYearChange: function (selectedDates, dateStr, instance) {
      isDateSelect(selectedDates[0]);
      selectedDates[0] = new Date(
        selectedDates[0].setFullYear(instance.currentYear)
      );
      insertSelectedDate(selectedDates, dateStr, instance);
      setSelectedElementClass(selectedDates, instance);
      return { selectedDates, dateStr };
    },
  };

  function setSelectedElementClass(selectedDates, instance) {
    const daysList = instance.days.children;
    const daysArr = [...daysList];
    const selectedDay = selectedDates[0].getDate();
    const selectedEl = daysArr.find(day => day.textContent == selectedDay);
    instance.selectedDateElem.classList.remove('selected');
    selectedEl.classList.add('selected');
  }

  function insertSelectedDate(selectedDates, dateStr, instance) {
    dateStr = selectedDates[0].toLocaleDateString('en-GB');
    instance.input.value = dateStr;
    instance.selectedDateElem.dateObj = selectedDates[0];
    instance.selectedDateElem.ariaLabel = formatDate(
      selectedDates[0],
      'm d, y',
      'en'
    );
    instance.latestSelectedDateObj = selectedDates[0];
  }

  function addLeadingZero(value) {
    if (value < 10) {
      value = value.toString().padStart(2, '0');
    }
    return value;
  }

  function isDateSelect(date) {
    if (!date) {
      return;
    }
  }

  const calendar = flatpickr(refs.calendarInput, options);
  refs.datePickerWrap.addEventListener('click', () => {
    calendar.open();
  });
}
export { calendar };
