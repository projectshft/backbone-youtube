let appModel = new AppModel();

//test data
// appModel.get('videos').add([
// 	{
// 		"id": "Yy29uRKpzhY",
// 		"title": "Pros and Cons of Xamarin Development",
// 		"description": "The good and the bad of Xamarin development in a nutshell. More on Xamarin advantages and disadvantages: ...",
// 		"thumbnails": "https://i.ytimg.com/vi/Yy29uRKpzhY/default.jpg",
// 	},
// 	{
// 		"id": "Tm2P-hKqlzw",
// 		"title": "Is Xamarin Forms Any Good?",
// 		"description": "In the biggest turning point of my life so far, find out why I gave up earning 4 figures a week, to earning nothing at all, because it felt right. Support me in my ...",
// 		"thumbnails":"https://i.ytimg.com/vi/Tm2P-hKqlzw/default.jpg",
// 	},
// 	{
// 		"id": "0jCVQ7JaNws",
// 		"title": "02 Beautiful User Interface in Xamarin Forms - Weather App",
// 		"description": "Learn how to design awesome weather app in Xamarin Forms. Source Code: https://github.com/devcrux/WeatherApp Download Our App Here: ...",
// 		"thumbnails":"https://i.ytimg.com/vi/0jCVQ7JaNws/default.jpg",
// 	},
// 	{
// 		"id": "4m7msadL5iA",
// 		"title": "Choosing the best mobile app framework",
// 		"description": "Choosing a mobile app framework can be overwhelming; there are dozens available on the market to evaluate. From native frameworks written in Swift, ObjC, ...",
// 		"thumbnails":"https://i.ytimg.com/vi/4m7msadL5iA/default.jpg",
// 	},
// 	{
// 		"id": "93ZU6j59wL4",
// 		"title": "Xamarin Forms Tutorial: Build Native Mobile Apps with C# | Mosh",
// 		"description": "Get the COMPLETE course (70% OFF - LIMITED TIME): http://bit.ly/2ITWcyL Want to learn Xamarin Forms from scratch in a fun, step-by-step and pragmatic way?",
// 		"thumbnails": "https://i.ytimg.com/vi/93ZU6j59wL4/default.jpg",
// 	},

// ]);


let appView = new AppView({ model: appModel });

appModel.get('videos').fetch({ reset: true });

//API key
//AIzaSyDszqXVIWTFfliJkuimJHDCj2uTcJi6Yn0
