window.addEventListener('DOMContentLoaded', init)

function init() {

  const text = 'Junior Web Developer | Professional Netflix Watcher | Human Pun Generator'
  let i = 0
  


  const typeWriter = () => {
    if (i < text.length) {
      document.getElementById('abt-title').innerHTML += text.charAt(i)
      i++
      setTimeout(typeWriter, 100)
    }
  }

  typeWriter()
}






