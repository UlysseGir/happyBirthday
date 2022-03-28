import { v4 as uuidv4 } from 'uuid';
uuidv4();

let username = ["Charlie Peck","Brandie Chambers","Manuel Rogers","Shannon Reyes","Catherine Cook","Emma Ward","Owen Hamilton","Stephen Patterson","Terry Jones","Frederick Cole"];

let hooby = [
    {name:"foot",id:1},
    {name:"cuisine",id:2},
    {name:"jeux video",id:3},
    {name:"marche à pied",id:4},
    {name:"chanter",id:5},
    {name:"code",id:6},
    {name:"manger",id:7},
    {name:"vélo",id:8},
    {name:"musique",id:9},
    {name:"peindre",id:10},
    {name:"dessin",id:11},
    {name:"dormir",id:12},
    {name:"nager",id:13},
    {name:"dancer",id:14},
    {name:"fl studio",id:15},
    {name:"courir",id:16},
    {name:"apprendre",id:17},
    {name:"developper",id:18},
    {name:"blender",id:19},
    {name:"lire",id:20},
]

function hobbies() {
    let num = Math.floor(Math.random() * 8) + 3;
    let h = [];

    for(let i=0;i < num;i++){
        h.push(hooby[Math.floor(Math.random() * hooby.length)])
    }
    return h;
}
//console.log(hobbies())

function birthday(){
    let years = Math.floor(Math.random() * 30) + 1960;
    let months = Math.floor(Math.random() * 12) + 1;
    let days = Math.floor(Math.random() * 31) + 1;
    return days + "/" + months + "/" + years;
}

function regist(){
    let years = Math.floor(Math.random() * 2) + 2020;
    let months = Math.floor(Math.random() * 12) + 1;
    let days = Math.floor(Math.random() * 31) + 1;
    return days + "/" + months + "/" + years;
}

let user = []; //
for(let i=0; i < 50; i++){
    let tmp = {
        username: username[Math.floor(Math.random() * username.length)],
        id: uuidv4(),
        hobby: hobbies(),
        birthday: birthday(),
        regist: regist(),
    }
    user.push(tmp);
}

console.log(user);






