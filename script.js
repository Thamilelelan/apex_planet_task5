function toggleMenu(){document.querySelector('.nav-links').classList.toggle('show')}function navigateTo(page){window.location.href=page}document.querySelectorAll('button,a').forEach(e=>{e.addEventListener('click',()=>{setTimeout(()=>{e.blur()},10)})});