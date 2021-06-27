import styles from './step.module.css';
import icon from '../../assets/icons/arrow.png';

const Step = () => {
    return (
        <>
            <div style={{ backgroundColor: 'rgba(247, 247, 247, 0.4)' }}>
                <h1 style={{ textAlign: "center" }}>Easy 3 steps</h1>
                <div className={styles.div}>
                    <div>
                        <span className={styles.dot}>
                            <p style={{ textAlign: "center", marginTop: "14px" }}>1</p>

                        </span>
                        <div className={styles.text}>
                            <p >
                                Chose template
                            </p>
                        </div>

                    </div>
                    <div style={{ marginTop: "1rem", marginLeft: "3rem", marginRight: "0" }}>
                        <img style={{ height: "20px", width: "30px", marginBottoms: "3px" }} src={icon} alt='icon' />

                    </div>
                    <div >
                        <span className={styles.dot}>
                            <p style={{ textAlign: "center", marginTop: "14px" }}>2</p>

                        </span>
                        <div className={styles.text}>
                            <p>
                                Build resume
                            </p>
                        </div>

                    </div>

                    <div style={{ marginTop: "1rem", marginLeft: "3rem", marginRight: "0" }}>
                        <img style={{ height: "20px", width: "30px", marginBottoms: "3px" }} src={icon} alt='icon' />

                    </div>

                    <div>
                        <span className={styles.dot}>
                            <p style={{ textAlign: "center", marginTop: "14px" }}>3</p>
                        </span>
                        <div className={styles.text1}>
                            <p>
                                Review
                            </p>
                        </div>
                    </div>


                </div>


                <hr style={{ borderTop: '1px solid rgba(100, 100, 100, 0.8)' }} />
            </div>

        </>
    )
}

export default Step