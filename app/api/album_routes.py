from flask import Blueprint,request
from .audio_upload import upload_file_to_s3,remove_file_from_s3
from ..models.album import Album
from ..models.db import db
album_routes = Blueprint('albums',__name__)

@album_routes.route('/')
def getAlbums():
    albums = Album.query.all()
    response = [album.to_dict() for album in albums]
    return response

@album_routes.route('/<int:id>')
def getAlbumById(id):
    album = Album.query.filter(Album.id == id).first()
    return album.to_dict()

@album_routes.route('/new', methods=['POST'])
def newAlbum():
    pass

@album_routes.route('/<int:id>/delete')
def deleteAlbum(id):
    album = Album.query.filter(Album.id == id).first()
    db.session.delete(album)
    db.session.commit()
    return 'Successfully Deleted Album'

@album_routes.route('/<int:id>/songs/<int:songId>')
def removeSongFromAlbum(id, songId):
    album = Album.query.filter(Album.id == id).first()
    # song = album.songs
    pass
