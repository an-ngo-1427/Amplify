from .db import db, environment, SCHEMA,add_prefix_for_prod
from datetime import datetime
from .playlist import playlist_songs

class Song(db.Model):
    __tablename__ = 'songs'

    if environment == "production":
        __table_args__ = {'schema' : SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    song_url = db.Column(db.String(255), nullable=False)
    image_url = db.Column(db.String(255))
    created_at = db.Column(db.DateTime, default=datetime.now)
    updated_at = db.Column(db.DateTime, default=datetime.now, onupdate=datetime.now)
    album_id = db.Column(db.Integer,db.ForeignKey(add_prefix_for_prod('albums.id')))

    user = db.relationship("User", back_populates="user_songs")

    user_likes = db.relationship('User', secondary='likes', back_populates='liked_songs')
    album = db.relationship("Album", back_populates="songs")
    playlists = db.relationship('Playlist', secondary='playlist_songs', back_populates='songs')

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'user_id': self.user_id,
            'song_url': self.song_url,
            'image_url': self.image_url,
            'likes': len(self.user_likes),
            'user_likes': [user.id for user in self.user_likes],
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'artist':self.user.to_dict(),
            'album_id':self.album_id,
        }
