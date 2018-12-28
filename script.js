var appModel = new AppModel();

// appModel.get('videoList').add([
//    
  
// var appView = new AppView({
//     model: appModel
// });

//fetch collection when page loads
appModel.get('videoList').fetch();
// ({reset: true});

// After the API loads, call a function to enable the search box.
function handleAPILoaded() {
    $('#search-button').attr('disabled', false);
}

// Search for a specified string.
function search() {
    var q = $('#query').val();
    var request = gapi.client.youtube.search.list({
        q: q,
        part: 'snippet'
    });

    request.execute(function (response) {
        var str = JSON.stringify(response.result);
        $('#search-container').html('<pre>' + str + '</pre>');
    });
}
