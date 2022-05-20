//get time and date
var today = moment();
//put time and date in header/jumbotron
$("#currentDay").text(today.format("dddd, MMM Do"));

var timeNow = moment().hour();
//console.log(timeNow);

//asign save
$(".saveBtn").on("click", function () {
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");
  localStorage.setItem(time, text);
  console.log(text);
});
