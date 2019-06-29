//Separating api key and youtube api url from rest of program
//don't need to have a getter for api key - it's already built into api url

const SensitiveInfo = () => {

  const API_KEY = 'AIzaSyA5ua2d9-GqR3Gb0yrrJn7mQFJSjlW0UAA';

  const YT_API_URL_BASE = `https://www.googleapis.com/youtube/v3/search?maxResults=10&part=snippet&fields=items(id(videoId),snippet(title,description,thumbnails(default(url))))&type=video&key=${API_KEY}&q=`;

  const getAPIBaseUrl = () => YT_API_URL_BASE;

  return {
    getAPIBaseUrl
  }

};