let propos = document.getElementById('propos');
let accueil = document.getElementById('accueil');

function toggle(id){
    if (id === 'propos'){
        propos.style.display = 'block';
        accueil.style.display ='none';
    } else if(id ==='accueil'){
        accueil.style.display = 'block';
        propos.style.display ='none';
    } else {
        propos.style.display = 'none';
        accueil.style.display ='none';
    }
}