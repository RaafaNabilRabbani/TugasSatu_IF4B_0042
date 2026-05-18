// const inputName = document.getElementById('name');
// const inputEmail = document.getElementById('email');
// const inputNim = document.getElementById('nim');
// const btnSimpan = document.getElementById('btnSimpanId');

// const listhasil = document.getElementById('listHasil');

// btnSimpan.addEventListener('click',function(){
//     if(inputName.value === "" || inputEmail.value === "" || inputNim.value === ""){
//         alert("Input Tidak Boleh Kosong!!");
//         return;
//     };

//     let newName = inputName.value;
//     let newEmail = inputEmail.value;
//     let newNim = inputNim.value

//     let pNama = document.createElement('p');
//     pNama.innerHTML = newName;
//     pNama.className = 'nama';


//     let pEmail = document.createElement('p');
//     pEmail.innerHTML = newEmail;
//     pEmail.className = 'email';

//     let pNim = document.createElement('p');
//     pNim.innerHTML = newNim;
//     pNim.className = 'nim';

//     listhasil.appendChild(pNama);
//     listhasil.appendChild(pEmail);
//     listhasil.appendChild(pNim);
    
//     inputName.value = "";
//     inputEmail.value = "";
//     inputNim.value = "";
// });




$(document).ready(function() {
    $('#btnSimpanId').click(function() {
        
        let newName = $('#name').val();
        let newEmail = $('#email').val();
        let newNim = $('#nim').val();

        if (newName === "" || newEmail === "" || newNim === "") {
            alert("Input Tidak Boleh Kosong!!");
            return;
        }

        let pNama = $('<p></p>'); 
        pNama.text(newName); 
        pNama.addClass('nama'); 

        let pEmail = $('<p></p>');
        pEmail.text(newEmail);
        pEmail.addClass('email');
        
        let pNim = $('<p></p>');
        pNim.text(newNim);
        pNim.addClass('nim');

        $('#listHasil').append(pNama);
        $('#listHasil').append(pEmail);
        $('#listHasil').append(pNim);
        
        $('#name').val("");
        $('#email').val("");
        $('#nim').val("");
    });
});