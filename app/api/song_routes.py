
from flask import Blueprint,request
from .audio_upload import upload_file_to_s3,remove_file_from_s3
song_routes = Blueprint('songs',__name__)

# @songs_blueprint.route('/')
# def getAllSongs():

@song_routes.route('/new')
def createSong():
    file = request.files['file']
    print(file)
    # song_url = upload_file_to_s3(file)
    # print(song_url)
