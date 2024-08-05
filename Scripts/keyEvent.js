function keyDetect(keyPressed,currentCell)
{
    if(keyPressed.key==="Enter")
    {
        keyPressed.preventDefault();
        if(currentCellFilled(currentCell))
        {
            if(currentIsLast(currentCell))
            {
                addRow();
                NextInput(currentCell);
            }
            else
            {
                NextInput(currentCell);
            }
        }
    }

    if(keyPressed.key=='+')
    {
        keyPressed.preventDefault();
        addRow();
    }
    if(keyPressed.key=='-')
    {
        keyPressed.preventDefault();
        remove(currentCell);
    }

}

function NextInput(currentCell)
{
    var nextIndex=(currentCell.parentElement.cellIndex)+1;
    var nextInput=(currentCell.parentElement.parentElement.children[nextIndex].children[0]);
    if(currentIsLast(currentCell))
    {
        var currentRow=document.getElementsByClassName('contentRow');
        var nextRow=currentRow[(currentRow.length)-1];
        nextRow.children[1].children[0].focus();
    }
    else
    {    
        nextInput.focus();
    }

}

function currentCellFilled(currentCell)
{
    if(currentCell.value==""|| currentCell.value<=0.00)
    {
        alert(" Current Cell is Empty \n Complete the current cell to move to next cell");
        return false;
    }
    else
    {
        return true;
    }
}

function currentIsLast(currentCell)
{
    if(currentCell.parentElement.cellIndex == 3)
    {
        return true;
    }
    else
    {
        return false;
    }
}