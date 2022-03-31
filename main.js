let appModel = new AppModel();


// appModel.get('videos').add({id: 1, video_url: 'https://www.youtube.com/embed/7aDMx01Ly_Y', title: "Jimmy Carr & Jordan Peterson', description: 'Jimmy Carr is an award-winning comedian, author, and TV host. Carr recently came under fire for the career-enders subsection in His Dark Material, a Netflix special that’s deemed “deeply offensive” or “faithful to its title,” depending on who you ask. Carr’s latest book, Before & Laughter, "});
// appModel.get('videos').add({id: 2, video_url: 'https://www.youtube.com/embed/X06nitJY2rs', title: 'Robbie Williams Soul Transmission', description: 'Robbie Williams sings Soul Transmission'});
// appModel.get('videos').add({id: 3, video_url: 'https://www.youtube.com/embed/5_sfnQDr1-o', title: 'Baby Monkey on a Pig', description: 'A baby monkey rides backwards on a pig'});

let appView = new AppView({model: appModel});

appModel.get('videos').fetch({reset: true});