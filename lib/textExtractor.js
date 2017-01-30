'use strict';

const textract = require('textract');

module.exports = function(file) {
  return new Promise(function(resolve, reject) {
    if (!file) reject('[TextExtractor.] File is missing');
    if (!file.hasOwnProperty('location')) reject('[TextExtractor.] "file" property is missing')
    
    textract.fromUrl (
      file.location, {'typeOverride' : file.mimetype},
      (error, data)=>{
        if (error) {
          reject(error);
        }else{
          resolve(data);
        }
        return;
    })
  })
}
