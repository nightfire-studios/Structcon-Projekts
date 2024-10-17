import personnel_image1 from './images/personnel/managing_director.webp'
import personnel_image2 from './images/personnel/engineer.webp'
import personnel_image3 from './images/personnel/co-founder.webp'
import personnel_image4 from './images/personnel/profile_holder.png'
import personnel_image5 from './images/personnel/construction_manager.webp'
import personnel_image6 from './images/personnel/project_manger.webp'
import personnel_image7 from './images/personnel/structural-engineer.webp'
import quantity_surveyor from './images/personneL/quantity_survayor.jpeg'
import mep from './images/personnel/mep.jpeg'
import interior_design from './images/personnel/interior.jpeg'
import civil_engineer from './images/personnel/civil_engineer.jpg'



export const personnelFunction = ()=>{
    const personnel_container = document.querySelector('.personnel_container')
    const associates = document.querySelector('.associates')
    const personnel_information = [
    {
        name: 'Ing Andrew Yeboah Agyemang',
        img: personnel_image1,
        position: 'Founder / Project Director',
        email:'info@structconprojekts.com'
    },
    {
        name: 'Kojo Asare',
        img: personnel_image3,
        position: 'Co-founder /Technical Director',
        email:'info@structconprojekts.com'
    },
    {
        name: 'Prisca Precious Yeboah',
        img: personnel_image6,
        position: 'Project Manager',
        email:'info@structconprojekts.com'
    },
    {
        name: 'Godzah Prosper Selasie',
        img: personnel_image5,
        position: 'Construction Manager',
        email:'info@structconprojekts.com'
    },
    {
        name: 'Moses Appiah',
        img: personnel_image2,
        position: 'QA/QC Engineer ',
        email:'info@structconprojekts.com'
    },
   
]

const associates_personel = [
    // {
    //     name: 'Priscilla Asare Mensah',
    //     img: personnel_image4,
    //     position: 'Senior Architect',
    //     email:'info@structconprojekts.com'
    // },
    
    // {
    //     name: 'Priscilla Asare Mensah',
    //     img: personnel_image4,
    //     position: 'Principal Engineer',
    //     email:'info@structconprojekts.com'
    // },
    {
        name: 'Elizabeth Nana Yaa Eyram Nongo',
        img: personnel_image4,
        position: 'Associate - Principal Architect',
        email:'info@structconprojekts.com'        
    },
    {
        name: 'Kelvin Frimpong',
        img: personnel_image4,
        position: 'Associate - Structural Engineer',
        email:'info@structconprojekts.com'        
    },
    {
        name: 'Marco Antic',
        img: personnel_image7,
        position: 'Associate - Structural Engineer',
        email:'info@structconprojekts.com'        
    },
   
    {
        name: 'Ing Richmond Akoliga',
        img: mep,
        position: 'Associate - MEP Engineer',
        email:'info@structconprojekts.com'
    },
    {
        name: 'Ing Benjamin Elorm Nyonator',
        img: civil_engineer,
        position: 'Associate - Civil Engineer',
        email:'info@structconprojekts.com'
    },
    {
        name: 'Meshach o. Ababio',
        img: quantity_surveyor,
        position: 'Associate - Quantity Surveyor',
        email:'info@structconprojekts.com'
    },
    // {
    //     name: 'Priscilla Asare Mensah',
    //     img: personnel_image4,
    //     position: 'Quantity Survaior',
    //     email:'info@structconprojekts.com'
    // },
    {
        name: 'Priscilla Asare Mensah',
        img: interior_design,
        position: 'Associate - Interior Designer',
        email:'info@structconprojekts.com'        
    }
  
    
]

associates_personel.forEach(items=>{
    const personnel_card = document.createElement('div')
    const template = `
         <div class="personnel">
                <div class="personnel_image">
                    <img src=${items.img} alt="structcon projecks personnel">
                </div>

                <div class="name_position">
                    <p class="name">${items.name}</p>
                    <p>${items.position}</p>
                </div>

                <div class="personnel_email">
                    <a href="#">${items.email}</a>
                </div>

         </div>
    `
    personnel_card.innerHTML = template
   associates.appendChild(personnel_card)
})

personnel_information.forEach(items => {
    const personnel_card = document.createElement('div')
    const template = `
         <div class="personnel">
                <div class="personnel_image">
                    <img src=${items.img} alt="structcon projecks personnel">
                </div>

                <div class="name_position">
                    <p class="name">${items.name}</p>
                    <p>${items.position}</p>
                </div>

                <div class="personnel_email">
                    <a href="#">${items.email}</a>
                </div>

         </div>
    `
    personnel_card.innerHTML = template
   personnel_container.appendChild(personnel_card)
})
}

