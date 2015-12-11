var MONGODB_URL = process.env.MONGODB_URL || null;

if (MONGODB_URL) {
  module.exports = {
    db: {
      name: 'doracms',
      connector: 'loopback-connector-mongodb',
      url: MONGODB_URL
    }
  };
}
