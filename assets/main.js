const slider = document.querySelector('.slider');
const slidert = document.querySelector('.sliderr'); 
document.querySelector('.sliderr').classList.add('hide');
slider.onclick = function(e){
    e.preventDefault();
    console.log(e);
    document.querySelector('.slider').classList.add('over');
    document.querySelector('.sliderr').classList.add('style');
    document.querySelector('.hide').classList.remove('hide');
}
slidert.onclick = function(e){
    e.preventDefault();
    document.querySelector('.style').classList.remove('style');
    document.querySelector('.over').classList.remove('over');
    document.querySelector('.sliderr').classList.add('hide');
}