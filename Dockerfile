FROM node:8
# Create app directory
WORKDIR /usr/src/app

ENV SERVER_PORT=8080 CONNECTIONSTRING=mongodb+srv://mbanda:mbanda@biashara-point.zco8t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

# Install app dependencies
COPY package*.json ./

RUN npm install
# Copy app source code
COPY . .

#Expose port and start application
EXPOSE 8080
CMD [ "npm", "start" ]