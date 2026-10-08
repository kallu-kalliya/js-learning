# js object has a special property > prototype 
# we can set prototype using __proto__
** if object and prototype have same method name .. object method will be used 
# this means what we are talking about in programming
** it refers to context in which a function is executed 
>> When a function is called as a method of an object, this refers to that object.
>> In class methods, this refers to the instance of the class.
# prototype itself is a object with its own properties and methods 
>>>>>>>>>>>>>>>>>>>>>>>>>
# In an object literal, each property (or method) is treated like a key–value pair.So, JavaScript expects them to be comma-separated.
# In a class body, methods are not properties but part of the class’s definition.So no commas are required between methods.

## we must call super constructor in derived class  before accessing "this" or returning from derived constructor 
# super () // to invoke parent class constructor 