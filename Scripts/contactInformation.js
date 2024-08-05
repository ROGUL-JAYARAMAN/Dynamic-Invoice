function keydetect(k, currentCell) 
{
  if (k.key === "Enter") 
  {
      if (isEmpty(currentCell)) 
      {
          alert("Complete the current cell");
      } 
      else 
      {
          movenext(currentCell);
      }
  }
}

function movenext(currentCell) 
{
  var inputs = Array.from(document.querySelectorAll('input'));
  var currentIndex = inputs.indexOf(currentCell);
  
  if (currentIndex !== -1 && currentIndex < inputs.length - 1) 
  {
      inputs[currentIndex + 1].focus();
  }
}

function isEmpty(currentCell) 
{
  return currentCell.value === "";
}
