const tabsEl = document.querySelector('#tabs-name');
const tabsBtnEl = document.querySelectorAll('.title-tab');
const tabsContent = document.querySelectorAll('.tab');

tabsEl.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  
  if(id) { 
    tabsBtnEl.forEach(btns => { 
      btns.classList.remove('active');
    }) 

  e.target.classList.add('active') 

  tabsContent.forEach(content => {
    content.classList.remove('active')
  })

  const contentElement = document.getElementById(id);
  contentElement.classList.add('active');

  }
})