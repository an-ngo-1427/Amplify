from .db import db, environment, SCHEMA,add_prefix_for_prod
from datetime import datetime

class Album(db.Model):
    __tablename__ = 'albums'

    if environment == "production":
        __table_args__ = {'schema' : SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    # song_id = db.Column(db.Integer, db.ForeignKey('songs.id'), nullable = False)
    title = db.Column(db.String(50), nullable=False, unique=True)
    image_url = db.Column(db.String(255))
    created_at = db.Column(db.DateTime, default=datetime.now)
    updated_at = db.Column(db.DateTime, default=datetime.now, onupdate=datetime.now)

    songs = db.relationship('Song', back_populates='album')
    user = db.relationship("User", back_populates="albums")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'title': self.title,
            'image_url': self.image_url,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'songs': [song.to_dict() for song in self.songs],
            'artist': self.user.to_dict()
        }
