from .db import db

class Song(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255),nullable = False)
    user_id = db.Column(db.Integer,db.ForeignKey("users.id"))
    album_id = db.Column(db.Integer,db.ForeignKey('albums.id'))
    created_at = db.Column(db.Date)
    duration = db.Column(db.Float,nullable = False)
    likes = db.Column(db.BigInteger)
    image_url = db.Column(db.String(255))
