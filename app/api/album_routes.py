from flask import Blueprint,request,session
from flask_login import current_user, login_required
from app.models import db, Album,Song
from app.forms import AlbumForm
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
    return 'Error'


@album_routes.route('/<int:id>/delete',methods=['DELETE'])
def delete_album(id):
    try:
        album = Album.query.get(id)
        db.session.delete(album)
        db.session.commit()
        return { 'message': 'Successfully deleted' }
    except Exception as e:
        return { 'message': str(e) }

# removing song from album
@album_routes.route('/<int:id>/songs/<int:songId>',methods=['DELETE'])
def remove_song_from_album(id, songId):
    album = Album.query.get(id)
    if not album:
        return {'errors':'Album not found'}
    if album.user_id != int(session['_use_id']):
        return {'message':'Forbidden'}
    song = Song.query.get(songId)
    song.album_id = None
    db.session.commit()
    return album.to_dict()
