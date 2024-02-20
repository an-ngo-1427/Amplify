from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileAllowed, FileRequired
from wtforms import SubmitField
from app.api.audio_upload import ALLOWED_EXTENSIONS

class SongForm(FlaskForm):
    audio = FileField("Audio File", validators=[FileRequired(), FileAllowed(list(ALLOWED_EXTENSIONS))])
    submit = SubmitField("Create Post")

    # @property
    # def getAudio(self):
    #     return self.audio

    # @audio.setter
    # def setAudio(self,data):
    #     self.audio = data
