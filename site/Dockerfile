FROM  node
WORKDIR /user/src/app
COPY  package*.json .
RUN npm install
EXPOSE 3000
CMD ["nodemon","app.js"]