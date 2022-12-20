// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

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
 else{
    for(var k=0;k<numberOfTimeBlock;k++){
      $('#container').children().eq(k).addClass('future')
        }
 }
}


var saveBtnEl=$('#container').children('div').children('button');

saveBtnEl.on('click', function (event){
 console.log($(event.target))
})


var tasks=["",""]

var task = $('textarea[class="description"]');








