FROM node:20-alpine

ENV YARN_VERSION 4.1.0

RUN yarn policies set-version $YARN_VERSION

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

COPY packages/server/package.json ./packages/server/package.json

# RUN yarn install --immutable
RUN yarn install

COPY . .

EXPOSE 5001

CMD yarn server