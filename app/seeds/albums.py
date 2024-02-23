from app.models import db, environment, SCHEMA, Album
from sqlalchemy.sql import text

def seed_albums():
    album1 = Album(
        title = 'GUTS' , user_id = 1 , image_url='https://upload.wikimedia.org/wikipedia/en/0/03/Olivia_Rodrigo_-_Guts.png'
    )
    album2 = Album(
        title = 'Renaissance Boy' , user_id = 2 , image_url='https://t2.genius.com/unsafe/600x600/https%3A%2F%2Fimages.genius.com%2F798a789395d38559cd1636a3db5f2612.1000x1000x1.png'
    )
    album3 = Album(
        title = 'Scopion' , user_id = 3 , image_url='https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg'
    )
    album4 = Album(
        title = "1989 (Taylor's Version)" , user_id = 4 , image_url='https://upload.wikimedia.org/wikipedia/en/d/d5/Taylor_Swift_-_1989_%28Taylor%27s_Version%29.png?20231015132135'
    )
    album5 = Album(
        title = 'The Winning' , user_id = 5 , image_url='https://upload.wikimedia.org/wikipedia/en/a/ae/IU_-_The_Winning.png'
    )



    db.session.add_all([album1,album2,album3,album4,album5])
    db.session.commit()

def undo_albums():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.albums RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM albums"))

    db.session.commit()
