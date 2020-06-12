const CryptoJS = require('crypto-js');

const emailHash = (email) => CryptoJS(email).toString().toLowerCase().trim();

export default emailHash;
