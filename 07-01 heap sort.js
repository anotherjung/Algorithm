<script>
function heap () {
	var arr=[];
	arr[0]=null;
	function insert(val) {
		arr.push(val);
		swim(val);
	}
}
function swim(val) {
	for (var i=arr.length;i>0;i=math.floor(i/2)) {
		if (arr[i]>arr[math.floor(i/2)]) {
			temp=arr[i];
			arr[i]=arr[1/2];
			arr[i/2]=temp
		}
	}
}

</script>

