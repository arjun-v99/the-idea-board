# Stage 1: Build the application
FROM node:20-alpine AS build

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your backend code
COPY . .

# Stage 2: Production image (optional, but good practice for smaller size)
FROM node:20-alpine

WORKDIR /usr/src/app

# Copy only the necessary files from the build stage
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app .

# Expose the port your Node.js app runs on (e.g., 3000)
EXPOSE 3000

# Command to run the application
CMD [ "node", "app.js" ]