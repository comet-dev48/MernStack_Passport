const jsonwebtoken = require('jsonwebtoken');

const generateJWTtoken = (user) => {
	const _id = user._id;
	const expiresIn = '1d';
	const payload = {
		sub: _id,
		iat: Date.now(),
	};

	const signedToken = jsonwebtoken.sign(payload, process.env.JWT_SECRET, {
		expiresIn,
	});

	return {
		token: 'Bearer ' + signedToken,
		expires: expiresIn,
	};
};

module.exports.generateJWTtoken = generateJWTtoken;

// const jwt = require('jsonwebtoken');
// import moment from 'moment';
// import config from '../config/config';

// /**
//  * Encode a payload as jwt
//  * @param {string} sub
//  * @returns {string}
//  */
// module.exports.encode = encode = (sub) => {
//   return jwt.sign({ sub, iat: Date.now(), }, config.jwt.secret);
// };

// /**
//  * Decodes a jwt encoded payload
//  * @param {string} token
//  * @returns {string}
//  */
// module.exports.decode = decode = (token) => {
//   const payload = jwt.verify(token, config.jwt.secret);
//   return (typeof payload.sub === 'function' ? payload?.sub() : payload.sub) as string;
// };