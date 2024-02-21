
from flask import Blueprint,request,render_template,session
from flask_login import login_required,current_user,login_manager
from .audio_upload import upload_file_to_s3,remove_file_from_s3,get_unique_filename

from ..models import Song,User,Album
from ..forms.song_form import SongForm
from ..models.db import db
song_routes = Blueprint('songs',__name__)

# @songs_blueprint.route('/')
# def getAllSongs():

# getting all songs
@song_routes.route('/')
def getSongs():
    songs = Song.query.all()
    response = [song.to_dict() for song in songs]
    return {"songs": response}


# getting details of a song
@song_routes.route('/new',methods=["POST"])
@login_required
# @login_manager.user_loader
def createSong():
    form = SongForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    # form.data['audio'] = request.form['audio']
    print(form.data)
    if form.validate_on_submit:

        audioFile = form.data['audio']
        audioFile.filename = get_unique_filename(audioFile.filename)
        upload = upload_file_to_s3(audioFile)

        if 'url' not in upload:
            print (upload)
            return {"message":"failed to upload file"}

        user_id = session['_user_id']
        user = User.query.get(user_id)

        if(not user):
           return {"message":"Unorthorized"}

        if form.data['album'] is True:
            album = Album.query.filter(Album.id == form.data['album'])
            if not album:
                return {'errors':"could not find the album"},404

        newSong = Song(
            title =  form.data['title'],
            user_id = user_id,
            song_url = upload['url'],
            image_url = form.data['image_url'],
            album_id = form.data['album']
        )
        db.session.add(newSong)
        db.session.commit()
        return newSong.to_dict(),201


    if form.errors:
        print('entered')
        return form.errors


    # return render_template("post_form.html", form=form, errors=None)

# editting song
@song_routes.route('/<int:songId>',methods=['PUT'])
@login_required
def editSong(songId):
    form = SongForm()
    song = Song.query.get(songId)
    if not song:
        return {'message':'Song could not be found'},404

    user_id = session['_user_id']
    if(int(user_id) != song.user_id):
        return {'errors':'Forbidden'},401

    form.populate_obj(song)
    db.session.commit()
    return song.to_dict(),200

# deleting song by specified ID
@song_routes.route('/<int:songId>',methods=["DELETE"])
@login_required
def deleteSong(songId):
    song = Song.query.get(songId)

    if not song:
        return {'message':'Song could not be found'},404

    user_id = session['_user_id']
    if(int(user_id) != song.user_id):
        return {'errors':'Forbidden'},401

    db.session.delete(song)
    db.session.commit()

    return {'message':"Successfully deleted song"},200

# getting song details by ID
@song_routes.route('/<int:songId>',methods=["GET"])
def getSong(songId):
    song = Song.query.get(songId)
    return song.to_dict()
