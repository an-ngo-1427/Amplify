from app.models import db, environment, SCHEMA, Playlist, Song
from sqlalchemy.sql import text

# song1 = Song(
#     title = 'Song1', user_id = 1, song_url = 'song.com', image_url = 'image1.jpg'
# )
# song2 = Song(
#     title = 'Song2', user_id = 1, song_url = 'song2.com', image_url = 'image2.jpg'
# )
# song3 = Song(
#     title = 'Song3', user_id = 2, song_url = 'song3.com', image_url = 'image3.jpg'
# )
# song4 = Song(
#     title = 'Song4', user_id = 2, song_url = 'song4.com', image_url = 'image4.jpg'
# )
# song5 = Song(
#     title = 'Song5', user_id = 3, song_url = 'song5.com', image_url = 'image5.jpg'
# )

# songs = [song1, song2, song3, song4, song5]

def seed_playlists():
    playlist1 = Playlist(
        title = "Today's Top Hits", 
        user_id = 1, 
        description = 'Dua Lipa is on top of the Hottest 50!', 
        image_url = 'https://pbs.twimg.com/profile_images/1681029895449907200/blTMiMOK_400x400.jpg', 
        # songs = songs
    )
    playlist2 = Playlist(
        title = 'PARTY TIME', 
        user_id = 2, 
        description = 'WOOOOOOO LETS GET WASTED!!!', 
        image_url = 'https://i.scdn.co/image/ab67616d00001e02cc4dcda2ed33a5071dfb77bb', 
        # songs = songs
    )
    playlist3 = Playlist(
        title = 'Songs to cry to while coding', 
        user_id = 3, 
        description = "print('cry')", 
        image_url = 'https://i.scdn.co/image/ab67706c0000da84aec1c9f63ca8c6a7a2873b6b', 
        # songs = songs
    )

    db.session.add(playlist1)
    db.session.add(playlist2)
    db.session.add(playlist3)
    db.session.commit()

def undo_playlists():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.playlists RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM playlists"))

    db.session.commit()
