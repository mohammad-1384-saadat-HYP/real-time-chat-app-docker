FROM node:24-slim 

WORKDIR /real-time-chat-app-docker

COPY package.json ./
COPY package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

CMD [ "npm", "start" ]