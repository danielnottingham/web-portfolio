//
function typeWritter(element) {
  const textArray = element.innerHTML.split('');
  element.innerHTML = ""
 
  textArray.forEach((letter, i) => {
    setTimeout(()=> element.innerHTML += letter, 100 * i);
  });
}
 
 
const typingPhrase = document.getElementById('typing-phrase')
 
setInterval( function() {
  typeWritter(typingPhrase)
}, 3000 );

// button switch theme dark/light mode
const switchElement = document.querySelector('.switch')

switchElement.addEventListener('click', () => {
  document.body.classList.toggle('dark')
})