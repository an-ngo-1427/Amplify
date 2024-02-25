from flask import Blueprint,request,session
from flask_login import current_user, login_required
from app.models import db, Album,Song
from app.forms import AlbumForm
import json
album_routes = Blueprint('albums',__name__)

@album_routes.route('/')
def get_albums():
    albums = Album.query.all()
    return [album.to_dict() for album in albums]

@album_routes.route('/<int:id>')
def get_album_by_id(id):
    album = Album.query.get(id)
    return album.to_dict()

@album_routes.route('/new', methods=['POST'])
@login_required
def new_album():
    form = AlbumForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        params = {
            'user_id': current_user.id,
            'title': form.data['title'],
            'image_url': form.data['image_url']
        }
        album = Album(**params)
        db.session.add(album)
        db.session.commit()
        return album.to_dict()
    return {'Error':'Failed to create album'},404

@album_routes.route('/<int:id>/songs/add', methods=['POST'])
@login_required
def add_songs(id):
    data = request.json
    # print('DATA >>>>>', data)
    for d in data["songId"]:
        # print("THIS IS OUR D:", d)
        song = Song.query.get(d)
        song.album_id = id
    db.session.commit()
    album = Album.query.get(id)
    return album.to_dict(), 200
    # data = json.loads(request.data)
    # song_ids = data.get('song_ids', [])
    # songs = Song.query.filter(Song.id.in_(song_ids)).all()
    # album.songs.extend(songs)
    # db.session.commit()

# edit an album route

@album_routes.route('/<int:id>/edit', methods=['PUT'])
@login_required
def update_album(id):
    album = Album.query.get(id)
    form = AlbumForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    user_id = session['_user_id']
    if(int(user_id) != album.user_id):
        return {'errors':'Forbidden'},401

    if form.validate_on_submit():
        album.title = form.title.data
        album.image_url = form.image_url.data
        db.session.commit()
        return album.to_dict()

    return form.errors, 401

@album_routes.route('/<int:id>/delete',methods=['DELETE'])
@login_required
def delete_album(id):

    try:
        album = Album.query.get(id)
        user_id = session['_user_id']
        if(int(user_id) != album.user_id):
            return {'errors':'Forbidden'},401
        db.session.delete(album)
        db.session.commit()
        return { 'message': 'Successfully deleted' }
    except Exception as e:
        return { 'message': str(e) }

# removing song from album
@album_routes.route('/<int:id>/songs/<int:songId>',methods=['DELETE'])
@login_required
def remove_song_from_album(id, songId):
    album = Album.query.get(id)

    user_id = session['_user_id']
    if(int(user_id) != album.user_id):
        return {'errors':'Forbidden'},401

    if not album:
        return {'errors':'Album not found'}
    if album.user_id != int(session['_user_id']):
        return {'message':'Forbidden'}
    song = Song.query.get(songId)
    song.album_id = None
    db.session.commit()
    return album.to_dict()


# getting users album

@album_routes.route('/user/<int:userId>')
@login_required
def getUserAlbums(userId):

    albums = Album.query.filter(Album.user_id == userId).all()

    return {'Albums':[album.to_dict() for album in albums]}
