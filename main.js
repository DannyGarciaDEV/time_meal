//  Get the user's current hour and minute.
//  Calculate the totalMinutes by multiplying the hour by 60 and adding the minute.
//  Define an empty message.
//  If totalMinutes is less than 480, set the message to "Kitchen is closed."
//  Otherwise, if totalMinutes is less than 690, set the message to "Breakfast is being served."
//  If totalMinutes is less than 960, set the message to "Lunch is being served."
//  Otherwise, set the message to "Dinner is being served."
//  Display the message and the entered time.


let time_hour = parseInt(prompt("Enter the hour (0-23):"));


let time_minute = parseInt(prompt("Enter the minute (0-59):"));

let mealTimeOutput = document.getElementById("meal_time");


let totalMinutes = time_hour * 60 + time_minute;


let message = "";

if (totalMinutes < 8 * 60) {
    message = "Kitchen is closed. Time entered: " + time_hour + ":" + time_minute + " AM";
} else if (totalMinutes < 11 * 60 + 30) {
    message = "Breakfast is being served. Time entered: " + time_hour + ":" + time_minute + " AM";
} else if (totalMinutes < 16 * 60) {
    message = "Lunch is being served. Time entered: " + time_hour + ":" + time_minute + " AM";
} else if (totalMinutes <= 23 * 60 + 59) {
    message = "Dinner is being served. Time entered: " + time_hour + ":" + time_minute + " PM";
}

// Display the message on the webpage
mealTimeOutput.textContent = message;