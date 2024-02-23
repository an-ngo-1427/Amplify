from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileAllowed, FileRequired
from wtforms import StringField, TextAreaField, SubmitField
from wtforms.validators import DataRequired

class PlaylistForm(FlaskForm):
    image_url = StringField('image_url')
    title = StringField('Name', validators=[DataRequired()])
    description = TextAreaField('Add an optional description')
    submit = SubmitField('Save')
