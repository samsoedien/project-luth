FROM node:20-alpine AS base

# ENV YARN_VERSION 4.1.0

# RUN yarn policies set-version $YARN_VERSION

# The web Dockerfile is copy-pasted into our main docs at /docs/handbook/deploying-with-docker.
# Make sure you update this Dockerfile, the Dockerfile in the web workspace and copy that over to Dockerfile in the docs.

FROM base AS builder
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
RUN apk update
# Set working directory
WORKDIR /usr/src/app
RUN yarn global add turbo
COPY . .
RUN turbo prune @project-luth/server --docker

# Add lockfile and package.json's of isolated subworkspace
FROM base AS installer
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /usr/src/app

# First install dependencies (as they change less often)
# COPY .gitignore .gitignore
COPY --from=builder /usr/src/app/out/json/ .
COPY --from=builder /usr/src/app/out/yarn.lock ./yarn.lock
# COPY --from=builder /usr/src/app/out/tsconfig.base.json ./tsconfig.base.json

# RUN yarn install --immutable
RUN yarn install 

# Build the project and its dependencies
COPY --from=builder /usr/src/app/out/full/ .
COPY turbo.json turbo.json

# Uncomment and use build args to enable remote caching
# ARG TURBO_TEAM
# ENV TURBO_TEAM=$TURBO_TEAM

# ARG TURBO_TOKEN
# ENV TURBO_TOKEN=$TURBO_TOKEN

# RUN cd apps/server && npx prisma db push
RUN cd apps/server && npx prisma generate

RUN yarn turbo build --filter=server...

FROM base AS runner
WORKDIR /usr/src/app

# Don't run production as root
RUN addgroup --system --gid 1001 expressjs
RUN adduser --system --uid 1001 expressjs
USER expressjs

COPY --from=installer /usr/src/app .

EXPOSE 5001

CMD node apps/server/dist/index.js

