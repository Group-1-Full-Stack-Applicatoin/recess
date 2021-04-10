var sunday_sleep_start;
var sunday_sleep_end;
var sunday_work_start;
var sunday_work_end;
var monday_sleep_start;
var monday_sleep_end;
var monday_work_start;
var monday_work_end;
var tuesday_sleep_start;
var tuesday_sleep_end;
var tuesday_work_start;
var tuesday_work_end;
var wednesday_sleep_start;
var wednesday_sleep_end;
var wednesday_work_start;
var wednesday_work_end;
var thursday_sleep_start;
var thursday_sleep_end;
var thursday_work_start;
var thursday_work_end;
var friday_sleep_start;
var friday_sleep_end;
var friday_work_start;
var friday_work_end;
var saturday_sleep_start;
var saturday_sleep_end;
var saturday_work_start;
var saturday_work_end;
var sunday_working;
var monday_working;
var tuesday_working;
var wednesday_working;
var thursday_working;
var friday_working;
var saturday_working;

var preset_work_time;
var preset_sleep_time;

var hiddenTimesArr = [];

let activityArray = [];

window.onload = function getScheduleData() {
  fetch("api/schedules").then((response) => {
    return response.json().then(function (response) {
      console.log(response);
      for (i = 0; i < 7; i++) {
        if (i === 0) {
          sunday_sleep_start = response[0].sleep_start;
          sunday_sleep_end = response[0].sleep_end;
          sunday_work_start = response[0].work_start;
          sunday_work_end = response[0].work_end;
          sunday_working = response[0].working;
          console.log(sunday_work_start + " sunday_work_start");
          console.log(sunday_work_end + " sunday_work_end");
        } else if (i === 1) {
          monday_sleep_start = response[1].sleep_start + 96;
          monday_sleep_end = response[1].sleep_end + 96;
          monday_work_start = response[1].work_start + 96;
          monday_work_end = response[1].work_end + 96;
          monday_working = response[1].working;
          console.log(monday_work_start + " monday_work_start");
          console.log(monday_work_end + " monday_work_end");
        } else if (i === 2) {
          tuesday_sleep_start = response[2].sleep_start + 192;
          tuesday_sleep_end = response[2].sleep_end + 192;
          tuesday_work_start = response[2].work_start + 192;
          tuesday_work_end = response[2].work_end + 192;
          tuesday_working = response[2].working;
          console.log(tuesday_work_start + " tuesday_work_start");
          console.log(tuesday_work_end + " tuesday_work_end");
        } else if (i === 3) {
          wednesday_sleep_start = response[3].sleep_start + 288;
          wednesday_sleep_end = response[3].sleep_end + 288;
          wednesday_work_start = response[3].work_start + 288;
          wednesday_work_end = response[3].work_end + 288;
          wednesday_working = response[3].working;
          console.log(wednesday_work_start + " wednesday_work_start");
          console.log(wednesday_work_end + " wednesday_work_end");
        } else if (i === 4) {
          thursday_sleep_start = response[4].sleep_start + 384;
          thursday_sleep_end = response[4].sleep_end + 384;
          thursday_work_start = response[4].work_start + 384;
          thursday_work_end = response[4].work_end + 384;
          thursday_working = response[4].working;
          console.log(thursday_work_start + " thursday_work_start");
          console.log(thursday_work_end + " thursday_work_end");
        } else if (i === 5) {
          friday_sleep_start = response[5].sleep_start + 480;
          friday_sleep_end = response[5].sleep_end + 480;
          friday_work_start = response[5].work_start + 480;
          friday_work_end = response[5].work_end + 480;
          friday_working = response[5].working;
          console.log(friday_work_start + " friday_work_start");
          console.log(friday_work_end + " friday_work_end");
        } else if (i === 6) {
          saturday_sleep_start = response[6].sleep_start + 576;
          saturday_sleep_end = response[6].sleep_end + 576;
          saturday_work_start = response[6].work_start + 576;
          saturday_work_end = response[6].work_end + 576;
          saturday_working = response[6].working;
          console.log(saturday_work_start + " saturday_work_start");
          console.log(saturday_work_end + " saturday_work_end");
        }
      }
      
      for (i=1; i < sunday_sleep_end - 1; i++) {
        hiddenTimesArr.push(i);
      }

      for (i=sunday_work_start - 1; i < sunday_work_end - 1; i++) {
        hiddenTimesArr.push(i);
      }

      for (i=96; i >= sunday_sleep_start - 1; i--) {
        hiddenTimesArr.push(i);
      }

      for (i=97; i < monday_sleep_end - 1; i++) {
        hiddenTimesArr.push(i);
      }

      for (i=monday_work_start - 1; i < monday_work_end - 1; i++) {
        hiddenTimesArr.push(i);
      }

      for (i=192; i >= monday_sleep_start - 1; i--) {
        hiddenTimesArr.push(i);
      }

      for (i=193; i < tuesday_sleep_end - 1; i++) {
        hiddenTimesArr.push(i);
      }

      for (i=tuesday_work_start - 1; i < tuesday_work_end - 1; i++) {
        hiddenTimesArr.push(i);
      }

      for (i=288; i >= tuesday_sleep_start - 1; i--) {
        hiddenTimesArr.push(i);
      }

      for (i=289; i < wednesday_sleep_end - 1; i++) {
        hiddenTimesArr.push(i);
      }

      for (i=wednesday_work_start - 1; i < wednesday_work_end - 1; i++) {
        hiddenTimesArr.push(i);
      }

      for (i=384; i >= wednesday_sleep_start - 1; i--) {
        hiddenTimesArr.push(i);
      }

      for (i=385; i < thursday_sleep_end - 1; i++) {
        hiddenTimesArr.push(i);
      }

      for (i=thursday_work_start - 1; i < thursday_work_end - 1; i++) {
        hiddenTimesArr.push(i);
      }

      for (i=480; i >= thursday_sleep_start - 1; i--) {
        hiddenTimesArr.push(i);
      }

      for (i=481; i < friday_sleep_end - 1; i++) {
        hiddenTimesArr.push(i);
      }

      for (i=friday_work_start - 1; i < friday_work_end - 1; i++) {
        hiddenTimesArr.push(i);
      }

      for (i=576; i >= friday_sleep_start - 1; i--) {
        hiddenTimesArr.push(i);
      }

      for (i=577; i < saturday_sleep_end - 1; i++) {
        hiddenTimesArr.push(i);
      }

      for (i=saturday_work_start - 1; i < saturday_work_end - 1; i++) {
        hiddenTimesArr.push(i);
      }

      for (i=672; i >= saturday_sleep_start - 1; i--) {
        hiddenTimesArr.push(i);
      }

      console.log(hiddenTimesArr);

      for (i=0; i < hiddenTimesArr.length; i++) {
        let hiddenTime = document.getElementById(hiddenTimesArr[i]);
        hiddenTime.classList = "hidden";
      }

      // We need to set something to calculate the hours / time available for both the work and sleep schedule and store the time available data into an array.


      //   I think the best move is to use the sleep/work time logic within the fetch api/schedules function (right after the last else if, line 78), then call getActivityData when applicable.
    });
  });
};

/* window.onload = function getActivityData() {
  fetch("api/activities").then((response) => {
    return response.json().then(function (response) {
      console.log(response);
      var activity_category;
      var activity_name;
      var activity_length;
      var user_id;
      for (i = 0; i < response.length; i++) {
        activity_category = response[i].activity_category;
        activity_name = response[i].activity_name;
        activity_length = response[i].activity_length;
        user_id = response[i].user_id;
      }
    });
  });
}; */

//TODO Implement 15 minute increments, we can say time throughout the day in 15 min increments, if we use it as an array of time we can check the available time within the database.
//TODO Conditional statement to audit whether the user has enough time to schedule.

// * STACK OVERFLOW FUNCTION TO RANDOMIZE TIMES <-- use for reference if needed,

// function randomDate(sleepStart, sleepEnd, workStart, workEnd) {
//   function randomValueBetween(min, max) {
//     return Math.random() * (max - min) + min;
//   }
//   var workStart = workStart || "01-01-1970";
//   var workEnd = workEnd || new Date().toLocaleDateString();
//! insert sleep time variables here
//   date1 = new Date(date1).getTime();
//   date2 = new Date(date2).getTime();
//   if (date1 > date2) {
//     return new Date(randomValueBetween(date2, date1)).toLocaleDateString();
//   } else {
//     return new Date(randomValueBetween(date1, date2)).toLocaleDateString();
//   }
// }

// randomDate("02/13/2013", "01/01/2000");
// ("1/31/2009");
// randomDate();
// ("6/14/2001");

// * Second option to use for randomization

// var yourRandomGenerator = function (rangeOfDays, startHour, hourRange) {
//   var today = new Date(Date.now());
//   return new Date(
//     today.getYear() + 1900,
//     today.getMonth(),
//     today.getDate() + Math.random() * rangeOfDays,
//     Math.random() * hourRange + startHour,
//     Math.random() * 60
//   );
// };

// console.log(yourRandomGenerator(2, 8, 2));

// TODO we need a foreign key that is associated to a table of activities. The user will be tracked to the table of activities that they have.
