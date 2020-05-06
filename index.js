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

let opacityPic2 = document.querySelector("#box-two");
let opacityPic9 = document.querySelector("#box-nine");

opacityPic2.style.opacity = "100";
opacityPic9.style.opacity = "100";



/*________________________________________________________________
Part 2.) The Hidden Message

Lastly, we've added an ID of "hidden-message" to an empty paragrah 
element. Use JavaScript to inject the paragragh's inner HTML with a 
string containing whatever text you want.
________________________________________________________________*/

// Your code here 

let hiddenMessage = document.querySelector("#hidden-message");

hiddenMessage.innerHTML = "This is a hidden message"


