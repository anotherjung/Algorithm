//q1
for(num1=1; num1<=3; num1++)
{
	for(num2=1;num2<=2;num2++)
	{
		console.log('Dojo');
	}
}

for(num1=1; num1<3; num1++) 1,2
{
	for(num2=1;num2<=2;num2++) >>2,3
	{
		console.log('Dojo');
	}
}

//a1 Dojo,Dojo,Dojo,Dojo,Dojo,Dojo

//q2
for(num1=0; num1<=3; num1++)
{
	for(num2=0; num2<=2; num2++)
	{
		if(num1 == 5)
		{
			console.log('coder');
		}
	}
	console.log('ninja')
}


for(num1=3; num1<=3; num1++) 0 >>1 >>2 >>3
{
	for(num2=3; num2<=2; num2++) 0 >>1 >>2 >>3
	{
		if(num1 == 5) 
		{
			console.log('coder');
		}
	}
	console.log('ninja')
}
//a2 ninja,ninja,ninja,ninja

//q3
var x = 'coding';
var y = 'dojo';

for(num1=0; num1<=x.length-3; num1++)
{
	for(num2=0; num2<=y.length-4; num2++)
	{
		console.log(x+y);
	}
}

var x = 'coding';
var y = 'dojo';

for(num1=2; num1<=3; num1++) >>0 >>1 >>2 >>3
{
	for(num2=2; num2<=2; num2++) >>0 >>1 >>2
	{
		console.log(x+y);
	}
}

//a3 codingdojo,codingdojo,codingdojo,codingdojo
//if num2\\<=2, why isn't the answer just two codingdojo,codingdojo??


//q4
var msg1 = 'hello';
var msg2 = 'world';

for (num1=1; num1<=msg1.length; num1++)
{
	for(num2=1; num2<=msg2.length; num2++)
		{
			if(msg1.length==4)
			{
				(console.log(msg1+' '+msg2));
			}	
		}
if(num1 !=4)
{
	console.log(msg1.length+msg2.length);
}
}



var msg1 = 'hello';
var msg2 = 'world!';

for (num1=1); num1<=5; num1++) >>1 >>2 >>3 >>4 >>5
{
	for(num2=1; num2<=5; num2++) >>1 >>2 >>3 >>4 >>5
		{
			if(5==4) >>false
			{
				(console.log(msg1+' '+msg2));
			}	
		}
if(num1 !=4)
{
	console.log(5+5); >>10
}
}

//a4 11,11,11,11

//q5
array = [5,3,4,1]
for(var x=0; x<array.length; x++)
{
	for(var y=array.length-1; y>=x; y--)
		{
			for(var y=array.length-1; y>x; y--)
			{
				if(array[x] > array[y]) {
					var temp = array[y]; array[y] = array[x]; array[x]=temp;
				}
			}
		}
}
console.log(array)




array = [5,3,4,1]
for(var x=0; x<4; x++) x=0, x=1, x=2, x=3
{
	for(var y=3; y>=x; y--) y=3, y=2, y=1, y=0>=1
		{
			for(var y=3; y>x; y--) y=3, y=2, y=1, y=0 
			{
				if(array[x]>array[y]; 5>1, 3>4, ??, 1>
					array[y]=array[x]; 
					array[x]=temp;)
			}
		}
}
console.log(array)

//a4 [1,3,4,1]
//question about the third take

//q5
array = [5,3,4,1]
for(var x=0; x<array.length; x++)
{
	for(var y=array.length-1; y>=x; y--)
	{
		if(array[x] > array[y])
		{ 
			var temp = array[y]; 
			array[y] = array[x];
			array[x] = temp;
		} 
			
	}
}
console.log(array)


array = [5,3,4,1]
for(var x=0; x<4; x++) >>0
{
	for(var y=3; 3>=0; y--) >>3
	{
		if(array[0] > array[3]) >>5>1
		{ 
			var temp = array[3]; >>temp=1
			array[3] = array[0]; >>[5,3,4,5]
			array[0] = temp; >>[1,3,4,5]
		} 
			
	}
}
console.log(array)

//a5 [5,3,4,1]
//the answer stops at the first take? 


 



