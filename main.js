const applicationModel = new ApplicationModel();
const applicationView = new ApplicationView({ model: applicationModel });

applicationModel.get('videos').fetch({ reset: true });
