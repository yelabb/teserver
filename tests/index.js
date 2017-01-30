process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../lib/textExtractor.js');
let should = chai.should();

chai.use(chaiHttp);

let txt_file = {};
txt_file.location = "https://s3.amazonaws.com/github-tests/teserver/test.txt";

let pdf_file = {};
pdf_file.location = "https://s3.amazonaws.com/github-tests/teserver/test.pdf";

let docx_file = {};
docx_file.location = "https://s3.amazonaws.com/github-tests/teserver/test.docx";

/*
* Test /lib/textExtractor.js
*/
describe('Documents to raw text', () => {
    it('it should read a text file', (done) => {
        server(txt_file).
        then((d)=>{
            d.should.be.equal('this is a test file')
            done()
        })
    });
    it('it should read a pdf file', (done) => {
        server(pdf_file).
        then((d)=>{
            d.should.be.equal('this is a test file')
            done()
        })
    });
    it('it should read a docx file', (done) => {
        server(docx_file).
        then((d)=>{
            d.should.be.equal('this is a test file')
            done()
        })
    });
});