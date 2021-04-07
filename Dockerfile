FROM node:alpine3.13
# FROM node:14.15.5


LABEL Maintainer="sunlingfeng & litao"

# make the 'app' folder the current working directory
WORKDIR /app

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .


# # copy both 'package.json' and 'package-lock.json' (if available)
# COPY package*.json ./

# install project dependencies
RUN npm install


# build app for production with minification
# RUN npm run build

# Run the image as a non-root user id is 10000
RUN adduser -D vue-user
USER vue-user


EXPOSE 8888
CMD [ "node", "server.js" ]
# CMD [ "node", "start" ]
