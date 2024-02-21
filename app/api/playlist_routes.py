from flask import Blueprint, request
from flask_login import current_user, login_required
from app.models import db, Playlist
from app.forms.playlist_form import PlaylistForm
playlist_routes = Blueprint('playlists',__name__)

@playlist_routes.route('/new', methods=['POST'])
@login_required
def create_playlist():
    form = PlaylistForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        playlist = Playlist(
            title = form.data['title'],
            description = form.data['description'],
            image_url = form.data['image_url'],
            user_id = current_user.id
        )
        db.session.add(playlist)
        db.session.commit()
        return playlist.to_dict(), 201
    return 'Error'

@playlist_routes.route('/')
def get_playlists():
    playlists = Playlist.query.all()
    response = [playlist.to_dict() for playlist in playlists]
    return {'playlists': response}

@playlist_routes.route('/<int:id>')
def get_playlist_by_id(id):
    playlist = Playlist.query.get(id)
    return playlist.to_dict()

@playlist_routes.route('/current')
@login_required
def get_current_user_playlists():
    user_playlists = Playlist.query.filter(Playlist.user_id == current_user.id).all()
    response = [playlist.to_dict() for playlist in user_playlists]
    return {'playlists': response}

@playlist_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_playlist(id):
    form = PlaylistForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    playlist = Playlist.query.get(id)

    if not playlist:
        return {'error':"Playlist couldn't be found"}, 404

    if playlist.user_id != current_user.id:
        return {'errors':'Forbidden'}, 401

    form.populate_obj(playlist)
    db.session.commit()
    return playlist.to_dict(), 200

@playlist_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_playlist(id):
    playlist = Playlist.query.get(id)

    if not playlist:
        return {'error':"Playlist couldn't be found"}, 404

    if playlist.user_id != current_user.id:
        return {'errors':'Forbidden'}, 401

    db.session.delete(playlist)
    db.session.commit()
    return {'message': 'Successfully deleted'}, 200
