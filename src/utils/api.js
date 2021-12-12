import md5 from 'md5';

const baseUrl = 'http://gateway.marvel.com/v1/public/comics';

const publicKey = 'ddb53947695fa97ba87e4dbd22d0b4fc';
const privateKey = '85641988ec8b4f5a0488e5d5fb72b97d9dcf3abe';

const timestamp = Number(new Date());

const hash = md5(timestamp + privateKey + publicKey);

const url = `${baseUrl}?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

export default url;