// EXTRA Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto alla sezione "Altro" nell'elemento "aside". Deve avvenire al caricamento della pagina, automticamente.
document.addEventListener(`DOMContentLoaded`, function(){
    let TwitterLink = document.querySelector(`.blog-sidebar div:nth-child(3) .list-unstyled li:nth-of-type(2)`);
    TwitterLink.remove();
})


// EXTRA Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento padre dal DOM cliccando sul link "Continua a leggere".
let links = document.querySelectorAll(`.stretched-link`);

for(let link of links){
    link.addEventListener(`click`, function(){
        link.closest(`.col-md-6`).remove();
    })
}


// EXTRA Crea con JavaScript la funzionalità per creare un alert col nome dell'autore ogni volta che il cursore passa sopra l'autore del post.
let arrayAutoripost = document.querySelectorAll(".blog-post .blog-post-meta a")
for(let i = 0; i < arrayAutoripost.length; i++){
    arrayAutoripost[i].addEventListener(`mouseover`, function(){
        alert(`Autore: ${arrayAutoripost[i].textContent}`);
    })
}
