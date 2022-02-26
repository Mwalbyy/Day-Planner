let todayDay = moment().format("dddd, MMM Do YYYY");
let timeNow = moment().format("h:mm A");
$("#currentDay").html(todayDay);

$("#currentTime").html(timeNow);

$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    console.log("Hello");
    let text = $(this).siblings(".description").val();
    let time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
  });
});

function Clock() {
  let TimeATM = moment().hour();
  $(".time-block").each(function () {
    let TimeBlock = parseInt($(this).attr("id").split("hour")[1]);

    if (TimeBlock < TimeATM) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    } else if (TimeBlock === TimeATM) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    } else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  });
}

$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

Clock();
