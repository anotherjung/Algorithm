//q1
var x=[];
x[0]='Hello';
x[1]='World';
x[2]=100;
console.log(x.length +'' +x[0]);

var x=[];
x[0]='Hello';
x[1]='World';
x[2]=100;
console.log(x.length +' ' +x[0]);

//a1 '3 Hello'

//q2
var x=2;
var points=[40,100,1,5,25,10];
if(points[x]==1)
{
	console.log(points[x-2]);
}
else
{
	console.log('hello');
}


var x=2;
var points=[40,100,1,5,25,10];
if(points[x]==1)
{
	console.log(points[x-2]);  >>2-2=0 >>points[0]
}
else
{
	console.log('hello');
}
//a2 40

//q3
var x=2;
var y=[1,2,3,4,5];
var z=[6,7,8,9,10];
if(y[x]+z[1]==z[4])
{
	console.log('Dojo');
}
else
{
	console.log('Hello World');
}

var x=2;
var y=[1,2,3,4,5];
var z=[6,7,8,9,10];
if(y[2]+z[1]==z[4])  >>3+7==10
{
	console.log('Dojo');
}
else
{
	console.log('Hello World');
}

//a3 Dojo

//q4
var x = 'boom';
var y = ['hi', 'hello', 'hey'];
if(x.length==3)
{
	y.push(x);
	console.log(x[3]);
}
else
{
	console.log(x);
}


var x = 'boom';
var y = ['hi', 'hello', 'hey'];
if(4==3)  >>
{
	y.push(x);
	console.log(x[3]);
}
else
{
	console.log(x);
}
//a4 boom

//q5
x = ['John', 'Chris', 'Mark', 'PJ'];
if(x.length==4)
{
	console.log(x[x.length-3]);
}
else
{
	console.log('Dojo');
}


x = ['John', 'Chris', 'Mark', 'PJ'];
if(x.length==4)  >>4==4, >>4==4
{
	console.log(x[x.length-3]); >>4-3=1 x[1], >>4-3=1 x[1]
}
else
{
	console.log('Dojo');
}

//a5 Chris, Chris, Mark, Dojo

