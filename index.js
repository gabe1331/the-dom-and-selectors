/* _______________________________________________________________
Part 1.) It's the UX bunch! 

To reveal who is behind boxes 2 and 3, we'll need  to use some 
DOM methods and change their opacity back to 1. 

We've assigned ID's of "box-two" and "box-nine" to  the remaining 
boxes. They currently have the opacity set to 0.  Using a DOM 
selector and the style property, write pure JavaScript to reveal 
who's behind the remaining boxes. 
________________________________________________________________*/

// Your code here

let boxTw0 = document.querySelector('#box-two')

boxTw0.style.opacity = 1; 

let boxNine = document.querySelector('#box-nine')

 boxNine.style.opacity = 1;

/*________________________________________________________________
Part 2.) The Hidden Message

Lastly, we've added an ID of "hidden-message" to an empty paragrah 
element. Use JavaScript to inject the paragragh's inner HTML with a 
string containing whatever text you want.
________________________________________________________________*/

// Your code here 

const hiddenMessages = document.querySelector('#hidden-message')

hiddenMessages.innerHTML = "<p> It's time to bring the thunder! </p>"