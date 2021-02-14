foo() // Hi foo
fuu() // Uncaught TypeError: fuu is not a function

function foo () {
  console.log('Hi foo')
}

var fuu = function () {
  console.log('Hi fuu')
}

// 报错原因：函数声明关键字function后未提供函数名
function(){ /* code */}() // Uncaught SyntaxError: Unexpected token (

// 报错原因：第二个圆括号被认为是运算符，需要包裹表达式
function foo(){ /* code */ }() // Uncaught SyntaxError: Unexpected token )
// 正确执行，输出1
function foo(){/* code */}(1) 
// 上面的代码等同于如下，一个函数声明跟着一个完全没有关系的表达式
function foo(){/* code */}
(1)

// 在函数表达式中允许匿名函数，这比较符合认知
var foo = function(){console.log('Yes')}() // 输出Yes。但foo是undefined，因为并没有值可赋给它。

// 当圆括号包裹函数时，它会默认将函数作为表达式去解析，而不是函数声明
( function(){console.log('Yes')} )() 
( function foo(){ console.log('Yes')} )()
// 外层括号内的表达式是立即执行函数表达式^_^
( function(){console.log('Yes')} () )
( function foo(){console.log('Yes')} () )

// 以上立即执行函数表达式可以都可将return值赋值给一个变量
var res = ( function foo(){return 'Yes'} () )
