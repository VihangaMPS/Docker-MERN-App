# use the base from docker hub
FROM node:20-alpine

# set the working directory
WORKDIR /app

# copy the rest of the application files
COPY ./ ./

# install dependencies
RUN npm install

# expose the port
EXPOSE 5173

# start the application
CMD ["npm" , "run" , "dev"]





# 1st Step - build the docker image(bluprint) using dockerfile
# docker build -t "image_name" ./

# 2nd Step - using the image, create a container & link with Docker Volume
# docker run --name "container_name" -p 3000:5173 --rm -v /app/node_modules -v ${PWD}:/app -e CHOKIDAR_USEPOLLING=true "image_name"

# --rm -> remove the volumes when the container stopped

# -p 3000:5173 -> applying a custom(300) port to current running(5173) application

# When you create the container you can create sperate volues inside that container -> -v "module_name"
# -v /app/node_modules -v ${PWD}:/app -> adding modules to the docker volume( -v "module_name")

# ${PWD}:/app -> PWD means Presnt Working Directory
#    Docker will take the PWD path & set that data(files folders) to the volume

# -e CHOKIDAR_USEPOLLING=true -> listen & updated application as we updated the project





# check build all images
# docker images

# check created containers
# docker ps -> show only running containers
# docker ps -a -> show all containers

# to stop a running container
# docker stop "container_name"

### to remove a image you must stop the container & remove after you can remove the image ---
# to remove a container
# docker container rm "container_name"

# to remove a image
# docker image rm "image_name"
