const sellProduct = require('../uppgift-3.js');

describe('sellProduct', () => {
	test('valid object', () => {
		let obj = {
			name: 'Hello Kitty umbrella',
			price: '299',
			count: 3
		};
		sellProduct(obj);
		expect(obj.count).toBe(2);
	});
})