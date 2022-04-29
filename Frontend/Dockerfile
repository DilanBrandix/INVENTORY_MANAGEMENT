FROM node:10-alpine

# Create app directory
WORKDIR /app

ADD package.json /app/package.json

ADD . /app

RUN npm install

EXPOSE 3074:3074

CMD ["npm", "run", "start"]
