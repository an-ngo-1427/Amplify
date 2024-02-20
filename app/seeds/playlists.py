from app.models import db, environment, SCHEMA, Playlist, Song
from sqlalchemy.sql import text

song1 = Song(
    title = 'Song1', user_id = 1, song_url = 'song.com', image_url = 'image1.jpg'
)
song2 = Song(
    title = 'Song2', user_id = 1, song_url = 'song2.com', image_url = 'image2.jpg'
)
song3 = Song(
    title = 'Song3', user_id = 2, song_url = 'song3.com', image_url = 'image3.jpg'
)
song4 = Song(
    title = 'Song4', user_id = 2, song_url = 'song4.com', image_url = 'image4.jpg'
)
song5 = Song(
    title = 'Song5', user_id = 3, song_url = 'song5.com', image_url = 'image5.jpg'
)

songs = [song1, song2, song3, song4, song5]

def seed_playlists():
    playlist1 = Playlist(
        title = 'Playlist1', user_id = 1, description = 'Playlist1 Description', image_url = 'palylist_image.jpg', songs = songs
    )

    db.session.add(playlist1)
    db.session.commit()

def undo_playlists():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.playlists RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM playlists"))

    db.session.commit()
