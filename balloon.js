let popped = 0;

document.addEventListener('mouseover', function (e) {

    if (e.target.className === "balloon") {

        e.target.style.backgroundColor = "#ededed";
        e.target.textContent = "POP!";
        popped++;
        removeEvent(e);
        checkAllPopped();
    }
});

function removeEvent(e) {
    e.target.removeEventListener('mouseover', function () {

    })
};

function checkAllPopped() {
    if (popped === 24) {
        console.log('all popped!');
        let gallery = document.querySelector('#balloon-gallery');
        let message = document.querySelector('#balloons');
        gallery.innerHTML = '';
        message.style.display = 'block';
    }
};

