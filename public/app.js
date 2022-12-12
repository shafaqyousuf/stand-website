var main = document.getElementById("main");
var inp = document.getElementById("inp");

function add() {
    if (inp.value == "") {
        alert("empty");
    } else {
        // making li by dom
        var li = document.createElement("li");
        var liText = document.createTextNode(inp.value);
        li.appendChild(liText);

        // making edit button by dom
        var editBtn = document.createElement("button");
        var editBtntext = document.createTextNode("edit");
        editBtn.appendChild(editBtntext);
        editBtn.setAttribute("onclick", "edit(this)")
        li.appendChild(editBtn);

        // making delete button by dom
        var delBtn = document.createElement("button");
        var delBtntext = document.createTextNode("del");
        delBtn.appendChild(delBtntext);
        delBtn.setAttribute("onclick", "del(this)")
        li.appendChild(delBtn);

        main.appendChild(li);

        inp.value = "";
    }
}
function edit(element){
    var newValue = prompt("enter new value", element.parentNode.firstChild.nodeValue);
element.parentNode.firstChild.nodeValue = newValue;
}
function del(element){
element.parentNode.remove();
}
function delAll(){
    main.innerHTML = "";
}








