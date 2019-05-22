# fwi-code-challenge

This is the code challenge made by César Muñoz.

# Table Of Contents

- [Challenge instructions](#challengeinstructions)
- [Setup](#setup)
  - [VSCode](#vscode)
  - [Node](#node)
  - [Database](#database)
    - [Docker Instructions](#docker)
  - [Yarn](#yarn)
- [Cloning repo](#cloning-repo)
- [Installing dependencies](#installing-dependencies)
- [Running application](#running-application)
- [Documentattion](#documentation)
- [Testing](#testing)

## Challenge instructions

**Requirements**
Build a Poker Leaderboard like the one on the picture with the ability to Add and Modify Players and
Winnings.

[img]: https://i.imgur.com/BWAhEoO.png

**Technology Stack**  
Front-End: React  
Back-End: NodeJs or Python  
Database: Any RDBMS or NoSQL Db

**Additional Information**  
The intent of this code challenge is to evaluate coding style as well as technology knowledge. We don’t
want our applicants to spend more than 4 hours working on this, so here are some suggestions to
simplify the application:

1. The Back End / API doesn’t need to be fully deployed and to simplify, the Front End can interact
   with an in-memory data-store/object. If you chose this route, we would like to see an example
   of how your FE code would interact with an API.
2. Although not necessarily deployed, we expect to receive the API code that would eventually
   allow the FE to Get, Add and Modify Players and Winnings.
3. Players and Winnings can be considered one single entity, being “The Winnings” a field on the
   player’s profile. However, we would like to receive a diagram of how you would implement this
   in a correctly normalized RDBMS database or in a NoSQL database.
4. No Audit trail is required.
5. No authorization or authentication is required.
6. Feel free to have fun with this by using any libraries and bootstrap frameworks you are
   comfortable with, writing unit tests, or anything that you think would show your skills.

## Setup

### Installations

**VSCode**  
[https://code.visualstudio.com/](https://code.visualstudio.com/)

**Node**  
[https://nodejs.org/es/](https://nodejs.org/es/)

**Database**

MongoDB  
[https://www.docker.com/](https://www.docker.com/)

If you don't want to install mongo you can install Docker and create a container of mongo db

DOCKER  
[https://www.docker.com/](https://www.docker.com/)
IMPORTANT: You need to run the following command on the terminal

```
docker pull mongo
docker run -d -p 27017-27019:27017-27019 --name mongodb mongo
```

### **IMPORTANT**

Create a database with the name **fwidb**  
and a collection with the name **\_init**

**Yarn (Optional)**  
https://yarnpkg.com/en/

## Cloning repo

```
1. Create a fork
2. Replace between the brackets with your username and
execute on the terminal:
git clone git@github.com:{{your_user_name}}/fwi-code-challenge.git
```

# Installing dependencies

In the root directory:

NPM

```
npm i
```

Yarn

```
yarn
```

# Running applications

Run all the application

```
NPM: npm start
YARN: yarn start
```

In the root directory:

Server

```
NPM: npm run start:server
YARN: yarn start:server
```

Client

```
NPM: npm run start:client
YARN: yarn start:client
```

# URLs

Client

```
http://localhost:3000/
```

Server

```
http://localhost:8000/
```

# Testing

Server

```
cd server/
yarn test (You must have admin priviligies)
```
