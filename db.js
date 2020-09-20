const mongoose = require('mongoose');

const {
  MONGO_USERNAME='Abhi',
  MONGO_PASSWORD='Abhi@3489',
  MONGO_HOSTNAME='test1.byx8q.mongodb.net/test',
  MONGO_PORT='27017',
  MONGO_DB='sharkinfo',
  MONGO_REPLICASET
} = process.env;

const options = {
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  connectTimeoutMS: 10000,
};

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?replicaSet=${MONGO_REPLICASET}&authSource=admin`;

mongoose.connect(url, options).then( function() {
  console.log('MongoDB is connected');
})
  .catch( function(err) {
  console.log(err);
});
