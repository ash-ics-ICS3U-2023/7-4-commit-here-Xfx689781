'use strict';
/**
 * This file will get loaded by index.html
 */
let click_time=0;
let click_limit=50;
document.getElementById("add_click_btn").addEventListener("click", function(){
    click_time++;
    document.getElementById("click_count").textContent = click_time;
   
});
document.getElementById("add_click_btn").textContent = "BTN #1"


document.getElementById("reduceBtn").addEventListener("click", function(){
    click_time--;
    document.getElementById("click_count").textContent = click_time;
   
});


document.getElementById("reduceBtn").textContent = "BTN #2"


document.getElementById("resetBtn").addEventListener("click", function(){
    click_time=0;
    document.getElementById("click_count").textContent = click_time;
   
});


document.getElementById("resetBtn").textContent = "BTN #3"


document.getElementById("clickButton").addEventListener("click", function() {
    const currentTime = new Date();
    const timeString = currentTime.toLocaleTimeString();
    document.getElementById("timeDisplay").textContent = 'The time is: ' + timeString;
});


document.getElementById("clickButton").textContent = "BONUS BTN #01"






document.getElementById("ageButton").addEventListener("click", function() {
    const name = prompt("Please enter your name:");
    const birthYear = prompt("Please enter your birth year (YYYY):");
    const birthMonth = prompt("Please enter your birth month (MM):");
    const birthDay = prompt("Please enter your birth day (DD):");


    if (name && birthYear && birthMonth && birthDay) {
        const birthDate = new Date(birthYear, birthMonth - 1, birthDay);
        if (!isNaN(birthDate.getTime())) {
            const currentDate = new Date();
            const ageInMilliseconds = currentDate - birthDate;


            const seconds = Math.floor(ageInMilliseconds / 1000);
            const minutes = Math.floor(seconds / 60);
            const hours = Math.floor(minutes / 60);
            const days = Math.floor(hours / 24);
            const years = Math.floor(days / 365.25);


            const remainingDays = days % 365.25;
            const months = Math.floor(remainingDays / 30.4375);
            const remainingDaysAfterMonths = Math.floor(remainingDays % 30.4375);
            const remainingHours = hours % 24;
            const remainingMinutes = minutes % 60;
            const remainingSeconds = seconds % 60;


            const ageDisplay = `Hello, ${name}! You are ${years} years, ${months} months, ${remainingDaysAfterMonths} days, ${remainingHours} hours, ${remainingMinutes} minutes, and ${remainingSeconds} seconds old.`;
            document.getElementById("ageDisplay").textContent = ageDisplay;
        } else {
            document.getElementById("ageDisplay").textContent = "Invalid date entered.";
        }
    } else {
        document.getElementById("ageDisplay").textContent = "Name or birthdate not entered correctly.";
    }
});


document.getElementById("ageButton").textContent = "BONUS BTN #02 - TO GET UR AGE"


document.getElementById("timeeventButton").addEventListener("click", function() {
    const eDate = prompt("Please enter the date of an event in the future (YYYY-MM-DD):");
    const eHour = prompt("Please enter the hour of that event (HH:MM):");
    const event = prompt("What is that event: ")


    if (eDate && eHour) {
        const eDateTime = new Date(`${eDate}T${eHour}`);
        if (!isNaN(eDateTime.getTime()) && eDateTime > new Date()) {
            const currentDate = new Date();
            const timeDifference = eDateTime - currentDate;


            const daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hoursRemaining = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutesRemaining = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const secondsRemaining = Math.floor((timeDifference % (1000 * 60)) / 1000);


            const eCountdown = event+ ` COUNTDOWN: ${daysRemaining} days, ${hoursRemaining} hours, ${minutesRemaining} minutes, ${secondsRemaining} seconds`;
            document.getElementById("eCountdown").textContent = eCountdown;
        } else {
            document.getElementById("eCountdown").textContent = "Invalid date or time. Make sure it's in the future.";
        }
    } else {
        document.getElementById("eCountdown").textContent = "Date or time not entered correctly.";
    }
});


document.getElementById("timeeventButton").textContent = "BONUS BTN #03 - TO GET REMAINING TIME TO AN EVENT"
