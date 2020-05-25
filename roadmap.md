Website layout========================================================================================================================

__Search bar at the top of the page

__Two-pane website view:

  __Left pane:

      __Main video div

      __Video title & description div

  __Right pane:

      __4 decending divs of videos


Functionality=========================================================================================================================

__A user should be able to search something in the search bar

    __get a list of videos back

    __one showing up in the main screen.

__When a user clicks a video in the list on the right pane, the main video should change to that video.

__Each time a user clicks a different video, the title and description beneath the main video should update as well.

__When the user first loads the page, there should be a default search with videos loaded so the page is not blank.



API KEY================================================================================================================================

AIzaSyDFf_6NTONo5rmGPHmJGMnpLqkXzS8tm7g


Default page view shows top 5 most popular videos. Most popular video will show in the main window and the others will show in the search pane.
https://www.googleapis.com/youtube/v3/videos?chart=mostPopular&maxResults=5&regionCode=US&key=AIzaSyDFf_6NTONo5rmGPHmJGMnpLqkXzS8tm7g

Example search string with 5 max results. "&q=" signifies the search query.
https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q={{INSERT-SEARCH-STRING-HERE}}&key=[YOUR_API_KEY]


Requirements===========================================================================================================================

__Use Backbone!


__Extension Option 1===================================================================================================================
  Implement infinite scrolling on the side-bar videos so that as the user scrolls to the bottom of the videos,
  the next set of videos from the search loads.

__Extension Option 2===================================================================================================================
  Use the Backbone Router and update the URL according to the video that's playing (with the video's id). On the reverse,
  allow a user to pass in a video's id into the URL and make a request to the YouTube API to load that video.

__Extension Option 3===================================================================================================================
  Utilize local storage to store all viewed videos and display the fact that they have been watched previously in any
  searches containing those videos.

__Extension Option 4===================================================================================================================
  Auto-play the next video search result after the main video finishes playing (bonus points if you do a countdown to the next video).

__Extension Option 5 (Super Secret)=====================================================================================================
  Build an extension to allow for playlist creation. Let users add and remove videos from a playlist and all videos in a playlist should
  autoplay in the order they appear in the playlist. Note: you probably need to make a separate view and model to manage the playlist.
