
const sumZero = require('../solution/sumZero');

test('findNumbers', () => {
    let check=(item, size)=>item.reduce((sum,a)=>sum+a)==0&&(new Set(item)).size==size;

    let a1=sumZero(5);
    expect(check(a1,5)).toBeTruthy();
    let a2=sumZero(3);
    expect(check(a2,3)).toBeTruthy();
    let a3=sumZero(99);
	expect(check(a3,99)).toBeTruthy();

});