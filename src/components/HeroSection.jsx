import React from 'react'

function HeroSection() {
    return (
        <div className='hero-section container'>
            <div>
                <img src="/hero-img.jpg" className='hero-img' alt="" />
            </div>
            <div hero-content>
                <h1>Lorem ipsum dolor sit amet.</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, rerum doloremque magni perferendis error optio maiores nobis eligendi quasi amet et deleniti libero nostrum ipsa saepe tempora aspernatur autem exercitationem.</p>
            </div>
        </div>
    )
}

export default HeroSection