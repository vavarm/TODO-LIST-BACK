# TODO-LIST-BACK [WIP]
The backend of a fullstack project called TODO-LIST  
Created following the MEVN stack

## Front-End
You can find a front-end application using this back-end in the following repo: https://github.com/vavarm/TODO-LIST-FRONT/

## Requirements
- nodejs (recommended: v18.14.0)
- mongodb database (local or MongoDB Atlas)

## SETUP
- clone the repository ```git clone https://github.com/vavarm/TODO-LIST-BACK```
- install the dependencies ```yarn install```
- change MONGO_URL by your Mongo database URL in ```./config/database.js```
- start the server ```yarn run start```
- access the server at: ```http://localhost:3000/```

## How to use the API ?
### API testing software
- Insomnia https://insomnia.rest/  
OR
- Postman https://www.postman.com/
### Methods
GET on /  
GET, POST on /api/todos  
GET, PUT, DELETE on /api/todos/:id
### Body format
The body must be sent as FORM URL Encoded
### Examples
#### getAll
![getAll](https://user-images.githubusercontent.com/66647999/219959978-6aeb37d8-1608-426d-9cc4-f41600deb75c.png)
#### addTodo
![Screenshot 2023-02-19 17 09 25](https://user-images.githubusercontent.com/66647999/219960068-56154eab-23d9-4adf-8ec0-1ee688d1e3c2.png)
![Screenshot 2023-02-19 17 08 53](https://user-images.githubusercontent.com/66647999/219960036-8519b863-1d24-4ea4-b042-b806ef63e676.png)
#### updateTodo
![Screenshot 2023-02-19 17 10 08](https://user-images.githubusercontent.com/66647999/219960114-d3436d3a-85d2-4f38-abf5-4feb1110c425.png)

## Post Scriptum
Feel free to use this template in your projects
