import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import styles from './slider.module.css';



const Slider = () => {


    return (
        <div>
            <AwesomeSlider className={styles.slider}>
                <div 
                    style={{backgroundColor:"rgba(0, 255, 255,0.8)"}}
                    >
                        <p style={{fontWeight:'bold', marginBottom:'-20px'}}>Your resumeis is available at a click</p>
                        <p style={{fontStyle: 'italic'}}>Easy tools to get started with</p>
                        <button >
                            BUILD A REZUME
                        </button>
                    </div>
                    <div style={{backgroundColor:"rgba(245, 245, 220,0.8)"}}/>
                <div style={{backgroundColor:"rgba(225, 245, 220,0.8)"}}/>
            </AwesomeSlider>
        </div>
    )
}
export default Slider