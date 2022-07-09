const aws = require('aws-sdk');

class KmsUtils{
  constructor(KMS_KEY, KMS_CONFIG){
    this.KMS_KEY = KMS_KEY;
    this.KMS_CONFIG = KMS_CONFIG;
    this.validate();
  }
  
  validate(){
    if(!this.KMS_KEY){
      throw new Error("KMS key not present")
    }
    if(!this.KMS_CONFIG){
      throw new Error("KMS config not present")
    }
    this.kms = new aws.KMS(this.KMS_CONFIG);
  }

  encrypt = async (text, outputFormat = 'base64') => {
    try{
      const Plaintext = Buffer.from(text,'utf-8')
      const params = {
        KeyId: this.KMS_KEY,
        Plaintext
      };
      const res = await this.kms.encrypt(params).promise()
      return res.CiphertextBlob.toString(outputFormat)  
    }catch(e){
      console.log("KMS encryption error",e);
    }
  }

  decrypt = async (text) => {
    try{
      let CiphertextBlob = Buffer.from(text,'base64')
      const res = await  this.kms.decrypt({CiphertextBlob}).promise();
      return res.Plaintext.toString('utf-8')
    }catch(e){
      console.log("KMS decrption error",e);
    }
    
  }

}

module.exports = KmsUtils;