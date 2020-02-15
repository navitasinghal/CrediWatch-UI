FROM node:12-alpine
WORKDIR /app
COPY . /app

RUN npm install --only=production

EXPOSE  3000
CMD ["npm", "start"]