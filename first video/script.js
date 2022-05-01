var selectedRow = null;
function onFormSubmit(){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{
        
    }
}
//retrieving the data
function readFormData(){
    var formData={};
    formData["productcode"]=document.getElementById("productcode").Value;
    formData["product"]=document.getElementById("product").Value;
    formData["quality"]=document.getElementById("quality").Value;
    formData["perprice"]=document.getElementById("perprice").Value;
     return formData;
}

//insert the data
function insertNewRecord(data){
    var table = document.getElementById("storelist").getElementsByTagName('tbody')[0];
    var newRow =table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.InnerHTML = data.productcode;
    var cell2 = newRow.insertCell(1);
        cell2.InnerHTML = data.product;
    var cell3= newRow.insertCell(2);
        cell3.InnerHTML = data.quality;
    var cell4 = newRow.insertCell(3);
        cell4.InnerHTML = data.perprice;
    var cell5 = newRow.insertCell(4);
        cell5.InnerHTML = '<button onClick='onEdit(this)>Edit</button> <button>Delete</button>'
  
}

// edit data
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('productcode').value=selectedRow.cells[0].InnerHTML;
    document.getElementById('product').value=selectedRow.cells[1].InnerHTML;
    document.getElementById('quality').value=selectedRow.cells[2].InnerHTML;
    document.getElementById('perprice').value=selectedRow.cells[3].InnerHTML;

}

function updateRecord(formData){
    selectedRow.cells[0].InnerHTML=formData.productcode;
    selectedRow.cells[1].InnerHTML=formData.product;
    selectedRow.cells[2].InnerHTML=formData.quality;
    selectedRow.cells[3].InnerHTML=formData.perprice;

}

// delete data
function onDelete(td){
    if(confirm('do you want to delete this record')){
        row = td.parentElement.parentElement;
        document.getElementById('storelist').deleteRow(row.rowIndex);
    }
    resetform
}

// resetdata
function resetformk(){
    document.getElementById('productcode').value='';
    document.getElementById('product').value='';
    document.getElementById('quality').value='';
    document.getElementById('perprice').value='';


}