let huynot = require('.././week3/enot.js');
let tran = huynot.private.tran;
let nart = huynot.private.nart;
let enot_buy = huynot.enot_buy;
let enot_play = huynot.enot_play;
let enot_feed = huynot.enot_feed;
let compare = huynot.compare;
let comres = huynot.comres;
let clone = huynot.private.clone;
let eq = huynot.private.eq;
let interp = huynot.private.interp;
let erondondon = huynot.private.erondondon;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




function testo(bool, enot) {
    if (bool === true) { console.log('пасет'); }
    else {
        if (enot !== undefined) { console.log(enot); }
        else { console.log('сАсет'); }
    }
}

function testtrannart(enot) {
    let obj1 = enot;
    let obj2 = tran(nart(enot));
    testo(eq(obj1, obj2),enot);
}

//console.log(erondondon(1,6));
let test = (enot_buy(1,7));
console.log(test);
//console.log(test);
let enot = {
    age: 15,
    energy: 76,
    hungry: true,
    personality: 'енотус неадекватус',
    insult: 'обижен'
 };
 let test2 =(enot_feed(test));  
 console.log(test2);
 console.log(enot_play(test2));
 


 function runtest() {
    for (let i=0;i<3;i++){
        testtrannart(enot_buy(1,100));
    }
}


runtest();
console.log('huy');
function enot_play_test(){
    for (let i=0;i<3;i++){
        let enot = enot_buy(1,100);
        let clon = clone(enot);
        enot_play(clon);
        testo(clon.hungry !== undefined,enot);
    }
}
enot_play_test(); 

function hungry_test(enot) {
    let jopa = enot_play(enot_feed(enot));
    testo(jopa.hungry !== undefined);
}
hungry_test({ age: 2,
  energy: 24,
  hungry: false,
  personality: 'енотус неадекватус',
  insult: 'обижен' });


function compare_test(){
let enot1 = {
    age: 15,
    energy: 76,
    hungry: true,
    personality: 'енотус неадекватус',
    insult: 'обижен'
 };
let enot2 = {
    age: 15,
    energy: 71,
    hungry: true,
    personality: 'енотус неадекватус',
    insult: 'ой Фсе!'
 };
    let expected = {
        age: 0,
        energy: -5,
        hungry: 0,
        personality: 0,
        insult: 2
    };
    testo(eq(compare(enot1,enot2),expected));

}
  let pizda1 = enot_buy(2,5);
  let pizda2 = enot_buy(3,8);
  console.log(comres(compare(pizda1,pizda2)));
  compare_test();