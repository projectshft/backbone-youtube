# backbone-youtube

Problems I encountered:
  1. top navbar was overlapping pop-out nav
    -found css properties of bootstraps navbar class and found that position: relative was the problem.

Issues:
1. Backbone Router currently not in production or development
2. Mixed var with let & const. Can go back and fix

Structure:
AppModel:
  videos: VideoCollections
    VideoModel
  history: VideoCollections
    VideoModel
  playlists: PlaylistCollection
    PlaylistsModel
      playlist: VideoCollections
