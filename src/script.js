// fade
const fadeDiv = document.querySelector('.fade')

let hasScrolled = false
window.addEventListener('scroll', () => {
  if (!hasScrolled) {
    fadeDiv.style.opacity = '0.5'
    hasScrolled = true
  }
})

// filters
const filtersEl = document.querySelector('.work__filters')
const project1 = document.querySelector('.work__project:nth-child(1)')
const project2 = document.querySelector('.work__project:nth-child(2)')
const project3 = document.querySelector('.work__project:nth-child(3)')
const project4 = document.querySelector('.work__project:nth-child(4)')
const project5 = document.querySelector('.work__project:nth-child(5)')
const project6 = document.querySelector('.work__project:nth-child(6)')
const htmlEl = document.querySelector('html')
const workGrid = document.querySelectorAll('.work__project')
const frontEnd = document.querySelectorAll('#front-end')

filtersEl.addEventListener('click', e => {
  // remove fade
  fadeDiv.style.opacity = '0'

  // make clicked button active
  document.querySelector('.active').classList.remove('active')
  e.target.classList.add('active')
  htmlEl.style.setProperty('--default-opacity', '0.4')
  htmlEl.style.setProperty('--hover-opacity', '0.3')

  // reorganize grid 
  const filterText = e.target.textContent
  if (filterText === 'All') {
    for (const el of workGrid) {
      el.style.opacity = '1'
      el.style.transform = 'scale(1)'
    }
  } else if (filterText === 'Front-end') {
    project1.style.opacity = '0'
    project1.style.transform = 'scale(0)'
    project2.style.opacity = '0'
    project2.style.transform = 'scale(0)'
    project5.style.opacity = '0'
    project5.style.transform = 'scale(0)'
    project6.style.opacity = '0'
    project6.style.transform = 'scale(0)'

    project3.style.transform = 'translateX(-40rem)'
    project3.style.opacity = '1'
    project4.style.transform = 'translate(20rem, -29.4rem)'
    project4.style.opacity = '1'
  } else if (filterText === 'Back-end') {
    project1.style.opacity = '0'
    project1.style.transform = 'scale(0)'
    project2.style.opacity = '0'
    project2.style.transform = 'scale(0)'
    project3.style.opacity = '0'
    project3.style.transform = 'scale(0)'
    project4.style.opacity = '0'
    project4.style.transform = 'scale(0)'

    project5.style.transform = 'translate(-20rem, -21.4rem)'
    project5.style.opacity = '1'
    project6.style.transform = 'translate(-20rem, -29.4rem)'
    project6.style.opacity = '1'

  } else if (filterText === 'Full stack') {
    project3.style.opacity = '0'
    project3.style.transform = 'scale(0)'
    project4.style.opacity = '0'
    project4.style.transform = 'scale(0)'
    project5.style.opacity = '0'
    project5.style.transform = 'scale(0)'
    project6.style.opacity = '0'
    project6.style.transform = 'scale(0)'

    project1.style.opacity = '1'
    project1.style.transform = 'scale(1)'
    project2.style.opacity = '1'
    project2.style.transform = 'scale(1)'
  }
})