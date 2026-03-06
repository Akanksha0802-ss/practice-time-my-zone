
function sayHi(name) {
  console.log(`hii good morning ${name}`);
}
sayHi("vikas"); //output hii good morning vikas


//second function example  
function sayBye() {
  console.log("bye");
} //yha output kuch bhi nhi ayega kyuki ye abhi invoke he nhi hua h



//case: 2nd
function sayHi(name) {
  console.log(`hii good morning ${name}`);
}
//sayHi("vikas"); //in case agr ye n chle toh

function sayBye() {
  console.log("bye");
} 
sayBye();
//output hii good morning vikas
//bye


//call back come to the picture
//its old way to write a function without using callback
//when we talk about callback wo esh function koh manta he nhi h
//ye(callback) bolta h u have to pass function as an argument
function sayHi(name) {
  console.log(`hii good morning ${name}`);
  sayBye();
}

function sayBye() {
  console.log("bye");
} 
sayHi("vikas");

//output hii good morning vikas
//bye

//-------------------------------------------

//kaise write krna callback in function
function sayHi(name, cb) {
  console.log(`hii good morning ${name}`);
}

function sayBye() {
  console.log("bye");
} 
sayHi("vikas");
// output: hii good morning vikas yhaa toh error aana chaiyie , yhaa peh ek argument missing h tb bhi javascript koh koi frk nhi pdta h, pr aisa nhi hona chaiye beena argument comlete hue eshe exceute nhi honna chaiye, eshi chij koh khttm krne keh liye hm pdhteh h currying concept

//-----------------------------------
function sayHi(name, cb) {
  console.log(`hii good morning ${name}`);
  cb();
}

function sayBye() {
  console.log("bye");
} 
sayHi("vikas");
//error ayega

//-------------------------------------------


function sayHi(name, cb) {
  console.log(`hii good morning ${name}`);
  cb();
}

function sayBye() {
  console.log("bye");
} 
sayHi("vikas", sayBye);
//output: hii good morning vikas
//bye

//joh bhi function apne andr callback koh receive kr paateh h, wo function kehlateh h higher order function


//yhaa 3rd argument bhi pass kr diye tb bhi output vhi ayega error nhi ayega , but error aana chaiye kyuki argument meh pass ki hu 3 but parameter pass kr rahi hu doh he toh 3rd wale argument meh error aana chaiye which is name2 that time currying concept come to the to solve this problem ki 3rd argument jb complete hoga tbhi woaageh process conplete kre
function sayHi(name, cb, name2) {
  console.log(`hii good morning ${name}`);
  cb();
}

function sayBye() {
  console.log("bye");
} 
sayHi("vikas", sayBye);


//---------------------------------------
//Maggie Example
//case 1
function makeMaggi(rawmaggi) {
  console.log(`we are starting the maggi process and with ${rawmaggi}`);
}

function waterBoil() {
  console.log("we are boiling water to add maggi");
}

function addMaggi() {
  console.log("we are adding maggi and masala");
}

function serve() {
  console.log("maggi is ready to serve");
}
//Output meh kuch bhi show nhi krega, kyuki abhi hm eskoh call he nhi kiye h

//case 2 jb cb received kr rahe h aur ek function keh andr se dushre function koh call kr rahe h
//yha peh bhi hm hierachy set kr rhe h
function makeMaggi(rawmaggi, cb) {
  console.log(`we are starting the maggi process and with ${rawmaggi}`);
  cb();
}

function waterBoil(cb) {
  console.log("we are boiling water to add maggi");
  cb();
}

function addMaggi(cb) {
  console.log("we are adding maggi and masala");
  cb();
}

function serve(cb) {
  console.log("maggi is ready to serve");
  cb();
}
//output chla kr dekhna 

//case-3
function makeMaggi(rawmaggi, cb) {
  console.log(`we are starting the maggi process and with ${rawmaggi}`);
  cb();
}

function waterBoil(cb) {
  console.log("we are boiling water to add maggi");
  cb();
}

function addMaggi(cb) {
  console.log("we are adding maggi and masala");
  cb();
}

function serve(cb) {
  console.log("maggi is ready to serve");
  cb();
}

makeMaggi("yupee", () => {
  waterBoil(() => {
     addMaggi(() => {
       serve(() => {
        console.log("all process are done ");
      });
    });
  });
});




//currying is a functional programmming approach
function makeMaggi(rawmaggi, cb) {
  console.log(`we are starting the maggi process and with ${rawmaggi}`);
  cb();
}

function waterBoil(cb) {
  console.log("we are boiling water to add maggi");
  cb();
}

function addMaggi(cb) {
  console.log("we are adding maggi and masala");
  cb();
}

function serve(cb) {
  console.log("maggi is ready to serve");
  cb();
}

//lekin eskeh andr entry krna bahut aasan h , lekin eskeh andr muniware krna bahut mushkil h thats why it is known as Pyramid of DOM(POD) aur eskoh call back keh bhaasa meh bolteh h call back hell
//this is separate concept of javascript which is call back hell
//hm call back kyu use nhi krteh now a days, kyuki eska structure hota h complex kyuki ek call back andr dushra call back dushre keh andr teeshra call back , teeshra keh andr chautha, jb hierachy meh call back nested hoteh h that is called nested call back problem aur eshi koh dushre bhaasa meh bolteh call back hell, aur eskeh structure keh design koh bolteh h pod(pyramid of DOM), eskeh andr ghushna aasan h kyuki ek he function h which is makeMaggi h , uskeh baad 20 entries h ghumteh raho thatt is known as pyramid of DOM, isliye hm eskoh used nhi krteh h.
//agr koi puche call back kyu used nhi kiya jaata h, hmhe simple answer dehna due to complexity in the structure known as Call back hell
makeMaggi("yupee", () => {

  waterBoil(() => {

     addMaggi(() => {

       serve(() => {

        console.log("all process are done ");
      });
    });
  });
});

//whenever complexity increases, readability goes down
//jb tm kisi program koh aache se pdhi nhi paa rahe toh debugging ka time increase ho jayega, jitni time tm debugging meh lohge utni der tmhara server rahega down, everthing kaha pr aa kr rukta h maintanace peh, tm likh kaise bhi loh agr tm uskoh scale nhi kr paa rahe ho, tbtm coder ho he nhi
//agr koi puche callback kyu nhi use krteh h simple answer due to comlexity in the structure, it si known as call back hell

//pop keh andr entry krna aasan but munivare krna

//L_18 contest hua tha no pdhai
//L_19 callback suru hu again revision
//ye teeno function waterboil, addmaggi ,serve ye indirectly dependent h ek maantra entity peh jiska naam h makeMaggi, if what makemaagie is foregt to call this that is called IOc(inversion of control)

//mere smjhne keh liye h code
makeMaggi("yupee", () => {

  waterBoil(() => {

     addMaggi(() => {

       serve(() => {

        console.log("all process are done ");
      });
    });
  });
});

//it is very defficult to debug because there are high chances ki situation is like abhi toh ye argument received nhi kr rahe h they are simply calling the function but joh hm next task krege ushme argument bhi received kr rahe hoge aur ek setTimeout bhi leh rahe hoge