import {gsap} from "gsap";
import {navHover} from './nav_menus.js'
import {carousel} from './carousel.js'
import {galleryCarousel, projectCarausel, projectFunctions,intersetion_observer} from './projects.js'
import {personnelFunction} from './about.js'



try {

navHover()
carousel()

} catch (error) {
  console.error('Error in navHover or carousel:', error);
}

try {
  
  projectFunctions()

} catch (error) {
  console.error('Error in pro:', error);
}

try {
  projectCarausel() 
  galleryCarousel()
  intersetion_observer()

} catch (error) {
  console.error('Error in pc:', error);
}

try {
  personnelFunction()
} catch (error) {
  
}






