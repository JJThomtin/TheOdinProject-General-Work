let names = ["Joe", "Jack", "Jason"];
let points = [53, 26, 75, 100];
let lnames = names.length;
let lpoints = points.length;
document.getElementById("demo1").innerHTML = names;


let text1 = "<ul>";
for(let i = 0; i < lnames; i++){
    text1 += "<li>" + names[i] + "</li>";
}                                       
text1 += "</ul>";                  
document.getElementById("demo2").innerHTML = text1; 


names.push("James");
let text2 = "<ul>";
lnames = names.length;
for (let i = 0; i < lnames; i++){
    text2 += "<li>" + names[i] + "</li>";
}                                        
text2 += "</ul>";            
document.getElementById("demo3").innerHTML = text2;


let text3 = "<ul>";
for(let i = 0; i < lpoints; i++){
    text3 += "<li>" + points[i] + "</li>";
}
text3 += "</ul>";
document.getElementById("demo4").innerHTML = text3;


let mark = new Array(40);
let lmark = mark.length;
document.getElementById("demo5").innerHTML = lmark;


let fruits = ["Banana", "Apple", "Orange"];
document.getElementById("demo6").innerHTML = fruits.join(" * ");

let boys = ["Jason", "Jack", "John"];
let girls = ["Jacky", "Julie"];
let boy_And_Girl = girls.concat(boys);
document.getElementById("demo7").innerHTML = boy_And_Girl;

let i = 3;
while (i > 0){
    alert(i);
    i--;
}