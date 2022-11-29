$( document ).ready( function () {

    // Create a new <a> element containing the text "Buy Now!"
    // with an id of "cta" after the last <p>

    let $newA = $('<a id=cta>'); 
    $newA.text("Buy Now!");
    $('main').append($newA);


    // Access (read) the data-color attribute of the <img>,
    // log to the console

    const $img = $('img');
    console.log(`The data-color attribute of the <img>: ${$img.data('color')}`);


    // Update the third <li> item ("Turbocharged"),
    // set the class name to "highlight"

    const thirdLi = $('li:nth-child(3)');
    thirdLi.addClass('highlight');


    // Remove (delete) the last paragraph
    // (starts with "Available for purchase now…")

    $('p').remove();

    
    // Create a listener on the "Buy Now!" link that responds to a click event.
    // When clicked, the the "Buy Now!" link should be removed
    // and replaced with text that says "Added to cart"

    $newA.click(function(e) {
        let $this = $(this);
        $this.text('Added to cart');
    });

});
