from .db import db, environment, SCHEMA, add_prefix_for_prod

likes = db.Table(
    'likes',
    db.Column('user_id', db.Integer, db.ForeignKey(add_prefix_for_prod('users.id'))),
    db.Column('song_id', db.Integer, db.ForeignKey(add_prefix_for_prod('songs.id'))),
)

if environment == "production":
    likes.schema = SCHEMA