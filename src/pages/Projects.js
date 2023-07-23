import weightinotherworlds from '../projects/weightinotherworlds.png'
import catbreeds from '../projects/catbreeds.png'
import reactjspractice from '../projects/reactjspractice.png'
import thecountryquiz from '../projects/thecountryquiz.png'
import html5 from '../techstack/html5.svg'
import css3 from '../techstack/css3.svg'
import javascript from '../techstack/javascript.svg'
import react from '../techstack/react.svg'
import nodejs from '../techstack/nodejs.svg'
import expressjs from '../techstack/expressjs.svg'
import mongodb from '../techstack/mongodb.svg'

import './Project.css'

const Project = () => {
    return (
        <main>
            <div className='projects-container'>
                <div className='projects_title-container'>
                    <h3 className='projects_title'>My Projects</h3>
                </div>
                <div className='my_projects-container'>
                    <div className='my_projects-wrapper'>
                        <a href='https://weightinotherworlds.netlify.app/' target='_blank' rel='noopener noreferrer' >
                            <div className='my_project'>
                                <div className='my_project_image-wrapper'>
                                    <img src={weightinotherworlds} alt='img' />
                                </div>
                                <div className='my_project_title-wrapper'>
                                    <p><b>WEIGHT IN OTHER WORLDS</b></p>
                                </div>
                                <div className='my_project_description-wrapper'>
                                    <p><i>A mini-project that takes an object's weight calculates how much an object would weight on other planets in the solar system.</i></p>
                                </div>
                                <div className='my_project_stack'>
                                    <img src={html5} alt='html5' />
                                    <img src={css3} alt='css#' />
                                    <img src={javascript} alt='javascript' />
                                </div>
                            </div>
                        </a>
                        <a href='https://catbreeds.site/' target='_blank' rel='noopener noreferrer' >
                            <div className='my_project'>
                                <div className='my_project_image-wrapper'>
                                    <img src={catbreeds} alt='img' />
                                </div>
                                <div className='my_project_title-wrapper'>
                                    <p><b>CAT BREEDS</b></p>
                                </div>
                                <div className='my_project_description-wrapper'>
                                    <p><i>A website that lists different breeds of cats using an API. You can search for a breed, filter by name or weight, get their description and see their photos.</i></p>
                                </div>
                                <div className='my_project_stack'>
                                    <img src={html5} alt='html5' />
                                    <img src={css3} alt='css#' />
                                    <img src={javascript} alt='javascript' />
                                </div>
                            </div>
                        </a>
                        <a href='https://react-js-practice.onrender.com/' target='_blank' rel='noopener noreferrer' >
                            <div className='my_project'>
                                <div className='my_project_image-wrapper'>
                                    <img src={reactjspractice} alt='img' />
                                </div>
                                <div className='my_project_title-wrapper'>
                                    <p><b>REACTJS PRACTICE</b></p>
                                </div>
                                <div className='my_project_description-wrapper'>
                                    <p><i>Just a React application where I put into code an idea or concept and test them to see if it would work or not.</i></p>
                                </div>
                                <div className='my_project_stack'>
                                    <img src={react} alt='react' />
                                </div>
                            </div>
                        </a>
                        <a href='https://www.thecountryquiz.com/' target='_blank' rel='noopener noreferrer' >
                            <div className='my_project'>
                                <div className='my_project_image-wrapper'>
                                    <img src={thecountryquiz} alt='img' />
                                </div>
                                <div className='my_project_title-wrapper'>
                                    <p><b>THE COUNTRY QUIZ</b></p>
                                </div>
                                <div className='my_project_description-wrapper'>
                                    <p><i> A gamified quiz about countries made to be challenging. This is a full-stack web application with its own REST API made using the MERN stack.</i></p>
                                </div>
                                <div className='my_project_stack'>
                                    <img src={react} alt='react' />
                                    <img src={nodejs} alt='nodejs' />
                                    <img src={expressjs} alt='expressjs' /> 
                                    <img src={mongodb} alt='mongodb' />                                   
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Project