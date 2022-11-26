$( document ).ready( function () {

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
      e.stopPropagation();

      /** {EXTRA CREDIT} 
      Instead of remove() method, used fadeOut() method.
        $(this).parent().remove();
      */
      $(this).parent().fadeOut(750, function() {
        $(this).remove();
      });   
  });  

  /**
   * Adds new list item to <ul>
   */
  const addListItem = function(e) {
    e.preventDefault();
    const text = $('input').val();
    console.log(text)

    /** Created <li> element for newly added item */
    const $newLi = $('<li>');
    const $newSpan = $('<span>');
    $newSpan.text(`${text}`);
    $newLi.append($newSpan);
    const $newA = $('<a class="delete">');
    $newA.text('Delete');
    $newLi.append($newA);
    $('.today-list').append($newLi);

    /** Add event listeners */
    $newLi.click(function(e) {
      $(this).toggleClass('done');
    });

    $newA.click(function(e) {
      e.stopPropagation();
      $(this).parent().fadeOut(750, function() {
        $(this).remove();
      });   
    });

    /** CLear input field */
    $('input').val('');
  };

  // add listener for add
  $('.add-item').click(function(e) {
    addListItem(e);
  });

});