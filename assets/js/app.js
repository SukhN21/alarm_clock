'use strict';

let alarmTime = null;
let alarmTimeout = null;

const alarmSound = new Audio('./assets/audio/iphone_alarm (1).mp3');
alarmSound.type = 'audio/mp3';

// Live visualisation of clock
const time = document.getElementById('time');

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  time.textContent = `${hours}:${minutes}`;

  // Alarm Time
  if (alarmTime && `${hours}:${minutes}` === alarmTime) {
    alarmSound.play();
    clearAlarm();
  }
}

// To set the alarm
const alarm = document.getElementById('alarm-time');

function setAlarm() {
  const hours = document.getElementById('hours').value.padStart(2, '0');
  const minutes = document.getElementById('minutes').value.padStart(2, '0');

  if (hours === '' || minutes === '') {
    alert("Please enter valid time for the alarm.");
    return;
  }

  alarmTime = `${hours}:${minutes}`;
  alarm.textContent = `Alarm: ${alarmTime}`;
}

// To clear the alarm
function clearAlarm() {
  alarm.textContent = "Alarm: --:--";
}

setInterval(updateClock, 1000);