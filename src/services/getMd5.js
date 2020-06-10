import md5 from 'crypto-md5';

const emailHash = (email) => md5(email).toString().toLowerCase().trim();

export default emailHash;
