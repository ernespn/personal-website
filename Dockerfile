# This image will be based on the official nodejs docker image
FROM node:argon

# Set in what directory commands will run
WORKDIR /home/app

# Put all our code inside that directory that lives in the container
ADD . /home/app

# Install Bower & Grunt
RUN npm install -g bower grunt-cli

#Install dependencies
RUN     npm install --silent
RUN     GIT_DIR=/tmp bower install --allow-root

# BUild and serve
#RUN     grunt
#RUN     grunt serve

EXPOSE 9000

CMD ["grunt", "serve"]
