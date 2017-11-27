module.exports = {
  database: process.env.MONGO_URI || 'localhost/marvel',
  publicKey: process.env.MARVEL_API_PUBLIC_KEY || '7a425745b68d2c61162b0e737df53a0d',
  privateKey: process.env.MARVEL_API_PRIVATE_KEY || '640b772fa7a16d81c41fbe5e6ac9ddd4ed74d0c1'
};
