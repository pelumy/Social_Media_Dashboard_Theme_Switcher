// import "../css/main.less";
// const el = document.body;
const toggle = document.getElementById ('toggle');


toggle.addEventListener('click', e =>{
const slider = document.getElementById ('slider');
const topBg = document.getElementById('main');
const darkWhiteText = document.querySelectorAll('.dark-white-text');
const cardSection = document.getElementById('card-section')
const card = document.querySelectorAll('.card');


if (slider.classList.contains('slider')){
    slider.classList.remove ('slider');
    slider.classList.add('slider-dark');
    toggle.classList.remove('toggle');
    toggle.classList.add ('dark-toggle');
    topBg.style.backgroundColor = 'hsl(232, 19%, 15%)';
    darkWhiteText.forEach( text =>text.style.color = 'hsl(0, 0%, 100%)' );
    cardSection.style.backgroundColor='hsl(230, 17%, 14%)';
    card.forEach( card => card.style.backgroundColor = 'hsl(228, 28%, 20%)' );
}

else{
   slider.classList.remove ('slider-dark');
   slider.classList.add ('slider');
   toggle.classList.add('toggle');
    toggle.classList.remove ('dark-toggle');
   topBg.style.backgroundColor = 'hsl(225, 100%, 98%)';
   darkWhiteText.forEach(text =>text.style.color = 'hsl(228, 12%, 44%)');
   cardSection.style.backgroundColor='hsl(0, 0%, 100%)';
   card.forEach( card => card.style.backgroundColor = 'hsl(227, 47%, 96%)' );
    


}


e.preventDefault();
})