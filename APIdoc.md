

# USER
- # Sign Up
    * As an unregistered and unauthorized user, I want to be able to sign up for the website via a sign-up form.
  * When I'm on the `/signup` page:
    * I would like to be able to enter my email, username, and preferred password on a clearly laid out form.
    * I would like the website to log me in upon successful completion of the sign-up form.
      * So that I can seamlessly access the site's functionality
  * When I enter invalid data on the sign-up form:
    * I would like the website to inform me of the validations I failed to pass, and repopulate the form with my valid entries (except my password).
    * So that I can try again without needing to refill forms I entered valid data into.
- # Log In
    * As a registered and unauthorized user, I want to be able to log in to the website via a log-in form.
    * When I'm on the `/login` page:
        * I would like to be able to enter my email and password on a clearly laid out form.
        * I would like the website to log me in upon successful completion of the lob-up form.
            * So that I can seamlessly access the site's functionality
    * When I enter invalid data on the log-up form:
        * I would like the website to inform me of the validations I failed to pass, and repopulate the form with my valid entries (except my password).
        * So that I can try again without needing to refill forms I entered valid data into.
- # Demo User
    * As an unregistered and unauthorized user, I would like an easy to find and clear button on both the `/signup` and `/login` pages to allow me to visit the site as a guest without signing up or logging in.
        * When I'm on either the `/signup` or `/login` pages:
            * I can click on a Demo User button to log me in and allow me access as a normal user.
      * So that I can test the site's features and functionality without needing to stop and enter credentials.
- # Log Out
    * As a logged in user, I want to log out via an easy to find log out button on the navigation bar.
    * While on any page of the site:
        * I can log out of my account and be redirected to a page displaying recent FauxTweets.
        * So that I can easily log out to keep my information secure.

# SONGS
- ## GET /songs
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

- ## POST /songs
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
        - **Successful Response** (code 201)
            ```json
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
                    "image":------
                }
        - **Error Response** (code 401)
            ```json
                {
                    "title":required,
                    "audio":required
                }
- ## PUT /songs/:songId
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
                    "artists":--------,
                    "audio":-------,
                    "likes":-----,
                    "image":------,
            }
    - **Error Response**
        - User not authorized (code 403)
            ```json
                {
                    "message": "Forbidden"
                }
        - Song couldnt be found (code 404)
            ```json
                {
                    "Error": "Song could not be found"
                }
        - Missing info (code 401)
            ```json
                {
                    "title": "Title Required",
                    "status": ------
                }
- ## DELETE /songs/:songId
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
    - **Error Response**
        - Song could not be found
        ```json
            {
                "errors": "Song could not be found"
            }
        - Unauthorized user
        ```json
            {
                "message": "Forbidden"
            }


# ALBUMS
- ## GET /albums
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
                        "artist_id":*,
                        "release_date":*,
                        "created_at":*,
                        "image":*,
                    }
                ]
            }
- ## GET /albums/:albumId
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
                "artist_id":*,
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

- ## POST /albums/:albumId/songs
    _Users should be able to add songs to an album they created._
    - Required Auth: True
    - **Request**
        - Method: POST
        - URL: /albums/:albumId/songs
        - Body:
            ```json
                {
                    "title":*,
                    "album_id":*,
                    "created_at":*,
                    "audio":-------,
                    "image":------
                }

- ## DELETE /albums/:albumId/songs/:songId
    _Users should be able to remove songs from their albums._


- ## DELETE /albums/:albumId
    _Users should be able to delete their albums._


# LIKES

- ## GET /songs/:songId/likes
    _Users should be able to view the likes on a song._

- ## POST /songs/:songId/like
    _Users should be able to like a song._

- ## DELETE /songs/:songId/like
    _Users should be able to unlike a song._

# Playlists

- ## GET /playlists
    _Users should be able to view all of their playlists._

- ## POST /playlists/:playlistId/songs
    _Users should be able to add a song to one of their playlists._

- ## DELETE /playlists/:playlistId/songs/:songId
    _Users should be able to remove a song from a playlist._
