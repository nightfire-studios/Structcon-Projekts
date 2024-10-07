const project_trey = document.querySelector('.project_viewport')
const projects = document.querySelectorAll('.project')
const project_count = document.querySelector('.project_count')
const property_name = document.querySelector('.property_name')
const project_size = document.querySelector('.project_size')
const project_time = document.querySelector('.project_time')
const project_location = document.querySelector('.project_location')

export const projectFunctions = ()=>{
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
                project_count.innerHTML = '0' + (index+1)

                if(index === 0){
                    property_name.textContent = '- Grace Heights Homes'
                    project_size.textContent = '388sqm'
                    project_time.textContent = '2023 - TBD'
                    project_location.textContent = 'Adjrigano - West Legon'
                }else if(index === 1){
                    property_name.textContent = '- Josh homes'
                    project_size.textContent = '415sqm'
                    project_time.textContent = '2023 - TBD'
                    project_location.textContent = 'American House - East Legon'
                }else if(index === 2){
                    property_name.textContent = '- Rosey Homes'
                    project_size.textContent = '355sqm'
                    project_time.textContent = '2024 - TBD'
                    project_location.textContent = 'Dorwenya'
                }

                
            }
        })
    })
}