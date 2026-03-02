function matarPaneer(matar, paneer) {
    console.log("paneer is ready");
}
matarPaneer("matar" ,"paneer")
//output:- paneer is ready

//-----------------
//ye argument missing issues h, tb bhi output h paneer is ready argument missing bhi ho jaye tb bhi eskoh koi frk nhi pd raha h, eskoh solve krne keh liye approach aata h currying
function matarPaneer(matar, paneer) {
    console.log("paneer is ready");
}
matarPaneer("matar")
//paneer is ready

//-----------------
//currying concept learning
//agr mujhe doh chij agr meh bhej raha hu toh doh chij he chahiye
//currying says: until unless your all parameter of execution are satisfied you cant run a program


//-----------------------------
//Goo example
//auto mailer ushme teen chij hoti h -> to, subject, body
//ye bnaa rahe h without currying
//auto mailer

//ye normal function meh ye issue tha
function autoMailer(to, sub, body) {
    console.log(`email has been sent to ${to} with a subject ${sub} with a body ${body}`
    );
}
// autoMailer("abc@gmail.com", "Demo", "this is dummy body");

//in case one parameter and argument is missing toh kya hoga
autoMailer("abc@gmail.com", "Demo");
//output kaise deh raha h error dehna chaiye beena body keh tm mail kaise bhej diye
//email has been sent to abc@gmail.com with a subject Demo with a body undefined 


//-------------
//ab hm used krege functional programming approach
//data types meh, meh tmhe pdhaya tha ek function kuch bhi return kr skta h, wo tmhe number deh skta h, output, variable, string, boolean, function bhi return kraa skta h, ek function dushre function koh return bhi kraa skta h

function autoMailer(to) {
    return function (sub) {
      return function (body) {
        console.log(`email has been sent to ${to} with a subject ${sub} with a body ${body}`        
        );
      };
    };
}
// autoMailer("abc@gmail.com")("demo")("dummy body");

autoMailer("abc@gmail.com")("demo"); //jb hm yhaa se body koh htaa diye toh output meh kya aa raha tha normal function meh undefined, jb yhaa peh htaye toh kya output ayega, koi output nhi dehga eshme wo wala function chlega he nhi kyuki wo function return kr raha h koi value nhi deh raha h, eskoh puri argument nhi milegi toh ye next chij peh jayega he nhi isliye kuch print nhi ho raha h

//using this technique we can safe millions of dollars

//tmhe currying keh naam se puch he nhi jayega, tmse pucha jayega give me understanding of functional programming approach kaise deal krteh h, tb vaha tmhe btana hoga kya hota h nested call back , and kya hota currying, dono chije kya kr rahi they setting the hierarchy

//jaha hm returning ki baat krteh h vaha aata h concept Higher order function ka

//hof in js search on google and read 
//ek function jb return kre ek aur function koh aur return kre dushre function that is called higher order function