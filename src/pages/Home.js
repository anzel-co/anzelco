import headshot from '../portfolio/headshot.png'
import html5 from '../techstack/html5.svg'
import css3 from '../techstack/css3.svg'
import javascript from '../techstack/javascript.svg'
import react from '../techstack/react.svg'
import nodejs from '../techstack/nodejs.svg'
import expressjs from '../techstack/expressjs.svg'
import mongodb from '../techstack/mongodb.svg'

import './Home.css'

const Home = () => {
    return (
        <main className="main">
            <div className="home-container">
                <div className="title-container">
                    <h1 className='title'>WEB DEVELOPER</h1>
                </div>
                <div className="profile-container">
                <div className='profile_image-container'>
                        <div className="profile_image-wrapper">
                            <img className='profile_image' src={headshot} alt='headshot' />
                        </div>
                    </div>
                    <div className='profile_description-container'>
                        <div className="profile_description-wrapper">
                            <p className='profile_description' >My name is Ansari. Using my knowledge and proficiency in front-end and back-end technologies, I form my ideas into a creation that gives great experience to anyone that interacts with it.</p>
                        </div>
                    </div>
                    
                </div>
                <div className="tech_stack-container">
                    <div className='tech_stack_title-container'>
                        <div className='tech_stack_title-wrapper'>
                            <p className='tech_stack_title'>
                                MY TECH STACK
                            </p>
                        </div>
                    </div>
                    <div className='tech_stacks-container'>
                        <div className='tech_stacks-wrapper'>
                            <div className='tech_stack-wrapper'>
                                <a href='https://html.spec.whatwg.org/multipage/' target='_blank' rel='noopener noreferrer'>
                                    <img className='tech_stack' src={html5} alt='html5' />
                                </a>
                            </div>
                            <div className='tech_stack-wrapper'>
                                <a href='https://www.w3.org/Style/CSS/Overview.en.html' target='_blank' rel='noopener noreferrer'>
                                    <img className='tech_stack' src={css3} alt='css#' />
                                </a>                              
                            </div>
                            <div className='tech_stack-wrapper'>
                                <a href='https://developer.mozilla.org/en-US/docs/Web/javascript' target='_blank' rel='noopener noreferrer'>
                                    <img className='tech_stack' src={javascript} alt='javascript' />   
                                </a>                              
                             </div>
                            <div className='tech_stack-wrapper'>
                                <a href='https://react.dev' target='_blank' rel='noopener noreferrer'>
                                    <img className='tech_stack' src={react} alt='react' />
                                </a>                              
                            </div>
                            <div className='tech_stack-wrapper'>
                                <a href='https://nodejs.org/en' target='_blank' rel='noopener noreferrer'>
                                    <img className='tech_stack' src={nodejs} alt='nodejs' /> 
                                </a>                               
                            </div>
                            <div className='tech_stack-wrapper'>
                                <a href='https://expressjs.com' target='_blank' rel='noopener noreferrer'>
                                    <img className='tech_stack' src={expressjs} alt='expressjs' /> 
                                </a>                               
                            </div>
                            <div className='tech_stack-wrapper'>
                                <a href='https://www.mongodb.com' target='_blank' rel='noopener noreferrer'>
                                    <img className='tech_stack' src={mongodb} alt='mongodb' /> 
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home