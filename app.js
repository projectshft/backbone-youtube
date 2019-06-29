/**
 * Youtube Backbone
 * Author: Daniel Posse
 */

var appModel = new AppModel();

//create appview

//initial fetch so we don't have an empty page on first load
appModel.get('videos').fetch({ reset: true });