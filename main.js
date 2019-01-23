//comments

console.log('testing ...');
console.log(new Date());

var sum = 1+1;
console.log(sum);
document.write("Good day ");


function sayHello ()
{
    alert("Hello!");

    var name = prompt("What's your name");

    //names= {"name": "John"} // otra forma de declarar variables

    document.getElementById("dynamicSection");
    //document.writeln('Hello again!'); // overwrite
    var dynamicSection= document.getElementById("dynamicSection");

    // assign the br tag to a variable
    var breakLine=document.createElement("br");

    //Append it to DOM
    dynamicSection.appendChild(breakLine);
    dynamicSection.append("Hello again! " + name);


}

function paint ()
{
    var dynamicSection= document.getElementById("dynamicSection");
    //change backgroundColor. Instead of css we assign it through JS
    //dynamicSection.style.backgroundColor= "red"; //one way
    var color=document.getElementById("colorValue")
    dynamicSection.style.backgroundColor= color.value;
 }
var isToggle= false;
var students= [1,2,3];
console.log(students.length);

function toggleHighlight (){
   // var textSection = document.getElementById("textSection");
    //textSection.className="highlight";
   // textSection.classList.add("highlight");

    var textSection = document.getElementById("textSection");
 //   textSection.classList.add("highlight")
//   textSection.classList.remove("normal");

  //mejor opcion
 //   if (textSection.classList.contains("highlight")) {
 //       textSection.classList.remove("highlight");
 //   } else {
 //       textSection.classList.add("highlight");    }

 //toggle the highlight, change on and off
 textSection.classList.toggle("highlight");
 
 isToggle =!isToggle;
 if  (isToggle){
    console.log("highlight");
 } else {
     console.log ("no hightlight");
 }

}

//function normal (){
//    var textSection = document.getElementById("textSection");
//    textSection.classList.add("normal");
//    textSection.classList.remove("highlight");}