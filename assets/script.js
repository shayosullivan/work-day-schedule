//get time and date
var today = moment();
//put time and date in header/jumbotron
$("#currentDay").text(today.format("dddd, MMM Do"));

var timeNow = moment().hour();
//console.log(timeNow);

for (var i = 0; i < 10; i++) {
  if (timeNow == i + 8) {
    $(".container").children().eq(i).children().eq(1).addClass("present");
  } else if (timeNow < i + 8) {
    $(".container").children().eq(i).children().eq(1).addClass("future");
  } else {
    $(".container").children().eq(i).children().eq(1).addClass("past");
  }
}
//asign save
$(".saveBtn").on("click", function () {
  console.log(this);
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");
  localStorage.setItem(time, text);
  // console.log(text);
});
//load data from LocalStorage for all hours that have something typed in it.
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
