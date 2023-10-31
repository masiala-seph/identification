var myname = document.getElementById('nom');
var prenom = document.getElementById('Prenom');
var file = document.getElementById('inputfile');
var description = document.getElementById('Description');
var result = document.getElementById('result');
var link = document.getElementById('link');
var send = document.getElementById('send');
var dropDown = document.getElementsByClassName('drop-down')[0]
var dropdownMenu = document.getElementsByClassName('dropdown-menu')[0]
var error = document.getElementById('error')

let as = true

link.addEventListener('click', function(e){
    e.preventDefault()
    dropDown.style.display = "block"
})

dropDown.addEventListener('click', function(e){
    e.preventDefault()
    console.log('salt');
})

send.addEventListener('click', function(e){
    e.preventDefault();

    if(myname.value === "" || prenom.value === "" || description.value === ""){
        error.classList = "error"
        error.style.display = "block"
        error.innerHTML = "Entrer toutes les informations";
    }
    else{
        error.style.display = "none";
        var createElementNom = document.createElement('div');
        var createElementPicture = document.createElement('div');
        var createElementPrenom = document.createElement('div');
        var createElementFile = document.createElement('div');
        var createElementDescription = document.createElement('div');
        var createElementresultat = document.createElement('div');
        var createElementNomPostnom = document.createElement('div');
        var containerNompostnom = document.createElement('div');
        var deleteEl = document.createElement('div');
    
        createElementNomPostnom.appendChild(createElementNom);
        createElementNomPostnom.appendChild(createElementPrenom);
        containerNompostnom.appendChild(createElementNomPostnom);
        containerNompostnom.appendChild(createElementDescription);
        createElementPicture.appendChild(createElementFile);
        createElementPicture.appendChild(containerNompostnom);
        createElementresultat.appendChild(createElementPicture);
        result.appendChild(createElementresultat);
        createElementresultat.appendChild(deleteEl);
    
        createElementresultat.classList = "resulat";
        createElementPicture.classList = "picture";
        containerNompostnom.classList = "container-nompostnom";
        createElementNomPostnom.classList = "nompostnom";
        createElementPrenom.classList = "yourfist-name";
        createElementDescription.classList = "description";
        deleteEl.classList = "deleteEl"
        deleteEl.innerHTML = "X"
    
        createElementNom.innerHTML =  myname.value;
        createElementPrenom.innerHTML = prenom.value;
        createElementFile.innerHTML = file.value;
        createElementDescription.innerHTML = description.value;
    
        myname.value = "";
        prenom.value = "";
        file.value = "";
        description.value = "";

        deleteEl.addEventListener('click', function(){
            result.removeChild(createElementresultat)
        })

        // deleteAll.addEventListener('click', function(){
        //     result.remove(createElementresultat)
        // })

    }

})