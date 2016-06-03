var request = require('supertest');
var api = require('../index');

describe('API', function() {
	describe('Contacts', function() {
		it('GET /api/contacts should return the list of registered contacts', function() {
			return request(api)
			.get('/contacts')
			.send()
			.expect(200);
		});

		it('GET /api/contacts/:name should return the list of registered contacts with the same name', function() {
			return request(api)
			.get('/contacts/foo')
			.send()
			.expect(200)
			.expect(function(res, err) {
				return res.body instanceof Array
			});
		});

		it('POST /api/contacts should create a new contact', function() {
			return request(api)
			.post('/contacts')
			.send({contact: {name: "edward"}})
			.expect(200);
		});

		it('PUT /api/contacts/:name/:new should update all contacts with the same name', function() {
			return request(api)
			.put('/contacts/foo/bar')
			.send()
			.expect(200);
		});

		it('DELETE /api/contacts/:name should remove all contacts with the same name', function() {
			return request(api)
			.delete('/contacts/foo')
			.send()
			.expect(200);
		});
	});
});