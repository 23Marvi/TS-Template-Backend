# Build Stage 1
# This build created a staging docker image
#
FROM node:18 AS builder
WORKDIR /usr/src/app
COPY tsconfig.json ./
COPY package.json ./
RUN npm install
COPY ./src ./src
RUN npm run build

# Build Stage 2
# This build takes the production build from staging build
#
FROM node:18
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install --only=prod
COPY --from=builder /usr/src/app/build ./build
EXPOSE 80 443
CMD npm start
