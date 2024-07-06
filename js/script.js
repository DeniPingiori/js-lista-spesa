//dichiaro costante con array
const lista_spesa = ['guanciale', 'uova', 'pasta', 'pecorino', 'pepe nero' ];

// recupero elemento che deve contenere i valori dell'array
const ul = document.getElementById('lista-spesa'); 

//ciclo l'array con il while

//dichiaro var contatore
let i = 0; 

//definisco il while con condizione di fine ciclo
while (i<lista_spesa.length){

    // creo un nuovo list item
    const li = document.createElement('li');

    //inserisco il testo all'interno, innesto lista spesa in posizione i 
    li.innerText = lista_spesa[i]; 

    //aggiungo il list item alla lista
    ul.append(li);

    //instruzione che fa terminare il ciclo
    i++;

}