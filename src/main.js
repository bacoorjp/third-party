import bs58check from 'bs58check';
import elliptic from 'elliptic';
import CryptoJS from 'crypto-js';

import bip39 from 'bip39';
import bip69 from 'bip69';
import bitcoin from 'bitcoinjs-lib-zcash';
// zcash from 'bitcoinjs-lib-zcash';

import createHmac from 'create-hmac';
import ecurve from 'ecurve';
//  BigInteger from 'bigi';
import Buffer from 'buffer';
import Decimal from 'decimal.js';
import qrImage from 'qr-image';

import bigi from 'bigi';
import tx from 'ethereumjs-tx';
import objectHash from 'object-hash';
// fastSha256 from 'fast-sha256';
// serialijse from 'serialijse';
import scrypt from "js-scrypt";
import iban from 'iban';
// pbkdf2 from 'pbkdf2';
// scryptsy from "scryptsy";
// strftime from 'strftime';
// uuid from 'uuid';
import web3 from 'web3';

import zip from 'node-zip';
import sanitizeHtml from 'sanitize-html';

const ethereum = {
  tx
}
const thirdParty = {
  bs58check,
  elliptic,
  CryptoJS,
  bip39,
  bip69,
  bitcoin,
  createHmac,
  ecurve,
  Buffer,
  Decimal,
  qrImage,
  bigi,
  ethereum,
  objectHash,
  scrypt,
  iban,
  web3,
  zip,
  sanitizeHtml
}


export default thirdParty