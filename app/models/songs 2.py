from .db import db, environment, SCHEMA
from datetime import datetime

class Songs(db.Model):
    __tablename__ = 'songs'

    if environment == "production":
        __table_args__ = {'schema' : SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    album_id = db.Column(db.Integer, db.ForeignKey('album.id'))
    song_url = db.Column(db.String(255), nullable=False)
    image_url = db.Column(db.String(255))
    created_at = db.Column(db.DateTime, default=datetime.now)
    updated_at = db.Column(db.DateTime, default=datetime.now, onupdate=datetime.now)

    user = db.relationship("User", back_populates="songs")
    album = db.relationship("Album", back_populates="songs")

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'user_id': self.user_id,
            'album_id': self.album_id,
            'song_url': self.song_url,
            'image_url': self.image_url,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
