window.addEventListener('DOMContentLoaded', init)

function init() {
  const glow = document.getElementById('glow')
  setInterval(() => {
    glow.classList.toggle('glowing')
  }, 1000)


  const text = 'Junior Web Developer'
  let i = 0

  const typeWriter = () => {
    if (i < text.length) {
      document.getElementById('subtitle').innerHTML += text.charAt(i)
      i++
      setTimeout(typeWriter, 120)
    }
  }

  typeWriter()

  
}



