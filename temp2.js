<script type="text/javascript">
// 1 - Create a program that goes through each value in array x, where x is [3,5,'Dojo', 'rocks', 'Michael', 'Sensei']. Have it log each value of the array.
var x = [3,5,'Dojo', 'rocks', 'Michael', 'Sensei'];
for(index in x)
{
	console.log(x[index]);
}
// 2 - Add a new value in the array x using a push method. New value you should add is 100.
x.push(100);
console.log(x);
// 3 - Add a new array as the last member of the array then log x in the console and analyze how x looks.
x.push(['1','2','3']);
console.log(x);
// 4 - Create a simple for loop that sums all the numbers between 1 to 500. Have console log the final sum.
for(var i = 0, sum = 0; i <= 500; i++)
{
	sum += i;
}
console.log(sum);
// 5 - Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the minimum value, and then print it
var arr = [1, 5, 90, 25, -3, 0];
min = arr[0];
for(index in arr)
{
	if(arr[index] < min)
		min = arr[index]
}
console.log(min);
</script>	