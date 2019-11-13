if (Math.random() > 0.5) {
    const link = document.querySelector('a');
    link.href = 'http://programmingmentor.com';
    link.textContent = 'Programming Mentor';
}

const sect = document.querySelector('section');
const para = document.createElement('p');
para.textContent = 'We hope you enjoyed the ride.';
sect.appendChild(para);

const text = document.createTextNode(' — the premier source for web development knowledge.');
const linkPara = document.querySelector('p');
linkPara.appendChild(text);

sect.appendChild(linkPara.cloneNode(true));

// old:
// linkPara.parentNode.removeChild(linkPara);
// new:
linkPara.remove();

para.style.color = 'white';
para.style.backgroundColor = 'black';
para.style.padding = '10px';
para.style.width = '250px';
para.style.textAlign = 'center';

para.classList.add('selected');

const clock = document.querySelector('.clock');
setInterval(() => {
    clock.innerHTML = new Date().toLocaleTimeString();
}, 1000);

document.querySelector('.click-me').addEventListener('click', clickButton);

function clickButton(event) {
    const para = document.createElement('p');
    para.textContent = 'We hope you enjoyed the ride.';
    sect.appendChild(para);
}

$('.click-jq').click(() => {
    $('p').toggle(1000);
});

const display = document.querySelector('.calc .display');
document.querySelectorAll('.calc .digits button, .calc .opers button')
    .forEach( button => button.addEventListener('click', digitOperPressed));

function digitOperPressed(event) {
    const btnText = event.target.innerText;
    display.value += btnText;
}

document.querySelector('.calc .eq')
    .addEventListener('click', eqPressed);

function eqPressed() {
    display.value = eval(display.value);
}
