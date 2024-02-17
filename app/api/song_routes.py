from app import app
from flask import Blueprint
songs_blueprint = Blueprint('songs',__name__,url_prefix = '/songs')

# @songs_blueprint.route('/')
# def getAllSongs():
