# Get the base image
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy the source code
COPY ./ ./

# Install dependencies
RUN npm install

# Expose the port
EXPOSE 4000

# Start the application
CMD ["npm" , "start"]


# docker build -t "image_name":"version_id" ./

# docker run --name "container_name" -p 3000:3000 "image_name"
# docker run --name "container_name" -p 3000:3000 --rm -v /app/node_modules -v ${PWD}:/app node-image:v1

# when we built Node Project, nodemon liten to project changes

# To push the locally created cotainer to the hub -----------

# docker login
# docker tag "image_name" "docker_usename"/"image_name" -> after finalizing the locally container, creates a remote container in Docker hub
# docker push "docker_usename"/"image_name"
# docker pull "docker_usename"/"image_name"