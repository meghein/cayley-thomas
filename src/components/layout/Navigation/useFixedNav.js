import { useEventListener } from 'hooks/useEventListener'

export function useFixedNav (containerId, navBarId) {
  return useEventListener('scroll', () => {
    const topBorder = document
      .getElementById(containerId)
      .getBoundingClientRect().top

    topBorder >= 0
      ? document.getElementById(navBarId).classList.remove('fixed-nav')
      : document.getElementById(navBarId).classList.add('fixed-nav')
  })
}

export function useCurrentPage (pages, theme) {
  return useEventListener('scroll', () => {
    pages.forEach((page) => {
      const pageInView = document
        .getElementById(page.toLowerCase())
        .getBoundingClientRect().top

      const navItem = document.getElementById(`nav${page}`)
      const navLink = document.getElementById(`link${page}`)

      if (pageInView < window.innerHeight / 5 && pageInView > window.innerHeight * -0.75) {
        navItem.setAttribute('style', `border-bottom: 2px solid ${theme.deepTaupe};`)
        navLink.className = 'highlight'
      } else {
        navItem.setAttribute('style', 'color: inherit')
        navLink.removeAttribute('class')
      }
    })
  })
}
