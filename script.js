var txtinput = document.getElementById("decod-txt");
var txtouput = document.getElementById("result-txt")

console.log("txtinput")

function criptografar(){
    var txtcripto = txtinput.value.toLowerCase().replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")
    txtouput.innerHTML = txtcripto
}

function descriptografar(){
    var txtdescripto = txtinput.value.toLowerCase().replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u")
    txtouput.innerHTML = txtdescripto
}

function copy() {
    let copyText = document.getElementById("result-txt");
    copyText.select();
    document.execCommand("copy");
    alert("Copiado com sucesso")
  }


function menuAction(){
    var menu = document.getElementById("cred-content")
    var menu_btn = document.getElementById("btn-content")
    var container = document.getElementById("menu-container")

    if(menu_btn.classList.contains("closed")){
        menu_btn.classList.remove("closed")
        menu_btn.classList.add("open")
        menu.classList.remove("hidden")
        menu.classList.add("animate__animated")
        menu.classList.add("animate__fadeIn")
        container.classList.add("on")
        container.classList.remove("off")
    }else if(menu_btn.classList.contains("open")){
        menu_btn.classList.remove("open")
        menu_btn.classList.add("closed")
        menu.classList.add("hidden")
        menu.classList.remove("animate__fadeInLeft")
        container.classList.remove("on")
        container.classList.add("off")
    }

}