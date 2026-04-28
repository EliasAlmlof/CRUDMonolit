import React from "react";
import logo from "../assets/logoIcon.svg";
import { Turtle} from 'lucide-react';
import styles from './Footer.module.css';

/**
 * Footer component for the Festis website. Includes: company logo
 * and Social media icons (Facebook, Instagram, LinkedIn, YouTube)
 *
 * Uses styles from `Footer.module.css` and SVG icons from `lucide-react`.
 *
 * @author Max Masuch
 * @author Ismail Mohammed
 * @author Johan Karlsson
 * @author Elias Almlöf
 * @author Milan Hatami
 */

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <img src={logo} alt="logo" className={styles.logo} />
            <div className={styles.footerDivider}>
                <div className={styles.socialIcons}>
                    <Turtle className={styles.socialIconsImg}/>
                    <Turtle className={styles.socialIconsImg}/>
                    <Turtle className={styles.socialIconsImg}/>
                    <Turtle className={styles.socialIconsImg}/>
                </div>
            </div>
            <p>© 2025 Festis. All rights reserved.</p>
        </footer>
    )
}
