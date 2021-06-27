import 'antd/dist/antd.css';
import { Carousel, Menu } from 'antd';
import twitt from '../../assets/icons/twett.jpg';

const Info = () => {
    const contentStyle = {
        height: '300px',
        color: '#000',
        textAlign: 'center',
        background: 'rgba(247, 247, 247, 0.9)'
    };
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Recent posts</h1>
            <img style={{ width: '10%', height: '10%', marginLeft: '45%' }} src={twitt} alt="bird" />
            <h2 style={{ textAlign: 'center' }}>Common resume mistakes most people makes</h2>
            <Carousel autoplay>
                <div >
                    <h3
                        style={contentStyle}
                    >
                        <pre />
                        <pre />
                        Many candidates lose their readers right at the beginning, <pre />with their career summary.<pre />Employers do read this portion of your resume, <pre />but often they plow through vague pufferies like,  <pre />
                        “Accomplished professional seeking career growth. <pre /> " Such statements are overused, too general, and waste valuable space.

                    </h3>
                </div>
                <div>
                    <h3
                        style={contentStyle}
                    >
                        <pre />
                        <pre />
                        You may be tempted, for example, to eliminate mention of the jobs <pre />you've taken to earn extra money for school. <pre />Typically, however, the soft skills you've gained from these experiences<pre /> (e.g., work ethic, time management) are more important to employers<pre /> than you might think.
                    </h3>
                </div>
                <div>
                    <h3
                        style={contentStyle}
                    >
                        <pre />
                        <pre />
                        If your resume is wall-to-wall text featuring <pre />five different fonts, it will most likely give the employer a headache.<pre /> So show your resume to several other people before sending it out.<pre /> Do they find it visually attractive? <pre />If what you have is hard on the eyes, revise.
                    </h3>
                </div>
            </Carousel>
            <Menu
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    marginRight: '2rem',
                    backgroundColor: 'rgba(247, 247, 247, 0.9)',
                    width: '100%',
                    height: '100%',
                }}
                mode="horizontal"
                defaultSelectedKeys={['2']}
            >

                <Menu.Item key="1" style={{ color: 'black' }}>
                    About
                </Menu.Item>
                <Menu.Item key="" style={{ color: 'black' }}>
                    Contact
                </Menu.Item>
                <Menu.Item key="3" style={{ color: 'black' }}>
                    Legal
                </Menu.Item>
                <Menu.Item key="4" style={{ color: 'black' }}>
                    Privacy
                </Menu.Item>
                <Menu.Item key="5" style={{ color: 'black' }}>
                    Privacy
                </Menu.Item>
            </Menu>
            <br />
            <br />
            <br />
        </div>
    )
}
export default Info