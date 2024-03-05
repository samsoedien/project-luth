FROM node:20-alpine

ENV YARN_VERSION 4.1.0

RUN yarn policies set-version $YARN_VERSION

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

COPY packages/client/package.json ./packages/client/package.json

# RUN yarn install --immutable
RUN yarn install

COPY . .

EXPOSE 3000

CMD yarn client