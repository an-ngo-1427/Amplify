
from flask import Blueprint,request
from .audio_upload import upload_file_to_s3,remove_file_from_s3
from ..models.song import Song
song_routes = Blueprint('songs',__name__)

# @songs_blueprint.route('/')
# def getAllSongs():

# getting all songs
@song_routes.route('/')
def getSongs():
    songs = Song.query().all()
    response = [songs.to_dict() for song in songs]
    return response

# getting details of a song
@song_routes.route('/new')
def createSong():
    file = request.files['file']
    print(file)
    # song_url = upload_file_to_s3(file)
    # print(song_url)
