var students = [
    {name: "John", score: 90 }, 
    {name: "Larry", score: 60 }, 
    {name: "Joseph", score: 50 }, 
];

//document.writeln(students.length);
document.write("<pre>");
document.write(JSON.stringify(students, undefined, 2));
document.write("</pre>");

//document.writeln(`<pre>${JSON.stringify(students,null,2)}</pre>`);

var names = [];

students.forEach(student => {
    names.push(student.name);
});

document.writeln(names);

function loadData(){

    var i = 0;
    let dataList = document.getElementById("dataList");
    
    while (i < students.length)
    {
        var listItem = document.createElement("li");
        
        console.log(students[i]);
        //listItem.innerText = students[i].name;
        listItem.innerText=[students[i].name,students[i].score];
        dataList.appendChild(listItem);
        i = i + 1; // Alternatively, use i++;

        // Other ways:
        // i += 2;
        // i += 3;
    }
}

function displayAverage() {
var i=0
var suma=0 

let result = document.getElementById("dataList");

    while (i < students.length) {
        var parr = document.createElement("p");
        suma= suma + students[i].score
        i = i + 1;
    }
let average =(suma/students.length)
parr.innerText= ("The average is " + average.toFixed(2));
result.appendChild(parr);
    
}

   