import gsap from "gsap"

const project_trey = document.querySelector('.project_viewport')
const projects = document.querySelectorAll('.project')
const project_count = document.querySelector('.project_count')
const property_name = document.querySelector('.property_name')
const project_size = document.querySelector('.project_size')
const project_time = document.querySelector('.project_time')
const project_location = document.querySelector('.project_location')

const project_arrow_left = document.querySelector('.project_arrow_left')
const project_arrow_right = document.querySelector('.project_arrow_right')
const projects_trey = document.querySelector('.project_trey')
const totalItems = document.querySelectorAll('.project_trey img').length
var itemIndex = 1
const moveValue = 82
var value = 0
const projects_count = document.querySelector('.projects_count')
const projects_total = document.querySelector('.projects_total')
const gallery_count = document.querySelector('.gallery_count')
const gallery_total = document.querySelector('.gallery_length')

const gallery_arrow_left = document.querySelector('.gallery_arrow_left')
const gallery_arrow_right = document.querySelector('.gallery_arrow_right')
const gallery_trey = document.querySelector('.gallery_trey')

const gallery_length = document.querySelectorAll('.gallery_trey img').length

document.addEventListener('DOMContentLoaded',()=>{

    projects_total.textContent = '0' + totalItems
    gallery_total.textContent = '0' + gallery_length
})


export const projectFunctions = () => {
    const getScrollIndex = () => {


        var scrollIndex = -1
        var infinitNumber = Infinity


        const treyCenter = project_trey.scrollTop + project_trey.offsetHeight / 2

        projects.forEach((items, index) => {
            const projectCenter = items.offsetTop + items.offsetHeight / 2

            const distance = Math.abs(projectCenter - treyCenter)



            if (distance < infinitNumber) {
                infinitNumber = distance
                scrollIndex = index

            }

        })

        return scrollIndex

    }

    project_trey.addEventListener('scroll', () => {
        var project_index = getScrollIndex()

        projects.forEach((items, index) => {
            if (index === project_index) {
                project_count.innerHTML = '0' + (index + 1)

                if (index === 0) {
                    property_name.textContent = '- Grace Heights Homes'
                    project_size.textContent = '388sqm'
                    project_time.textContent = '2023 - TBD'
                    project_location.textContent = 'Adjrigano - West Legon'
                } else if (index === 1) {
                    property_name.textContent = '- Abetifi Container Project'
                    project_size.textContent = '415sqm'
                    project_time.textContent = '2023 - TBD'
                    project_location.textContent = 'Abetifi'
                } else if (index === 2) {
                    property_name.textContent = '- Josh homes'
                    project_size.textContent = '355sqm'
                    project_time.textContent = '2024 - TBD'
                    project_location.textContent = 'East Legon - American House'
                } else if (index === 3) {
                    property_name.textContent = '- Rosey homes'
                    project_size.textContent = '435sqm'
                    project_time.textContent = '2024 - TBD'
                    project_location.textContent = 'Dorwenya'
                }


            }
        })
    })
}

export const projectCarausel = () => {

    console.log(totalItems)

    project_arrow_right.onclick = () => {
        if (itemIndex < totalItems) {
            value += moveValue
            projects_trey.style.transform = `translateX(-${value}%)`
            itemIndex++
            projects_count.textContent = '0' + itemIndex
        }
    }

    project_arrow_left.onclick = () => {
        if (itemIndex > 1) {
            itemIndex--
            value -= moveValue
            projects_trey.style.transform = `translateX(-${value}%)`
            projects_count.textContent = '0' + itemIndex
        }
    }

}

export const galleryCarousel = () => {

    var gallery_index = 1
    var gallery_value = 0
    const gallery_moveValue = 100

    gallery_arrow_right.onclick = () => {
        if (gallery_index < gallery_length) {
            gallery_value += gallery_moveValue
            gallery_trey.style.transform = `translateX(-${gallery_value}%)`
            gallery_index++
            gallery_count.textContent = '0' + gallery_index
        }
    }

    gallery_arrow_left.onclick = () => {
        if (gallery_index > 1) {
            gallery_index--
            gallery_value -= gallery_moveValue
            gallery_trey.style.transform = `translateX(-${gallery_value}%)`
            gallery_count.textContent = '0' + gallery_index

        }
    }



}

export const intersetion_observer = ()=>{

    var projectImages = document.querySelectorAll('.content_img img')
    var content_img2 = document.querySelectorAll('.content_img2')
    var content1 = document.querySelector('.content1')
    var content3 = document.querySelector('.content3')
    var project_breaker = document.querySelector('.project_breaker')
    var observeArray = [content1,project_breaker,content3]

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: .2

    }

   const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show')
            
        }
    })
   },options)

   projectImages.forEach(items=>{
    observer.observe(items)
   })

   observeArray.forEach(items=>{
    observer.observe(items)
   })

   content_img2.forEach(items=>{
    observer.observe(items)
   })
}

export const quickNav = ()=>{
    //Quick navigation menu begins here...
    const main_navigation_content = document.querySelector('.main_navigation_content')
    const quick_nav_button = document.querySelector('.quick_nav_button')
    var toggle = false

    quick_nav_button.onclick = ()=>{
        
        if(toggle=!toggle){
            gsap.to(main_navigation_content,{
                display:'flex',
                opacity:1,
               
            })
        }else{
            gsap.to(main_navigation_content,{
                opacity:0,
               
                onComplete:()=>{
                    gsap.to(main_navigation_content,{
                        display:'none',
                    })
                }
            })
        }
    }
}
