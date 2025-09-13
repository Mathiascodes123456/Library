let myLibrary = [];

function Book() {
  this.title;
  this.id;
  this.author;
  this.pages;
  this.readStatus;
}

function addBookToLibrary(title, author, pages, readStatus) {
  let b = new Book();
  b.id = crypto.randomUUID();
  b.title = title;
  b.author = author;
  b.pages = pages;
  b.readStatus = readStatus;
  myLibrary.push(b);
}

function displayBooks(myLibrary) {
  const ul = document.querySelector("ul");
  ul.innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    let li = document.createElement("li");
    li.id = myLibrary[i].id;
    li.textContent =
      " Title: " + myLibrary[i].title +
      " Author: " + myLibrary[i].author +
      " Read: " + myLibrary[i].readStatus + " ";

    let delbutton = document.createElement("button");
    delbutton.textContent = "Delete";
    delbutton.classList.add("delete-button");
    delbutton.id = myLibrary[i].id;

    let statusbutton = document.createElement("button");
    statusbutton.textContent = "Update Status";
    statusbutton.classList.add("status-button");
    statusbutton.id = myLibrary[i].id;

    li.appendChild(delbutton);
    li.appendChild(statusbutton);
    ul.appendChild(li);
  }
}

const dialog = document.querySelector("dialog");
const btn = document.querySelector(".newBook");
btn.addEventListener("click", () => {
  dialog.showModal();
});

const submit = document.querySelector(".submitButton");
submit.addEventListener("click", formSubmit);

function formSubmit(event) {
  const titleForm = document.querySelector(".title-field").value;
  const authorForm = document.querySelector(".author-field").value;
  const pageForm = document.querySelector(".pages-field").value;
  const readForm = document.querySelector(".read-field").value;
  addBookToLibrary(titleForm, authorForm, pageForm, readForm);
  dialog.close();
  displayBooks(myLibrary);
  event.preventDefault();
}

const ul = document.querySelector("ul");
ul.addEventListener("click", function (e) {
  if (e.target.classList.contains("status-button")) {
    for (let i = 0; i < myLibrary.length; i++) {
      if (myLibrary[i].id === e.target.id) {
        myLibrary[i].readStatus = !(myLibrary[i].readStatus);
        break;
      }
    }
  } else if (e.target.classList.contains("delete-button")) {
    myLibrary = myLibrary.filter(book => book.id !== e.target.id);
  }
  displayBooks(myLibrary);
});
