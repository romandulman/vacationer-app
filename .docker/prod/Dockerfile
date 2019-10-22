FROM node:latest

WORKDIR /usr/src/app

COPY  ./backend/package*.json ./

RUN npm install

COPY ./backend .

COPY ./build ./public

EXPOSE 8081

CMD [ "npm", "start" ]
