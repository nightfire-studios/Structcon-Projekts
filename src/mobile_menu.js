import {gsap} from "gsap";

const mobileMenuFunctions = ()=>{
    const mobile_menu = document.querySelector('.mobile_menu')
    const mobile_menu_container = document.querySelector('.mobile_manu_container')
    const all_menu = document.querySelectorAll('.mobile_manu div h1')
    const mobile_contact = document.querySelector('.mobile_contact')
    const menu_line = document.querySelectorAll('.line_holder .line')
    var mobileBool = true
    mobileBool = !mobileBool

    mobile_menu.onclick = ()=>{
        const timeline = gsap.timeline()

        if(mobileBool=!mobileBool){
            timeline.to(mobile_menu_container,{
                transform:'translate(0)'
            }).to(all_menu,{
                transform:'translate(0)',
                stagger:.1
            }).to(mobile_contact,{
                opacity:1
            })

            menu_line.forEach((items,index) =>{
                if(index == 0 ){
                    items.style.cssText = `
                        transform:rotate(45deg);
                        position:absolute;
                        top:50%;
                    `
                }else if (index ==1){
                    items.style.cssText = `
                        transform:rotate(-45deg);
                        margin:0;
                       
                    `
                }
            })

           
        }else{
            timeline.to(mobile_menu_container,{
                 transform:'translate(100%)'
            }).to(all_menu,{
                transform:'translate(30%)'
            }).to(mobile_contact,{
                opacity:0
            })

            menu_line.forEach((items,index) =>{
                if(index == 0 ){
                    items.style.cssText = `
                        transform:rotate(0deg);
                        position:absolute;
                        top:0;
                    `
                }else if (index ==1){
                    items.style.cssText = `
                        transform:rotate(odpdeg);
                        margin-top:15px;
                       
                    `
                }
            })

           
        }

        
       
       
    }
}

module.exports = {
    mobileMenuFunctions
}