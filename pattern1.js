var Cases=[
'',' ','abc',
0,false,1,true,
[],[''],['',''],['','',0],['','',1],[0],[1],
{},{a:''},{b:null},{c:0},{d:1},
undefined,null,Infinity
];
//
//
function Test(m,check){m.forEach(function(x){var result=check(x);
console.log('isok?',result?"\u221A":"\u263B",t,"‘"+result+"’",result);
})};
//
function Checker(){return /*Cheched*/};
//
Test(Cases,Checker);
