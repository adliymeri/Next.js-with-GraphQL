import HeroSection from "@/components/hero-section"
import styles from '@/styles/Home.module.scss'

function HomePage() {
    return (
        <div>
            <HeroSection/>
            <div className={styles.secondSection}>
                <div className={styles.text}>
                    <h3 className={styles.h3}>Design inspired by you</h3>
                    <p className={styles.description}>
                        This is the studio philosophy<br></br>
                        reflected in its motto and its<br></br>
                        name. UDV
                    </p>
                </div>
                <div className={styles.numbers}>
                    <div className={styles.slots}>
                        <div className={styles.number}>12</div>
                        <p className={styles.description}>COUNTRIES</p>
                    </div>
                    <div className={styles.slots}>
                        <div className={styles.number}>60</div>
                        <p className={styles.description}>PROJECTS<br></br>INTERNATIONALLY</p>
                    </div>
                    <div className={styles.slots}>
                        <div className={styles.number}>99k</div>
                        <p className={styles.description}>SQ METERS<br></br>IN TOTAL</p>
                    </div>
                </div>
            </div>
            <div className={styles.thirdSection}>
                <div className={styles.thirdContainer}>
                    <img className={styles.thirdImage} src="/photos/Mask Group 2.png"></img>
                    <div className={styles.thirdText}>
                        <div className={styles.textContainer}>
                            We design spaces with that elusive ‘must-have’ quality – translating<br></br>
                            requirements, constraints and opportunities into places that are more<br></br>
                            than the sum of their parts.<br></br>
                            <br></br>
                            <br></br>
                            Using our insight-led approach and drawing on experience from our<br></br>
                            250+ strong team, we help invigorate communities, excite<br></br>
                            stakeholders and maximise long-term value.<br></br>
                        </div>
                        <div className={styles.bottomThird}>
                            <div className={styles.bottomText}>Learn more about us</div>
                            <img className={styles.arrow} src="/photos/arrow-black.png"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default HomePage