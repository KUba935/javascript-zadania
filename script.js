// Zadanie 1
const div = document.createElement("div")
div.textContent = "div"
const body = document.querySelector("body")
body.appendChild(div)

// Zadanie 2
const h1 = document.querySelector("h1")
h1.style.color = "red"

// Zadanie 3
const obraz = document.querySelector("img")
obraz.src = "nowy obrazek"

// Zadanie 4
const p = document.querySelector("p")
p.hidden = true

// Zadanie 5
const div = document.querySelector("div")
div.classList.add('XD')

// Zadanie 6
const activeListItem = document.querySelector('li');
activeListItem.classList.remove('.active')

// Zadanie 7
const button = document.querySelector("button")
button.textContent = 'Przycisk'

// Zadanie 8
const input = document.querySelector('input')
input.value = ' '

// Zadanie 9
const newListElement = document.Element('li')
const unorderedList = document.querySelector('.container ul')
unorderedList.appendChild(newListElement)

// Zadanie 10
const body = document.querySelector("body")
body.style.backgroundColor = "blue"

// Zadanie 11
const newDiv = document.createElement('div')
newDiv.classList.add('new-div')
const header = document.querySelector('header')
header.appendChild(newdiv)

// Zadanie 12
const headers = document.querySelectorAll('h3');
if (headers.length >= 1) {
  headers[1].style.color = 'green';
}

// Zadanie 13
const image = document.querySelector('img');
image.dataset.src = 'newImage.jpg';
image.removeAttribute('src');

// Zadanie 14
const paragraphs = document.querySelectorAll('p');
for (let i = 1; i < paragraphs.length; i += 2) {
  paragraphs[i].style.display = 'none';
}

// Zadanie 15
const listItems = document.querySelectorAll('li');
if (listItems.length >= 3) {
  const thirdListItem = listItems[2];
  thirdListItem.classList.add('selected');
}

// Zadanie 16

