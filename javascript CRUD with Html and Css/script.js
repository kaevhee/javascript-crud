var selectedRow = null;
function onFormSubmit(event){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetform();
}
//retrieving the data
function readFormData(){
    var formData={};
    formData["productcode"]=document.getElementById("productcode").value;
    formData["product"]=document.getElementById("product").value;
    formData["quality"]=document.getElementById("quality").value;
    formData["perprice"]=document.getElementById("perprice").value;
    console.log(formData)
     return formData;
}

//insert the data
function insertNewRecord(data){
    var table = document.getElementById("storelist").getElementsByTagName('tbody')[0];
    var newRow =table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.productcode;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.product;
    var cell3= newRow.insertCell(2);
        cell3.innerHTML = data.quality;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.perprice;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = "<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>"
  
}

// edit data
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('productcode').value=selectedRow.cells[0].innerHTML;
    document.getElementById('product').value=selectedRow.cells[1].innerHTML;
    document.getElementById('quality').value=selectedRow.cells[2].innerHTML;
    document.getElementById('perprice').value=selectedRow.cells[3].innerHTML;

}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML=formData.productcode;
    selectedRow.cells[1].innerHTML=formData.product;
    selectedRow.cells[2].innerHTML=formData.quality;
    selectedRow.cells[3].innerHTML=formData.perprice;

}

// delete data
function onDelete(td){
    if(confirm('Sure you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('storelist').deleteRow(row.rowIndex);
    }
    resetform();
}

// resetdata
function resetform(){
    document.getElementById('productcode').value='';
    document.getElementById('product').value='';
    document.getElementById('quality').value='';
    document.getElementById('perprice').value='';


}