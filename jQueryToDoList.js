/**
 * Toggles "done" class on <li> element
 */

const $liEl = $('li');
$liEl.click(function(e) {
  $(this).toggleClass('done');
});

/**
 * Delete element when delete link clicked
 */

 const $deleteLi = $('.delete');
 $deleteLi.click(function(e) {
   $(this)[0].parentElement.remove();
 });

/**
 * Adds new list item to <ul>
 */
const addListItem = function(e) {
  e.preventDefault();
  const text = $('input').val();

  // rest here...
  
};

// add listener for add
