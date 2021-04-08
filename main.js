
var template = $('#video-template').html();
var context = { "title" : "test video title", "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."};
var templateScript = Handlebars.compile(template);
var html = templateScript(context);
$('.video-area').html(html);



var templateTwo = $('#sidebar-template').html();
var contextTwo = { "test" : "xyz"};
var templateScript = Handlebars.compile(templateTwo);
var htmlTwo = templateScript(contextTwo);
$('.sidebar-area').html(htmlTwo);