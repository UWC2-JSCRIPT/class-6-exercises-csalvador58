/**
 * Toggles "done" class on <li> element
 */
const $li = $('li')
$li.click(function(e) {
  $(this).toggleClass('done');
});

/**
 * Delete element when delete link clicked
 */

 $('.delete').click(function(e) {
   $(this)[0].parentElement.remove();
 });

/**
 * Adds new list item to <ul>
 */
const addListItem = function(e) {
  e.preventDefault();
  const text = $('input').val();
  console.log(text)

  // rest here...
  const $newLi = $('<li>');
  const $newSpan = $('<span>');
  $newSpan.text(`${text}`);
  $newLi.append($newSpan);
  const $newA = $('<a class="delete">');
  $newA.text('Delete');
  $newLi.append($newA);
  $('.today-list').append($newLi);

  $newLi.click(function(e) {
    $(this).toggleClass('done');
  });

  $newA.click(function(e) {
    $(this)[0].parentElement.remove();
  });

};

// add listener for add
$('.add-item').click(function(e) {
  addListItem(e);
});