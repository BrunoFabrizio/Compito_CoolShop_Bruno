
const path = require('path');
const fs = require("fs");
const readline = require("readline");

//Costante che prende in input la riga di comando
const consoleinput = process.argv;


//Variabile con il nome della directory su cui sto lavorando
const pathfile = path.dirname(consoleinput[1])
//console.log(pathfile);

//Variabile con il percorso assoluto del file csv specificato nella riga di comando
const absolutePath = path.resolve(pathfile +'/'+ consoleinput[2]);
//console.log(absolutePath);


//Creazione della variabile matrice e i dati per la ricerca prensi in input dalla riga di comando, 
const stream = fs.createReadStream(absolutePath);
const read = readline.createInterface({ input: stream });
let data = [];
let collum = consoleinput[3];
let key = consoleinput[4];
//La variabile flag serve per controllare se la ricerca è avvenuta con successo 
let flag = false;

//Inserimento dei dati nella matrice data, divisi con la virgola
read.on("line", (row) => {
    data.push(row.split(","));
});


//Ricerca della colonna tramite numero colonna e valore della colonna. Stampa della riga che soddisfa i requisiti di ricerca 
read.on("close", () => {
    
    //Ciclo for che mi permette di scorrere la matrice per effettuare la ricerca
    for(let i = 0; i < data.length; i++)
    {
        if(data[i][collum] === key)
        {
            console.log(data[i]);
            flag = true;
        }
    }
    //Stampa di un errore
    if(flag == false)
    {
        console.log("Chiave o attributo sbagliato");
    }
});