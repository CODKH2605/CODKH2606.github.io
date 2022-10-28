const btnsi= document.querySelector('#btnsi')
btnsi.addEventListener('click',function (){
    alert('Sabia que ibas a decir que si UwU YA SOMOS NOVIO ❤️')

});

const btnno= document.querySelector('#btnno');

btnno.addEventListener('mouseover',function () {
    const randomX = parseInt(Math.random()*400);
    const randomY= parseInt(Math.random()*400);
    btnno.style.setProperty('top',randomY+'%')
    btnno.style.setProperty('left',randomX+'%')
    btnno.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);

 });
 






    
