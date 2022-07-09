## How to install?

```
npm i kms-utils
```

## How to use in project?

### Example:

```
const KmsUtils = require('kms-utils')

const CONFIG = {region:'ap-south-1'} // Replace with actual config
const KMS_KEY = "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX" // Replace with actual config
const kmsUtilsObject = new KmsUtils(KMS_KEY, CONFIG);

//Inside async function, use as below
//Encryption
await kmsUtilsObject.encrypt('TEXT_TO_BE_ENCRYPTED', 'base64');

//Decryption
await kmsUtilsObject.decrypt('ENCRYPTED_STRING');
```

### Full Example:

```
const KmsUtils = require('kms-utils');

const CONFIG = {region:'ap-south-1'} // Replace with actual config
const KMS_KEY = "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX" // Replace with actual config
const kmsUtilsObject = new KmsUtils(KMS_KEY, CONFIG);

(async () =>  {
  let encryptedText = await kmsUtilsObject.encrypt('TEXT_TO_BE_ENCRYPTED', 'base64');
  console.log("Encrypted Text", encryptedText);
  let decryptedText = await kmsUtilsObject.decrypt(encryptedText);
  console.log("Decrypted Text", decryptedText);
})()
```
