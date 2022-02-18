# Read me

https://docs.google.com/presentation/d/1qipJsABpC0fKRGJjX14DvG9izl1tmyZRKel50TF0UEQ/edit#slide=id.p

## The debugging framework

### Why we need to debug?

  well after hearing Cornelia and Barat, talking all the time about errors, I think that I'm in front of a profound truth 

   <the thinker>

  If they that are good programers lost so much time taling about errors what happens is that all the programmers make mistakes

    <homer ouch>

  The live of the programmer has to be something like
    1. Make a mistake
    2. fix it
    3. Repeat step 1
  
  Well, what I usually do when I'm stuck in a problem  is
 
   


### The debugging Framework
 
    * What did I expect to happen? I have to been able to say with my words what I expect that the program does
    * It's actually broken? Sometimes the program is doing the right thing and is our understanding of what it has to do what is wrong
    * What happened instead? What did the code in place of what I understood that it has to do?. "It didn't work" is not good enough we have to explain it 
    * What I have tried so far? We have to see debugging as a loop in each interaction we trie different things if the thing that we try worked perfect we can finish the loop but if not it's not so bad, we know a little more about the system



### Ask for help

   At the end what you do is ask for help. Can be:

    * A google search,
    * Ask to a some college
    * Use a forum
    * Or can be ask to a rubber duck

- A rubber duck consists into explaining line by to a rubber duck what the code does
 - Why do you think that a rubber duck can be helpful?
   <Group question>


Well for what I'm explaining until now. It seems that programing is basically ask for help and you get paid for this??

Where is the trick??

And there is not entirely far away from thee truth.

Well, change the cap for a moment. And think in occasions when you have tried to help someone. It's not so easy. You need to understand first want they say that they want and then what they "truly" want, and then perhaps you can begin to help... It's not an easy task to help someone.

So returning in our world as a coders. We need a framework a bit more elaborated that simply ask for help.
### Reading the code

    One of the first steps to understand a program is reading the code. To do this we have some tools that help us 

    * First is the editor. If you want really you can edit the code with notepad but you are losing a lot of information. Edits like VS Code (and others) help us a lot identifying the different type of code elemets (keywords, comments, variables)
    * A static analyzer. Javascript it's a very loose language that allow us to do a lot of things, and with this freedom comes his risk we can do a lot of mistakes without knowing it. A linter help us to identify this mistakes

< Es lint demo >

< Exercise 1>

### Writing the code

    There are a lot of things that are important when you are writing code. Use meaningful names, create short functions, indent correctly, ... But If I have to select only three things they are

    * Test. Each function that you do you have to test that does exactly what you expect
    * Test: Each function has to be tested in limit cases what happens is this parameter is null, is zero, etc...
    * Test again:  If I have two tested functions that works and now the data of one is passed to the other, I have to test this again

    There is no such thing as this has been fully tested

### Debugging the code

    * use console.log
    * use debugger;
    * Use Chrome debugger; 
        * Breakpoints;
        * inspect variables

< Demo 2>

<Live coding >

### Exercise




Well when I struggle to understand something I like to make a comparison to something that I can understand better so I said







I can say that coding is like.. trekking

Well I like trekking and if I learn something about this is that if you go to trek enough time at the end you will be get lost

And when you get lost and you want to ask for help you nees to know

* where you are
* where you want to go

and is you are lucky someone can come with a path

And if you are lost the hard part can be to know where you are



sometimes it's a thing that you can see as easy to fix but sometimes you don't know why is not working as you expected.

What do you do if you found a problem and do not know how to solve it?

* Ask for help

it's like when you are lost. You can ask for directions. Can be a GPS system, a passer-by  or a emergency call, but each one to help you need first to know where you are. The passer-by or the GPS are able to get this information without the need that you give it, but the emergency system needs that you give it this information, and this can be very difficult if you are lost in the middle of a mountain. As a coder you will find yourself like a trekker lost in the middle of nowhere

< lost in the mountains >

So when i found a problem I need to take an steep back and 

1- First be able to explain what do you want the code to do.
2- Answer the question if it makes sense what it does instead. Perhaps the code is right but is not doing what you expected
3 - What is doing instead of what I want to do. Explain with words in detail.
4 - keep it mind what you have tried and why has failed, each missed solution is giving us information about how the system works, don't lose it.  

So with these 4 steps we are building of map of where I'm am, where I wan't to go and which paths I already tried

To understand what the program does.

* The first thing is read the code
  * editors like vs code with the colors and another helpful utilities van help us to read it
  * utilities like es-lint help us to identify problems

* the second step is debug the code
  * the debugger instruction help us to stop the code
  * breakpoints in the browser


Where to find help

Exercise 25 mins.
    https://github.com/CodeYourFuture/syllabus/tree/master/docs/js-core-3/week-1/debugging-code