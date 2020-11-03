let list = $("#list");
let li = $("<li></li>");
let inputValue = $("#input").val();

li.append(inputValue);

// Adds list item to list unless input field is left empty
if (inputValue === '') {
    alert("You must write something");
} else {
    list.append(li);
}

// Adds strike-through on double-click
function crossOut() {
    li.toggleClass("strike");
}

li.on("dblclick", crossOut);

let deleteButton = $(li).append("<button></button>");
    deleteButton.append(document.createTextNode("X"));


// Allows item to be deleted when "X" button is clicked
deleteButton.on("click", deleteListItem);


function deleteListItem() {
    li.addClass("delete");
}

// Allows for reordering items
$("#list").sortable();
