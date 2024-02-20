from flask import Blueprint,request
from ..models.album import Playlist
from ..models.db import db
playlist_routes = Blueprint('playlists',__name__)

@playlist_routes.route('/')
def get_playlists():
    playlists = Playlist.query.all()
    return [playlist.to_dict() for playlist in playlists]

@playlist_routes.route('/<int:id>')
def get_playlist_by_id(id):
    playlist = Playlist.query.get(id)
    return playlist.to_dict()

@playlist_routes.route('/current')
def get_current_user_playlists():
    pass