const { BinarySearchTree } = require('../../__common/data_structures/8_binarySearchTree');
const { binarySearchTreeHelper: utils, log, line } = require('../../__common/utils');

// 🕑 O()
// 🛰 O()
const isSymmetric = t => {
	if (!t) return true;

	// left value is equal to right value
	// left children has the same amount of right children 

}

const main = () => {
	const tree = new BinarySearchTree(2);
	tree.left = new BinarySearchTree(1);
	tree.right = new BinarySearchTree(3);

	log(isSymmetric(tree))
}

main();