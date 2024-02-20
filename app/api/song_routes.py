
from flask import Blueprint,request
from .audio_upload import upload_file_to_s3,remove_file_from_s3,get_unique_filename
from ..models.song import Song
from ..forms.song_form import SongForm
song_routes = Blueprint('songs',__name__)

# @songs_blueprint.route('/')
# def getAllSongs():

# getting all songs
@song_routes.route('/')
def getSongs():
    songs = Song.query.all()
    response = [song.to_dict() for song in songs]
    return response


# getting details of a song
@song_routes.route('/new',methods=["POST"])
def createSong():
    form = SongForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    # form.data['audio'] = request.form['audio']

    if request.method == 'POST':
        # audio = form.data["audio"]
        print(request.files)

        # print ('------entered',audio)
        # audio = request.form['audio']
        # print (audio)
        # audio.filename = get_unique_filename(audio.filename)
        # upload = upload_file_to_s3(audio)
        # print(upload)

        # if "url" not in upload:
        # # if the dictionary doesn't have a url key
        # # it means that there was an error when you tried to upload
        # # so you send back that error message (and you printed it above)
        #     return render_template("post_form.html", form=form, errors=[upload])

        # url = upload["url"]
        # new_image = Post(image= url)
        # db.session.add(new_image)
        # db.session.commit()
        # return redirect("/posts/all")

    if form.errors:
        print('error',form.errors)
        # return render_template("post_form.html", form=form, errors=form.errors)

    # return render_template("post_form.html", form=form, errors=None)
