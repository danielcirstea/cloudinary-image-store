
# Here we define the node version which will be used
FROM node:12

# We specify further the directory for our application
WORKDIR /usr/src/app

# We gather requirements from package.json and package-lock.json
COPY package*.json ./

# We install the dependencies
RUN npm install

# We bundle our app
COPY . .

# Expose the port on which the app will run
EXPOSE 3000

# We execute command for starting our app
CMD [ "node", "index.js" ]
