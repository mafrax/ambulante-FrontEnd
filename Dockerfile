FROM nginx:1.17
COPY . /usr/share/nginx/html

FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install -g @ionic/cli

# add app
COPY . ./

# start app
CMD ["ionic", "serve"]
