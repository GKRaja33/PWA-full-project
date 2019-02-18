 var query=window.location.search.substring(1).split("?");
var parent;
query.map((data)=>{
  let splitdata=data.split("=");
  parent=parseInt(splitdata[1]);
  console.log(parent);
});

//store.js data past here

var indexedDB=window.indexedDB||window.mozIndexedDB||window.webKitIndexedDB||window.msIndexedDB;

// ternary Operation
indexedDB?console.log("Success"):console.log("browser Not Supported");

// creating DataBase

var request=indexedDB.open("DBMS",1);
var result;
var store;
console.log(request);

// upgradeneeded
request.onupgradeneeded=function(e) {
result=e.target.result;
store=result.createObjectStore("resume",{keyPath:'Id',autoIncrement:true});
}
// success
request.onsuccess=function(e) {
  console.log("reached successfully");
  result=e.target.result;
  var tx=result.transaction("resume","readwrite");
  store=tx.objectStore("resume");
  var getExact = store.get(parent);
getExact.onsuccess=function(get) {
console.log(get.target.result);
pro(get.target.result);
Edu(get.target.result.Education);
skills(get.target.result);

}
var left=document.querySelector(".left");
var right=document.querySelector(".right");
function pro(profile) {
var image=document.createElement("img");
image.src="download.jpg";
image.alt="profile";
left.appendChild(image);
var h1=document.createElement("h1");
h1.textContent=profile.Name;
left.appendChild(h1);
var h2=document.createElement("h2");
h2.textContent=profile.Role;
left.appendChild(h2);
 var h3=document.createElement("h3");
 h3.textContent=profile.PhoneNumber;
 left.appendChild(h3);
 var h4=document.createElement("h4");
 h4.textContent=profile.Mail;
 left.appendChild(h4);
 var career = document.createElement("h1");
 career.textContent="Career Object";
 right.appendChild(career);
 var p=document.createElement("p");
 p.textContent=profile.co;
 right.appendChild(p);

}
function Edu(edu) {
  var education=document.createElement("h1");
  education.textContent="Education Information";
  right.appendChild(education);
  var hr = document.createElement("hr");
  education.appendChild(hr);
for (i in edu) {
  var degree=document.createElement("h3");
  degree.textContent=edu[i].degree;
  right.appendChild(degree);
  var ul=document.createElement("ul");
  right.appendChild(ul);
  var li=document.createElement("li");
  li.textContent="College Name: "+edu[i].college;
  ul.appendChild(li);
  var li1=document.createElement("li");
  li1.textContent="Branch: "+edu[i].branch;
  ul.appendChild(li1);
  var li2=document.createElement("li");
  li2.textContent="Marks: "+edu[i].marks;
  ul.appendChild(li2);
}

}
function skills(skill) {
  var heading=document.createElement("h1");
  heading.textContent="Skills";
  right.appendChild(heading);
var skills=document.createElement("p");
skills.textContent=skill.skills;
right.appendChild(skills);
}
}
