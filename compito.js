const consoleinput = process.argv;



const fs = require("fs");
const readline = require("readline");
const stream = fs.createReadStream(consoleinput[2]);
const read = readline.createInterface({ input: stream });
let data = [];
let collum = consoleinput[3];
let key = consoleinput[4];
let flag = false;
read.on("line", (row) => {
    data.push(row.split(","));
});

read.on("close", () => {

    for(let i = 0; i < data.length; i++)
    {
        if(data[i][collum]===key)
        {
            console.log(data[i]);
            flag = true;
        }
    }
    if(flag == false)
    {
        console.log("Chiave o attributo sbagliato");
    }
});