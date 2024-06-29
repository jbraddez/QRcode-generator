let qrcont = document.querySelector('.qr-cont');
let qrcode = document.getElementById('QRcode');
let input = document.getElementById('text');
let button = document.querySelector('button');

function generate(){
    qrcont.classList.remove("show-container");
    if (input.value.length > 0){
    qrcode.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
    setTimeout(() => {
        qrcont.classList.add("show-container");
    }, 100);
    }else{
        qrcont.classList.remove("show-container")
    }
}

button.addEventListener('click', generate);

