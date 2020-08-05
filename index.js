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
const box2 = document.querySelector("#box-two");
box2.style.opacity = "1";

const box9 = document.querySelector("#box-nine");
box9.style.opacity = "1";
/*________________________________________________________________
Part 2.) The Hidden Message

Lastly, we've added an ID of "hidden-message" to an empty paragrah 
element. Use JavaScript to inject the paragragh's inner HTML with a 
string containing whatever text you want.
________________________________________________________________*/

// Your code here
// document.querySelector("#hidden-message");
const newText = (document.querySelector("#hidden-message").innerHTML =
  "If this was done correctly, this should be a new string of whatever. I'm still trying to wrap my head around this stuff, but I remain hopeful!");
console.log(newText);
