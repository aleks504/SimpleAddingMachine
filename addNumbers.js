var sum = 0;
var clickCount = 0;

function buttonClicked(buttonNumber)
{
  sum = sum + buttonNumber;
  clickCount = clickCount + 1;
  printInfo();
}
function printInfo()
{
  document.getElementById("output1").innerHTML = "Sum: " + sum;
  document.getElementById("output2").innerHTML = "Times Clicked: " + clickCount;
}
function CLEAR()
{
  document.getElementById("output1").innerHTML = " ";
  document.getElementById("output2").innerHTML = " ";
  sum = 0;
  clickCount = 0;
}
