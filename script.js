/**
 *  Update the text in the "Formatted Text" section as a user types in the textarea
 * Add a .bold, .italic classes to "Formatted Text" when the appropriate button is clicked
 *  Add an .underline class to "Formatted Text" when Underline button is clicked
 * TODO: Toggle the align style for "Formatted Text" when the appropriate button is clicked
 */

/**
 * Update the output text as a user types in the textarea
 * Use the onkeydown function inside HTML
 */
updateText = () => {
  
  let input = document.getElementById('text-input').value;
  let output =document.getElementById('text-output');
  
  return output.innerText = input;
}

/**
 * Toggle the bold class for the output text
 * Use the onclick function insite HTML
 *  Look into using this keyword
 *  Use the classList property
 *  Toggle .active class for the button
 */
makeBold = (elem) => {
  document.getElementById('text-output').classList.toggle('bold');
  elem.classList.toggle('active');
}

/**
 * Toggle the italic class for the output text
 */
makeItalic = (elem)  => {
    document.getElementById('text-output').classList.toggle('italic');
     elem.classList.toggle('active');
}

/**
 * Toggle the underline class for the output text
 * Toggle the .active class for the button
 *  Use the classList property
 * Use contains, remove, and add functions
 */
makeUnderline = (elem) => {
    let output =  document.getElementById('text-output');
   // .classList.toggle('underline');
   elem.classList.toggle('active');
   if(output.classList.contains('underline')){
       output.classList.remove('underline');
   } else {
       output.classList.add('underline');
   }
}

/**
 * Toggle the style textAlign attribute
 * Toggle the active state for the align butttons
 * Use the style property of the element
 * Make sure to untoggle the active state for all other align buttons
 */
alignText = (elem, alignType) => {
    document.getElementById('text-output').style.textAlign = alignType;
    let buttonsList = document.getElementsByClassName('align');
    for(let i = 0; i < buttonsList.length; i++){
        buttonsList[i].classList.remove('active');
    }
    
      elem.classList.add('active');
  
}
