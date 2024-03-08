const regex_nome_cognome = /^[a-zA-Z' ]{3,}$/;
// La regex verifica se una stringa contiene solo lettere (minuscole o maiuscole), spazi o apostrofi e se è lunga almeno 3 caratteri. 
const regexNumeroTelefonoItaliano = /^[0-9]{10}$/; // Verifica numero italiano (no prefisso).
const regexNumeroMaggioreDiZero = /^(?=.*[1-9])\d+$/; // campo numerico > 0, per verificare il prefisso e l'importo.
const regexEmail = /^[\w.-]+@[a-zA-Z_-]+?\.[a-zA-Z]{2,}$/; // Verifica email.
let risultalto = document.getElementById("risultato");
let risultaltoStampato = document.getElementById("risulatoStampato");

let nome;
let cognome;
let email;
let prefisso;
let numeroTelefono;
let importo;

function validaNome() {
    nome = document.modulo.nome.value;

    if (regex_nome_cognome.test(nome)) {
        return true;
    } else {
        return false;
    }
}

function validaCognome() {
    cognome = document.modulo.cognome.value;

    if (regex_nome_cognome.test(cognome)) {
        return true;
    } else {
        return false;
    }
}

function validaEmail() {
    email = document.modulo.email.value;

    if (regexEmail.test(email)) {
        return true;
    } else {
        return false;
    }
}

function validaPrefisso() {
    prefisso = document.modulo.prefisso.value;

    if (regexNumeroMaggioreDiZero.test(prefisso)) {
        return true;
    } else {
        return false;
    }
}

function validaNumeroTelefono() {
    numeroTelefono = document.modulo.numeroTelefono.value;

    if (regexNumeroTelefonoItaliano.test(numeroTelefono)) {
        return true;
    } else {
        return false;
    }
}


function validaImporto() {
    importo = document.modulo.importoDonazione.value;

    if (regexNumeroMaggioreDiZero.test(importo)) {
        return true;
    } else {
        return false;
    }
}


function validazione(event) {
    event.preventDefault();

    if (validaNome() && validaCognome() && validaEmail() && validaPrefisso() &&
        validaNumeroTelefono() && validaImporto()) {
        let commenti = document.modulo.commenti.value;
        let strRisulato = `NOME e COGNOME: ${nome} ${cognome}, E-MAIL: ${email}, NUMERO DI TELEFONO: +${prefisso} ${numeroTelefono}, 
        IMPORTO: ${importo}$, COMMENTI: ${commenti}`;

        risultalto.innerHTML = "Valido";
        risultaltoStampato.innerHTML = strRisulato;

        document.modulo.reset();
    } else {
        risultalto.innerHTML = "Non valido";
    }


}