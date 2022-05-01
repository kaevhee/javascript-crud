function onFormSubmit(){
  var formData = readFormData();
  insertNewRecord(formData);
  resetForm();
}


//creates data
function readFormData(){
    var formData={};
    formData["FullName"]=document.getElementById("FullName").Value;
    formData["stc"]=document.getElementById("stc").Value;
    formData["salary"]=document.getElementById("salary").Value;
    formData["city"]=document.getElementById("city").Value;
     return formData;
}
//stores data in table
function insertNewRecord(data){
    var table = document.getElementById("employeelist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.FullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.stc;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;
    cell4= newRow.insertCell(4);
    cell4.innerHTML = '<a onClick="onEdit(this)">Edit</a> <a>Delete</a>';
    //  return data;

}   

function resetForm(){
  document.getElementById("FullName").Value="";
  document.getElementById("stc").Value="";
  document.getElementById("salary").Value="";
  document.getElementById("city").Value="";


}
function onEdit(td){
  selectedRow =td.parentElement,parentElement;
  document.getElementById("FullName").Value=selecedRow.cells[0].innerHTML;
  document.getElementById("stc").Value=selecedRow.cells[1].innerHTML;
  document.getElementById("salary").Value=selecedRow.cells[2].innerHTML;
  document.getElementById("city").Value=selecedRow.cells[3].innerHTML;


}
