const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O()
// 🛰 O()
const permutations = a => {
	const fh = (a, n=0) => {
		if (n === a.length - 1) {
			res.push(a.slice(0));
			return;
		}

		for (let i = n; i < a.length; i++) {
			[a[i], a[n]] = [a[n], a[i]]
			fh(a, n + 1);
			[a[n], a[i]] = [a[i], a[n]]
		}
	}

	let res = [];
	fh(a)
	return res;
}
 
const main = () => {
	log(permutations([1, 2, 3]))
}
 
main();