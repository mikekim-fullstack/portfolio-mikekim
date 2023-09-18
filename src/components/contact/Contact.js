import React from 'react'
import './contact.css'
import sendSVG from '../../assets/img/send2.svg'
const Contact = () => {
    const cardsData = [
        {
            id: 1,
            title: 'Email',
            info: 'user@gmail.com',
            detail: 'mailto:mikekim.fullstack@gmail.com',
            icon: 'bx-mail-send',
        },
        {
            id: 2,
            title: 'Whatsapp',
            info: '1-647-636-6379',
            detail: 'https://api.whatsapp.com/send?phone=16476366379&text=Hello, more information!',
            icon: 'bxl-whatsapp',
        },
        {
            id: 3,
            title: 'Messenger',
            info: 'user.fb123',
            detail: 'https://m.me/crypticalcoder1',
            icon: 'bxl-messenger'
        },

    ]
    return (
        <section className='contact section ' id='contact'>
            <h3 className="section-title">Get in touch</h3>
            <span className="section-subtitle">Contact Me</span>
            <div className="contact-container container grid">
                <div className="contact-content">
                    <h3 className="contact-title">Talk to me</h3>
                    <div className="contact-info grid">
                        {
                            cardsData.map((card) => (
                                <div className="contact-card" key={card.id}>
                                    <i className={`bx ${card.icon} contact-card-icon`}></i>
                                    <h3 className="contact-card-title">{card.title}</h3>
                                    <span className="contact-card-data">{card.info}</span>
                                    <a href={card.detail} className="contact-button">Write Me <i className="bx bx-right-arrow-alt contact-button-icon"></i></a>
                                </div>
                            ))
                        }
                    </div>
                </div>
                {/* ===  */}
                <div className="contact-content">
                    <h3 className="contact-title">Write me your project</h3>
                    <form className="contact-form">
                        <div className="contact-form-div">
                            <label className="contact-form-tag">Name</label>
                            <input type="text" name='name' placeholder='Your Name' className="contact-form-input" />
                        </div>
                        <div className="contact-form-div">
                            <label className="contact-form-tag">Email</label>
                            <input type="email" name='email' placeholder='Email' className="contact-form-input" />
                        </div>
                        <div className="contact-form-div-area">
                            <label className="contact-form-tag">Project</label>
                            <textarea name="project" cols="30" rows="10" className="contact-form-input contact-form-area" placeholder='Write you project'></textarea>
                        </div>
                        <button className="button button-flex">Say Hello <img src={sendSVG} alt="send image" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact