FROM node:18.16.0-alpine

WORKDIR /home/node/app

COPY package*.json .

RUN npm ci

COPY . .

RUN [ "npm", "run", "build" ]

ENTRYPOINT [ "npm", "run" ]

CMD [ "start" ]
