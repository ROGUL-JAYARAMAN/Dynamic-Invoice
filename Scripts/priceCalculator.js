function quantityAmount(quantity)
{
    var rowContent=quantity.parentElement.parentElement;
    var PricePerUnit=parseFloat(rowContent.children[3].children[0].value).toFixed(2);
    var qty=quantity.value;
    if(Constraint(quantity))
    {
        //Amount
        var price=parseFloat(qty*PricePerUnit).toFixed(2);
        rowContent.children[4].children[0].value=parseFloat(price).toFixed(2); 
        //totalAmount
        netAmountCalculator();
    }
    else
    {
        alert(" Check the Quantity Value \n Quantity Value should be greater than Zero");
        quantity.value=0;
        quantity.parentElement.parentElement.children[4].children[0].value=parseFloat(0.00).toFixed(2);
        netAmountCalculator();
    }
}

//Price per Unit adder or modifier
function PricePerUnit(ppu)
{
    var rowContent=ppu.parentElement.parentElement
    var PricePer=parseFloat(rowContent.children[3].children[0].value).toFixed(2);
    var qty=rowContent.children[2].children[0].value;
    if(Constraint(ppu))
    {
        var price=parseFloat(qty*PricePer).toFixed(2);
        rowContent.children[4].children[0].value=parseFloat(price).toFixed(2); //Tot Amount
        netAmountCalculator();
    }
    else
    {
        alert(" Check the Price per Unit Value \n Price per Unit Value should be greater than Zero");
        ppu.value=parseFloat(0.00).toFixed(2);
        ppu.parentElement.parentElement.children[4].children[0].value=parseFloat(0.00).toFixed(2);
        netAmountCalculator();
    }
}

function Constraint(element)
{
    if(element.value<0.00)
    {
        return false;
    }
    else if(element.value>=0.00)
    {
        return true;
    }
}

//net amount calculator
function netAmountCalculator()
{
    var amt=document.getElementsByClassName('amount');
    var tot=document.getElementById('totalValue');
    var totalAmount=parseFloat(0.00).toFixed(2);
    for(let i=0;i<amt.length;i++)
    {
        totalAmount=parseFloat(parseFloat(totalAmount)+parseFloat(amt[i].children[0].value)).toFixed(2);
    }
    totalValue.value=totalAmount;
    discountCalculator();
    
}

function discountCalculator()
{
    if(Constraint(document.getElementById('disper')))
    {
        var dis=document.getElementById('disper').value;
        var amt=parseFloat(document.getElementById('totalValue').value).toFixed(2);
        discountprice=parseFloat((amt*dis)/100).toFixed(2);
        document.getElementById('discountpri').innerHTML=discountprice;
        document.getElementById('distot').value=parseFloat(amt-discountprice).toFixed(2);
        GSTCalculator(parseFloat(amt-discountprice).toFixed(2));
    }
    else
    {
        alert("Discount percentage cannot be negative")
        document.getElementById('disper').value=0;
        discountCalculator();
    }
    
}

function GSTCalculator(amt)
{
    //gst calculation
    var gst=document.getElementById('GSTValue');
    var gsttot=document.getElementById('GSTValuetot');
    var gstprice=parseFloat(amt*0.18).toFixed(2);
    gst.innerHTML=gstprice;
    gsttot.value=parseFloat(parseFloat(amt)+parseFloat(gstprice)).toFixed(2);
    document.getElementById('nettot').innerHTML=parseFloat(parseFloat(amt)+parseFloat(gstprice)).toFixed(2);
}