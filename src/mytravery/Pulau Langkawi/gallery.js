const card = document.getElementsByClassName('card');

function toggleCards(event) {
    var eventEl = event.target;
    for (var i = 0; i < card.length; i ++) {
        card[i].classList.remove('active');
    }
    eventEl.classList.add('active');
}

for (var i = 0; i < card.length; i++) {
    card[i].addEventListener('click', function(e) {
        toggleCards(e);
    }, false) 
}
