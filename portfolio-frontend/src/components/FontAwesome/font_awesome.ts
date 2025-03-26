import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faGithub,
  faLinkedin,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'
import {
  faArrowRight,
  faPen,
  faPhone,
  faEnvelope, 
  faUser,    
  faPaperPlane,
  faTimes,
  faMessage,
  faSpinner,
  faGraduationCap,
  faBriefcase,
  faAward,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faGithub, faLinkedin, faFacebook, 
  faArrowRight, faPen, faPhone, faEnvelope, 
  faUser, faPaperPlane, faTimes, faMessage, faSpinner,
  faGraduationCap, faBriefcase, faAward
)

export const setupFontAwesome = (app: any) => {
  app.component('font-awesome-icon', FontAwesomeIcon)
}
