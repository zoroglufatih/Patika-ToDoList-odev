const inputDOM = document.querySelector("#task");
const buttonDOM = document.querySelector("#liveToastBtn");
const liDOM = document.getElementsByTagName("li");
const listDOM = document.querySelector("#list")


for (let i = 0; i < liDOM.length; i++) {
    let closeButton = document.createElement("span");
    closeButton.textContent = "\u00D7";
    closeButton.classList.add("close");
    closeButton.addEventListener("click", deleteBtn)
    liDOM[i].append(closeButton);
    liDOM[i].addEventListener("click", check)
}


buttonDOM.addEventListener('click', elemanEkle)


function check() {
    this.classList.toggle("checked");
}

function deleteBtn() {
    this.parentElement.remove();
}




function elemanEkle() {
    if (inputDOM.value == "" || (inputDOM.value).replace(/^\s+|\s+$/g, "").length == 0) {
        console.log("Eklemede hata oluştu.")
	$(".error").toast("show");     
    } else {
        console.log("Başarıyla eklendi.")
	$(".success").toast("show");
        const eklenenEleman = document.createElement("li");
        listDOM.append(eklenenEleman);
        eklenenEleman.innerHTML = inputDOM.value;
        inputDOM.value = ""
        let closeButton = document.createElement("span");
        closeButton.textContent = "\u00D7";
        closeButton.classList.add("close");
        closeButton.addEventListener("click", deleteBtn)
        eklenenEleman.append(closeButton);
        eklenenEleman.addEventListener("click", check)


    }
}