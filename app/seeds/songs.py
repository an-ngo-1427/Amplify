from app.models import db, environment, SCHEMA, Song
from sqlalchemy.sql import text

def seed_songs():
    song1 = Song(
        title = 'all-american bitch', user_id = 1, song_url = 'song.com', image_url = 'https://upload.wikimedia.org/wikipedia/en/0/03/Olivia_Rodrigo_-_Guts.png', album_id = 1
    )
    song2 = Song(
        title = 'bad idea right?', user_id = 1, song_url = 'song2.com', image_url = 'https://upload.wikimedia.org/wikipedia/en/0/03/Olivia_Rodrigo_-_Guts.png', album_id = 1
    )
    song3 = Song(
        title = 'vampire', user_id = 1, song_url = 'song3.com', image_url = 'https://upload.wikimedia.org/wikipedia/en/0/03/Olivia_Rodrigo_-_Guts.png', album_id = 1
    )
    song4 = Song(
        title = 'lacy', user_id = 1, song_url = 'song4.com', image_url = 'https://upload.wikimedia.org/wikipedia/en/0/03/Olivia_Rodrigo_-_Guts.png', album_id = 1
    )
    song5 = Song(
        title = 'ballad of a homeschooled girl', user_id = 1, song_url = 'song5.com', image_url = 'https://upload.wikimedia.org/wikipedia/en/0/03/Olivia_Rodrigo_-_Guts.png', album_id = 1
    )
    song6 = Song(
        title = 'making the bed', user_id = 1, song_url = 'song6.com', image_url = 'https://upload.wikimedia.org/wikipedia/en/0/03/Olivia_Rodrigo_-_Guts.png', album_id = 1
    )
    song7 = Song(
        title = 'logical', user_id = 1, song_url = 'song7.com', image_url = 'https://upload.wikimedia.org/wikipedia/en/0/03/Olivia_Rodrigo_-_Guts.png', album_id = 1
    )
    song8 = Song(
        title = 'get him back!', user_id = 1, song_url = 'song8.com', image_url = 'https://upload.wikimedia.org/wikipedia/en/0/03/Olivia_Rodrigo_-_Guts.png', album_id = 1
    )
    song9 = Song(
        title = 'love is embarrassing', user_id = 1, song_url = 'song9.com', image_url = 'https://upload.wikimedia.org/wikipedia/en/0/03/Olivia_Rodrigo_-_Guts.png', album_id = 1
    )
    song10 = Song(
        title = 'the grudge', user_id = 1, song_url = 'song10.com', image_url = 'https://upload.wikimedia.org/wikipedia/en/0/03/Olivia_Rodrigo_-_Guts.png', album_id = 1
    )
    song11 = Song(
        title = "pretty isn't pretty", user_id = 1, song_url = 'song11.com', image_url = 'https://upload.wikimedia.org/wikipedia/en/0/03/Olivia_Rodrigo_-_Guts.png', album_id = 1
    )
    song12 = Song(
        title = 'Intro', user_id = 2, song_url = 'song12.com', image_url = 'https://t2.genius.com/unsafe/600x600/https%3A%2F%2Fimages.genius.com%2F798a789395d38559cd1636a3db5f2612.1000x1000x1.png', album_id = 2
    )
    song13 = Song(
        title = 'Redeye', user_id = 2, song_url = 'song13.com', image_url = 'https://t2.genius.com/unsafe/600x600/https%3A%2F%2Fimages.genius.com%2F798a789395d38559cd1636a3db5f2612.1000x1000x1.png', album_id = 2
    )
    song14 = Song(
        title = 'Boy Hachi', user_id = 2, song_url = 'song14.com', image_url = 'https://t2.genius.com/unsafe/600x600/https%3A%2F%2Fimages.genius.com%2F798a789395d38559cd1636a3db5f2612.1000x1000x1.png', album_id = 2
    )
    song15 = Song(
        title = 'Let Go', user_id = 2, song_url = 'song15.com', image_url = 'https://t2.genius.com/unsafe/600x600/https%3A%2F%2Fimages.genius.com%2F798a789395d38559cd1636a3db5f2612.1000x1000x1.png', album_id = 2
    )
    song16 = Song(
        title = 'Sly', user_id = 2, song_url = 'song16.com', image_url = 'https://t2.genius.com/unsafe/600x600/https%3A%2F%2Fimages.genius.com%2F798a789395d38559cd1636a3db5f2612.1000x1000x1.png', album_id = 2
    )
    song17 = Song(
        title = 'Wonder', user_id = 2, song_url = 'song17.com', image_url = 'https://t2.genius.com/unsafe/600x600/https%3A%2F%2Fimages.genius.com%2F798a789395d38559cd1636a3db5f2612.1000x1000x1.png', album_id = 2
    )
    song18 = Song(
        title = 'GPS', user_id = 2, song_url = 'song18.com', image_url = 'https://t2.genius.com/unsafe/600x600/https%3A%2F%2Fimages.genius.com%2F798a789395d38559cd1636a3db5f2612.1000x1000x1.png', album_id = 2
    )
    song19 = Song(
        title = 'Sinner', user_id = 2, song_url = 'song19.com', image_url = 'https://t2.genius.com/unsafe/600x600/https%3A%2F%2Fimages.genius.com%2F798a789395d38559cd1636a3db5f2612.1000x1000x1.png', album_id = 2
    )
    song20 = Song(
        title = 'Everywhere', user_id = 2, song_url = 'song20.com', image_url = 'https://t2.genius.com/unsafe/600x600/https%3A%2F%2Fimages.genius.com%2F798a789395d38559cd1636a3db5f2612.1000x1000x1.png', album_id = 2
    )
    song21 = Song(
        title='Room 332', user_id=2, song_url='song21.com', image_url='https://t2.genius.com/unsafe/600x600/https%3A%2F%2Fimages.genius.com%2F798a789395d38559cd1636a3db5f2612.1000x1000x1.png', album_id=2
    )
    song22 = Song(
        title='Everytime', user_id=2, song_url='song22.com', image_url='https://t2.genius.com/unsafe/600x600/https%3A%2F%2Fimages.genius.com%2F798a789395d38559cd1636a3db5f2612.1000x1000x1.png', album_id=2
    )
    song23 = Song(
        title='Survival', user_id=3, song_url='song23.com', image_url='https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg', album_id=3
    )
    song24 = Song(
        title='Nonstop', user_id=3, song_url='song24.com', image_url='https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg', album_id=3
    )
    song25 = Song(
        title='Elevate', user_id=3, song_url='song25.com', image_url='https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg', album_id=3
    )
    song26 = Song(
        title='Emotionless', user_id=3, song_url='song26.com', image_url='https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg', album_id=3
    )
    song27 = Song(
        title="God's Plan", user_id=3, song_url='song27.com', image_url='https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg', album_id=3
    )
    song28 = Song(
        title="I'm Upset", user_id=3, song_url='song28.com', image_url='https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg', album_id=3
    )
    song29 = Song(
        title='8 Out Of 10', user_id=3, song_url='song29.com', image_url='https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg', album_id=3
    )
    song30 = Song(
        title='Mob Ties', user_id=3, song_url='song30.com', image_url='https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg', album_id=3
    )
    song31 = Song(
        title="Can't Take A Joke", user_id=3, song_url='song31.com', image_url='https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg', album_id=3
    )
    song32 = Song(
        title="Sandra's Rose", user_id=3, song_url='song32.com', image_url='https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg', album_id=3
    )
    song33 = Song(
        title='Talk Up', user_id=3, song_url='song33.com', image_url='https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg', album_id=3
    )
    song34 = Song(
        title='Is There More', user_id=3, song_url='song34.com', image_url='https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg', album_id=3
    )
    song35 = Song(
        title='Welcome To New York', user_id=4, song_url='song35.com', image_url='https://upload.wikimedia.org/wikipedia/en/d/d5/Taylor_Swift_-_1989_%28Taylor%27s_Version%29.png?20231015132135', album_id=4
    )
    song36 = Song(
        title='Blank Space', user_id=4, song_url='song36.com', image_url='https://upload.wikimedia.org/wikipedia/en/d/d5/Taylor_Swift_-_1989_%28Taylor%27s_Version%29.png?20231015132135', album_id=4
    )
    song37 = Song(
        title='Style', user_id=4, song_url='song37.com', image_url='https://upload.wikimedia.org/wikipedia/en/d/d5/Taylor_Swift_-_1989_%28Taylor%27s_Version%29.png?20231015132135', album_id=4
    )
    song38 = Song(
        title='Out Of The Woods', user_id=4, song_url='song38.com', image_url='https://upload.wikimedia.org/wikipedia/en/d/d5/Taylor_Swift_-_1989_%28Taylor%27s_Version%29.png?20231015132135', album_id=4
    )
    song39 = Song(
        title='All You Had To Do Was Stay', user_id=4, song_url='song39.com', image_url='https://upload.wikimedia.org/wikipedia/en/d/d5/Taylor_Swift_-_1989_%28Taylor%27s_Version%29.png?20231015132135', album_id=4
    )
    song40 = Song(
        title='Shake It Off', user_id=4, song_url='song40.com', image_url='https://upload.wikimedia.org/wikipedia/en/d/d5/Taylor_Swift_-_1989_%28Taylor%27s_Version%29.png?20231015132135', album_id=4
    )
    song41 = Song(
        title='I Wish You', user_id=4, song_url='song41.com', image_url='https://upload.wikimedia.org/wikipedia/en/d/d5/Taylor_Swift_-_1989_%28Taylor%27s_Version%29.png?20231015132135', album_id=4
    )
    song42 = Song(
        title='Bad Blood', user_id=4, song_url='song42.com', image_url='https://upload.wikimedia.org/wikipedia/en/d/d5/Taylor_Swift_-_1989_%28Taylor%27s_Version%29.png?20231015132135', album_id=4
    )
    song43 = Song(
        title='Wildest Dream', user_id=4, song_url='song43.com', image_url='https://upload.wikimedia.org/wikipedia/en/d/d5/Taylor_Swift_-_1989_%28Taylor%27s_Version%29.png?20231015132135', album_id=4
    )
    song44 = Song(
        title = 'How You Get The Girl', user_id = 4, song_url = 'song44.com', image_url = 'https://upload.wikimedia.org/wikipedia/en/d/d5/Taylor_Swift_-_1989_%28Taylor%27s_Version%29.png?20231015132135', album_id = 4
    )
    song45 = Song(
        title = 'This Love', user_id = 4, song_url = 'song45.com', image_url = 'https://upload.wikimedia.org/wikipedia/en/d/d5/Taylor_Swift_-_1989_%28Taylor%27s_Version%29.png?20231015132135', album_id = 4
    )
    song46 = Song(
        title = 'I Know Places', user_id = 4, song_url = 'song46.com', image_url = 'https://upload.wikimedia.org/wikipedia/en/d/d5/Taylor_Swift_-_1989_%28Taylor%27s_Version%29.png?20231015132135', album_id = 4
    )
    song47 = Song(
        title = 'Shopper', user_id = 5, song_url = 'song47.com', image_url = 'https://upload.wikimedia.org/wikipedia/en/a/ae/IU_-_The_Winning.png', album_id = 5
    )
    song48 = Song(
        title = 'Holssi', user_id = 5, song_url = 'song48.com', image_url = 'https://upload.wikimedia.org/wikipedia/en/a/ae/IU_-_The_Winning.png', album_id = 5
    )
    song49 = Song(
        title = 'Shh..', user_id = 5, song_url = 'song49.com', image_url = 'https://upload.wikimedia.org/wikipedia/en/a/ae/IU_-_The_Winning.png', album_id = 5
    )
    song50 = Song(
        title = 'Love wins all', user_id = 5, song_url = 'song50.com', image_url = 'https://upload.wikimedia.org/wikipedia/en/a/ae/IU_-_The_Winning.png', album_id = 5
    )
    song51 = Song(
        title = 'I stan U', user_id = 5, song_url = 'song51.com', image_url = 'https://upload.wikimedia.org/wikipedia/en/a/ae/IU_-_The_Winning.png', album_id = 5
    )


    db.session.add_all([
        song1, song2, song3, song4, song5, song6, song7, song8, song9, song10,
        song11, song12, song13, song14, song15, song16, song17, song18, song19,
        song20, song21, song22, song23, song24, song25, song26, song27, song28,
        song29, song30, song31, song32, song33, song34, song35, song36, song37,
        song38, song39, song40, song41, song42, song43, song44, song45, song46,
        song47, song48, song49, song50, song51
    ])
    db.session.commit()

def undo_songs():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.songs RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM songs"))

    db.session.commit()
