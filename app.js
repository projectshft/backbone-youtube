/**
 * Youtube Backbone
 * Author: Daniel Posse
 */

//get apikey and api base url from sensitive info module
const sensitiveInfo = SensitiveInfo();

var appModel = new AppModel();

//create appview

//initial fetch so we don't have an empty page on first load
appModel.set('search', 'cute dog videos');
appModel.get('videos').fetch({ reset: true });