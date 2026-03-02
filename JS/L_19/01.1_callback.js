//L_19 Topic:-callback

function greet(name) {
    console.log(`Hi good morning ${name}`);
}
greet("vikas");
//output: Hi good morning vikas


//----------------------------
//after saying good morning its should ask how are you
//meh chahti hu First i will say good morning then I will ask how are you then there is lex, lex means hierachy

// function greet(name, cb) {
//     console.log(`Hi good morning ${name}`);
//     cb();
// }

// function How() {
//     console.log("how are you");
// }
// greet("vikas", How); //here now this particular greet function is responsible for two task pehle ye pehle wale function keh line koh print bhi krega, dushra ye dushre function koh call bhi lgayega

//Hi good morning vikas
//how are you


//in case 
function greet(name, cb) {
    console.log(`Hi good morning ${name}`);
    // cb(); agr ye call he n ho toh for example wo line he n chle toh, niche wala function kbhi chli nhi payega that time the IOC come 
}

function How() {
    console.log("how are you");
}
greet("vikas", How);

//output: Hi good morning vikas

//-----------------------------

//L_18 contest hua tha no classes
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