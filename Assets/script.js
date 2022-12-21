

var timeDisplayEl = $('#currentDay');


//handle displaying the time
function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}
displayTime();
setInterval(displayTime, 1000);



var currentTime=(dayjs().format('H'));
//working     hours start from 9am-5pm(
 var numberOfTimeBlock=$('#container').children('div').length;

for(var i=0;i<numberOfTimeBlock;i++){
  var timeBlockSpanContent=$('#container').children().eq(i).children('span')[0].innerHTML
  if(timeBlockSpanContent ==currentTime){
    for(var j=i+1;j<numberOfTimeBlock;j++){
         
                for(var k=i-1;k>=0;k--){
                  $('#container').children().eq(i).addClass('present')
                  var state=$('#container').children().eq(j).addClass('future');
                  var state1=$('#container').children().eq(k).addClass('past')
                }
              }       
    
  }
 if(currentTime>17&& currentTime<24){
  for(var k=0;k<numberOfTimeBlock;k++){
    $('#container').children().eq(k).addClass('past')
      }
  }
 if(currentTime<9){
    for(var k=0;k<numberOfTimeBlock;k++){
      $('#container').children().eq(k).addClass('future')
        }
 }
}

$(".saveBtn").on("click", function () {
  
  var taskInput = $(this).siblings(".description").val();
  var timeSlot = $(this).parent().attr("id");

  // Save tasks in local storage
  localStorage.setItem(timeSlot, taskInput);
})

// get the task description for each time block from localstorage

$('textarea').each(function(){
  var key=$(this).parent()[0].id;  
 console.log(key )
 var taskDescription= localStorage.getItem(key)


  $(this).text(taskDescription);
})