const myLibrary = [];

function Book() {
  this.title;
  this.id;
  this.author;

}

function addBookToLibrary(title, author) {
  // take params, create a book then store it in the array\\
  let b = new Book();
  b.id = crypto.randomUUID();
  b.title = title;
  b.author = author;
  myLibrary.push(b);



}
const dialog = document.querySelector("dialog");
const btn = document.querySelector(".newBook");
btn.addEventListener("click", () => {
  dialog.showModal();


});
const submit = document.querySelector(".submitButton");
submit.addEventListener("click",formSubmit);
function formSubmit(event)
{
  event.preventDefault();
  const titleForm = document.querySelector(".title-field").value;
  const authorForm = document.querySelector(".author-field").value;
  addBookToLibrary(titleForm,authorForm)
  
}
