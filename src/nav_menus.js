const menu_items = document.querySelectorAll('nav ul a')



export const navHover = () => {
    menu_items.forEach(items => {
        items.classList.add('inactive')
        items.addEventListener('mouseover', () => {
            items.classList.remove('inactive')

            menu_items.forEach(active_items => {
                active_items.classList.remove('active')
            })

        })

        items.addEventListener('mouseleave', () => {
            items.classList.add('inactive')

            menu_items.forEach(active_items => {
                const active_id = active_items.getAttribute('data-id')

                if (active_id == 'active') {
                    active_items.classList.add('active')
                }
            })
        })
    })

  



}

