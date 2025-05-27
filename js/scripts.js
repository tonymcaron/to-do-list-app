function newItem() {

  //Adding new item to the list
  let inputValue = $('#input').val();
  let li = $('<li></li>');
  li.append(inputValue);

  if (inputValue === '') {
    alert("Please enter a to-do item!");
  } else {
    $('#list').append(li);
  }

  //Crossing out an item
  li.on("dblclick", function crossOut() {
    li.toggleClass("strike");
  });

  //Delete button
  let crossOutButton = $("<crossOutButton></crossOutButton>");
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  crossOutButton.on("click", deleteListItem);
  function deleteListItem() {
    li.addClass("delete");
  }

  //Reordering the items
  $('#list').sortable();

}