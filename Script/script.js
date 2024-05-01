const emojis = ["😶‍🌫️", "🤓", "😎", "😍", "😘", "🤡", "👻", "🤖", "😶‍🌫️", "🤓", "😎", "😍", "😘", "🤡", "👻", "🤖"]
var shuffleEmoji = emojis.sort(() => (Math.random() > 0.5) ? 2 : -1);
for (var i = 0; i < emojis.length; i++) {
    let box = document.createElement("div")
    box.className = 'item'
    box.innerHTML = shuffleEmoji[i]

    box.onclick = function () {
        this.classList.add('openBox')
        setTimeout(() => {
            if (document.querySelectorAll(".openBox").length > 1) {
                if (document.querySelectorAll(".openBox")[0].innerHTML == document.querySelectorAll(".openBox")[1].innerHTML) {
                    document.querySelectorAll('.openBox')[0].classList.add('boxMatch');
                    document.querySelectorAll('.openBox')[1].classList.add('boxMatch')

                    document.querySelectorAll('.openBox')[1].classList.remove('openBox')
                    document.querySelectorAll('.openBox')[0].classList.remove('openBox')

                    if (document.querySelectorAll(".boxMatch").length == emojis.length) {
                        alert('Win')
                    }
                } else{
                    document.querySelectorAll('.openBox')[1].classList.remove('openBox')
                    document.querySelectorAll('.openBox')[0].classList.remove('openBox')
                }
            }
        }, 500);
    }


    document.querySelector(".game").appendChild(box);
}