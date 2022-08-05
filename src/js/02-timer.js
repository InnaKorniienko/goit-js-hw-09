import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import "flatpickr/dist/themes/material_blue.css";

// const refs = {
//   button:document.querySelector('button');
//   input:document.querySelector('input#datetime-picker');
//   timerEl:document.querySelector('.timer');
// }
const button = document.querySelector('button');
const input = document.querySelector('input#datetime-picker');
const timerEl = document.querySelector('.timer');
timerEl.style.display = 'flex';

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,

    onClose(selectedDates) {
    console.log("selectedDates: ", selectedDates[0])
    const defaultDateCalendars = new Date();
    console.log("defaultDateCalendars", defaultDateCalendars);
    const delta = selectedDates[0].getTime() - defaultDateCalendars.getTime();
    console.log(delta);
    button.setAttribute('disabled', true);
    if (delta <= 0) {
      return window.alert("Please choose a date in the future");
    };
button.removeAttribute('disabled');
}
};

flatpickr('input#datetime-picker', options);

// flatpickr.onClose;

// button.addEventListener("click", getTime());

// function getTime() {
//   const delta = options.selectedDates[0].getTime() - defaultDateCalendars.getTime();
//   setInterval(convertMs(delta), 1000);
// }


function ddLeadingZero(value) {
  return String(value).padStart(2, '0')
};

//Подсчет значений
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = ddLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = ddLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = ddLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = ddLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

convertMs(); 