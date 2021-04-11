var appModel = new AppModel();

var appView = new AppView({model : appModel});

appModel.get('videos').fetch({ reset : true });




// ---------------------hard code for testing-------------
// appModel.get('videos').add([
//   {
//     channel: "CBS Sunday Morning",
//     id: "J6Yy9eFTPak",
//     thumbnailUrl: "https://i.ytimg.com/vi/J6Yy9eFTPak/mqdefault.jpg",
//     title: "Barack Obama speaks out on politics, life in the White House, and Donald Trump",
//     description: 'In his first television interview since the election of Joe Biden as the 46th President, former President Barack Obama sits down wi',
//     mainPlayer: true
//   },
//   {
//     channel: "Jimmy Kimmel Live",
//     id: "qUed6Ug4Cgo",
//     thumbnailUrl: "https://i.ytimg.com/vi/qUed6Ug4Cgo/mqdefault.jpg",
//     title: "President Obama is Scared of Sasha and Roasts Donald Trump",
//     description: 'President Obama talks about his new book “A Promised Land,” selling more books on the first day than Michelle did, being scared of',
//     mainPlayer: false
//   },
//   {
//     channel: "Apple TV",
//     id: "51uk5SFF5s8",
//     thumbnailUrl: "https://i.ytimg.com/vi/51uk5SFF5s8/mqdefault.jpg",
//     title: "The Oprah Conversation — Barack Obama Teaser | Apple TV+",
//     description: 'In 2008, Barack Obama made history by becoming the first Black President of the United States. After spending eight years in the ova',
//     mainPlayer: false
//   },
//   {
//     channel: "YouTube Originals",
//     id: "rI7GRUhWtuI",
//     thumbnailUrl: "https://i.ytimg.com/vi/rI7GRUhWtuI/mqdefault.jpg",
//     title: "Barack Obama on Family, Music, Science and Good Leadership | BookTube",
//     description: 'President Barack Obama joins our close community of readers to reflect on the experiences documented in his new memoir, A Promised ',
//     mainPlayer: false
//   },
//   {
//     channel: "Delish",
//     id: "H-iQEtqFTCQ",
//     thumbnailUrl: "https://i.ytimg.com/vi/mAFv55o47ok/mqdefault.jpg",
//     title: "Former White House Chef Reveals Michelle Obama&#39;s Fave Cake &amp; The First Lady&#39;s Most Inspiring Moments",
//     description: "Bill Yosses was the personal pastry chef to President George W. Bush, First Lady Laura Bush, President Barack Obama, First Lady Mich",
//     mainPlayer: false
//   }
// ])

// appView.renderPlayer();
// appView.renderThumbnail();


//youTube API Key AIzaSyDSTlxlIl5f7wwXbpkN2Zo9R5wS_1Jb940

//sample API request
//https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=SEARCH_TERM_HERE&type=video&videoEmbeddable=true&key=YOUR_API_KEY_HERE