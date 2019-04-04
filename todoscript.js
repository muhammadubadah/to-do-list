let div = document.getElementById("divDefault");

function appendDOM (element){
    div.appendChild(element);
}
function createElement (string) {
    let newElement = document.createElement(string);
    appendDOM(newElement);
    return newElement;
 }


 //input box
let newText = createElement("input");
    newText.id="inputBox";
    newText.setAttribute("type", "text");
    newText.setAttribute("placeholder", "enter task...");

//submit button
let newClick = createElement("button");
    newClick.id="submitButton";
    newClick.innerHTML = "add to list";

//first list
let newList = createElement("ul");
newList.id= "list";
function ulo(taker){
    newList.appendChild(taker);
}


function lier(comp){
    var created = createElement("li");
    created.id="nodeList"

    var tick = document.createElement("INPUT");
    tick.setAttribute("type", "checkbox");
    created.appendChild(tick);
    created.appendChild(comp);

    var del = document.createElement('button');
    del.id= "deleting";
    del.innerHTML = 'undo Task';
    del.style.color = 'purple';
    del.style.backgroundColor = 'red';
    created.appendChild(del);
    del.onclick = deleteItem;
    ulo(created);
    //  newList.appendChild(b);
}

var deleteItem = function(){
    var db = document.getElementById("deleting");
    var nodeL = document.getElementById("nodeList");
    var lister = document.getElementById("list");
    nodeL.parentNode.removeChild(nodeL);   
    
    //var lister = document.getElementById("list");
    //lister.removeChild(lister.childNodes[0]);
}

var done = newClick.onclick = function(){
    var x = document.getElementById("inputBox").value;
    var textNode = document.createTextNode(x);
    lier(textNode);
}
