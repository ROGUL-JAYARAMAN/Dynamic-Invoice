//display as sno
var count=1;

function addingRow()
{
    //increment sno
    ++count;

    //select the table
    var table= document.getElementById("invoiceTable");

    //create new Row at end (-1) of selected table
    var row=table.insertRow(-1);
    row.className="contentRow"

    //create coloumn
    var col1=row.insertCell(0);
    col1.className="rc";
    col1.id="c1";

    var col2=row.insertCell(1);
    col2.className="rc";
    col2.id="c2";

    var col3=row.insertCell(2);
    col3.className="rc";
    col3.id="c3";

    var col4=row.insertCell(3);
    col4.className="rc";
    col4.id="c4";

    var col5=row.insertCell(4);
    col5.className="amount";
    col5.id="c5";

    //add the content to appear at the each col
    col1.innerHTML='<input type="number" value="'+count+'" readonly>'
    col2.innerHTML='<input type="text" onkeydown="keyDetect(event,this)">'
    col3.innerHTML='<input type="number" onkeydown="keyDetect(event,this)" onkeyup="quantityAmount(this)" value="0" >'
    col4.innerHTML='<input type="number" onkeydown="keyDetect(event,this)" onkeyup="PricePerUnit(this)" value="0.00" >'
    col5.innerHTML='<input type="number" value="0.00" readonly>'
}

//constraints for adding new row -> fill the current row to create new row
function addRow()
{
    if(checkTot()) //check the current row is filled by total
    {
        //add row 
        addingRow();
    }
    else
    {
        alert("Complete the current row to create new row");
    }
}

//check the current total
function checkTot()
{
    var row=document.getElementsByClassName('contentRow');
    var curtot=row[count-1].children[4].children[0].value;
    if(curtot>0.00)
    {
        return true;
    }
    else{
        return false;
    }
}

//Remove Row
function removeRow()
{
    if(count>1)
    {
        var row=document.getElementsByClassName('contentRow');
        row[count-1].remove();
        row[count].children[1].children[0].focus();
        count--;
        netAmountCalculator();
    }
    else
    {
        alert(" Unable to Remove the Current Row \n Your Invoice should have atleast one row");
    }
}

function remove(currentCell)
{
    if(count>1)
    {
        updatesno(currentCell);
        currentCell.parentElement.parentElement.remove();
        count--;
        netAmountCalculator();
    }
    else
    {
        alert(" Unable to Remove the Current Row \n Your Invoice should have atleast one row");
    }
    
}

function updatesno(currentCell)
{
    var row=Array.from(document.querySelectorAll('tr'));
    var currow=row.indexOf(currentCell.parentElement.parentElement);
    for(let i=currow;i<count;i++)
    {
        row[i+1].children[0].children[0].value=parseInt(parseInt(i));
    }
    if(currow==count)
    {
        row[currow-1].children[1].children[0].focus();
    }
    else
    {
        row[currow+1].children[1].children[0].focus();
    }
}
