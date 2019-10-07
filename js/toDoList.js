/* 
* Make references to the HTML elements that we want to interact with thru JS 
* Add in the ability to add a new list item
* Add in the ability to remove a list item
* Add in the ability to mark a list item as done.
*/
var submitButton = document.getElementById("submit");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul"); // querySelector gets the first instance of a particular element type. Since we only have one ul, this will create a reference to that ul. 

function createListElement() {
    //Create a new li element 
    var li = document.createElement("li");
    //Add content to it 
    li.innerHTML = input.value;
    // Add it to our ul
    ul.appendChild(li);
    //Clear out text input after we create a new list item
    input.value = "";

    //Create a function to handle showing a list item as complete
    function markDone(){
        //If the li doesn't have a class "done" applied to it, it will be applied. If it does, it will be taken off. 
       li.classList.toggle("done");
    }
    li.addEventListener("click", markDone);
}
//This is going to be used to create a list element when the submit button is tapped
function createListItemSubmitButton(){
    if (input.value.length > 0){
        createListElement();
    }
    
}
//This is going to be used to create a list element when the enter key is pressed
function createListItemEnterKey(event){
    console.log(event.keyCode);

    //Create a new list item if there is text in the input field and the enter key is pressed
    if(input.value.length > 0 && event.keyCode === 13)
       createListElement();

}
   

//Make it so that when the submit button is clicked, the createListItemSubmitButton function is called.
submitButton.addEventListener("click", createListElement);

//This event listener will detect when keys are pressed while the input is active
input.addEventListener("keypress", createListItemEnterKey);