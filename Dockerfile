FROM node:18-alpine AS build

# Create app folder
RUN mkdir /app
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Build app
RUN ./node_modules/.bin/nx build

FROM nginx:alpine
COPY --from=build /app/dist/myreactapp /usr/share/nginx/html
