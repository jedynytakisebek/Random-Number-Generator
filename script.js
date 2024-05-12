
const rollBtn = document.querySelector('#rollBtn')
const randomColorBtn = document.querySelector('#randomColorBtn')
const div = document.querySelector('.nmb-container')

let result = []


const genRandomNumber = function () {
    if(result.length === 6){
        result = []; 
        while (div.firstChild) {
            div.removeChild(div.firstChild);
        }
    }
    while (result.length < 6) {
        const ranNum = Math.floor(Math.random() * 49 +1)
        if (!result.includes(ranNum)) {
            const p = document.createElement('p');
            p.textContent = ranNum;
            result.push(ranNum);
            div.appendChild(p);
        }
    }
}

const genRandomColors = () => {
    const paragraphs = div.querySelectorAll('p');
    paragraphs.forEach((p) => {
        let textColor, bgColor;
        do {
            textColor = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`;
            bgColor = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`;
        } while (textColor === bgColor);
        p.style.color = textColor;
        p.style.backgroundColor = bgColor;
    });
    };
rollBtn.addEventListener('click', genRandomNumber)
randomColorBtn.addEventListener('click', genRandomColors)
