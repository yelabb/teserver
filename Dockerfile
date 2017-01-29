FROM ubuntu:14.04
ENV DEBIAN_FRONTEND noninteractive
MAINTAINER youssef@comepic.com
LABEL NAME="teserver"

# Update your distribution and install curl
RUN apt-get update && apt-get upgrade -qqy
RUN apt-get install curl -y

# Install nodejs and npm
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash - && \
apt-get install -y nodejs

# Install text extraction dependencies
RUN apt-get install -y xpdf
RUN apt-get install -y antiword
RUN apt-get install -y unrtf
RUN apt-get install -y tesseract-ocr
RUN apt-get install -y tesseract-ocr-fra
RUN apt-get install -y tesseract-ocr-eng
RUN apt-get install -y tesseract-ocr-deu

# Prepare the app folder
COPY package.json /tmp/package.json
RUN cd /tmp && npm install --production
RUN mkdir -p /usr/src/app && mv /tmp/node_modules /usr/src
WORKDIR /usr/src/app
COPY . /usr/src/app

#Open the app to the external world
EXPOSE 8080

#start the app
CMD npm start
