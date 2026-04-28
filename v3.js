// Zadanie 1
const header = document.querySelector("#main-header")
header.textContent = "tekst"

// Zadanie 2
const li = document.querySelectorAll(nav > li)

// Zadanie 3
const button = document.querySelector(".delete-trigger")

// Zadanie 4
const section = document.querySelector("#content-area > section ")

// Zadanie 5
const lol = document.querySelector("[data-secret]")

// Zadanie 6
const link = document.querySelector("a[data-link='home']")
const href = link.getAttribute("href")

// Zadanie 7
const przycisk = document.querySelector("#trigger-btn")
przycisk.closest(".level-1").textContent = "BMW"

// Zadanie 8
const ok = document.querySelector("tbody > tr")

// Zadanie 9
const jk = document.querySelector("#main-image ~ figcaption")

// Zadanie 10
const checkbox = document.querySelectorAll("[name='tags']")

// Zadanie 11
const bobo = document.querySelector("#username").parentElement

// Zadanie 12
const rodzic = document.querySelector(".notification-wrapper")
const dzieci = rodzic.childNodes

// Zadanie 13
const h1 = document.querySelector("h1").textContent

// Zadanie 14
const element = document.querySelector("#notification-list").lastElementChild

// Zadanie 15
const dx = document.querySelectorAll(".nest, level-2")
console.log(dx.length)

// Zadanie 16
const li = document.createElement("li")
const lista = document.querySelector(".nav-list")
lista.appendChild(li)

// Zadanie 17
const przycisk = document.createElement("button")
przycisk.textContent = "Logowanie"
const guzik = document.querySelector("header")
guzik.appendChild(przycisk)

// Zadanie 18
const tabela = document.querySelector("table")
const tr = document.createElement("tr")
const td1 = document.createElement("td")
td1.textContent = "103"
const td2 = document.createElement("td")
td2.textContent = "Piotr"
const td3 = document.createElement("td")
td3.textContent = "Aktywny"
const td4 = document.createElement("td")
td4.innerHTML = '<button class="delete-row">Usuń</button>'
tr.appendChild(td1)
tr.appendChild(td2)
tr.appendChild(td3)
tr.appendChild(td4)
tabela.appendChild(tr)

// Zadanie 19
const paragraf = document.createElement("p")
paragraf.textContent = "tekst"
const noc = document.querySelector("#forms-demo")
noc.prepend(paragraf)

// Zadanie 20
const cos = document.createElement("li")
const cos2 = document.createElement("li")
const cos3 =  document.createElement("li")
const skill = document.querySelector("#skill-list")
skill.appendChild(cos)
skill.appendChild(cos2)
skill.appendChild(cos3)

// Zadanie 21
const p = document.querySelector(".notification-item, .alert");
console.log(p)
const p2 = p.cloneNode(true);
const notification_wrapper = document.querySelector(".notification-wrapper")
notification_wrapper.appendChild(p2)

// Zadanie 22
const span = document.createElement("span")
span.textContent = "Wymagane"
const label = document.querySelector(".form-group > label")
label.appendChild(span)

// Zadanie 23
const hr = document.createElement("hr")
const main = document.querySelectorAll("#content-area")
main.forEach((elements) => {
  elements.appendChild(hr)
})

// Zadanie 24
const inner = document.querySelector("footer > address")                     
inner.innerHTML = "https://pl.wikipedia.org/wiki/Roman_Reigns"

// Zadanie 25
const emotka = document.querySelector("h1")
emotka.prepend("👌 ")

// Zadanie 26
const opcja = document.createElement("option")
opcja.textContent = "Administrator"
const rola = document.querySelector("#role-select")
rola.appendChild(opcja)

// Zadanie 27
const stylee = document.createElement("style")
const xd = document.querySelector("body")
xd.style.backgroundColor = "lightgrey"
const xd2 = document.querySelector("head")
xd2.appendChild(stylee)

// Zadanie 28
const przycisk = document.createElement("button")
przycisk.textContent = "Anuluj"
const formularz = document.querySelector("form")
formularz.appendChild(przycisk)

// Zadanie 29
const pop = document.createElement("div")
pop.textContent = "😁"
pop.classList.add("alert-box")
const pop2 = document.querySelector("#data-demo")
pop2.appendChild(pop)

// Zadanie 30
const znacznik = document.createElement("mark")
const znacznik2 = document.querySelector(".level-3, .nest")
znacznik2.appendChild(znacznik)

// Zadanie 31
const ha1 = document.querySelector("h1")
ha1.style.backgroundColor = "navy"

// Zadanie 32
const pup = document.querySelector(".admin-only")
pup.style.display = "block"

// Zadanie 33
const obraz = document.querySelector("#main-image")
obraz.src = "roman"

// Zadanie 34
const roman = document.querySelectorAll(".notification-item")
roman.forEach((romus) => {
  romus.classList.add("highlight")
})

// Zadanie 35
const tekst = document.querySelector('[name="user"]').placeholder = "Podaj imię.."

// Zadanie 36
const seth = document.querySelector("[data-priority]")
console.log(seth.dataset.priority)

// Zadanie 37
const nowa = document.querySelector("time")
nowa.setAttribute('datetime', "2026-04-29")

// Zadanie 38
const user = document.querySelector("#username")
user.setAttribute("type", "disable")

// Zadanie 39
const opis = document.querySelector("figcaption")
opis.textContent = "Nowy opis obrazka"

// Zadanie 40
const rock = document.querySelector("table")
rock.style.border = "2px"

// Zadanie 41
const drew = document.querySelector(".level-3")
drew.classList.remove("nest")

// Zadanie 42
const wwe = document.querySelector(".success")
wwe.style.backgroundColor = "green"

// Zadanie 43

