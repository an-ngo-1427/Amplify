# Amplify

[Amplify](https://amplify-group.onrender.com/) is a digital platform for music, inspired by [Spotify](https://open.spotify.com/?).

## Installation guide

### Clone the repo
  * run `git clone https://github.com/an-ngo-1427/Amplify.git` in a desired directory

### Install dependencies
  * run `pipenv install -r requirements.txt` in the root project folder
  * run `npm install` in `react-vite` folder

### Create and ensure that the .env file has the following fields
(You will need to create an AWS S3 Bucket)
  * SECRET_KEY
  * DATABASE_URL
  * SCHEMA
  * S3_BUCKET
  * S3_KEY
  * S3_SECRET

### Migration
  * run `pipenv shell flask db upgrade` in the root project folder

### Optional seedings
  * run `pipenv shell flask seed reset` in the root project folder

### Start up the servers
  * run `pipenv shell flask run` in the root project folder
  * run `npm run dev` in `react-vite` folder

## Contact Us
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/an-ngo-79a07a122/)
![LinkedIn](https://img.shields.io/badge/An-Ngo-gray?logoColor=white)

[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/christopher-fealy/)
![LinkedIn](https://img.shields.io/badge/Chris-Fealy-gray?logoColor=white)

[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/dennis-ma-621ba2226/)
![LinkedIn](https://img.shields.io/badge/Dennis-Ma-gray?logoColor=white)

[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gary-k-cheung/)
![LinkedIn](https://img.shields.io/badge/Gary-Cheung-gray?logoColor=white)

## Technologies Used
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?logo=javascript&logoColor=%23F7DF1E)
![Python](https://img.shields.io/badge/python-3670A0?logo=python&logoColor=ffdd54)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?logo=css3&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?logo=npm&logoColor=white)
![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?logo=markdown&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?logo=redux&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?logo=react-router&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?logo=vite&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?logo=eslint&logoColor=white)
![Flask](https://img.shields.io/badge/flask-%23000.svg?logo=flask&logoColor=white)
![Ubuntu](https://img.shields.io/badge/Ubuntu-E95420?logo=ubuntu&logoColor=white)
![Linux](https://img.shields.io/badge/Linux-FCC624?logo=linux&logoColor=black)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?logo=amazon-aws&logoColor=white)
![Static Badge](https://img.shields.io/badge/Amazon%20S3-green?logo=amazon%20s3&logoColor=white)
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?logo=sqlite&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?logo=postgresql&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?logo=mysql&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?logo=docker&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?logo=postman&logoColor=white)
![Render](https://img.shields.io/badge/Render-%46E3B7.svg?logo=render&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?logo=visual-studio-code&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?logo=github&logoColor=white)
![Static Badge](https://img.shields.io/badge/SQLAlchemy-white?logo=sqlalchemy&logoColor=blue)

## Database Schema Design
![](./images//amplify-db-schema.png)

## API Documentation
## SONGS
- ### GET /songs
    _Users should be able to view all Songs._
    - required auth: False
    - Unauthorized and authorized users should be able to view all songs sorted by likes
        - **Request**
            - Method: GET
            - URL: /songs
            - Body: none
        - **Successful Response**
            ```json
                {
                    "Songs":[
                        {
                            "id": *,
                            "title":*,
                            "user_id":*,
                            "album_id":*,
                            "created_at":*,
                            "duration":*,
                            "artists":--------,
                            "audio":-------,
                            "likes":------,
                            "image":------,
                        }
                    ]
                }
            ```

- ### POST /songs
    _Users should be able to upload songs._
    - Required Auth: True
    - Only logined user can add a song
        - **Request**
            - Method: POST
            - URL: /songs
            - Body:
                ```json
                    {
                        "title": required,
                        "audio":------
                    }
                ```
        - **Successful Response** (code 201)
            ```json
                {
                    "id": *,
                    "title":*,
                    "user_id":*,
                    "album_id":*,
                    "created_at":*,
                    "duration":*,
                    "audio":-------,
                    "likes":------,
                    "image":------
                }
            ```
        - **Error Response** (code 401)
            ```json
                {
                    "title":required,
                    "audio":required
                }
            ```
- ### PUT /songs/:songId
    _Users should be able to update their uploaded songs._
    - Required Auth:True
    - **Request**
        - Method: POST
        - URL: /songs/:songId
        - Body:
            ```json
                {
                    "title":*,
                    "audio":-------,
                    "image":------,
                }
            ```
    - **Successful Response** (code 200)
        ```json
            {
                 "id": *,
                    "title":*,
                    "user_id":*,
                    "album_id":*,
                    "created_at":*,
                    "updated_at":*,
                    "duration":*,
                    "audio":-------,
                    "likes":-----,
                    "image":------,
            }
        ```
    - **Error Response**
        - User not authorized (code 403)
            ```json
                {
                    "message": "Forbidden"
                }
            ```
        - Song couldnt be found (code 404)
            ```json
                {
                    "Error": "Song could not be found"
                }
            ```
        - Missing info (code 401)
            ```json
                {
                    "title": "Title Required",
                    "status": ------
                }
            ```
- ### GET /songs/:songId
    _User is able to get details of a song by specified ID_
    - Required Auth: False
    - **Request**
        - Method: GET
        - URL: /songs/:songId
        - Body:none
    - **Successful Response**
        ```json
            {
                "id":*,
                "title":*,
                "user_id":*,
                "album_id":*,
                "song_url":*,
                "image_url":*,
                "likes":*
            }
        ```
    - **Error Response**
        ```json
            {
                "message":"song not found"
            }
        ```
- ### DELETE /songs/:songId
    _Users should be able to delete their uploaded songs._
    - Required Auth: True
    - **Request**
        - Method: DELETE
        - URL: /songs/:songId
        - Body: none
    - **Successful Response**
        ```json
            {
                "message": "Successfully deleted song"
            }
        ```
    - **Error Response**
        - Song could not be found
        ```json
            {
                "errors": "Song could not be found"
            }
        ```
        - Unauthorized user
        ```json
            {
                "message": "Forbidden"
            }
        ```

## ALBUMS
- ### GET /albums
    _Users should be able to view all albums created by users._
    - Required Auth: True
    - **Request**
        - Method: GET
        - URL: /albums
        - Body: none
    - **Successful Response**
        ```json
            {
                "albums":[
                    {
                        "title":*,
                        "user_id":*,
                        "release_date":*,
                        "created_at":*,
                        "image":*,
                    }
                ]
            }
        ```
- ### GET /albums/:albumId
    _Users should be able to get album details_
    - Required Auth: False
    - **Response**
        - Method: GET
        - URL: /albums/:albumId
        - Body: none
    - **Succressful Response**
        ```json
            {
                "id":*,
                "title":*,
                "user_id":*,
                "release_date":*,
                "created_at":*,
                "duration":------,
                "likes":------,
                "image":-----,
                "Songs":[
                    {

                    }
                ]
            }
        ```
- ### POST /albums/:albumId/songs
    _Users should be able to add songs to an album they created._
    - Required Auth: True
    - **Request**
        - Method: POST
        - URL: /albums/:albumId/songs
        - Body:
            ```json
                {
                    "title":*,
                    "audio":-------,
                    "image":------
                }
            ```
    - **Successful Response**
        ```json
            {
                "id": *,
                "title":*,
                "user_id":*,
                "album_id":*,
                "created_at":*,
                "duration":*,
                "audio":-------,
                "likes":------,
                "image":------
            }
        ```
- ### DELETE /albums/:albumId/songs/:songId
    _Users should be able to remove songs from their albums._
    - Required Auth: True
    - **Request**
        - Method: DELETE
        - URL: /albums/:albumId/songs/:songId
        - Body: none
    - **Successful Resposne**
        ```json
            {
                "message": "Successfully Deleted song"
            }
        ```
    - **Err Response**
        - User not authorized
         ```json
            {
                "message": "Forbidden"
            }
        ```
        - Song not found
        ```json
            {
                "errors": "Song could not be found"
            }
        ```
- ### DELETE /albums/:albumId
    _Users should be able to delete their albums._
    - Required Auth: True
    - **Request**
        - Method: DELETE
        - URL: /albums/:albumId
        - Body: none
    - **Successful Response**
        ```json
            {
                "message": "Successfully Deleted Album"
            }
        ```
    - **Err Response**
        - User not authorized
        ```json
            {
                "message":"Forbidden"
            }
        ```
        - Album not found
        ```json
            {
                "error":"Album cound not be found"
            }
        ```
## LIKES

- ### GET /songs/:songId/likes
    _Users should be able to view the likes on a song._
    - Required Auth: False
    - **Request**
        - Method: GET
        - URL: /songs/:songId/likes
        - Body: none
    - **Successful Response**
        ```json
            {

            }
        ```
- ### POST /songs/:songId/likes
    _Users should be able to like a song._
    - Required Auth: True
    - **Request**
        - Method: POST
        - URL: /songs/:songId/likes
    - **Successful Response**
        ```json
            {
                "message":"successfully liked song"
            }
        ```
- ### DELETE /songs/:songId/likes/:likeId
    _Users should be able to unlike a song._
    - Required Auth: True
    - **Request**
        - Method: DELETE
        - URL: /songs/:songId/likes/:likeId
        - Body: none
    - **Successful Response**
        ```json
            {
                "message":"Successfully unliked song"
            }
        ```

## Playlists

- ### GET /playlists
    _Users should be able to view all of their playlists._
    - Required Auth:True
    - **Request**
        - Method: GET
        - URL: /playlists
        - body:none
    - **Successfull Response**
        ```json
            {
                "playlists":[
                    {
                        "id":*,
                        "name":*,
                        "image":-----
                    }
                ]
            }
        ```
- ### GET /playlists/:playlistId
    _User should be able to view details of their playlist by ID_
    - Required Auth:True
    - **Request**
        - Method: GET
        - URL: /playlists/:playlistId
        - Body: none
    - **Successfull Response**
        ```json
            {
                "songs":[
                    {
                        "id":*,
                        "title":*,
                        "used_id":*,
                        "album_id":*,
                        "image_url":*,
                        "created_at":*
                    }
                ]

            }
        ```
    - **Error Response**
        ```json
            {
                "errors":"playlist could not be found"
            }
        ```
- ### POST /playlists/:playlistId/songs/:songId
    _Users should be able to add a song to one of their playlists._
    - Required Auth: True
    - **Request**
        - Method: POST
        - URL: /playlists/:playlistId/songs/:songId
        - Body:
            ```json
                {
                    "playlist_id":*,
                    "song_id":*
                }
            ```
    - **Successfull Response**
        ```json
            {
                "message":"Successfully added song to playlist"
            }
        ```
    - **Error Response**
        ```json
            {
                "errors":"Playlist could not be found"
            }
        ```
        ```json
            {
                "errors":"Song could not be found"
            }
        ```
- ### DELETE /playlists/:playlistId/songs/:songId
    _Users should be able to remove a song from a playlist._
    - Required Auth: True
    - **Request**
        - Method:DELETE
        - URL: /playlists/:playlistId/songs/:songId
        - Body: none
    - **Successfull Response**
        ```json
            {
                "message":"Successfully deleted song from playlist"
            }
        ```
        ```json
            {
                "errors":"Song could not be found in playList"
            }
        ```
