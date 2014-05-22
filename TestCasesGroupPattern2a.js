function TestCases(f){
	var indefinito,
	Empty_arr=[],
	Simple_arr=[1,2,3],
	Complex_arr=[[1,2],[3,4]],
	Empty_obj={},
	Simple_obj ={a: 1,b: 2},
	Complex_obj={a:{b: 1}},
	Empty_str="",
	Blank_str=" ",
	//
	CaseGroups={
      Array:[
			Empty_arr,
			Simple_arr,
			Complex_arr,
			Array(Empty_str),
			Array(Empty_arr),
			Array(Empty_obj),
			Array(Simple_obj),
			Array(Simple_arr),
			Array("abc"),
			Array(false),
			Array(0),
			Array(true),
			Array(1),
			Array(undefined),
			Array(indefinito),
			Array(Object),
			Array(String)
		],
		ArrayComeOggetti:[
			new Array(Empty_str),
			new Array(Empty_arr),
			new Array(Empty_obj),
			new Array(Simple_obj),
			new Array(Simple_arr),
			new Array("abc"),
			new Array(false),
			new Array(0),
			new Array(true),
			new Array(1),
			new Array(undefined),
			new Array(indefinito),
			new Array(Object),
			new Array(String)
		],
      	Oggetti:[
			Empty_obj,
			Simple_obj,
			Complex_obj,
			Object(Empty_str),
			Object(Empty_arr),
			Object(Empty_obj),
			Object(Simple_obj),
			Object(Simple_arr),
			Object("abc"),
			Object(false),
			Object(0),
			Object(true),
			Object(1),
			Object(undefined),
			Object(indefinito),
			Object(Object),
			Object(String)
		],
		OggettiNuovi:[
			new Object(Empty_obj),
			new Object(Simple_obj),
			new Object(Complex_obj),
			new Object(Empty_str),
			new Object(Empty_arr),
			new Object(Empty_obj),
			new Object(Simple_obj),
			new Object(Simple_arr),
			new Object("abc"),
			new Object(false),
			new Object(0),
			new Object(true),
			new Object(1),
			new Object(undefined),
			new Object(indefinito),
			new Object(Object),
			new Object(String)
		],
		Stringhe:[
			Blank_str,"  ","\t","\n","\r\n","bla",
			Empty_str,
			String(Empty_str),
			String(Empty_arr),
			String(Empty_obj),//"[object Object]"
			String(Simple_obj),//"[object Object]"
			String(Simple_arr),//"1,2,3"
			String("abc"),
			String(false),
			String(0),
			String(true),
			String(1),
			String(undefined),
			String(indefinito),//"undefined" "undefined"
			String(Object),//"function Object() { [native code] }"
			String(String)//"function String() { [native code] }"
		],
		StringheComeOggetti:[
			new String(),
			new String(Empty_str),
			new String(Blank_str),
			new String("abc"),
			new String(false),
			new String(0),
			new String(true),
			new String(1),
			new String(Empty_arr),
			new String(Simple_arr),
			new String(Empty_obj),
			new String(Simple_obj),
			new String(undefined),
			new String(indefinito),
			new String(Object),
			new String(String)
		],
		Numberi:[
			0,1,666.0,3.14,
			Math.PI,//3.141592653589793
			Math.SQRT2,//1.4142135623730951
			Math.SQRT1_2,//0.7071067811865476
			Math.E,//2.718281828459045
			Math.LN2,//0.6931471805599453
			Math.LN10,//2.302585092994046
			Math.LOG2E,//1.4426950408889634
			Math.LOG10E,//0.4342944819032518
			Infinity,//Infinity
			NaN,
			Number(),
			Number(Empty_str),
			Number(Blank_str),
			Number("abc"),
			Number(false),
			Number(0),
			Number(true),
			Number(1),
			Number(Empty_arr),
			Number(Simple_arr),
			Number(Empty_obj),
			Number(Simple_obj),
			Number(undefined),
			Number(indefinito),
			Number(Object),
			Number(String),
			Number(Infinity),
			Number(NaN),
			Number(Number),
			Number(Math.PI)
		],
		NumeriComeOggetti:[
			new Number(),
			new Number(Empty_str),
			new Number(Blank_str),
			new Number("abc"),
			new Number(false),
			new Number(0),
			new Number(true),
			new Number(1),
			new Number(Empty_arr),
			new Number(Simple_arr),
			new Number(Empty_obj),
			new Number(Simple_obj),
			new Number(undefined),
			new Number(indefinito),
			new Number(Object),
			new Number(String),
			new Number(Infinity),
			new Number(NaN),
			new Number(Number),
			new Number(Math.PI)
		],
		Booleani:[
			true,
			false,
			Boolean(),
			Boolean(Empty_str),
			Boolean(Blank_str),
			Boolean("abc"),
			Boolean(false),
			Boolean(0),
			Boolean(true),
			Boolean(1),
			Boolean(Empty_arr),
			Boolean(Simple_arr),
			Boolean(Empty_obj),
			Boolean(Simple_obj),
			Boolean(undefined),
			Boolean(indefinito),
			Boolean(Object),
			Boolean(String),
			Boolean(Infinity),
			Boolean(NaN),
			Boolean(Number),
			Boolean(Math.PI),
			Boolean(Boolean)
		],
		BooleaniComeOggetti:[
			new Boolean(Empty_str),
			new Boolean(Blank_str),
			new Boolean("abc"),
			new Boolean(false),
			new Boolean(0),
			new Boolean(true),
			new Boolean(1),
			new Boolean(Empty_arr),
			new Boolean(Simple_arr),
			new Boolean(Empty_obj),
			new Boolean(Simple_obj),
			new Boolean(undefined),
			new Boolean(indefinito),
			new Boolean(Object),
			new Boolean(String),
			new Boolean(Infinity),
			new Boolean(NaN),
			new Boolean(Number),
			new Boolean(Math.PI),
			new Boolean(Boolean)
		],
		Funzioni:[
			alert,
			function(){},//function (){}
			function pippo(){},//function pippo(){}
			Function("a","b","return a + b"),//function anonymous(a,b
			Function(""),//function anonymous() {
			Function(),//function anonymous() {
			Math.sin,
			isNaN,
			Function,//function --() { [native code] }
			new Function("a","b","return a + b"),//function anonymous(a,b
			new Function(""),//function anonymous() {
			new Function()//function anonymous() {
		]
    };
	Object.keys(CaseGroups).forEach(function(p){
		var m=CaseGroups[p];
		console.group(p);
		m.forEach(f);
		console.groupEnd();
	});
};
//==========================
console.clear();
TestCases(function(x,i){
 var c=console,s='font:10px arial;color:#babecc';
 c.group('%c#'+i,'color:#4e7564');
	c.group('%cResult:',s);
	c.log(TheTest(x));
	c.groupEnd();
	c.groupCollapsed('%c.log:',s);//'toString:
	c.log(x)
	c.groupEnd();
	c.groupCollapsed('%c.dir:',s);//inspect
	c.dir(x)
	c.groupEnd();
 c.groupEnd();
});
//==========================
function TheTest(x){
	return 1
};


