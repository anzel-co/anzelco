import github from '../socials/github.svg'
import email from '../socials/email.svg'
import telegram from '../socials/telegram.svg'
import python from '../techstack/python.svg'

import './About.css'

const About = () => {
    return (
        <main>
            <div className='about-container'>
                <div className='about_me-container'>
                    <div className='about_me_title-wrapper'>
                        <h3 className='about_me_title'>
                            Passionate Junior Web Developer
                        </h3>
                    </div>
                    <div className='about_me_content-wrapper'>
                        <p className='about_me_content'>
                            I'm Ansari Usman, a web developer based in Manila, Philippines. My skills consist of:
                        </p>
                        <ul className='about_me_content_skills'>
                                <li className='about_me_content_skill'>
                                    Designing smooth and responsive websites.
                                </li>
                                <li className='about_me_content_skill'>
                                    Developing a server-side application that any applications can reach and interact with.
                                </li>
                                <li className='about_me_content_skill'>
                                    Creating REST APIs as a main application programming interface.
                                </li>
                                <li className='about_me_content_skill'>
                                    Building a full-stack web application using the MERN stack (MongoDB, ExpressJS, ReactJS, NodeJS).
                                </li>
                                <li className='about_me_content_skill'>
                                    Collaborating and doing my tasks exactly right. 
                                </li>
                            </ul>
                    </div>
                    <div className='about_me_current-container'>
                        <div className='about_me_current-wrraper'>
                            <div className='about_me_current'>
                                <div className='about_me_current_description-wrapper'>
                                    <p className='about_me_current_description'>
                                        I'm currently learning Python <a href='https://www.python.org/' target='_blank' rel='noopener noreferrer' ><img src={python} alt='python' /></a> and its web frameworks to add in my back-end tech stack.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='about_me_github-container'>
                        <div className='about_me_github-wrapper'>
                            <div className='about_me_github'>
                                <p>Visit my Github: &nbsp;</p>
                                <a href='https://github.com/anzel-co' target='_blank' rel='noopener noreferrer' >
                                    <img src={github} alt='github' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='contact_me-container'>
                    <div className='contact_me_title-container'>
                        <div className='contact_me_title-wrapper'>
                            <h3 className='contact_me_title'>
                                Contact me
                            </h3>
                        </div>
                    </div>
                    <div className='contact_me_contacts-container'>
                        <div className='contact_me_contact-container'>
                            <div className='contact_me_contact_logo-wrapper'>
                                <img src={email} alt='email'  />
                            </div>
                            <div className='contact_me_contact_address-wrapper'>
                                <b>Email</b>
                                <p>ansariusman@anzel.co</p>
                             </div>
                        </div>
                        <div className='contact_me_contact-container'>
                            <div className='contact_me_contact_logo-wrapper'>
                                <img src={telegram} alt='telegram'  />
                            </div>
                            <div className='contact_me_contact_address-wrapper'>
                                <b>Telegram</b>
                                <p>t.me/ansariusman</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default About