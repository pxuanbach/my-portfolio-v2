# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:18-alpine as build

# Set the working directory
WORKDIR /usr/local/app

# Add the source code to app
COPY ./ /usr/local/app/

# Install all the dependencies
RUN npm install

# Generate the build of the application
RUN npm run build --prod


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:1.16.0-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html

RUN apk add --no-cache bash

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/dist/portfolio/browser /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["/bin/bash", "-c", "nginx -g \"daemon off;\""]