import { gsap } from "gsap";

export const carousel = () => {
    const carousel_trey = document.querySelector('.image_trey')
    const arrow_left = document.querySelector('.arrow_left')
    const arrow_right = document.querySelector('.arrow_right')
    const total_index = document.querySelectorAll('.project').length - 1
    const featured_circle_nav = document.querySelectorAll('.featured_mini_nav .circle')
    const banner_mini_nav = document.querySelectorAll('.mini_nav .circle')
    const banner_image_trey = document.querySelector('.banner_image_trey')
    const banner_navigation_h2 = document.querySelectorAll('.banner_navigation h2')
    const element_total_count = document.querySelectorAll('.element').length - 1
    const element_total = document.querySelectorAll('.element')
    const service_left_arrow = document.querySelector('.service_arrow_left')
    const service_right_arrow = document.querySelector('.service_arrow_right')
    const service_heading = document.querySelector('.service h1')
    const service_body_text = document.querySelector('.service p')
    var element_count = 0
    const rotate_value = 90
    var start_value = 0
    const move_value = 60
    var count = 1;
    var value = 0;

   

    const service_content = [
        {
            headings: [
                'Project Management',
                'Detailed Engineering Design',
                'Conceptual Design and Feasibility Studies',
                'Construction Supervision',




            ]
        }, {
            contents: [
                `Project management involves planning, organizing, and overseeing all phases of a project to ensure successful completion.`,

                `
                Detailed engineering design transforms conceptual plans into precise technical specifications.`,

                `Conceptual design and feasibility studies assess the viability of a project in its early stages.`,

                `
                Construction supervision ensures that building projects are executed according to plans, specifications, and regulations. `,






            ]
        }


    ]

    //Banner carousel codes begin here...
    banner_mini_nav.forEach((items, index) => {
        items.style.cssText = `
        width:6px;
        height:6px;
        background:transparent
        `

        if (index == 0) {
            items.style.cssText = `
                width:10px;
                height:10px;
                background:white
            `
        }

        items.onclick = () => {

            banner_mini_nav.forEach(banner_nav => {
                banner_nav.style.cssText = `
                    width:6px;
                    height:6px;
                    background:transparent
                `
            })

            items.style.cssText = `
                width:10px;
                height:10px;
                background:white
            `

            switch (index) {
                case 0:
                    banner_image_trey.style.cssText = `
                        left:0%
                    `
                    banner_navigation_h2.forEach((h2_items, h2_index) => {
                        h2_items.style.cssText = `
                            font-size:1rem;
                            font-weight:100;
                            font-family:Helvetica-thin;
                            color:grey;
                        `

                        if (h2_index == 0) {
                            h2_items.style.cssText = `
                            font-size:2.2rem;
                            color:white,
                            
                        `
                        }
                    })
                    break;
                case 1:
                    banner_image_trey.style.cssText = `
                        left:-100%;
                    `

                    banner_navigation_h2.forEach((h2_items, h2_index) => {
                        h2_items.style.cssText = `
                            font-size:1rem;
                            font-weight:100;
                             font-family:Helvetica-thin;
                             color:grey;
                        `

                        if (h2_index == 1) {
                            h2_items.style.cssText = `
                            font-size:3rem;
                            color:white
                        `
                        }
                    })
                    break;
                case 2:
                    banner_image_trey.style.cssText = `
                        left:-200%
                    `

                    banner_navigation_h2.forEach((h2_items, h2_index) => {
                        h2_items.style.cssText = `
                            font-size:1rem;
                            font-weight:100;
                             font-family:Helvetica-thin;
                             color:grey;
                        `

                        if (h2_index == 2) {
                            h2_items.style.cssText = `
                            font-size:3rem;
                            color:white
                        `
                        }
                    })
                    break;
            }
        }
    })

    //Featured projects carousel codes begin here...

    arrow_right.onclick = () => {
        if (count < total_index) {
            count++;
            value += move_value

            carousel_trey.style.cssText = `
            transform:translateX(-${value}%)
            `
        }

        featured_circle_nav.forEach((items, index) => {

            items.style.cssText = `
            width:5px;
            height:5px;
            background-color:transparent;
    
            `
            if (index == 1) {
                items.style.cssText = `
                width:10px;
                height:10px;
                background-color:white;
    
            `
            }


        })
    }

    arrow_left.onclick = () => {

        if (count > 1) {
            count--;
            value -= move_value

            carousel_trey.style.cssText = `
             transform:translateX(${value}%)
             `
        }

        featured_circle_nav.forEach((items, index) => {

            items.style.cssText = `
            width:5px;
            height:5px;
            background-color:transparent;
    
            `
            if (index == 0) {
                items.style.cssText = `
                width:10px;
                height:10px;
                background-color:white;
    
            `
            }


        })

    }


    featured_circle_nav.forEach((items, index) => {

        items.style.cssText = `
        width:5px;
        height:5px;
        background-color:transparent;

        `
        if (index == 0) {
            items.style.cssText = `
            width:10px;
            height:10px;
            background-color:white;

        `

            
        }


        items.onclick = () => {

            featured_circle_nav.forEach(all_circle => {
                all_circle.style.cssText = `
                width:5px;
                height:5px;
                background-color:transparent;
        
            `
            })

            items.style.cssText = `
                width:10px;
                height:10px;
                background-color:white;

            `

            if(index===0){
                if (count > 1) {
                    count--;
                    value -= move_value
        
                    carousel_trey.style.cssText = `
                     transform:translateX(${value}%)
                     `
                }
            }else{
                if (count < total_index) {
                    count++;
                    value += move_value
        
                    carousel_trey.style.cssText = `
                    transform:translateX(-${value}%)
                    `
                }
            }

        }
    })


    //Service carousel codes begin here...
    let items = gsap.utils.toArray(".element");

    items.forEach((item, index) => {
        item.style.transform = 'scale(.6)'
        const content = item.querySelector('.content')

        if (index === 0) {
            item.style.transform = 'scale(1)'
            content.style.opacity = 0
        }
    })

    // service_heading.textContent = service_content[0].headings[0]
    // service_content.textContent = service_content[1].contents[0]

    service_right_arrow.onclick = () => {
        if (element_count < element_total_count) {

            start_value += rotate_value
            gsap.to('.circle_carousel', {
                rotation: `${start_value}`,
                transformOrigin: 'center',
                duration: 5,
                ease: 'power4.out'
            });

            gsap.to(items, {
                rotation: `-${start_value}`,
                transformOrigin: 'center',
                duration: 2.5
            });

            //Changes the scale of the image on click

            element_total.forEach((item, index) => {
                const content = item.querySelector('.content')

                gsap.to(item, {
                    scale: .6
                })

                gsap.to(content, {
                    opacity: 1
                })

                var size_index = element_total_count - (element_count)

                if (index === size_index) {



                    gsap.to(item, {
                        scale: 1
                    })

                    gsap.to(content, {
                        opacity: 0
                    })

                    service_heading.textContent = service_content[0].headings[size_index]
                    service_body_text.textContent = service_content[1].contents[size_index]




                }

            })

            element_count++

        } else {
            element_count = 0

            start_value += rotate_value
            gsap.to('.circle_carousel', {
                rotation: `${start_value}`,
                transformOrigin: 'center',
                duration: 5,
                ease: 'power4.out'
            });

            gsap.to(items, {
                rotation: `-${start_value}`,
                transformOrigin: 'center',
                duration: 2.5
            });

            //Changes the scale of the image on click


            var size_index = element_total_count - element_total_count

            service_heading.textContent = service_content[0].headings[size_index]
            service_body_text.textContent = service_content[1].contents[size_index]

            console.log(element_total[0])


            element_total.forEach((reset, reset_index) => {
                const content = reset.querySelector('.content')
                gsap.to(reset, {
                    scale: 0.6,
                })

                gsap.to(content, {
                    opacity: 1
                })

                if (reset_index === size_index) {
                    gsap.to(reset, {
                        scale: 1
                    })

                    gsap.to(content, {
                        opacity: 0
                    })
                }


            })




            // element_total.forEach((item,index)=>{
            //     // alert(index)

            //     gsap.to(item,{
            //         scale: 0.6,
            //     })

            //     gsap.to(content, {
            //         opacity: 1
            //     })


            //     if(index == size_index){
            //         gsap.to(item,{
            //             scale:1
            //         })

            //         gsap.to(content, {
            //             opacity: 0
            //         })
            //     }
            // })

        }


    }







    //Carousel Function ends here...//
}



