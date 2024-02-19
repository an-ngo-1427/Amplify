from app.models import db, environment, SCHEMA, Song
from sqlalchemy.sql import text

def seed_songs():
    song1 = Song(
        title = 'Song', user_id = '1', song_url = 'song.com', image_url = 'image.jpg'
    )

    db.session.add(song1)
    db.session.commit()

def undo_songs():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.songs RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM songs"))

    db.session.commit()
