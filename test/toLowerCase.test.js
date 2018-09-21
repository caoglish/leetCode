const toLowerCase = require('../solution/toLowerCase').toLowerCase;
const toLowerCase1 = require('../solution/toLowerCase').toLowerCase1;
test('toLowerCase', () => {
	expect(toLowerCase('HelloWorld')).toBe('helloworld');
});

test('toLowerCase1', () => {
	expect(toLowerCase1('HelloWorld')).toBe('helloworld');
});