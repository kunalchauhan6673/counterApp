// global var
var count = 0;

// function to reset count to 0
function reset(){
  count = 0;
  document.querySelector("#count").innerHTML = count;
  colorCount();
}

// function to increase the value of count to count+1
function inc(){
    count++;
    document.querySelector("#count").innerHTML = count;
    colorCount();
}

// function to decrease the value of count to count-1
function dec(){
    count--;
    document.querySelector("#count").innerHTML = count;
    colorCount();
}

// function to change the color of count when its greater and lesser than 0
function colorCount(){
    if(count == 0)
    document.querySelector("#count").style.color = "#15161B";
  else  if(count > 0)
    document.querySelector("#count").style.color = "green";
  else  if(count < 0)
    document.querySelector("#count").style.color = "red";
}
