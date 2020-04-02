$(document).ready(function () {
  
  let name = prompt("What is your name?");
  function greeting() {
    let currentHour = moment().hour()
    console.log(currentHour)
    if (currentHour < 12) {
      alert("Good Morning " + name)
    } else if (currentHour > 12 && currentHour < 18) {
      alert("Good Afternoon " + name)
    } else {
      alert("Good Evening " + name)
    }
  }
  greeting();

  let currentDayNow;
  setInterval(() => {
    currentDayNow = moment().format("dddd, MMMM Do YYYY, hh:mm:ss a");
    $("#currentDay").text(currentDayNow);
    for (var i = 8; i <= 18; i++) {
      if (i === moment().hour()) {
        $("#hour-" + i + " .form-control").removeClass("past present future").addClass("present");
      } else if (i < moment().hour()) {
        $("#hour-" + i + " .form-control").removeClass("past present future").addClass("past");
      } else {
        $("#hour-" + i + " .form-control").removeClass("past present future").addClass("future")
      }
    }
  }, 1000)

  $(".btn").on("click", function (event) {
    event.preventDefult;
    let textareaInput = $(this).siblings(".form-control").val();
    let time = $(this).parent().attr("id");

    if (textareaInput.length > 0 ){
      localStorage.setItem(time, textareaInput);
    } 
    
  });

  $("textarea").each(function () {
    let scheduleInput = $(this).parent().attr("id");
    let scheduler = localStorage.getItem(scheduleInput);
    $(this).val(scheduler)
    
  })

});