$(document).ready(function () {
  // let name = prompt("What is your name?");
  // function greeting() {
  //   let currentHour = moment().hour()
  //   if (currentHour < 12) {
  //     alert("Good Morning " + name)
  //   } else if (currentHour > 12 || currentHour <= 17) {
  //     alert("Good Afternoon " + name)
  //   } else if (currentHour > 18) {
  //     alert("Good Evening " + name)
  //   }
  // }
  // greeting();

  let currentDayNow;
  setInterval(() => {
    currentDayNow = moment().format("dddd, MMMM Do YYYY, hh:mm:ss a");
    $("#currentDay").text(currentDayNow);
    for (var i = 8; i <= 18; i++) {
      // let hour = $("#hour-"+i + " span").text();//
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

    if(textareaInput === null){
      alert("Please Enter Task")
    }
    localStorage.setItem(time, textareaInput);
  });
    $("textarea").each(function () {
    let scheduleInput = $(this).parent().attr("id");
    let scheduler = localStorage.getItem(scheduleInput);
    $(this).val(scheduler)
    
  })


  // $(".btn").on("click", function (event) {
  //   event.preventDefult;
  //   var textareaInput = $(this).siblings(".form-control").val();
  //   var time = $(this).parent().attr("id");

  //   console.log(textareaInput, time);
  //   localStorage.setItem(textareaInput, time);
  //   localStorage.setItem("time", time);
  //   localStorage.setItem("textareaInput", JSON.stringify(textareaInput));
  // });
  // var userInput = localStorage.getItem("textareaInput");
  // var userTime = localStorage.getItem("time")
  // var scheduler = localStorage.getItem("scheduler");

  // if (scheduler) {
  //   scheduler = JSON.parse(scheduler);
  // } else {
  //   scheduler = [];
  // }
  // if (userInput && userTime) {
  //   var planner = {
  //     textareaInput: userInput,
  //     time: userTime,
  //   }
  //   scheduler.push(planner);
  //   localStorage.setItem("scheduler", JSON.stringify(scheduler));

  // }

});