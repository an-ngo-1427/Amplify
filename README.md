# Amplify

Amplify is a digital platform for music, inspired by [Spotify](https://open.spotify.com/?).

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

## Database Schema Design
![](./images//amplify-db-schema.png)
