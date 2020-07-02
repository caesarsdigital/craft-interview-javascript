# Can you explain what is this file for? What does it do?
FROM node:alpine-12.13
USER ci-user
RUN npm cache clean --force
RUN npm i
WORKDIR /app
