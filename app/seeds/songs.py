from app.models import db, environment, SCHEMA, Song
from sqlalchemy.sql import text

def seed_songs():
    song1 = Song(
        title = 'Get Going', user_id = 1, song_url = 'https://amplify-music.s3.us-west-2.amazonaws.com/Alex-Productions+-+Fresh++Rap+Racing+beat+_+Get+Going.mp3', image_url = 'https://upload.wikimedia.org/wikipedia/en/0/03/Olivia_Rodrigo_-_Guts.png', album_id = 1
    )
    song2 = Song(
        title = 'A moment', user_id = 1, song_url = 'https://amplify-music.s3.us-west-2.amazonaws.com/Blue+Dot+Sessions+-+A+moment.mp3', image_url = 'https://upload.wikimedia.org/wikipedia/en/0/03/Olivia_Rodrigo_-_Guts.png', album_id = 1
    )
    song3 = Song(
        title = 'Emergent', user_id = 1, song_url = "https://amplify-music.s3.us-west-2.amazonaws.com/Blue+Dot+Sessions+-+Emergent.mp3", image_url = 'https://upload.wikimedia.org/wikipedia/en/0/03/Olivia_Rodrigo_-_Guts.png', album_id = 1
    )
    song4 = Song(
        title = 'Dream GEnie', user_id = 1, song_url = 'https://amplify-music.s3.us-west-2.amazonaws.com/Blue+Dot+Sessions+-+Liquor+Files+-+Dream+Genie.mp3', image_url = 'https://upload.wikimedia.org/wikipedia/en/0/03/Olivia_Rodrigo_-_Guts.png', album_id = 1
    )
    song5 = Song(
        title = 'Pastel', user_id = 1, song_url = 'https://amplify-music.s3.us-west-2.amazonaws.com/Blue+Dot+Sessions+-+Liquor+Files+-+Pastel.mp3', image_url = 'https://upload.wikimedia.org/wikipedia/en/0/03/Olivia_Rodrigo_-_Guts.png', album_id = 1
    )
    song6 = Song(
        title = 'Spills 1', user_id = 1, song_url = 'https://amplify-music.s3.us-west-2.amazonaws.com/Blue+Dot+Sessions+-+Spills+(1).mp3', image_url = 'https://upload.wikimedia.org/wikipedia/en/0/03/Olivia_Rodrigo_-_Guts.png', album_id = 1
    )
    song7 = Song(
        title = 'Once a moment', user_id = 1, song_url = 'https://amplify-music.s3.us-west-2.amazonaws.com/Blue+Dot+Sessions+-+Stingray+-+Once+a+moment.mp3', image_url = 'https://upload.wikimedia.org/wikipedia/en/0/03/Olivia_Rodrigo_-_Guts.png', album_id = 1
    )
    song8 = Song(
        title = 'Trailing Comma', user_id = 1, song_url = 'https://amplify-music.s3.us-west-2.amazonaws.com/Blue+Dot+Sessions+-+Story+Four+-+Trailing+Comma.mp3', image_url = 'https://upload.wikimedia.org/wikipedia/en/0/03/Olivia_Rodrigo_-_Guts.png', album_id = 1
    )
    song9 = Song(
        title = 'The Nocturne Interlude', user_id = 1, song_url = 'https://amplify-music.s3.us-west-2.amazonaws.com/Blue+Dot+Sessions+-+The+Nocturne+-+Interlude.mp3', image_url = 'https://upload.wikimedia.org/wikipedia/en/0/03/Olivia_Rodrigo_-_Guts.png', album_id = 1
    )
    song10 = Song(
        title = 'The Statis', user_id = 1, song_url = 'https://amplify-music.s3.us-west-2.amazonaws.com/Blue+Dot+Sessions+-+The+Stasis.mp3', image_url = 'https://upload.wikimedia.org/wikipedia/en/0/03/Olivia_Rodrigo_-_Guts.png', album_id = 1
    )
    song11 = Song(
        title = "Uncertainty", user_id = 1, song_url = 'https://amplify-music.s3.us-west-2.amazonaws.com/Blue+Dot+Sessions+-+Uncertainty.mp3', image_url = 'https://upload.wikimedia.org/wikipedia/en/0/03/Olivia_Rodrigo_-_Guts.png', album_id = 1
    )
    song12 = Song(
        title = 'Indian Country', user_id = 2, song_url = 'https://amplify-music.s3.us-west-2.amazonaws.com/Bureaucratique+-+Indian+Country.mp3', image_url = 'https://t2.genius.com/unsafe/600x600/https%3A%2F%2Fimages.genius.com%2F798a789395d38559cd1636a3db5f2612.1000x1000x1.png', album_id = 2
    )
    song13 = Song(
        title = 'Au Loli Bois', user_id = 2, song_url = 'https://amplify-music.s3.us-west-2.amazonaws.com/Ergo+Phizmiz+-+Au+Joli+Bois.mp3', image_url = 'https://t2.genius.com/unsafe/600x600/https%3A%2F%2Fimages.genius.com%2F798a789395d38559cd1636a3db5f2612.1000x1000x1.png', album_id = 2
    )
    song14 = Song(
        title = 'Leave Off Hymen', user_id = 2, song_url = 'https://amplify-music.s3.us-west-2.amazonaws.com/Ergo+Phizmiz+-+Leave+Off+Hymen.mp3', image_url = 'https://t2.genius.com/unsafe/600x600/https%3A%2F%2Fimages.genius.com%2F798a789395d38559cd1636a3db5f2612.1000x1000x1.png', album_id = 2
    )
    song15 = Song(
        title = 'Earning Happiness', user_id = 2, song_url = 'https://amplify-music.s3.us-west-2.amazonaws.com/John+Bartmann+-+Earning+Happiness.mp3', image_url = 'https://t2.genius.com/unsafe/600x600/https%3A%2F%2Fimages.genius.com%2F798a789395d38559cd1636a3db5f2612.1000x1000x1.png', album_id = 2
    )
    song16 = Song(
        title = 'Happy Clappy', user_id = 2, song_url = 'https://amplify-music.s3.us-west-2.amazonaws.com/John+Bartmann+-+Happy+Clappy.mp3', image_url = 'https://t2.genius.com/unsafe/600x600/https%3A%2F%2Fimages.genius.com%2F798a789395d38559cd1636a3db5f2612.1000x1000x1.png', album_id = 2
    )
    song17 = Song(
        title = 'Tupac Lives', user_id = 2, song_url = 'https://amplify-music.s3.us-west-2.amazonaws.com/John+Bartmann+-+Tupac+Lives.mp3', image_url = 'https://t2.genius.com/unsafe/600x600/https%3A%2F%2Fimages.genius.com%2F798a789395d38559cd1636a3db5f2612.1000x1000x1.png', album_id = 2
    )
    song18 = Song(
        title = 'Intermission', user_id = 2, song_url = 'https://amplify-music.s3.us-west-2.amazonaws.com/johnny_ripper+-+intermission.mp3', image_url = 'https://t2.genius.com/unsafe/600x600/https%3A%2F%2Fimages.genius.com%2F798a789395d38559cd1636a3db5f2612.1000x1000x1.png', album_id = 2
    )
    song19 = Song(
        title = 'Free Funky Clavinet', user_id = 2, song_url = 'https://amplify-music.s3.us-west-2.amazonaws.com/Lobo+Loco+-+Free+Funky+Clavinet+(F+011).mp3', image_url = 'https://t2.genius.com/unsafe/600x600/https%3A%2F%2Fimages.genius.com%2F798a789395d38559cd1636a3db5f2612.1000x1000x1.png', album_id = 2
    )
    song20 = Song(
        title = 'Papageio Beach', user_id = 2, song_url = 'https://amplify-music.s3.us-west-2.amazonaws.com/Lobo+Loco+-+Papageio+Beach+(ID+1917).mp3', image_url = 'https://t2.genius.com/unsafe/600x600/https%3A%2F%2Fimages.genius.com%2F798a789395d38559cd1636a3db5f2612.1000x1000x1.png', album_id = 2
    )
    song21 = Song(
        title='Matt LeGroulx', user_id=2, song_url='https://amplify-music.s3.us-west-2.amazonaws.com/Matt+LeGroulx+-+9.mp3', image_url='https://t2.genius.com/unsafe/600x600/https%3A%2F%2Fimages.genius.com%2F798a789395d38559cd1636a3db5f2612.1000x1000x1.png', album_id=2
    )
    song22 = Song(
        title='Hiver Fou', user_id=2, song_url='https://amplify-music.s3.us-west-2.amazonaws.com/Portron+Portron+Lopez+-+Hiver+Fou.mp3', image_url='https://t2.genius.com/unsafe/600x600/https%3A%2F%2Fimages.genius.com%2F798a789395d38559cd1636a3db5f2612.1000x1000x1.png', album_id=2
    )
    song23 = Song(
        title='Joufflu', user_id=3, song_url='https://amplify-music.s3.us-west-2.amazonaws.com/Portron+Portron+Lopez+-+Joufflu.mp3', image_url='https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg', album_id=3
    )
    song24 = Song(
        title='La Tradition', user_id=3, song_url='https://amplify-music.s3.us-west-2.amazonaws.com/Portron+Portron+Lopez+-+La+Tradition.mp3', image_url='https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg', album_id=3
    )
    song25 = Song(
        title='O Zepher', user_id=3, song_url='shttps://amplify-music.s3.us-west-2.amazonaws.com/Portron+Portron+Lopez+-+O%CC%82+Ze%CC%81phyr.mp3', image_url='https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg', album_id=3
    )
    song26 = Song(
        title='AOW 7', user_id=3, song_url='https://amplify-music.s3.us-west-2.amazonaws.com/Randy+Randall+-+AOW+7.mp3', image_url='https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg', album_id=3
    )
    song27 = Song(
        title="V", user_id=3, song_url='https://amplify-music.s3.us-west-2.amazonaws.com/Raul+Diaz+Palomar+-+V.mp3', image_url='https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg', album_id=3
    )
    song28 = Song(
        title="VII", user_id=3, song_url='https://amplify-music.s3.us-west-2.amazonaws.com/Raul+Diaz+Palomar+-+VII.mp3', image_url='https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg', album_id=3
    )
    song29 = Song(
        title='VIII', user_id=3, song_url='https://amplify-music.s3.us-west-2.amazonaws.com/Raul+Diaz+Palomar+-+VIII.mp3', image_url='https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg', album_id=3
    )
    song30 = Song(
        title='New Town Break', user_id=3, song_url='https://amplify-music.s3.us-west-2.amazonaws.com/Rob+Rob+Rob+-+Newtown+Break.mp3', image_url='https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg', album_id=3
    )
    song31 = Song(
        title="Small Song 1", user_id=3, song_url='https://amplify-music.s3.us-west-2.amazonaws.com/Squire+Tuck+-+Small+Song+(1).mp3', image_url='https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg', album_id=3
    )
    song32 = Song(
        title="Small Song", user_id=3, song_url='https://amplify-music.s3.us-west-2.amazonaws.com/Squire+Tuck+-+Small+Song.mp3', image_url='https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg', album_id=3
    )
    song33 = Song(
        title='Rockulele', user_id=3, song_url='https://amplify-music.s3.us-west-2.amazonaws.com/Squire+Tuck+-+Squire+Tuck+-+Rockulele.mp3', image_url='https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg', album_id=3
    )
    song34 = Song(
        title='Truth, Lies and Indignation', user_id=3, song_url='https://amplify-music.s3.us-west-2.amazonaws.com/Squire+Tuck+-+Squire+Tuck+-+Truth%2C+Lies+%26+Indignation.mp3', image_url='https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg', album_id=3
    )
    song35 = Song(
        title='Until the Bitter End', user_id=4, song_url='https://amplify-music.s3.us-west-2.amazonaws.com/Squire+Tuck+-+Squire+Tuck+-+Until+The+Bitter+End.mp3', image_url='https://upload.wikimedia.org/wikipedia/en/d/d5/Taylor_Swift_-_1989_%28Taylor%27s_Version%29.png?20231015132135', album_id=4
    )
    song36 = Song(
        title='Spotlight on Your Soul', user_id=4, song_url='https://amplify-music.s3.us-west-2.amazonaws.com/Squire+Tuck+-+SquireTuck+-+Spotlight+on+Your+Soul.mp3', image_url='https://upload.wikimedia.org/wikipedia/en/d/d5/Taylor_Swift_-_1989_%28Taylor%27s_Version%29.png?20231015132135', album_id=4
    )
    song37 = Song(
        title='Bolas de te verde', user_id=4, song_url='https://amplify-music.s3.us-west-2.amazonaws.com/VIC+BANG+-+Bolas+de+te%CC%81+verde.mp3', image_url='https://upload.wikimedia.org/wikipedia/en/d/d5/Taylor_Swift_-_1989_%28Taylor%27s_Version%29.png?20231015132135', album_id=4
    )
    song38 = Song(
        title='Ente Campestre', user_id=4, song_url='https://amplify-music.s3.us-west-2.amazonaws.com/VIC+BANG+-+Ente+campestre.mp3', image_url='https://upload.wikimedia.org/wikipedia/en/d/d5/Taylor_Swift_-_1989_%28Taylor%27s_Version%29.png?20231015132135', album_id=4
    )
    song39 = Song(
        title='Ecsupy la dentadura', user_id=4, song_url='https://amplify-music.s3.us-west-2.amazonaws.com/VIC+BANG+-+Escupi%CC%81+la+dentadura.mp3', image_url='https://upload.wikimedia.org/wikipedia/en/d/d5/Taylor_Swift_-_1989_%28Taylor%27s_Version%29.png?20231015132135', album_id=4
    )
    song40 = Song(
        title='todo sin resolver', user_id=4, song_url='https://amplify-music.s3.us-west-2.amazonaws.com/VIC+BANG+-+Todo+sin+resolver.mp3', image_url='https://upload.wikimedia.org/wikipedia/en/d/d5/Taylor_Swift_-_1989_%28Taylor%27s_Version%29.png?20231015132135', album_id=4
    )
    song41 = Song(
        title='I Wish You', user_id=4, song_url='https://amplify-music.s3.us-west-2.amazonaws.com/Rob+Rob+Rob+-+Newtown+Break.mp3', image_url='https://upload.wikimedia.org/wikipedia/en/d/d5/Taylor_Swift_-_1989_%28Taylor%27s_Version%29.png?20231015132135', album_id=4
    )
    song42 = Song(
        title='Bad Blood', user_id=4, song_url='https://amplify-music.s3.us-west-2.amazonaws.com/Squire+Tuck+-+Small+Song+(1).mp3', image_url='https://upload.wikimedia.org/wikipedia/en/d/d5/Taylor_Swift_-_1989_%28Taylor%27s_Version%29.png?20231015132135', album_id=4
    )
    song43 = Song(
        title='Wildest Dream', user_id=4, song_url='https://amplify-music.s3.us-west-2.amazonaws.com/Squire+Tuck+-+Small+Song+(1).mp3', image_url='https://upload.wikimedia.org/wikipedia/en/d/d5/Taylor_Swift_-_1989_%28Taylor%27s_Version%29.png?20231015132135', album_id=4
    )
    song44 = Song(
        title = 'How You Get The Girl', user_id = 4, song_url = 'https://amplify-music.s3.us-west-2.amazonaws.com/Squire+Tuck+-+Small+Song+(1).mp3', image_url = 'https://upload.wikimedia.org/wikipedia/en/d/d5/Taylor_Swift_-_1989_%28Taylor%27s_Version%29.png?20231015132135', album_id = 4
    )
    song45 = Song(
        title = 'This Love', user_id = 4, song_url = 'https://amplify-music.s3.us-west-2.amazonaws.com/Squire+Tuck+-+Small+Song+(1).mp3', image_url = 'https://upload.wikimedia.org/wikipedia/en/d/d5/Taylor_Swift_-_1989_%28Taylor%27s_Version%29.png?20231015132135', album_id = 4
    )
    song46 = Song(
        title = 'I Know Places', user_id = 4, song_url = 'https://amplify-music.s3.us-west-2.amazonaws.com/Blue+Dot+Sessions+-+A+moment.mp3', image_url = 'https://upload.wikimedia.org/wikipedia/en/d/d5/Taylor_Swift_-_1989_%28Taylor%27s_Version%29.png?20231015132135', album_id = 4
    )
    song47 = Song(
        title = 'Shopper', user_id = 5, song_url = 'https://amplify-music.s3.us-west-2.amazonaws.com/Blue+Dot+Sessions+-+A+moment.mp3', image_url = 'https://upload.wikimedia.org/wikipedia/en/a/ae/IU_-_The_Winning.png', album_id = 5
    )
    song48 = Song(
        title = 'Holssi', user_id = 5, song_url = 'https://amplify-music.s3.us-west-2.amazonaws.com/Blue+Dot+Sessions+-+A+moment.mp3', image_url = 'https://upload.wikimedia.org/wikipedia/en/a/ae/IU_-_The_Winning.png', album_id = 5
    )
    song49 = Song(
        title = 'Shh..', user_id = 5, song_url = 'https://amplify-music.s3.us-west-2.amazonaws.com/Blue+Dot+Sessions+-+A+moment.mp3', image_url = 'https://upload.wikimedia.org/wikipedia/en/a/ae/IU_-_The_Winning.png', album_id = 5
    )
    song50 = Song(
        title = 'Love wins all', user_id = 5, song_url = 'https://amplify-music.s3.us-west-2.amazonaws.com/Blue+Dot+Sessions+-+A+moment.mp3', image_url = 'https://upload.wikimedia.org/wikipedia/en/a/ae/IU_-_The_Winning.png', album_id = 5
    )
    song51 = Song(
        title = 'I stan U', user_id = 5, song_url = 'https://amplify-music.s3.us-west-2.amazonaws.com/Blue+Dot+Sessions+-+A+moment.mp3', image_url = 'https://upload.wikimedia.org/wikipedia/en/a/ae/IU_-_The_Winning.png', album_id = 5
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
