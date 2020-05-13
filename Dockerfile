FROM node:10

# RUN apt-get update \
#  && apt-get install -y chromium ttf-freefont \
#  && rm -rf /var/lib/apt/lists/*

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .
# RUN npm run reports
EXPOSE 8080
CMD [ "tail", "-f", "/dev/null"]