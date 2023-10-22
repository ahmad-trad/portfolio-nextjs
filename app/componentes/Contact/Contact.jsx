"use client"
import { useRef } from "react"
import  styles from "./Contact.module.css"
import emailjs from "@emailjs/browser"
import { motion } from "framer-motion"

export const Contact = () => {
    
    const form = useRef();
    
    const sendEmail = (e) =>{
        e.preventDefault();
        emailjs.sendForm( "service_mx4ddu8","template_uaaj1xh", form.current ,"kGjZIYvj4Ha5I-SoO")
        .then(() => {
            // toast.success("Message Send");
            console.log("done")
        })
        .then(null, () => {
            // toast.error("Somethind Is Wrong");
            console.log("fales")
        })

        e.target.reset();
    }

    
  return (
    <div className={styles.contact}>
        <h2 className={styles.contact_heading}>contact</h2>
        <motion.div 
            initial={{y: 200}}
            whileInView={{y: 0}}
            transition={{duration: 0.5}}
            viewport={{ once: true }}
            className={styles.card_contact}
        >
            <form onSubmit={sendEmail} ref={form} className={styles.form}>
                <div className={styles.contact_flex}>
                    <div className={styles.flex_col}>
                        <label className={styles.label} htmlFor="first-name">first nmae</label>
                        <input required className={styles.input} type="text" name="first-name" id="first-name" />
                    </div>
                    <div className={styles.flex_col}>
                        <label className={styles.label} htmlFor="last-name">last name</label>
                        <input required className={styles.input} type="text" name="last-name" id="last-name" />
                    </div>
                </div>
                <div className={styles.contact_flex}>
                    <div className={styles.flex_col}>
                        <label className={styles.label} htmlFor="email">email</label>
                        <input required className={styles.input} type="email" name="email" id="email" />
                    </div>
                    <div className={styles.flex_col}>
                        <label className={styles.label} htmlFor="subject">subject</label>
                        <input required className={styles.input} type="text" name="subject" id="subject" />
                    </div>
                </div>
                <label className={styles.label} htmlFor="massage">massage</label>
                <textarea className={styles.textarea} name="massage" id="massage" cols="30" rows="10"></textarea>

                <input className={styles.btn} type="submit" value="send" id="btn" />
            </form>
        </motion.div>
    </div>
)
}
