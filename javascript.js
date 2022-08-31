function colar(params){
    navigator.clipboard.readText().then((clipText) =>
    params.innerText = clipText);
}

function copiar(params) {
    navigator.clipboard.writeText(params.value).then((value) => {
        /* clipboard successfully set */
        console.log(value);
      }, () => {
        /* clipboard write failed */
    });     
}