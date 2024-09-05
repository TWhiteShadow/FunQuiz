# Start from the Node.js 18 image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Install Sass
RUN npm install -g sass

# Copy the rest of your application
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Start your app
CMD [ "npm", "run", "watch" ]