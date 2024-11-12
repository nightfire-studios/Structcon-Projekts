
import {navHover} from './nav_menus.js'
import {carousel} from './carousel.js'
import {galleryCarousel, projectCarausel, projectFunctions,intersetion_observer, quickNav} from './projects.js'
import {personnelFunction} from './about.js'
import { mobileMenuFunctions } from "./mobile_menu.js";


mobileMenuFunctions()
try {

navHover()
carousel()


} catch (error) {
}

try {
  
  projectFunctions()

} catch (error) {
}

try {
  projectCarausel() 
  galleryCarousel()
  intersetion_observer()
  quickNav()

} catch (error) {
}

try {
  personnelFunction()
} catch (error) {
  
}







