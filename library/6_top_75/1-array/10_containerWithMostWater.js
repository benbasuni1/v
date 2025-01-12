const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const containerWithMostWater = a => {
	let i = 0;
	let j = a.length - 1;
	let water = 0;

	while (i <= j) {
		let currentWater = (j - i) * Math.min(a[i], a[j]);
		water = Math.max(water, currentWater);
		a[i] < a[j] ? i++ : j--;
	}

	return water;
}
 
const main = () => {
	log(containerWithMostWater([1,8,6,2,5,4,8,3,7]))
}
 
main();