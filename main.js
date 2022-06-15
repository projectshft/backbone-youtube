// Creating a New instance of Application Model, Application Model is creating a new instance of Video Collection, Video Collection is a collection of Video Models //
const applicationModel = new ApplicationModel();
// Creating a New instance of Application View //
const applicationView = new ApplicationView({ model: applicationModel });

// Youtube API Key:  AIzaSyBJ_kn8KJdIxc928Ml9RAwvDlThYNy6vDw
// HTTP Request URL: https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q={query}&type=video&videoEmbeddable=true&key={apiKey}//
// Embed <iframe width="560" height="315" src="https://www.youtube.com/embed/{videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> //
