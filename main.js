$( document ).ready(function() {
  let currentDayNow;
  setInterval(()=> {
    currentDayNow = moment().format("dddd, MMMM Do YYYY, hh:mm:ss a");
    $("#currentDay").text(currentDayNow);
    for (let i = 8; i <= 18; i++){
      // let hour = $("#hour-"+i + " span").text();//
      if (i === moment().hour()){
        $("#hour-" + i + " .form-control").removeClass("past present future"). addClass("present");
      } else if (i < moment().hour()){
        $("#hour-" + i + " .form-control").removeClass("past present future"). addClass("past");
      }else{
        $("#hour-" + i + " .form-control").removeClass("past present future"). addClass("future")
      }
    }
  },1000)
    
  // save button
  $(".btn").on("click", function(){
    let textInput = $(".form-contorl").val

    console.log (textInput)

  })
  

 
});