FROM node:24-slim 

WORKDIR /real-time-chat-app-docker

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

CMD [ "npm", "start" ]