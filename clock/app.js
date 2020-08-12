//current day and time
let today = new Date ();
let day = today.getDay ();
let daylist = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday ',
  'Thursday',
  'Friday',
  'Saturday',
];

console.log (`Today is : ${daylist[day]}.`);

let hour = today.getHours ();
let minute = today.getMinutes ();
let second = today.getSeconds ();
let prepand = hour >= 12 ? 'PM' : 'AM';
hour = hour >= 12 ? hour - 12 : hour;

//Noon
if (hour === 0 && prepand === 'PM') {
  if (minute === 0 && second === 0) {
    hour = 0;
    prepand = 'noon';
  } else {
    hour = 12;
    prepand = 'PM';
  }
}

// Midnight
if (hour === 0 && prepand === 'AM') {
  if (minute === 0 && second === 0) {
    hour = 0;
    prepand = 'Midnight';
  } else {
    hour = 12;
    prepand = 'AM';
  }
}

console.log (`Current time is : ${hour}: ${minute} : ${second} ${prepand}.`);
