const source = $('#app-view').html();

const template = Handlebars.compile(source);

const testHTML = template({test: 'testing'});

$('.test').append(testHTML);

