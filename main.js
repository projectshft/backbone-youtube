// turn our "template" into html
var source = $('#store-template').html();

// compile our template html using handlebars
var template = Handlebars.compile(source);

// fill our template with information
var newHTML = template({item: "bread", price: "3"});

// append our new html to the page
$('.items').append(newHTML);

var newHTML2 = template({item: "Cheese", price: "10"});

$('.items').append(newHTML2);

//2nd test
var source2 = $('#store-template-2').html();

// compile our template html using handlebars
var template2 = Handlebars.compile(source2);

// fill our template with information
var newHTML3 = template2({pizza: 'sausage'});

console.log(`new HTML 1 ${newHTML}`);
console.log(`new HTML 2 ${newHTML2}`);
console.log(`new HTML 3 ${newHTML3}`);

// append our new html to the page
$('.test-2').append(newHTML3);

