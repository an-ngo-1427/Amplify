from .db import db, environment, SCHEMA
from datetime import datetime

playlist_songs = db.Table(
    'playlist_songs',
    db.Model.metadata,
    db.Column('playlist_id', db.Integer, db.ForeignKey('playlists.id'), primary_key=True),
    db.Column('song_id', db.Integer, db.ForeignKey('songs.id'), primary_key=True)
)

class Playlist(db.Model):
    __tablename__ = 'playlists'

    if environment == "production":
        __table_args__ = {'schema' : SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50), nullable=False)
    description = db.Column(db.String(255))
    image_url = db.Column(db.String(255))
    created_at = db.Column(db.DateTime, default=datetime.now)
    updated_at = db.Column(db.DateTime, default=datetime.now, onupdate=datetime.now)

    songs = db.relationship('Playlist', secondary=playlist_songs, back_populates='playlists')
    user = db.relationship("User", back_populates="playlists")

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'image_url': self.image_url,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
