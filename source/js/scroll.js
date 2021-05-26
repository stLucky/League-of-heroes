const scrollBtns = document.querySelectorAll('.js--scroll');
const chars = document.querySelector('#chars');
const events = document.querySelector('#events');
const mount = document.querySelector('#mount');
const footer = document.querySelector('#footer');


const onBtnClick = (evt) => {
  const scrollToElement = (element) => {
    if (evt.target.href.includes(`#${element.id}`)) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  };

  evt.preventDefault();

  scrollToElement(chars);
  scrollToElement(events);
  scrollToElement(mount);
  scrollToElement(footer);
};


scrollBtns.forEach((btn) => {
  btn.addEventListener('click', onBtnClick);
});
