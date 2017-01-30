**teserver** is a Painless Nodejs (*Docker and S3 ready)* server for extracting text from pdf, doc, docx, xls, xlsx, csv, pptx, png, jpg, gif, rtf...

## Getting Started

Install **teserver** using `npm`:

```
npm install teserver
```
Add these environment variables

*S3 storage*
```javascript
AWS_ACCESS_KEY_ID: Amazon Web Service access key
AWS_SECRET_ACCESS_KEY: AWS secret key
S3_BUCKET: AWS bucket name
REGION: Bucket AWS region name
ACL: Access Control List, default public-read
```

*Set the server port and max file size (optional)*
```javascript
MAX_FILE_SIZE: Maximum file size allowed in Mb, default: 20
PORT: Your server port, default: 8080
UPLOAD_DIR: default: 'uploads'
```

Then, let's build up and start our Docker server

```Docker
docker build -t teserver .
docker run -it -p 8080:8080 teserver
```

We can also run it without Docker, but we'll need to to install some dependencies first
```js
sudo apt-get install xpdf
sudo apt-get install antiword
sudo apt-get install unrtf
sudo apt-get install tesseract-ocr

npm start
```

We are done! just send your http POST request with a file key to 

> http://**machine_ip**:8080/**upload**


You should have this kind of response

```js
{
  "status": "success",
  "file": {
    "fieldname": "file",
    "originalname": "Chomsky, 2003.pdf",
    "encoding": "7bit",
    "mimetype": "application/pdf",
    "size": 92522,
    "bucket": "textanalyseruploads",
    "key": "dc1b37a13512fc6f4asda33fa4a02dfda5b01485720269830.pdf",
    "acl": "public-read",
    "contentType": "application/octet-stream",
    "contentDisposition": null,
    "storageClass": "STANDARD",
    "metadata": {},
    "location": "https://URL_S3/f433fa4a02dfda5b01485720269830.pdf",
    "etag": "\"b8d0a7de12543dde068cc2b5ccd32f68\""
  },
  "text": "The text"
}
```
If things go wrong, you'll have to deal with this type of response
```js
{
  "status": "error",
  "file": {
    "fieldname": "file",
    "originalname": "Chomsky, 2003.pdf",
    "encoding": "7bit",
    "mimetype": "application/pdf",
    "size": 92522,
    "bucket": "textanalyseruploads",
    "key": "dc1b37a13512fc6f4asda33fa4a02dfda5b01485720269830.pdf",
    "acl": "public-read",
    "contentType": "application/octet-stream",
    "contentDisposition": null,
    "storageClass": "STANDARD",
    "metadata": {},
    "location": "https://URL_S3/f433fa4a02dfda5b01485720269830.pdf",
    "etag": "\"b8d0a7de12543dde068cc2b5ccd32f68\""
  },
  "error": "the error"
}
```

### MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
