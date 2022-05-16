const supertest = require('supertest');
const request = supertest('http://localhost:5000');
const { faker } = require('@faker-js/faker');
const password = faker.internet.password();
const phonenumber = faker.phone.phoneNumber();
const name = faker.name.findName();
const staffnumber = faker.random.numeric(5);
const username = faker.internet.userName()
describe('Express Route Test', function () {
	it('should return hello world', async () => {
	return request.get('/hello')
		.expect(200)
		.expect('Content-Type', /text/)
		.then(res => {
		expect(res.text).toBe('Hello BENR2423');
		});
	 })

	it('login successfully', async () => {
		return request
			.post('/login')
			.send({'username': "Arifaiman", 'password': "1234" })
			.expect('Content-Type', /text/)
			.expect(200).then(response => {
				expect(response.text).toEqual("login successful!");
			});
	});
    it('register', async () => {
        return request
			.post('/register')
			.send({'username': username, 'password': password,'name':name,'phonenumber':phonenumber,'staffnumber':staffnumber })
			.expect('Content-Type', /text/)
			.expect(200).then(response => {
				expect(response.text).toEqual("New user registered");
			});
	});

	it('login failed', async () => {
		return request
			.post('/login')
			.send({'username': "Arifaiman", 'password': "1235" })
			.expect('Content-Type', /text/)
			.expect(404).then(response => {
				expect(response.text).toEqual("Wrong password");
			});
	})

	

	it('register failed', async () => {
		return request
			.post('/register')
			.send({'username': 'user1', 'password': "123456",'name':'Angkaramessi','phonenumber':'01123456789','staffnumber':'99' })
			.expect('Content-Type', /text/)
			.expect(404).then(response => {
				expect(response.text).toEqual("The username or staff number already existed");
			});
	})
});
