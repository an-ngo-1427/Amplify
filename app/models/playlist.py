from .db import db, environment, SCHEMA,add_prefix_for_prod
from datetime import datetime
import json

playlist_songs = db.Table(
    'playlist_songs',
    db.Column('song_id', db.Integer, db.ForeignKey(add_prefix_for_prod('songs.id'))),
    db.Column('playlist_id', db.Integer, db.ForeignKey(add_prefix_for_prod('playlists.id'))),
)

if environment == "production":
    playlist_songs.schema = SCHEMA

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
    user_id = db.Column(db.Integer,db.ForeignKey(add_prefix_for_prod('users.id')),nullable=False)


    songs = db.relationship('Song', secondary = 'playlist_songs', back_populates='playlists')
    user = db.relationship("User", back_populates="playlists")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'title': self.title,
            'description': self.description,
            'image_url': self.image_url,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'songs': [song.to_dict() for song in self.songs]
        }
