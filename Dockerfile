FROM node:20
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./build ./build
COPY .env ./


EXPOSE 4000


CMD ["node", "./build/server.js"]
