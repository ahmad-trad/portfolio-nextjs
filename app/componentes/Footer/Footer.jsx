import styles from './Footer.module.css'
import IconLinkedin from '../Svg/linkedinIcon'
import IconTwitter from '../Svg/twitter'
import IconGithub from '../Svg/gethubIcon'
import FacebookIcon from '../Svg/facebookIcon'

export const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.copy}>
            all rights reseved {new Date().getFullYear()} &copy;
        </div>

        <div className={styles.build}>  
            build whith by <span>ahmad trad</span>
        </div>

        <div className={styles.icons_footer}>
        <ul className={styles.list_icons_footer}>
        <a  href="https://www.linkedin.com/in/ahmad-trad-b1b62a22b/" target="_blank">
              <li><IconLinkedin /></li>
            </a>

            <a  href="https://www.facebook.com/profile.php?id=100004400133646" target="_blank">
              <li><FacebookIcon /></li> 
            </a>

            <a  href="https://github.com/ahmad-trad" target="_blank">
              <li><IconGithub /></li>
            </a>

            <a  href="" target="_blank">
              <li><IconTwitter /></li> 
            </a>
        </ul>
      </div>
    </div>
  )
}
