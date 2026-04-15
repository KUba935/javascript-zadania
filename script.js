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
function addElement() {
    var list = document.querySelector('details > ul');
    var newItem = document.createElement('li');
    newItem.textContent = 'Nowy element';
    list.insertBefore(newItem, list.firstChild);
}

// Zadanie 17
function removeElements() {
  var listItems = document.querySelectorAll('details > summary > ul > li');
  for (var i = 0; i < listItems.length; i += 2) {
    listItems[i].remove()
  }
}

// Zadanie 18
function addParagraph(event) {
  event.preventDefault();
  var text = document.querySelector('#newParagraph').value;
  var newParagraph = document.createElement('p');
  newParagraph.textContent = text;
  document.querySelector('section').appendChild(newParagraph);
  var reset = document.querySelector('#newParagraph').value = "";
}

// Zadanie 19
const tekst = document.querySelector(".title");
tekst.textContent = "DOM TRANING Arena";

// Zadanie 20
const item = document.querySelector('.nav-item a')
item.firstChild.textContent = 'Start'

// Zadanie 21
const lista = document.querySelector(".menu-list li")
const text = lista.textContent;
console.log(text);

// Zadanie 22
const header = document.querySelector('.card.highlight')
header.classList.add('.active')

// Zadanie 23
const card = document.querySelector('.card')
const header = document.querySelector('.card-header')
card.textContent = "Zmieniona karta"

// Zadanie 24
const p = document.querySelector('details > .info-text')
p.textContent = "tekst"

// Zadanie 25
const input = document.querySelector('input[name="name"]')
input.value = 'Jan'

// Zadanie 26
const select = document.querySelector(".select")
select.value = "de"

// Zadanie 27
const input = document.querySelector("input[type='checkbox']")
input.checked = true

// Zadanie 28
const p = document.querySelector("deep-text")
p.classList.add('.highlight')

// Zadanie 29
const li = document.querySelector("li")
const list = document.querySelector("#dynamic-list")
li.textContent = 'Nowy element'
list.appendChild(li)

// Zadanie 30
const li = document.createElement('li')
const li2 = document.createElement('li')
const li3 = document.createElement('li')
li.textContent = 'tekst'
li2.textContent = 'tekst2'
li3.textContent = 'tekst3'
const menu_list = document.querySelector('.menu-list')
menu_list.appendChild(li)
menu_list.appendChild(li2)
menu_list.appendChild(li3)

// Zadanie 31
const div = document.createElement('div')
div.classList.add('card')
div.textContent = 'pies'
const card_section = document.querySelector('.cards-section')
card_section.appendChild(div)

// Zadanie 32
const box = document.createElement('div')
box.classList.add('box')
box.textContent = 'tekst'
const boxes_container = document.querySelector('.boxes-container')
boxes_container.append(box)

// Zadanie 33
const p = document.createElement('p')
const dynamic_area = document.querySelector('.dynamic-area')
p.textContent = 'dowolny tekst'
dynamic_area.appendChild(p)

// Zadanie 34
const box = document.createElement('div')
const insertion_container = document.querySelector('#insertion-container')
box.textContent = 'Boksik'
insertion_container.prepend(box)

// Zadanie 35
const li = document.createElement('li')
const dynamic_list = document.querySelector('#dynamic-list')
li.textContent = 'lista'
dynamic_list.prepend(li)

// Zadanie 36
const card_header = document.querySelectorAll('card-header')

card_header.forEach(card_header => {
  const span = document.createElement('span')
  card_header.textContent = 'jjjjjj'
  card_header.appendChild(span)
})

// Zadanie 37
const p = document.createElement('p')
const details = document.querySelector('details')
p.textContent = 'tekscik'
details.appendChild(p)

// Zadanie 38
const button = document.createElement('button')
const playground = document.querySelector('.playground')
button.textContent = 'przycisk'
playground.appendChild(button)

// Zadanie 39
const removable = document.querySelectorAll('.removable')
removable.forEach((remo) => {
  remo.removeChild(remo)
})





