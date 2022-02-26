//code for the date and time on the header of the page.
let todayDay = moment().format("dddd, MMM Do YYYY");
let timeNow = moment().format("h:mm A");
$("#currentDay").html(todayDay);

$("#currentTime").html(timeNow);
//code for the save button
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

[1, 2, 3, 4, 5, 6, 7, 8, 9].forEach((hour) => {
  $(`#hour${hour} .description`).val(localStorage.getItem(`hour${hour}`));
});

Clock();
