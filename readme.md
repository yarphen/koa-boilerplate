# KOA BOILERPLATE API

[![CircleCI](https://circleci.com/gh/yarphen/koa-boilerplate.svg?style=svg)](https://circleci.com/gh/yarphen/koa-boilerplate)

KOA BOILERPLATE API is backend core for future platform.

# How to use?

## Auth API

### **LOGIN**

* **URL**: `/auth/login`
* **METHOD**: `POST`
* **DESCRIPTION**: Allows you to log in and get your auth token. After getting token use it for bearer Authorization.
* **SAMPLE REQUEST**:
```
{
	"password": "abc",
	"email": "example@gmail.com"
}
```
* **SAMPLE RESPONSES**:
```
{
    "user": {
        "_id": "6ed2bf5ce8c7bb7d279e",
        "email": "example@gmail.com",
        "firstName": "Test Test",
        "lastName": "Test Test"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImVtYWlsIjoiZXhhbXBsZUBnbWFpbC5jb20iLCJuYW1lIjoiVGVzdCBUZXN0IiwiYWJvdXQiOiJYWFgiLCJjcmVhdGVkQXQiOiIyMDE4LTA4LTAyVDA5OjEzOjQxLjMxNloiLCJ1cGRhdGVkQXQiOiIyMDE4LTA4LTAyVDA5OjE3OjM1LjY3OVoiLCJoYXNoIjoiNmVkMmJmNWNlOGM3YmI3ZDI3OWVjYWZjYzU3NDk4YzEwZTIwYTRhOTg4OWQ4NmFmYjk2MTQyNmZjZTQwZDViMGQyMTA0ZjQxMzJiYjk5YWJlZTIzYjdlYmU2MTc5NDAzOTNlZTcwYjZlN2NlMGIxNDYyYzU3ZjJiOTQwMzkwMDAiLCJpYXQiOjE1MzMyMDE1MTB9.cQB4v2O-4VrwxadgUzyMDea9xii0JwD1wWR3Cd6TDCM"
}
```
```
{
    "message": "Login failed"
}
```

### **RESET PASSWORD**

* **URL**: `/auth/reset`
* **METHOD**: `POST`
* **DESCRIPTION**: Resets your password if you provide correct email and sends it to your email.
* **SAMPLE REQUEST**:
```
{
	"email": "example@gmail.com"
}
```
* **SAMPLE RESPONSES**:
```
{
    "message": "Check your email, please"
}
```

### **VERIFY YOU ARE LOGGED IN**

* **URL**: `/auth/verify`
* **METHOD**: `GET`
* **NEEDS AUTHORIZATION**
* **DESCRIPTION**: Retrieves your user if you are logged in
* **SAMPLE RESPONSES**:
```
{
    "user": {
        "_id": "6ed2bf5ce8c7bb7d279e",
        "email": "example@gmail.com",
        "firstName": "Test Test",
        "lastName": "Test Test"
    }
}
```

## Admin API

### **CREATE ADMIN**

* **URL**: `/admins`
* **METHOD**: `POST`
* **NEEDS AUTHORIZATION**
* **DESCRIPTION**: Creates new admin
* **SAMPLE REQUEST**:
```
{
    "email": "example@gmail.com",
    "firstName": "Test Test",
    "lastName": "Test Test",
    "password": "123"
}
```
* **SAMPLE RESPONSES**:
```
{
    "_id": "6ed2bf5ce8c7bb7d279e",
    "email": "example@gmail.com",
    "firstName": "Test Test",
    "lastName": "Test Test"
}
```

### **ADMIN LIST**

* **URL**: `/admins`
* **METHOD**: `GET`
* **NEEDS AUTHORIZATION**
* **DESCRIPTION**: Retrieves list of admins
* **SAMPLE RESPONSES**:
```
[
    {
        "_id": "6ed2bf5ce8c7bb7d279e",
        "email": "example@gmail.com",
        "firstName": "Test Test",
        "lastName": "Test Test"
    }
]
```

### **GET ADMIN BY ID**

* **URL**: `/admins/:id`
* **METHOD**: `GET`
* **NEEDS AUTHORIZATION**
* **DESCRIPTION**: Gets admin by id
* **SAMPLE RESPONSES**:
```
{
   "_id": "6ed2bf5ce8c7bb7d279e",
    "email": "example@gmail.com",
    "firstName": "Test Test",
    "lastName": "Test Test"
}
```

### **PROFILE UPDATE**

* **URL**: `/admin/:id`
* **METHOD**: `PATCH`
* **NEEDS AUTHORIZATION**
* **DESCRIPTION**: Updates specified fields of your profile if you set non-empty values to them. Allows to change your password: for this you should specify `password`.
* **SAMPLE REQUEST**:
```
{
    "email": "example@gmail.com",
    "password": "123",
    "firstName": "Test Test",
    "lastName": "Test Test"
}
```
* **SAMPLE RESPONSES**:
```
{    
    "_id": "6ed2bf5ce8c7bb7d279e",
    "email": "example@gmail.com",
    "firstName": "Test Test",
    "lastName": "Test Test"
}
```
### **REMOVE ADMIN BY ID**

* **URL**: `/admins/:id`
* **METHOD**: `DELETE`
* **NEEDS AUTHORIZATION**
* **DESCRIPTION**: Removes admin by id
* **SAMPLE RESPONSES**:
```
{
   "message": "Admin deleted"
}
```

## CLUB API

### **CLUBS LIST**

* **URL**: `/clubs`
* **METHOD**: `GET`
* **NEEDS AUTHORIZATION**
* **DESCRIPTION**: Retrieves list of clubs
* **SAMPLE RESPONSES**:
```
[
    {    
        "_id": "6ed2bf5ce8c7bb7d279e",
        "title": "123",
        "description": "Test Test"
    }
]
```

### **GET CLUB BY ID**

* **URL**: `/clubs/:id`
* **METHOD**: `GET`
* **NEEDS AUTHORIZATION**
* **DESCRIPTION**: Gets club by id
* **SAMPLE RESPONSES**:
```
{    
    "_id": "6ed2bf5ce8c7bb7d279e",
    "title": "123",
    "description": "Test Test"
}
```

### **CLUB UPDATE**

* **URL**: `/clubs/:id`
* **METHOD**: `PATCH`
* **NEEDS AUTHORIZATION**
* **DESCRIPTION**: Updates specified fields of your club if you set non-empty values to them.
* **SAMPLE REQUEST**:
```
{    
    "title": "123",
    "description": "Test Test"
}
```
* **SAMPLE RESPONSES**:
```
{    
    "_id": "6ed2bf5ce8c7bb7d279e",
    "title": "123",
    "description": "Test Test"
}
```
### **REMOVE CLUB BY ID**

* **URL**: `/clubs/:id`
* **METHOD**: `DELETE`
* **NEEDS AUTHORIZATION**
* **DESCRIPTION**: Removes club by id
* **SAMPLE RESPONSES**:
```
{
   "message": "Club deleted"
}
```

# How to run?
You can:
  - Clone manually, install node_modules, pass own environemnt variables (with .envrc file etc)
  - ... or just build it with docker

How many scripts the project contains?
  - main script for starting simply / for starting with forever (can be run with `npm start` / `npm run forever`)
  - few tests for users/auth and for deals/messages (can be run with `npm test`)
  - ESLint script (can be run with `npm run lint`)
  - Init script (can be run with `npm run admin-init`. It creates admin with default password and username)


## Usage with docker

Here is sample deploy script for dockerized app:

```
docker stop my-koa-boilerplate
docker rm my-koa-boilerplate
docker build -t yarphen/koa-boilerplate --no-cache git@github.com:yarphen/koa-boilerplate.git#${1:master}
docker run -d --name=my-koa-boilerplate \
-p 8888:8888 \
-e PORT="8888" \
-e DB_HOST="mongodb.example.com" \
-e DB_PORT="27017" \
-e DB_NAME="mydb" \
-e DB_OPTIONS="{}" \
-e JWT_SECRET="bla-bla-bla" \
-e SMTP_HOST="smtp.gmail.com" \
-e SMTP_PORT="587" \
-e SMTP_USER="example@gmail.com" \
-e SMTP_PASS="bla-bla-bla" \
-e SMTP_FROM="example@gmail.com" \
-e SMTP_SECURE="false" \
--restart=always yarphen/koa-boilerplate
```

### Evironment

`DEFAULT_EMAIL` - sets the default email when running npm run admin-init

`DEFAULT_PASSWORD` - sets the default password when running npm run admin-init

`DEFAULT_FIRST_NAME` - sets the default firstname when running npm run admin-init

`DEFAULT_LAST_NAME` - sets the default lastname when running npm run admin-init

`PORT` - sets the port to run the API

`DB_HOST` - sets the host of mongodb connection

`DB_PORT` - sets the port of mongodb connection

`DB_NAME` - sets the db name of mongodb connection

`DB_URL` - sets the url for mongodb connection

`DB_OPTIONS` - sets the options for mongodb connection (stringified JSON expected)

`JWT_SECRET` - sets the jwt secret for making Json Web Tokens.

`SMTP_HOST` - sets the host of smtp server to send reset pass email

`SMTP_PORT` - sets the port of smtp server to send reset pass email

`SMTP_USER` - sets the username for smtp server to send reset pass email

`SMTP_PASS` - sets the password for smtp server to send reset pass email

`SMTP_SECURE` - sets the **secure** flag for smtp server connection