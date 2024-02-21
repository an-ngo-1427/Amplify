from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileAllowed, FileRequired
from wtforms import SubmitField,StringField,SelectField
from wtforms.validators import DataRequired
from app.api.audio_upload import ALLOWED_EXTENSIONS

class SongForm(FlaskForm):
    audio = FileField("audio", validators=[FileRequired(), FileAllowed(list(ALLOWED_EXTENSIONS))])
    title = StringField("title", validators=[DataRequired()])
    image_url = StringField('image_url')
    album = SelectField("album")
    submit = SubmitField("Create Post")
