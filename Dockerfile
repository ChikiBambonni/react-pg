FROM node:current-slim

WORKDIR /usr/src/app

RUN apt-get update && apt-get install python -y
RUN apt-get update && apt-get install make
RUN apt-get update && apt-get install g++ -y

COPY package.json .
RUN npm install

EXPOSE 3000
CMD ["npm", "run", "start" ]

COPY . .
