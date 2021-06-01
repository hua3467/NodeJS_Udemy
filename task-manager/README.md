#

## Start mongoDB

```dotnetcli
/Users/zhenhua.yang.1/mongodb/bin/mongod --dbpath=/Users/zhenhua.yang.1/mongodb-data
```

## Run scripts

```dotnetcli
npm run {comment under "scripts" in package.json}
```

## HTTP status code refrences

<https://httpstatuses.com/>

## ObjectId

In MongoDB, the ids are Global Unique Identifiers (GUID) that can avoid conflicts.

## REST API Besic Structures

### Create

`POST /tasks`

### Read

```
GET /tasks
GET /tasks/:id
```

### Update

`PATCH /tasks/:id`

### Delete

`DELETE /tasks/:id`

## REST API Request

POST Header:

```dotnetcli
POST /tasks HTTP/1.1
Accept: application/json
Connection: Keep-Alive
Authorization: Aaron eyJhbGciOIlksdfadD2k3KDG.eysdfaO...

{"description": "Order new drill bits"}
```

### Response

```apache
HTTP/1.1 201 Created
Date: Sun, 28 Jul 2021 15:38:15 GMT
Server: Express
Content-Type: application/json

{"_id": "00001", "description": "Order new drill bits", "completed": false}
```
