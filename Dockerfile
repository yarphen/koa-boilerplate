FROM node:8-alpine

WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

RUN npm install

COPY . /usr/src/app/

EXPOSE 8888

CMD [ "npm", "run", "forever" ]