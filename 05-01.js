Q1

var x = 6
x = x + 8
console.log(x)

var x = 6
x = x + 8 >> 6+8 >>  14
console.log(x) >> 14


Q2
var x = 1
var z = 1
var y = x-z 
console.log(y+3)  

var x = 1
var z = 1
var y = x-z >> 1-1 >> 0 
console.log(y+3) >> 0+3 >> 3


Q3
var x = [7,3,4,7,6]
var y = x[3] - x[1]
console.log(y)


var x = [7,3,4,7,6]
var y = x[3] - x[1] >> 7-3 >> 4
console.log(y) >> 4


Q4
var x = [5,3,9,5,4]
var y = [7,3,5,1,6]
y[0] = x[2] - 1
y[1] = y.length - y[0]

var x = [5,3,9,5,4]
var y = [7,3,5,1,6]
y[0] = x[2] - 1 >> 9 - 1 >> 8
y[1] = y.length - y[0] >> 5 - 8 >> -3



Q5
var x = [6,6,8,8,4]
var y = [7,6,9,9,4]
x[0] = x[1] + y[2]
y[1] = y[2] - x[0]
console.log(x)

var x = [6,6,8,8,4]
var y = [7,6,9,9,4]
x[0] = x[1] + y[2] >> 6+9 >> 15
y[1] = y[2] - x[0] >> 9-6 >> 3
console.log(x) >> [15,6,8,8,4]



Q6
var x = [5,5,1,5,8]
var y = x[0] + x[2]
x.push(y)
x.push(x.length)
console.log(x)

var x = [5,5,1,5,8]
var y = x[0] + x[2] >> 5+1 >>6
x.push(y) >> var x = [5,5,1,5,8,6]
x.push(x.length) >> var x = [5,5,1,5,8,6,6]
console.log(x) >>[5,5,1,5,8,6,6]

Q7
var x = [3,9,4,6,1]
if (x[2] < 4)
	{
	console.log(11)
	}
	else {
	console.log(5000)
	}

var x [3,9,4,6,1]
if (x[2] < 4) >> if (4 < 4)
	{
	console.log(11)
	}
	else {
	console.log(5000) >>5000
	}


Q8	
var x = 8;
for ( var i=0; i<4; i++)
	{
	x = x+2
	}
	console.log(x)

for ( var i=0,; i<4; i++)

i=0; 0<4; >>true 
x=8+2; >>10
x=10
i++ >>i=1

i=1; 1<4; >> true
x=10+2; >>12
x=12
i++ >> i=2

i=2; 2<4; >> true
x=12+2; >>14
x=14
i++ >> i=3

i=3; 3<4; >> true
x=14+2; >>16
x=16
i++ >> i=4

var x = 8
for ( var i=0,; i<4; i++)
	{
	x = x+2
	}
	console.log(x) >>16


Q9
x = [];
for(var i=0; i<6; i++)
{
x.push(i*2)
}
console.log(x)

x = [];
for(var i=0; i<6; i++)
{
x.push(i*2)
}
console.log(x)

x = [0,2];
for(var i=1; 1<6; i++)
{
x.push(1*2) >> 2
} >>i=2
console.log(x) 

x = [0,2,4];
for(var i=2; 2<6; i++)
{
x.push(2*2) >> 4
} >>i=3
console.log(x) 


x = [0,2,4,6];
for(var i=3; 3<6; i++)
{
x.push(3*2) >> 6
} >>i=4
console.log(x) 

x = [0,2,4,6,8];
for(var i=4; 4<6; i++)
{
x.push(4*2) >> 8
} >>i=5
console.log(x)

x = x = [0,2];
for(var i=1; 1<6; i++)
{
x.push(1*2) >> 2
} >>i=2
console.log(x) 

x = [0,2,4];
for(var i=2; 2<6; i++)
{
x.push(2*2) >> 4
} >>i=3
console.log(x) 


x = [0,2,4,6];
for(var i=3; 3<6; i++)
{
x.push(3*2) >> 6
} >>i=4
console.log(x) 

x = [0,2,4,6,8];
for(var i=4; 4<6; i++)
{
x.push(4*2) >> 8
} >>i=5
console.log(x)

x = [0,2,4,6,8,10];
for(var i=5; 5<6; i++)
{
x.push(5*2) >> 10
} >>i=6
console.log(x) ;
for(var i=5; 5<6; i++)
{
x.push(5*2) >> 10
} >>i=6
console.log(x) 
//A9[0,2,4,6,8,10]

//Q10 
var x = [1,4,8,8,6]
for (var i=0; i<x.length; i++)
{
	x[i] = x[i]+i 
}
console.log(x)

var x = [1,4,8,8,6]
for (var i=0; i<x.length; i++)
{
	x[i] = x[i]+i 
}
console.log(x)

var x = [1,4,8,8,6]
for (var i=0; 0<5; i++)
{
	x[0] = x[0]+0 >> 1
}  >> i=1
console.log(x) >> var x = [1,4,8,8,6]

var x = [1,4,8,8,6]
for (var i=1; 1<5; i++)
{
	x[1] = x[1]+1 >> 4+1 >> 5
} i=2
console.log(x) >> var x = [1,5,8,8,6]

var x = [1,5,8,8,6]
for (var i=2; 2<5; i++)
{
	x[2] = x[2]+2 >> 8+2 >> 10
} i=3
console.log(x) >> var x = [1,5,10,8,6]

var x = [1,5,10,8,6]
for (var i=3; 3<5; i++)
{
	x[3] = x[3]+3 >> 8+3 >> 11
} i=4
console.log(x) >> var x = [1,5,10,11,6]

var x = [1,5,10,11,6]
for (var i=4; 4<5; i++)
{
	x[4] = x[4]+4 >> 6+4 >> 10
} i=5
console.log(x) >> var x = [1,5,10,11,10]
//A10 [1,5,10,11,10]

//Q11
var x = [7,7,3,3,4]
for(var i=0; i<x.length; i=i+2)
{
	x[i] = x[i] + i
}
console.log(x)

for(var i=0; 0<5; i=0+2)
{
	x[0] = x[0] + 0 >>7+0 >>7
} >>i=2
console.log(x) >>[7,7,3,3,4]

for(var i=2; 2<5; i=2+2)
{
	x[2] = x[2] + 2 >>3+2 >>5
} >>i=4
console.log(x) >>[7,7,5,3,4]

for(var i=4; 4<5; i=4+2)
{
	x[4] = x[4] + 4 >>4+4 >>8
} >>i=6
console.log(x) >>[7,7,5,3,8]
//A11 [7,7,5,3,8]

//Q12
function a(b,c,d)
{
	console.log(d)
	return b+c+2
	}
console.log(a(2,3,5))

function a(2,3,5)
{
	console.log(5) >>5
	return 2+3+2 >>7
	}
console.log(7)
//A12 5,7

//Q13
function a(b,c,d)
{
	console.log(d)
	return b+c+2
}
console.log(a(2,3,5)) +a(1,2,3))

function a(2,3,5)
{
	console.log(5) >>5
	return 2+3+2 >>7
}
console.log(7) + a(1,2,3))
//A13 5,

function a(1,2,3)
{
	console.log(3) >>3
	return 1+2+2 >>5
}
console.log(7) + (5)) >> 12
//A13 5,3,12

Q14
function a(b,c,d)
{
	console.log(d)
	return b+c+4
	}
console.log(a(2,3,a(1,2,3)) + a(-9,2,3))

function a(1,2,3)
{
	console.log(3) >>3
	return 1+2+4 >>7
	}
console.log(a(2,3,7) + a(-9,2,3))
//A14 3

function a(2,3,7)
{
	console.log(7) >>7
	return 2+3+4 >>9
	}
console.log(9) + a(-9,2,3))
//A14 3,7

function a(-9,2,3)
{
	console.log(3) >>3
	return -9+2+4 >>-3
	}
console.log(9 +-3) >>6
//A14 3,7,3,6




