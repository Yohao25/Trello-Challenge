function handleInput() {
    let input = document.getElementById("inputText").value;
    
    if (input.trim() === "") {
        document.getElementById("outputText").style.display = "none";
        document.getElementById("noMessage").style.display = "flex";
    } else {
        document.getElementById("noMessage").style.display = "none";
        updateOutput(input);
    }
}


function updateOutput(input) {
    let encrypted = input.replace(/e/g, "enter")
                         .replace(/i/g, "imes")
                         .replace(/a/g, "ai")
                         .replace(/o/g, "ober")
                         .replace(/u/g, "ufat");
    let decrypted = input.replace(/enter/g, "e")
                         .replace(/imes/g, "i")
                         .replace(/ai/g, "a")
                         .replace(/ober/g, "o")
                         .replace(/ufat/g, "u");
    
    let outputText = document.getElementById("outputText");
    outputText.value = encrypted; // Mostrar texto encriptado o desencriptado
    outputText.style.display = "block"; // Mostrar el área de texto de salida
}


function encryptText() {
    let input = document.getElementById("inputText").value;
    let outputText = document.getElementById("outputText");
    let noMessage = document.getElementById("noMessage");
    
    if (input.trim() === "") {
        outputText.style.display = "none";
        noMessage.style.display = "flex";
    } else {
        let encrypted = input.replace(/e/g, "enter")
                             .replace(/i/g, "imes")
                             .replace(/a/g, "ai")
                             .replace(/o/g, "ober")
                             .replace(/u/g, "ufat");
        outputText.value = encrypted;
        outputText.style.display = "block";
        noMessage.style.display = "none";
    }
}

function decryptText() {
    let input = document.getElementById("inputText").value;
    let outputText = document.getElementById("outputText");
    let noMessage = document.getElementById("noMessage");
    
    if (input.trim() === "") {
        outputText.style.display = "none";
        noMessage.style.display = "flex";
    } else {
        let decrypted = input.replace(/enter/g, "e")
                             .replace(/imes/g, "i")
                             .replace(/ai/g, "a")
                             .replace(/ober/g, "o")
                             .replace(/ufat/g, "u");
        outputText.value = decrypted;
        outputText.style.display = "block";
        noMessage.style.display = "none";
    }
}

function copyToClipboard() {
    let outputText = document.getElementById("outputText");
    outputText.select();
    outputText.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");
    alert("Texto copiado: " + outputText.value);
}
