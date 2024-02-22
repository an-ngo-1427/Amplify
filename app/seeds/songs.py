from app.models import db, environment, SCHEMA, Song
from sqlalchemy.sql import text

def seed_songs():
    song1 = Song(
        title = 'all-american bitch', user_id = 1, song_url = 'song.com', image_url = 'https://upload.wikimedia.org/wikipedia/en/0/03/Olivia_Rodrigo_-_Guts.png', album_id = 1
    )
    song2 = Song(
        title = 'bad idea right?', user_id = 1, song_url = 'song2.com', image_url = 'https://upload.wikimedia.org/wikipedia/en/0/03/Olivia_Rodrigo_-_Guts.png', album_id = 1
    )
    song3 = Song(
        title = 'vampire', user_id = 1, song_url = 'song3.com', image_url = 'https://upload.wikimedia.org/wikipedia/en/0/03/Olivia_Rodrigo_-_Guts.png', album_id = 1
    )
    song4 = Song(
        title = 'lacy', user_id = 1, song_url = 'song4.com', image_url = 'https://upload.wikimedia.org/wikipedia/en/0/03/Olivia_Rodrigo_-_Guts.png', album_id = 1
    )
    song5 = Song(
        title = 'ballad of a homeschooled girl', user_id = 1, song_url = 'song5.com', image_url = 'https://upload.wikimedia.org/wikipedia/en/0/03/Olivia_Rodrigo_-_Guts.png', album_id = 1
    )
    song6 = Song(
        title = 'making the bed', user_id = 1, song_url = 'song6.com', image_url = 'https://upload.wikimedia.org/wikipedia/en/0/03/Olivia_Rodrigo_-_Guts.png', album_id = 1
    )
    song7 = Song(
        title = 'logical', user_id = 1, song_url = 'song7.com', image_url = 'https://upload.wikimedia.org/wikipedia/en/0/03/Olivia_Rodrigo_-_Guts.png', album_id = 1
    )
    song8 = Song(
        title = 'get him back!', user_id = 1, song_url = 'song8.com', image_url = 'https://upload.wikimedia.org/wikipedia/en/0/03/Olivia_Rodrigo_-_Guts.png', album_id = 1
    )
    song9 = Song(
        title = 'love is embarrassing', user_id = 1, song_url = 'song8.com', image_url = 'https://upload.wikimedia.org/wikipedia/en/0/03/Olivia_Rodrigo_-_Guts.png', album_id = 1
    )
    song10 = Song(
        title = 'the grudge', user_id = 1, song_url = 'song8.com', image_url = 'https://upload.wikimedia.org/wikipedia/en/0/03/Olivia_Rodrigo_-_Guts.png', album_id = 1
    )
    song11 = Song(
        title = "pretty isn't pretty", user_id = 1, song_url = 'song8.com', image_url = 'https://upload.wikimedia.org/wikipedia/en/0/03/Olivia_Rodrigo_-_Guts.png', album_id = 1
    )
    song12 = Song(
        title = 'teenage dream', user_id = 1, song_url = 'song8.com', image_url = 'https://upload.wikimedia.org/wikipedia/en/0/03/Olivia_Rodrigo_-_Guts.png', album_id = 1
    )

    db.session.add_all([song1,song2,song3,song4,song5,song6,song7,song8,song9,song10,song11])
    db.session.commit()

def undo_songs():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.songs RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM songs"))

    db.session.commit()
