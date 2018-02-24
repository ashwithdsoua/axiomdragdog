
var p1=document.getElementById('p1');
var p2=document.getElementById('p2');
var p3=document.getElementById('p3');
var p4=document.getElementById('p4');
var p5=document.getElementById('p5');
var p6=document.getElementById('p6');

var q1=document.getElementById('q1');
var q2=document.getElementById('q2');
var q3=document.getElementById('q3');
var q4=document.getElementById('q4');
var q5=document.getElementById('q5');
var q6=document.getElementById('q6');

var dvControlBox1=document.getElementById('dvControlBox1');
var dvControlBox2=document.getElementById('dvControlBox2');
var dvControlBox3=document.getElementById('dvControlBox3');
var dvControlBox4=document.getElementById('dvControlBox4');
var dvControlBox5=document.getElementById('dvControlBox5');
var dvControlBox6=document.getElementById('dvControlBox6');

var dvActionBox1=document.getElementById('dvActionBox1');
var dvActionBox2=document.getElementById('dvActionBox2');
var dvActionBox3=document.getElementById('dvActionBox3');
var dvActionBox4=document.getElementById('dvActionBox4');
var dvActionBox5=document.getElementById('dvActionBox5');
var dvActionBox6=document.getElementById('dvActionBox6');

var foritemname = ["itemname1", "itemname2","itemname3","itemname4","itemname5","itemname6","itemname7","itemname8","itemname9","itemname10","itemname11","itemname12"];
var foritemprice = ["itemprice1", "itemprice2","itemprice3","itemprice4","itemprice5","itemprice6","itemprice7","itemprice8","itemprice9","itemprice10","itemprice11","itemprice12"];
var foritemqty = ["itemqty1","itemqty2","itemqty3","itemqty4","itemqty5","itemqty6","itemqty7","itemqty8","itemqty9","itemqty10","itemqty11","itemqty12"];

var dropNewElement, dropElement, dropitem;

    var newElementToAdd = document.createElement("text");
    var textToAdd,itemname,itemprice,itemqty;

// ############################## this is on drag start function ########################################################### //
p1.ondragstart = function(evt){
  evt.dataTransfer.setData('key', evt.target.id);

 itemname = document.getElementById("itemname1").innerHTML;
  itemprice = document.getElementById("itemprice1").innerHTML;
   itemqty = document.getElementById("itemqty1").innerHTML;
  evt.dataTransfer.setData('itemname', itemname);
  evt.dataTransfer.setData('itemprice', itemprice);
  evt.dataTransfer.setData('itemqty', itemqty);
}

p2.ondragstart = function(evt){
  evt.dataTransfer.setData('key', evt.target.id);

  itemname = document.getElementById("itemname2").innerHTML;
   itemprice = document.getElementById("itemprice2").innerHTML;
    itemqty = document.getElementById("itemqty2").innerHTML;
   evt.dataTransfer.setData('itemname', itemname);
   evt.dataTransfer.setData('itemprice', itemprice);
   evt.dataTransfer.setData('itemqty', itemqty);
}

p3.ondragstart = function(evt){
  evt.dataTransfer.setData('key', evt.target.id);

  itemname = document.getElementById("itemname3").innerHTML;
   itemprice = document.getElementById("itemprice3").innerHTML;
    itemqty = document.getElementById("itemqty3").innerHTML;
   evt.dataTransfer.setData('itemname', itemname);
   evt.dataTransfer.setData('itemprice', itemprice);
   evt.dataTransfer.setData('itemqty', itemqty);
}

p4.ondragstart = function(evt){
  evt.dataTransfer.setData('key', evt.target.id);

  itemname = document.getElementById("itemname4").innerHTML;
   itemprice = document.getElementById("itemprice4").innerHTML;
    itemqty = document.getElementById("itemqty4").innerHTML;
   evt.dataTransfer.setData('itemname', itemname);
   evt.dataTransfer.setData('itemprice', itemprice);
   evt.dataTransfer.setData('itemqty', itemqty);
}

p5.ondragstart = function(evt){
  evt.dataTransfer.setData('key', evt.target.id);

  itemname = document.getElementById("itemname5").innerHTML;
   itemprice = document.getElementById("itemprice5").innerHTML;
    itemqty = document.getElementById("itemqty5").innerHTML;
   evt.dataTransfer.setData('itemname', itemname);
   evt.dataTransfer.setData('itemprice', itemprice);
   evt.dataTransfer.setData('itemqty', itemqty);
}

p6.ondragstart = function(evt){
  evt.dataTransfer.setData('key', evt.target.id);

  itemname = document.getElementById("itemname6").innerHTML;
   itemprice = document.getElementById("itemprice6").innerHTML;
    itemqty = document.getElementById("itemqty6").innerHTML;
   evt.dataTransfer.setData('itemname', itemname);
   evt.dataTransfer.setData('itemprice', itemprice);
   evt.dataTransfer.setData('itemqty', itemqty);
}

q1.ondragstart = function(evt){
  evt.dataTransfer.setData('key', evt.target.id);//p1 or evt.target.id are the same

  itemname = document.getElementById("itemname7").innerHTML;
   itemprice = document.getElementById("itemprice7").innerHTML;
    itemqty = document.getElementById("itemqty7").innerHTML;
   evt.dataTransfer.setData('itemname', itemname);
   evt.dataTransfer.setData('itemprice', itemprice);
   evt.dataTransfer.setData('itemqty', itemqty);
}

q2.ondragstart = function(evt){
  evt.dataTransfer.setData('key', evt.target.id);

  itemname = document.getElementById("itemname8").innerHTML;
   itemprice = document.getElementById("itemprice8").innerHTML;
    itemqty = document.getElementById("itemqty8").innerHTML;
   evt.dataTransfer.setData('itemname', itemname);
   evt.dataTransfer.setData('itemprice', itemprice);
   evt.dataTransfer.setData('itemqty', itemqty);
}

q3.ondragstart = function(evt){
  evt.dataTransfer.setData('key', evt.target.id);

  itemname = document.getElementById("itemname9").innerHTML;
   itemprice = document.getElementById("itemprice9").innerHTML;
    itemqty = document.getElementById("itemqty9").innerHTML;
   evt.dataTransfer.setData('itemname', itemname);
   evt.dataTransfer.setData('itemprice', itemprice);
   evt.dataTransfer.setData('itemqty', itemqty);
}

q4.ondragstart = function(evt){
  evt.dataTransfer.setData('key', evt.target.id);

  itemname = document.getElementById("itemname10").innerHTML;
   itemprice = document.getElementById("itemprice10").innerHTML;
    itemqty = document.getElementById("itemqty10").innerHTML;
   evt.dataTransfer.setData('itemname', itemname);
   evt.dataTransfer.setData('itemprice', itemprice);
   evt.dataTransfer.setData('itemqty', itemqty);
}

q5.ondragstart = function(evt){
  evt.dataTransfer.setData('key', evt.target.id);

  itemname = document.getElementById("itemname11").innerHTML;
   itemprice = document.getElementById("itemprice11").innerHTML;
    itemqty = document.getElementById("itemqty11").innerHTML;
   evt.dataTransfer.setData('itemname', itemname);
   evt.dataTransfer.setData('itemprice', itemprice);
   evt.dataTransfer.setData('itemqty', itemqty);
}

q6.ondragstart = function(evt){
  evt.dataTransfer.setData('key', evt.target.id);

  itemname = document.getElementById("itemname12").innerHTML;
   itemprice = document.getElementById("itemprice12").innerHTML;
    itemqty = document.getElementById("itemqty12").innerHTML;
   evt.dataTransfer.setData('itemname', itemname);
   evt.dataTransfer.setData('itemprice', itemprice);
   evt.dataTransfer.setData('itemqty', itemqty);
}
// ############################## this is on drag over function ########################################################### //

dvControlBox1.ondragover = function(evt){
  evt.preventDefault();
  if(document.getElementById('dvControlBox1').innerHTML =='Drop here'){
document.getElementById('dvControlBox1').innerHTML ='Drop';
}
}

dvControlBox2.ondragover = function(evt){
  evt.preventDefault();
  if(document.getElementById('dvControlBox2').innerHTML == 'Drop here'){
    document.getElementById('dvControlBox2').innerHTML = 'Drop';
  }
}

dvControlBox3.ondragover = function(evt){
  evt.preventDefault();
  if(document.getElementById('dvControlBox3').innerHTML == 'Drop here'){
    document.getElementById('dvControlBox3').innerHTML = 'Drop';
  }
}

dvControlBox4.ondragover = function(evt){
  evt.preventDefault();
  if(document.getElementById('dvControlBox4').innerHTML == 'Drop here'){
    document.getElementById('dvControlBox4').innerHTML = 'Drop';
  }
}

dvControlBox5.ondragover = function(evt){
  evt.preventDefault();
  if(document.getElementById('dvControlBox5').innerHTML == 'Drop here'){
    document.getElementById('dvControlBox5').innerHTML = 'Drop';
  }
}

dvControlBox6.ondragover = function(evt){
  evt.preventDefault();
  if(document.getElementById('dvControlBox6').innerHTML == 'Drop here'){
    document.getElementById('dvControlBox6').innerHTML = 'Drop';
  }
}

dvActionBox1.ondragover = function(evt){
  evt.preventDefault();
  if(document.getElementById('dvActionBox1').innerHTML == 'Drop here'){
    document.getElementById('dvActionBox1').innerHTML = 'Drop';
  }
}

dvActionBox2.ondragover = function(evt){
  evt.preventDefault();
  if(document.getElementById('dvActionBox2').innerHTML == 'Drop here'){
    document.getElementById('dvActionBox2').innerHTML = 'Drop';
  }
}

dvActionBox3.ondragover = function(evt){
  evt.preventDefault();
  if(document.getElementById('dvActionBox3').innerHTML == 'Drop here'){
    document.getElementById('dvActionBox3').innerHTML = 'Drop';
  }
}

dvActionBox4.ondragover = function(evt){
  evt.preventDefault();
  if(document.getElementById('dvActionBox4').innerHTML == 'Drop here'){
    document.getElementById('dvActionBox4').innerHTML = 'Drop';
  }
}

dvActionBox5.ondragover = function(evt){
  evt.preventDefault();
  if(document.getElementById('dvActionBox5').innerHTML == 'Drop here'){
    document.getElementById('dvActionBox5').innerHTML = 'Drop';
  }
}

dvActionBox6.ondragover = function(evt){
  evt.preventDefault();
  if(document.getElementById('dvActionBox6').innerHTML == 'Drop here'){
    document.getElementById('dvActionBox6').innerHTML = 'Drop';
  }
}
// ############################## this is on drop funvtion ########################################################### //

dvControlBox1.ondrop = function(evt){
  evt.preventDefault();

  dropitem = evt.dataTransfer.getData('key');
  evt.dataTransfer.effectAllowed = "copy";
  dropElement = document.getElementById(dropitem);
  dropNewElement = document.createElement('img');
  dropNewElement.src = dropElement.src;
  if(document.getElementById('dvControlBox1').innerHTML =='Drop'){
    document.getElementById('dvControlBox1').innerHTML = "";
  dvControlBox1.appendChild(dropNewElement);
 }else{
   dvControlBox1.appendChild(dropNewElement);
}

  itemname= evt.dataTransfer.getData("itemname");
  itemprice= evt.dataTransfer.getData("itemprice");
  itemqty= evt.dataTransfer.getData("itemqty");
  amount_calculation(itemname,itemprice,itemqty);
}

dvControlBox2.ondrop = function(evt){
  evt.preventDefault();
  dropitem = evt.dataTransfer.getData('key');
  evt.dataTransfer.effectAllowed = "copy";
  dropElement = document.getElementById(dropitem);
  dropNewElement = document.createElement('img');
  dropNewElement.src = dropElement.src;
  dvControlBox2.appendChild(dropNewElement);

  itemname= evt.dataTransfer.getData("itemname");
  itemprice= evt.dataTransfer.getData("itemprice");
  itemqty= evt.dataTransfer.getData("itemqty");
  amount_calculation(itemname,itemprice,itemqty);
}

dvControlBox3.ondrop = function(evt){
  evt.preventDefault();
  dropitem = evt.dataTransfer.getData('key');
  evt.dataTransfer.effectAllowed = "copy";
  dropElement = document.getElementById(dropitem);
  dropNewElement = document.createElement('img');
  dropNewElement.src = dropElement.src;
  dvControlBox3.appendChild(dropNewElement);

  itemname= evt.dataTransfer.getData("itemname");
  itemprice= evt.dataTransfer.getData("itemprice");
  itemqty= evt.dataTransfer.getData("itemqty");
  amount_calculation(itemname,itemprice,itemqty);
}

dvControlBox4.ondrop = function(evt){
  evt.preventDefault();
  dropitem = evt.dataTransfer.getData('key');
  evt.dataTransfer.effectAllowed = "copy";
  dropElement = document.getElementById(dropitem);
  dropNewElement = document.createElement('img');
  dropNewElement.src = dropElement.src;
  dvControlBox4.appendChild(dropNewElement);

  itemname= evt.dataTransfer.getData("itemname");
  itemprice= evt.dataTransfer.getData("itemprice");
  itemqty= evt.dataTransfer.getData("itemqty");
  amount_calculation(itemname,itemprice,itemqty);
}

dvControlBox5.ondrop = function(evt){
  evt.preventDefault();
  dropitem = evt.dataTransfer.getData('key');
  evt.dataTransfer.effectAllowed = "copy";
  dropElement = document.getElementById(dropitem);
  dropNewElement = document.createElement('img');
  dropNewElement.src = dropElement.src;
  dvControlBox5.appendChild(dropNewElement);

  itemname= evt.dataTransfer.getData("itemname");
  itemprice= evt.dataTransfer.getData("itemprice");
  itemqty= evt.dataTransfer.getData("itemqty");
  amount_calculation(itemname,itemprice,itemqty);
}

dvControlBox6.ondrop = function(evt){
  evt.preventDefault();
  dropitem = evt.dataTransfer.getData('key');
  evt.dataTransfer.effectAllowed = "copy";
  dropElement = document.getElementById(dropitem);
  dropNewElement = document.createElement('img');
  dropNewElement.src = dropElement.src;
  dvControlBox6.appendChild(dropNewElement);

  itemname= evt.dataTransfer.getData("itemname");
  itemprice= evt.dataTransfer.getData("itemprice");
  itemqty= evt.dataTransfer.getData("itemqty");
  amount_calculation(itemname,itemprice,itemqty);
}

dvActionBox1.ondrop = function(evt){
  evt.preventDefault();
  dropitem = evt.dataTransfer.getData('key');
  evt.dataTransfer.effectAllowed = "copy";
  dropElement = document.getElementById(dropitem);
  dropNewElement = document.createElement('img');
  dropNewElement.src = dropElement.src;
  dvActionBox1.appendChild(dropNewElement);

  itemname= evt.dataTransfer.getData("itemname");
  itemprice= evt.dataTransfer.getData("itemprice");
  itemqty= evt.dataTransfer.getData("itemqty");
  amount_calculation(itemname,itemprice,itemqty);
}

dvActionBox2.ondrop = function(evt){
  evt.preventDefault();
  dropitem = evt.dataTransfer.getData('key');
  evt.dataTransfer.effectAllowed = "copy";
  dropElement = document.getElementById(dropitem);
  dropNewElement = document.createElement('img');
  dropNewElement.src = dropElement.src;
  dvActionBox2.appendChild(dropNewElement);

  itemname= evt.dataTransfer.getData("itemname");
  itemprice= evt.dataTransfer.getData("itemprice");
  itemqty= evt.dataTransfer.getData("itemqty");
  amount_calculation(itemname,itemprice,itemqty);
}

dvActionBox3.ondrop = function(evt){
  evt.preventDefault();
  dropitem = evt.dataTransfer.getData('key');
  evt.dataTransfer.effectAllowed = "copy";
  dropElement = document.getElementById(dropitem);
  dropNewElement = document.createElement('img');
  dropNewElement.src = dropElement.src;
  dvActionBox3.appendChild(dropNewElement);

  itemname= evt.dataTransfer.getData("itemname");
  itemprice= evt.dataTransfer.getData("itemprice");
  itemqty= evt.dataTransfer.getData("itemqty");
  amount_calculation(itemname,itemprice,itemqty);
}

dvActionBox4.ondrop = function(evt){
  evt.preventDefault();
  dropitem = evt.dataTransfer.getData('key');
  evt.dataTransfer.effectAllowed = "copy";
  dropElement = document.getElementById(dropitem);
  dropNewElement = document.createElement('img');
  dropNewElement.src = dropElement.src;
  dvActionBox4.appendChild(dropNewElement);

  itemname= evt.dataTransfer.getData("itemname");
  itemprice= evt.dataTransfer.getData("itemprice");
  itemqty= evt.dataTransfer.getData("itemqty");
  amount_calculation(itemname,itemprice,itemqty);
}

dvActionBox5.ondrop = function(evt){
  evt.preventDefault();
  dropitem = evt.dataTransfer.getData('key');
  evt.dataTransfer.effectAllowed = "copy";
  dropElement = document.getElementById(dropitem);
  dropNewElement = document.createElement('img');
  dropNewElement.src = dropElement.src;
  dvActionBox5.appendChild(dropNewElement);

  itemname= evt.dataTransfer.getData("itemname");
  itemprice= evt.dataTransfer.getData("itemprice");
  itemqty= evt.dataTransfer.getData("itemqty");
  amount_calculation(itemname,itemprice,itemqty);
}

dvActionBox6.ondrop = function(evt){
  evt.preventDefault();
  dropitem = evt.dataTransfer.getData('key');
  evt.dataTransfer.effectAllowed = "copy";
  dropElement = document.getElementById(dropitem);
  dropNewElement = document.createElement('img');
  dropNewElement.src = dropElement.src;
  dvActionBox6.appendChild(dropNewElement);

  itemname= evt.dataTransfer.getData("itemname");
  itemprice= evt.dataTransfer.getData("itemprice");
  itemqty= evt.dataTransfer.getData("itemqty");
  amount_calculation(itemname,itemprice,itemqty);

}

var total=0;

function amount_calculation(itemname,itemprice,itemqty){
var flag=0,q=1;
var total = document.getElementById('Total').innerHTML;
var l,row,cell1,cell2,cell3;
var oTable = document.getElementById('itemsTable');
  var rowLength = oTable.rows.length;
if(rowLength==1){
  row = oTable.insertRow(-1);
  cell1 = row.insertCell(0);
  cell2 = row.insertCell(1);
  cell3 = row.insertCell(2);
  cell1.innerHTML = itemname;
  cell2.innerHTML = itemprice;
  cell3.innerHTML = q;
  for (var k = 0; k < foritemname.length; k++){
    var temp=document.getElementById(foritemname[k]).innerHTML;
    if(itemname==temp){
temp=parseInt(document.getElementById(foritemqty[k]).innerHTML)-1;
document.getElementById(foritemqty[k]).innerHTML =temp;
      break;
    }
    }
// total part
var tptotal=document.getElementById("Total").innerHTML;
var arrtotal=tptotal.split('$');
var ptotal=parseInt(arrtotal[1]) + parseInt(itemprice);
    document.getElementById("Total").innerHTML=arrtotal[0]+"$"+ptotal;
}else{
  var oTable = document.getElementById('itemsTable');
    var rowLength = oTable.rows.length;
    for (i = 1; i < rowLength; i++){
       var oCells = oTable.rows.item(i).cells;
        var cellVal = oCells.item(0).innerHTML;
      if(cellVal==itemname){
        flag=1; break;
    }
    }
    if(flag==1){
      manipulation(itemname,itemprice,itemqty);
    }else if(flag==0){
      row = oTable.insertRow(-1);
      cell1 = row.insertCell(0);
      cell2 = row.insertCell(1);
      cell3 = row.insertCell(2);
      cell1.innerHTML = itemname;
      cell2.innerHTML = itemprice;
      cell3.innerHTML = q;
      for (var k = 0; k < foritemname.length; k++){
        var temp=document.getElementById(foritemname[k]).innerHTML;
        if(itemname==temp){
temp=parseInt(document.getElementById(foritemqty[k]).innerHTML)-1;
document.getElementById(foritemqty[k]).innerHTML =temp;
          break;
        }
        }
        var tptotal=document.getElementById("Total").innerHTML;
        var arrtotal=tptotal.split('$');
        var ptotal=parseInt(arrtotal[1]) + parseInt(itemprice);
            document.getElementById("Total").innerHTML=arrtotal[0]+"$"+ptotal;
    }
  }
}

function manipulation(itemname,itemprice,itemqty){
var pTable = document.getElementById('itemsTable');
//var row=pTable.insertCell(1);
var prowLength = pTable.rows.length;
for (i = 1; i < prowLength; i++){
  var pCells = pTable.rows.item(i).cells;
   var cellVal = pCells.item(0).innerHTML;
   if(cellVal==itemname){
     var value=parseInt(pCells.item(2).innerHTML)+1;
     pTable.rows[i].cells[2].innerHTML = value;
      for (var k = 0; k < foritemname.length; k++){
        var temp=document.getElementById(foritemname[k]).innerHTML;
        if(itemname==temp){
temp=parseInt(document.getElementById(foritemqty[k]).innerHTML)-1;
document.getElementById(foritemqty[k]).innerHTML =temp;

var tptotal=document.getElementById("Total").innerHTML;
var arrtotal=tptotal.split('$');
var ptotal=parseInt(arrtotal[1]) + parseInt(itemprice);
    document.getElementById("Total").innerHTML=arrtotal[0]+"$"+ptotal;
          break;
        }
        }

     break;
 }
}

}
