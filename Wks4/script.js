const inputValue = document.getElementById("inputTask");
const btnTambah = document.getElementById("btnTambahTodo");
const daftarTugas = document.getElementById("listTugas");

btnTambah.addEventListener("click", function(){
    if(inputValue.value === ""){
        alert("Input Kosong, Tolong Isi Terlebih Dahulu");
        return;
    }

    const listbaru = document.createElement("li");
    const span = document.createElement("span");
    listbaru.innerHTML = inputValue.value;

    listbaru.appendChild(span);
    daftarTugas.appendChild(listbaru);

    inputValue.value = "";
    inputValue.focus();

});