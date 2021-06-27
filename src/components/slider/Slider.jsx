import { Carousel } from 'antd';
import 'react-awesome-slider/dist/styles.css';
import styles from './slider.module.css';
import { Link } from 'react-router-dom';
import Content from '../content/Content';
import Step from '../steps/Steps';
import Info from '../info/Info';


const Slider = () => {

    return (
        <div>
            <Carousel style={{ textAlign: 'center' }}>
                <div
                    className={styles.gradient}
                >

                    <p style={{ fontWeight: 'bold', marginBottom: '7px', marginTop: '20px' }}>Your resumeis is available at a click</p>
                    <p style={{ fontStyle: 'italic' }}>Easy tools to get started with</p>
                    <Link to="/build-resume">
                        <button>
                            BUILD A REZUME
                        </button>
                    </Link>
                </div>
                <div
                    className={styles.gradient}

                >
                </div>
            </Carousel>
            <Content />
            <Step />
            <Info />
        </div>
    )
}
export default Slider