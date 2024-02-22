from app.models import db, environment, SCHEMA
from app.models.playlist import Playlist, playlist_songs
from app.models.song import Song
from sqlalchemy.sql import text

def seed_playlist_songs():
    playlist_song_data = [
        {'song_id': 3, 'playlist_id': 1},
        {'song_id': 27, 'playlist_id': 1},
        {'song_id': 18, 'playlist_id': 1},
        {'song_id': 43, 'playlist_id': 1},
        {'song_id': 28, 'playlist_id': 2},
        {'song_id': 29, 'playlist_id': 2},
        {'song_id': 30, 'playlist_id': 2},
        {'song_id': 40, 'playlist_id': 2},
        {'song_id': 45, 'playlist_id': 3},
        {'song_id': 13, 'playlist_id': 3},
        {'song_id': 4, 'playlist_id': 3},
        {'song_id': 7, 'playlist_id': 3},
    ]
    db.session.execute(playlist_songs.insert(), playlist_song_data)
    db.session.commit()


def undo_playlist_songs():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.playlist_songs RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM playlist_songs"))

    db.session.commit()