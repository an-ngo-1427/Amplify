from app.models import db, environment, SCHEMA, Song
from sqlalchemy.sql import text

def seed_songs():
    song1 = Song(
        title = 'Song', user_id = 1, song_url = 'song.com', image_url = 'image1.jpg', album_id = 1
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
    song6 = Song(
        title = 'Song6', user_id = 3, song_url = 'song6.com', image_url = 'image6.jpg'
    )
    song7 = Song(
        title = 'Song7', user_id = 4, song_url = 'song7.com', image_url = 'image7.jpg'
    )
    song8 = Song(
        title = 'Song8', user_id = 4, song_url = 'song8.com', image_url = 'image8.jpg'
    )

    db.session.add_all([song1,song2,song3,song4,song5,song6,song7,song8])
    db.session.commit()

def undo_songs():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.songs RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM songs"))

    db.session.commit()
