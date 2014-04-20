function typeOf(x){//.match(/^\[object\s(.+)\]$/)[1]
	return Object.prototype.toString.call(x).slice(8,-1).toLowerCase();
};


//==============
console.clear();
var typesfound={};
function Test(a,b){
	var o=console;
	o.group();
	o.log("%c" + a,'font-weight:bold');
	//o.dir(b);
	b.forEach(function(x){
		var k=typeOf(x);
		typesfound[k]=k;
		o.log(k);
	});
	o.groupEnd();
};
var indefinito,
EmptyArray=[],SimpleArray=[1,2,3],ComplexArray=[[1,2],[3,4]],
EmptyObject ={},SimpleObject ={a: 1,b: 2},ComplexObject={a:{b: 1}};

//-

type: undefined
Test('#Undefined',[undefined,void(0),indefinito]);/*all: undefined, type:undefined*/

Test('#Strings',[
	"",String(""),String(EmptyArray),
	" ","  ","\t","\n","\r\n","bla",
	String(EmptyObject),String(SimpleObject),
	String(SimpleArray),
	String("abc"),
	String(false),String(true),
	String(0),String(1),
	String(undefined),String(indefinito),
	String(Object),String(String)
]);
//type: string
/*
""  "" ""
" " "  " "	" "\n" "\r\n" "bla"
"[object Object]" "[object Object]"
"1,2,3"
"abc"
"false" "true"
"0" "1"
"undefined" "undefined"
"function Object() { [native code] }"
"function String() { [native code] }"
*/

Test('#Strings-Obj',[
	new String(),
	new String(""),new String("abc"),
	new String(false),new String(true),
	new String(0),new String(1),
	new String(EmptyArray),new String(SimpleArray),
	new String(EmptyObject),new String(SimpleObject),
	new String(undefined),new String(indefinito),new String(Object),new String(String)
]);
/*
all: String ,type: string
*/

Test('#Numbers',[
	0,1,666.0,3.14,
	Math.PI,Math.SQRT2,Math.SQRT1_2,Math.E,Math.LN2,Math.LN10,Math.LOG2E,Math.LOG10E,
	Number(),Number(""),Number(false),Number(0),
	Number(true),Number(1)
]);
//type: number
/*
0,1,666,3.14
3.141592653589793
1.4142135623730951
0.7071067811865476
2.718281828459045
0.6931471805599453
2.302585092994046
1.4426950408889634
0.4342944819032518
0,0,0,0
1,1
*/

Test('#SpecialNumbers',[
	Number(EmptyArray),
	Infinity,NaN,
	Number("abc"),
	Number(SimpleArray),
	Number(EmptyObject),Number(SimpleObject),
	Number(undefined),Number(indefinito),Number(Object),Number(Number)
]);
//type: number
/*
0
Infinity
other:NaN
*/

Test('#Numbers-Obj',[
	new Number(),
	new Number(""),new Number("abc"),
	new Number(false),new Number(true),
	new Number(0),new Number(1),
	new Number(EmptyArray),new Number(SimpleArray),
	new Number(EmptyObject),new Number(SimpleObject),
	new Number(undefined),new Number(indefinito),new Number(Object),new Number(Number)
]);
/*
all: Number, type: number
*/

Test('#Booleans',[
	true,Boolean("abc"),Boolean(true),Boolean(1),Boolean(Object),Boolean(Boolean),
	Boolean(EmptyArray),Boolean(SimpleArray),
	Boolean(EmptyObject),Boolean(SimpleObject),
	false,Boolean(),Boolean(""),Boolean(false),Boolean(0),Boolean(undefined),Boolean(indefinito)
]);
//type: boolean
/*
true true true true true true true true true true
false false false false false false false
*/

Test('#Booleans-Obj',[
	new Boolean(),
	new Boolean(""),new Boolean("abc"),
	new Boolean(false),new Boolean(true),
	new Boolean(0),new Boolean(1),
	new Boolean(EmptyArray),new Boolean(SimpleArray),
	new Boolean(EmptyObject),new Boolean(SimpleObject),
	new Boolean(undefined),new Boolean(indefinito),new Boolean(Object),new Boolean(Boolean)
]);
/*
all: Boolean, type: boolean
*/

Test('#Functions',[
function(){},function pippo(){},
Function("a","b","return a + b"),
Function(""),
Function()
]);
//type: function
/*
function (){}
function pippo(){}
function anonymous(a,b
function anonymous() {
function anonymous() {
*/

Test('#FunctionsNative ',[Math.sin,isNaN,Date,Object,Function,]);
//type: function
/*
function sin() { [native code] }
function isNaN() { [native code] }
function Date() { [native code] }
function Object() { [native code] }
function Function() { [native code] }
*/

Test('#Functions-Obj',[
new Function("a","b","return a + b"),
new Function(""),
new Function()
]);
//type: function
/*
function anonymous(a,b
function anonymous() {
function anonymous() {
*/

Test('#Rgxs',[/(zzz)/,/(\b)/gi]);
//type: regexp
/*
/(zzz)/
/(\b)/gi
*/

Test('#Rgxs-Obj',[new RegExp(),new RegExp("(\w)","i")]);
//type: regexp
/*
/(?:)/
/(w)/i
*/

Test('#Dates',[
	Date(),Date(""),
	Date("December 17,1995 03:24:00"),Date("1995-12-17T03:24:00"),
	Date(1995,11,17),Date(1995,11,17,3,24,0),Date(98,1),
	Date(false),Date(0),
	Date(true),Date(1)
]);
//type: string
/*
All2String: "Sun Apr 20 2014 18:18:20 GMT+0200 (W. Europe Daylight Time)"
*/

Test('#Dates-Obj',[
	new Date(""),
	new Date(),
	new Date("1995-12-17T03:24:00"),
	new Date(1995,11,17),
	new Date("December 17,1995 03:24:00"),new Date(1995,11,17,3,24,0),
	new Date(false),new Date(0),new Date(true),new Date(1),
	new Date(98,1)
]);
//type: date
/*
0: Invalid Date
1: Sun Apr 20 2014 18:18:20 GMT+0200 (W. Europe Daylight Time)
2: Sun Dec 17 1995 04:24:00 GMT+0100 (W. Europe Standard Time)
3: Sun Dec 17 1995 00:00:00 GMT+0100 (W. Europe Standard Time)
4-5: Sun Dec 17 1995 03:24:00 GMT+0100 (W. Europe Standard Time)
6-9: Thu Jan 01 1970 01:00:00 GMT+0100 (W. Europe Standard Time)
10: Sun Feb 01 1998 00:00:00 GMT+0100 (W. Europe Standard Time)
*/

Test('#Errors',[
	new Error("Error-message"),
	new URIError("URI Error-message"),
	new TypeError("Type Error-message"),
	new SyntaxError("Syntax Error-message"),
	new ReferenceError("Reference Error-message"),
	new RangeError("Range Error-message"),
	new EvalError("Eval Error-message")
]);
//type: error
/*
0: Error
1: URIError
2: TypeError
3: SyntaxError
4: ReferenceError
5: RangeError
6: EvalError
*/

Test('#Objects',[null,EmptyObject,SimpleObject,ComplexObject,Object()]);
//type:null
//type:object
/*
0: null
1-4: Object
*/

Test('#Objects-Obj',[
	new Object(),new Object(undefined),new Object(EmptyObject),new Object(SimpleObject),
	new Object(""),
	new Object(0),new Object(1),
	new Object(false),new Object(true)
]);
//type:o,s,n,b
/*
0-3: Object
4: String
5-6: Number
7-8: Boolean
*/

Test('#Array',[EmptyArray,SimpleArray,ComplexArray]);
//type:array
/*
0: Array[0]
1: Array[3]
2: Array[2]
*/

Test('#Array-Obj',[
	new Array(),new Array(0),//Array[0]
	new Array(1,2,3),//Array[3]
	new Array(""),new Array(undefined),new Array(false),new Array(1),new Array(true),//Array[1]
	new Array(EmptyArray),new Array(SimpleArray)//Array[1]
]);
//type:array
/*
*/
Test('#XMLHttpRequest',[new XMLHttpRequest()]);
//
console.debug(typesfound);
/*
array
boolean
date
error
function
null
number
object
regexp
string
undefined
xmlhttprequest
*/
