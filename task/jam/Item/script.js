function onSubmit() {
    var item = document.getElementById("items");
    var selectedItem = item.options[item.selectedIndex].value;
    var cxname = document.getElementById("name").value;
    alert(`Customer: ${cxname}` + "\n" + `Item Description: ${selectedItem}`);
}


function validateValues() {
    var item = document.getElementById("items");
    var selectedItem = item.options[item.selectedIndex].value;
    var cxname = document.getElementById("name").value;

    if(selectedItem !== "" && cxname !== ""){
        document.getElementById("submit").removeAttribute("disabled");
    }
}
