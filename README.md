# kms-utils

# How to install?

# npm i kms-utils

## How to use in project?

### Example:

```
const KmsUtils = require('kms-utils')

const CONFIG = {region:'ap-south-1'} // Replace with actual config
const KMS_KEY = "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX" // Replace with actual config
const kmsUtils = new KmsUtils(KMS_KEY, CONFIG);

//Inside async function, use as below
//Encryption
await kmsUtils.encrypt('TEXT_TO_BE_ENCRYPTED', 'base64');

//Decryption
await kmsUtils.decrypt('ENCRYPTED_STRING');
```
