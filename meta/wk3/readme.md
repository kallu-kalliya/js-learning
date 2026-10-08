>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
# functional programming 
>> programming paradigms :
FP and OP 
# FP :
clear distinction between data and function. use : currency conversion 
# OP : 
data and function are combined 

>> many function by deafult return undefined 
>> recursion : when a function call itself // a function generating subsequent values from its previous values 
>> avoid infinite loop 

>> Each function keeps a reference to its parent’s scope" 
>> reference means not copy but a live link !
>> What “parent’s scope” means

When you create a function inside another function (or in a certain block), the inner function can access variables from the outer function — even after the outer function has finished executing.

That’s because JavaScript doesn’t just remember the code of the function —
it also remembers the environment (variables, functions) that were around when it was created.

A function in JavaScript doesn’t forget the variables from where it was born — it carries a backpack of references to those variables. That’s why we say it “keeps a reference to its parent’s scope.”

# first class function // first class citizens ...
function in js is just another value that we can 
> pass to another function 
> save in a variable 
> return from other function 
// in other words it is just a value like a string or number 

# Higher order function 
> it accepts another function as argument 
> it return function when invoked 

# pure functions 
returns the exact same result as long as its given the same value or arguments 

# difference between var let and const 

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
>>>> oops principle 
>>>> constructors.js
>>>> creating classes 
>>>> default parameters 
>>>> desinging a ooop program 
>>>> building an oop 

# OOP 
> we got objects 
> efficient way of making objects is through classes 
> instance of a class using new which is a object 
> learn how to define a object as an instance of a class 

# benefits of OOP 
OOP helps developers to mimic the relationship between objects in the real world. In a way, it helps you to reason about relationships between things in your software, just like you would in the real world. Thus, OOP is an effective approach to come up with solutions in the code you write. OOP also:

Allows you to write modular code
Makes your code more flexible 
Makes your code reusable.

# oops principle ...
Objects exist in a hierarchical structure, meaning that the original base or super class for everything is the Object class, and all objects derive from this class.
This allows us to utilize the Object.create() method. to create or instantiate objects of our classes.


>>> # inheritance 
Inheritance allows one class (child) to get properties/methods from another class (parent).
In JavaScript:
We use extends and super().

There is a base class of a "thing".
There are one or more sub-classes of "things" that inherit the properties of the base class (sometimes also referred to as the "super-class")
There might be some other sub-sub-classes of "things" that inherit from those classes in point 2.
Note that each sub-class inherits from its super-class. In turn, a sub-class might also be a super-class, if there are classes inheriting from that sub-class.

Here's a practical example:
There is a base class of Animal.
There is another class, a sub-class inheriting from Animal, and the name of this class is Mammal.
Next, there is another class, inheriting from Mammal, and this class is Elephant.
>>> # encapsulation 
In the simplest terms, encapsulation has to do with making a code implementation "hidden" from other users, in the sense that they don't have to know how my code works in order to "consume" the code.
eg. .toUpperCase()
Encapsulation is about you not having access to, or not being concerned with, how some implementation works internally.

Hiding the data and methods inside an object"
Encapsulation means bundling data (properties) and behaviors (methods) together, and controlling access to them.
>>> # abstraction 
Abstraction is all about writing code in a way that will make it more generalized.
Abstraction is about extracting the concept of what you're trying to do, rather than dealing with a specific manifestation of that concept. 

"Show only the necessary details"
Abstraction is about hiding implementation details and showing only the essential parts.
JS doesn’t have true abstract classes like Java, but we can simulate it with base classes or interfaces (via TypeScript).
>>> # polymorphism  
Polymorphism means you can have the same method name but different behaviors depending on the object.
Polymorphism is a word derived from the Greek language meaning "multiple forms". An alternative translation might be "something that can take on many shapes."
A door has a bell. It could be said that the bell is a property of the door object. This bell can be rung. When would someone ring a bell on the door? Obviously, to get someone to show up at the door.
Now consider a bell on a bicycle. A bicycle has a bell. It could be said that the bell is a property of the bicycle object. This bell could also be rung. However, the reason, the intention, and the result of somebody ringing the bell on a bicycle is not the same as ringing the bell on a door.

the exact same name of the method can have the exact opposite intent, based on what object it is used for.
Now, to make this code truly polymorphic, I will add another function declaration:
function ringTheBell(thing) {
    console.log(thing.bell());
}

JavaScript is prototype-based, not class-based at its core. Classes are just syntactic sugar over prototypes, but the OOP principles still apply exactly the same.
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
# advance Js features 
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
# JS in browser 
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>