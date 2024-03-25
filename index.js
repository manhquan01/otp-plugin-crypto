/**
 * @otplib/plugin-crypto
 *
 * @author Gerald Yeo <contact@fusedthought.com>
 * @version: 12.0.1
 * @license: MIT
 **/
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var crypto = _interopDefault(require('@arangodb/crypto'));

const createDigest = (algorithm, hmacKey, counter) => {
  const hmac = crypto.hmac(Buffer.from(hmacKey, 'hex'), Buffer.from(counter, 'hex'), algorithm);
  return hmac;
};
const createRandomBytes = (size, encoding) => {
  return crypto.genRandomBytes(size).toString(encoding);
};

exports.createDigest = createDigest;
exports.createRandomBytes = createRandomBytes;
