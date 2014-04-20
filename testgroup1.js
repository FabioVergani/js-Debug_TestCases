console.clear();

function Test(a,b){
	var o=console;
	o.group();
	o.log("%c" + a,'font-weight:bold');
	o.dir(b);
	o.groupEnd();
};
var indefinito,
EmptyArray=[],SimpleArray=[1,2,3],ComplexArray=[[1,2],[3,4]],
EmptyObject ={},SimpleObject ={a: 1,b: 2},ComplexObject={a:{b: 1}};

//-

Test('#Undefined',[undefined,void(0),indefinito]);

Test('#Strings',[
	""," ","  ","\t","\n","\r\n","bla",
	String(EmptyObject),String(SimpleObject),
	String(EmptyArray),String(SimpleArray),
	String(""),String("abc"),
	String(false),String(true),
	String(0),String(1),
	String(undefined),String(indefinito),String(Object),String(String)
]);
Test('#Strings-Obj',[
	new String(),
	new String(""),new String("abc"),
	new String(false),new String(true),
	new String(0),new String(1),
	new String(EmptyArray),new String(SimpleArray),
	new String(EmptyObject),new String(SimpleObject),
	new String(undefined),new String(indefinito),new String(Object),new String(String)
]);

Test('#Numbers',[
	0,1,666.0,3.14,
	Math.PI,Math.SQRT2,Math.SQRT1_2,Math.E,Math.LN2,Math.LN10,Math.LOG2E,Math.LOG10E,
	Number(),Number(""),
	Number(false),Number(true),
	Number(0),Number(1)
]);
Test('#SpecialNumbers',[
	Infinity,NaN,
	Number("abc"),
	Number(EmptyArray),Number(SimpleArray),
	Number(EmptyObject),Number(SimpleObject),
	Number(undefined),Number(indefinito),Number(Object),Number(Number)
]);
Test('#Numbers-Obj',[
	new Number(),
	new Number(""),new Number("abc"),
	new Number(false),new Number(true),
	new Number(0),new Number(1),
	new Number(EmptyArray),new Number(SimpleArray),
	new Number(EmptyObject),new Number(SimpleObject),
	new Number(undefined),new Number(indefinito),new Number(Object),new Number(Number)
]);

Test('#Booleans',[
	true,Boolean("abc"),Boolean(true),Boolean(1),Boolean(Object),Boolean(Boolean),
	Boolean(EmptyArray),Boolean(SimpleArray),
	Boolean(EmptyObject),Boolean(SimpleObject),
	false,Boolean(),Boolean(""),Boolean(false),Boolean(0),Boolean(undefined),Boolean(indefinito)
]);
Test('#Booleans-Obj',[
	new Boolean(),
	new Boolean(""),new Boolean("abc"),
	new Boolean(false),new Boolean(true),
	new Boolean(0),new Boolean(1),
	new Boolean(EmptyArray),new Boolean(SimpleArray),
	new Boolean(EmptyObject),new Boolean(SimpleObject),
	new Boolean(undefined),new Boolean(indefinito),new Boolean(Object),new Boolean(Boolean)
]);

Test('#Functions',[function(){},function pippo(){},Function("a","b","return a + b"),Function(""),Function()]);
Test('#FunctionsNative ',[Math.sin,isNaN,Date,Object,Function,]);
Test('#Functions-Obj',[new Function("a","b","return a + b"),new Function(""),new Function()]);

Test('#Rgxs',[/(zzz)/,/(\b)/gi]);
Test('#Rgxs-Obj',[new RegExp(),new RegExp("(\w)","i")]);

Test('#Dates',[
	Date(),Date(""),
	Date("December 17,1995 03:24:00"),Date("1995-12-17T03:24:00"),
	Date(1995,11,17),Date(1995,11,17,3,24,0),Date(98,1),
	Date(false),Date(0),
	Date(true),Date(1)
]);
Test('#Dates-Obj',[
	new Date(),new Date(""),
	new Date("December 17,1995 03:24:00"),new Date("1995-12-17T03:24:00"),
	new Date(1995,11,17),new Date(1995,11,17,3,24,0),new Date(98,1),
	new Date(false),new Date(0),
	new Date(true),new Date(1)
]);

Test('#Errors',[
	new Error("Error-message"),
	new URIError("URI Error-message"),
	new TypeError("Type Error-message"),
	new SyntaxError("Syntax Error-message"),
	new ReferenceError("Reference Error-message"),
	new RangeError("Range Error-message"),
	new EvalError("Eval Error-message")
]);

Test('#Objects',[null,EmptyObject,SimpleObject,ComplexObject,Object()]);
Test('#Objects-Obj',[
	new Object(),new Object(undefined),new Object(EmptyObject),new Object(SimpleObject),
	new Object(""),
	new Object(0),new Object(1),
	new Object(false),new Object(true)
]);

Test('#Array',[EmptyArray,SimpleArray,ComplexArray]);
Test('#Array-Obj',[
	new Array(),new Array(undefined),new Array(""),new Array(1,2,3),
	new Array(EmptyArray),
	new Array(SimpleArray),
	new Array(0),new Array(false),
	new Array(1),new Array(true)
]);
