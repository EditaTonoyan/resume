// import { Container, Col, Row } from 'react-bootstrap';
import styles from './content.module.css';
import coverLetterImage from '../../assets/images/viewcover.png';
import cv from '../../assets/images/cv.jpg';
import copy from '../../assets/images/copy.png';

const Content = () => {
    return (
        <div style={{ backgroundColor: 'rgba(247, 247, 247, 0.4)' }}>
            <div className={styles.container}>
                <div className={styles.text_center}>
                    <div>
                        <img
                            src={coverLetterImage}
                            width="50px"
                            alt="One Sheet Long Developer Resume"
                        />
                    </div>
                    <h4>View sample cover letter</h4>
                    <span>
                        All job industries, multiple formats
                    </span>
                </div>


                <div className={styles.text_center}>
                    <div>
                        <img
                            src={cv}
                            width="50px"
                            alt="One Sheet Long Developer Resume"
                        />
                    </div>
                    <h4>Manage and edit your resume</h4>
                    <span >
                        variety of formats
                    </span>
                </div>
                <div className={styles.text_center}>
                    <div>
                        <img
                            src={copy}
                            width="50px"
                            alt="One Sheet Long Developer Resume"
                        />
                    </div>
                    <h4>Multiple versions of you resume</h4>
                    <span>
                        Post your resume online free
                    </span>
                </div>

            </div>
            <hr style={{ marginTop: '50px', borderTop: '1px solid rgba(100, 100, 100, 0.8)' }} />
        </div>

    )
}

export default Content