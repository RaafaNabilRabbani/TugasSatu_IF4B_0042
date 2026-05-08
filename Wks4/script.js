const inputValue = document.getElementById("inputTask");
const inputDate = document.getElementById("inputDate");
const btnTambah = document.getElementById("btnTambahTodo");
const daftarTugas = document.getElementById("listTugas");

btnTambah.addEventListener("click", function(){
    if(inputValue.value === "" || inputDate.value === ""){
        alert("Input Tugas Dan Tanggal Tidak Boleh Kosong!!");
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

const btnDelete = document.createElement("button");
btnDelete.innerHTML = "Hapus";
btnDelete.className = "btnDelete";

btnDelete.onclick = function(){
    if(confirm("Apakah Anda Yakin Ingin Menghapus Tugas Ini?")){
        listbaru.remove();
    }
};
listbaru.appendChild(btnDelete);
