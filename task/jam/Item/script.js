function onSubmit() {
    var item = document.getElementById("items");
    var selecttedItem = item.options[item.selectedIndex].value;
    var cxname = document.getElementById("name").value;
    document.getElementById("print").innerHTML = `Customer: ${cxname}` + "</br>" + `Item Description: ${selecttedItem}`;
}