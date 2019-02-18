function submit() {
  var career=document.getElementById('career').value;
  var name=document.getElementById('name').value;
  var role=document.getElementById('role').value;
  var phonenumber=document.getElementById('phonenumber').value;
  var mail=document.getElementById('mail').value;
  var degree=document.getElementById('degree').value;
  var dcollege=document.getElementById('dcollege').value;
  var branch=document.getElementById('branch').value;
  var dmarks=document.getElementById('dmarks').value;
  var idegree=document.getElementById('idegree').value;
  var icollege=document.getElementById('icollege').value;
  var ibranch=document.getElementById('ibranch').value;
  var imarks=document.getElementById('imarks').value;
  var board=document.getElementById('board').value;
  var school=document.getElementById('school').value;
  var medium=document.getElementById('medium').value;
  var smarks=document.getElementById('smarks').value;
  var skills=document.getElementById('skills').value;


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
    store.put(
      {
        co:career,
        Name:name,
        Role:role,
        PhoneNumber:phonenumber,
        Mail:mail,
        Education:[{
          degree:degree,
          college:dcollege,
          branch:branch,
          marks:dmarks
        },
        {
          degree:idegree,
          college:icollege,
          branch:ibranch,
          marks:imarks
        },
        {
          degree:board,
          college:school,
          branch:medium,
          marks:smarks
        }
      ],
      skills:skills
    }
    );
  }
// error
request.onerror=function(e) {
  console.log("error"+e);
}
window.open("index.html","_self");
}
