# Books Networking App

1. Clone the repo git clone https://github.com/elangovankrishva/books-networking-app.git
2. To start the backend server
 ```
 cd backend && npm install and npm start
 ```
3. To start the client 
```
cd client && npm install and npm start
```
4. Insert the sample collections in your local mongo

```
db.users.insert
[
    {"user_publish_books":["5dc8eee3b08cea3d18f6488b", "5dc8eef2b08cea3d18f6488c", "5dc8ef04b08cea3d18f6488d"],"user_favorite_list":["5dc8eee3b08cea3d18f6488b", "5dc8eef2b08cea3d18f6488c", "5dc8ef04b08cea3d18f6488d"],"_id":"5dc8d209fc07fc55286e1b90","user_name":"elangovan@gmail.com","user_email":"elangovan@gmail.com","createdAt":"2019-11-11T03:14:17.899Z","updatedAt":"2019-11-11T03:14:17.899Z","__v":0},
    
    {"user_publish_books":["5dc8eee3b08cea3d18f6488b", "5dc8eef2b08cea3d18f6488c", "5dc8ef04b08cea3d18f6488d"],"user_favorite_list":["5dc8eee3b08cea3d18f6488b", "5dc8eef2b08cea3d18f6488c", "5dc8ef04b08cea3d18f6488d"],"_id":"5dc8dd32b08cea3d18f6488a","user_name":"krish@gmail.com","user_email":"krish@gmail.com","createdAt":"2019-11-11T04:01:54.624Z","updatedAt":"2019-11-11T04:01:54.624Z","__v":0}
]
```
```
db.books.insert(
[
{"books_name":"Agni Sirugal","books_author":"ABJ Kalam","books_isbn":"ABj12345","books_price":"500.00","books_qty":"10","books_addedby":"5dc8d209fc07fc55286e1b90"},

{"books_name":"Krds Book","books_author":"Krds","books_isbn":"KR12345","books_price":"1500.00","books_qty":"10","books_addedby":"5dc8d209fc07fc55286e1b90"},

{"books_name":"Ikigai","books_author":"Ikigai","books_isbn":"Ikigai12345","books_price":"2500.00","books_qty":"10","books_addedby":"5dc8d209fc07fc55286e1b90"},

{"books_name":"Agni Sirugal part2","books_author":"ABJ Kalam","books_isbn":"ABJ8524","books_price":"800.00","books_qty":"10","books_addedby":"5dc8d209fc07fc55286e1b90"},

{"books_name":"Agni Sirugal part3","books_author":"ABJ Kalam","books_isbn":"ABJ4578","books_price":"982.00","books_qty":"10","books_addedby":"5dc8d209fc07fc55286e1b90"},

{"books_name":"Agni Sirugal","books_author":"ABJ Kalam","books_isbn":"ABj12345","books_price":"500.00","books_qty":"10","books_addedby":"5dc8d209fc07fc55286e1b90"},


{"books_name":"Krds Book","books_author":"Krds","books_isbn":"KR12345","books_price":"1500.00","books_qty":"10","books_addedby":"5dc8dd32b08cea3d18f6488a"},


{"books_name":"Ikigai","books_author":"Ikigai","books_isbn":"Ikigai12345","books_price":"2500.00","books_qty":"10","books_addedby":"5dc8dd32b08cea3d18f6488a"},

{"books_name":"Agni Sirugal part2","books_author":"ABJ Kalam","books_isbn":"ABJ8524","books_price":"800.00","books_qty":"10","books_addedby":"5dc8dd32b08cea3d18f6488a"},

{"books_name":"Agni Sirugal part3","books_author":"ABJ Kalam","books_isbn":"ABJ4578","books_price":"982.00","books_qty":"10","books_addedby":"5dc8dd32b08cea3d18f6488a"},

{"books_name":"Agni Sirugal part2","books_author":"ABJ Kalam","books_isbn":"ABJ8524","books_price":"800.00","books_qty":"10","books_addedby":"5dc8dd32b08cea3d18f6488a"},

{"books_name":"Agni Sirugal part3","books_author":"ABJ Kalam","books_isbn":"ABJ4578","books_price":"982.00","books_qty":"10","books_addedby":"5dc8dd32b08cea3d18f6488a"}
]
);
```
