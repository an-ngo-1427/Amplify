from app.models import db, environment, SCHEMA, Album
from sqlalchemy.sql import text

def seed_albums():
    album1 = Album(
        title = 'Album1' , user_id = 1 , image_url='album1.jpg'
    )
    album2 = Album(
        title = 'Album2' , user_id = 2 , image_url='album1.jpg'
    )
    album3 = Album(
        title = 'Album3' , user_id = 3 , image_url='album1.jpg'
    )
    album4 = Album(
        title = 'Album4' , user_id = 4 , image_url='album1.jpg'
    )



    db.session.add_all([album1,album2,album3,album4])
    db.session.commit()

def undo_songs():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.songs RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM songs"))

    db.session.commit()
