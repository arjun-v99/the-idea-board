# Stage 1: Build the Angular application
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy all the Angular source code
COPY . .

# Build the app (assuming 'npm run build' generates files in a 'dist' folder)
# NOTE: Check your package.json script for the actual build command
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Copy the build output from the previous stage to Nginx's serving directory
# NOTE: Replace 'my-app' with the actual output folder name from your Angular build
COPY --from=build /app/dist/frontend/browser /usr/share/nginx/html
COPY --from=build /app/dist/frontend/3rdpartylicenses.txt /usr/share/nginx/html/
COPY --from=build /app/dist/frontend/prerendered-routes.json /usr/share/nginx/html/

# Copy a custom nginx configuration (optional, but recommended)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the default Nginx port
EXPOSE 80

# The default Nginx command will run, serving the static files.
CMD ["nginx", "-g", "daemon off;"]