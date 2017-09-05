// Hands-On: Manipulating the DOM using jQuery
$(document).ready(function () {
  manipulateDOM();
});

function manipulateDOM() {
  var h1Headers = $('h1');
  h1Headers.text('Hello World');
  
  var h3Headers = $('h3');
  h3Headers.css('color', '#37887D');
  h3Headers.first().css('text-decoration', 'line-through');
  
  var lastH3Headers = $('h3:last');
  lastH3Headers.css('background-color', '#53226A');
}

// Hands-On: Calling Web Services using jQuery
function makeRequests() {
    $.getJSON('http://httpbin.org/ip')
        .done(function(response) {
            alert(JSON.stringify(response));
            $('body > p').text(
                response.origin
            );
        });
}
