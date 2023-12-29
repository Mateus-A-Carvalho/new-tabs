const tabTitleListEl = document.querySelectorAll('.title-tab');
const sectionTabListEl = document.querySelectorAll('.tab');

tabTitleListEl.forEach(anchorElement => {
  const idTabTitle = anchorElement.getAttribute("data-tab"); // Catching elements with data-tab attribute
  const tabSelected = document.querySelector(`.${idTabTitle}`); // Catching elements that has the same class of data-tab;

  anchorElement.addEventListener('click', (e) => {
    let clickedElement = e.target;
    if(clickedElement.hasAttribute('data-tab')) {
      console.log(clickedElement);
    }
  })
})