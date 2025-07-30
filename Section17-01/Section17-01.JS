let text = document.querySelector('.text');
let hiden = document.querySelector('.hiden');
let show = document.querySelector('.show');

hiden.onclick = function(){
    text.style.display = "none";
};
show.onclick = function(){
    text.style.display = 'block';
};
