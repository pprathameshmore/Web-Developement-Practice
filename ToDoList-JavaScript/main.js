
var list = new Array();

//Add new element;
//Show all list
//Quite app

var choice;

while (choice !== "quit") {

    if (choice === "add") {
        addToList();
        choice = prompt("Enter your choice");
    } else if (choice === "show") {
        console.log(showAllList);
    } else if (choice === "quit") {

    }

}

function addToList() {
    var task = prompt("Add new task ");
    list.push(task);
    console.log(list);
    alert(task + " is added succesfully in your list");
    
}

function showAllList() {
    console.log(list);
}