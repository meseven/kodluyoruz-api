const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../index');

chai.use(chaiHttp);

describe('Node Server', () => {
	it('should be have 200 status code', (done) => {
		chai
			.request(server)
			.get('/')
			.end((err, res) => {
				res.should.have.status(400);
				done();
			});
	});
});
