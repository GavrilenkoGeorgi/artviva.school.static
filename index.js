import { date } from './js/dateAndTime.js'

document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    const footerDate = document.querySelector('.footer-year')
    footerDate.textContent = date()
  }
}
