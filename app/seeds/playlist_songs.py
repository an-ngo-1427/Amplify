from app.models import db, environment, SCHEMA
from app.models.playlist import Playlist, playlist_songs
from app.models.song import Song
from sqlalchemy.sql import text
from alembic import op

def seed_playlist_songs():
    op.bulk_insert(playlist_songs,
    [
        {'song_id':1, 'playlist_id':1 }
    ])

def undo_playlist_songs():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.playlist_songs RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM playlist_songs"))

    db.session.commit()