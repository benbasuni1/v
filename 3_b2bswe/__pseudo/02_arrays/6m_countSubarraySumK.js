// 🕑 O(n)
// 🛰 O(n)
// 6. Count Subarray Sum to K

map = {0 : 1}
sum = 0, count = 0

(item of a):
	sum += item
	diff = sum - k
	if (map.diff) count += map.diff
	map.sum = map.sum ? map.sum + 1 : 1

return  count