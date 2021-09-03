import React, { useRef, useEffect, useState } from 'react';
import Ripples from 'react-ripples';
import logo from '../images/soloLogo.png';
import { Fireworks } from 'fireworks-js/dist/react'
import '../css/welcome.css';
import '../css/bubbles.scss';

const Welcome = () => {
    const main = useRef(null);
    const forHeight = useRef(null);
    const particleContainer = useRef(null);
    const [balls,setBalls] = useState([]);
    useEffect(() => {
        animateParticles();
    },[])

    const options = {
        speed: 3,
        delay : {
            min:20,
            max:30
        },
        particles : 100,
        brightness : {
            min: 30,
            max : 40
        }
    }
    const style = {
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        position: 'fixed',
      }

    const animateParticles = () => {
        const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];
        const numBalls = 50;
        for (let i = 1; i <= numBalls; i++) {
            let background = colors[Math.floor(Math.random() * colors.length)];
            let left = `${Math.floor(Math.random() * 100)}vw`;
            let top = `${Math.floor(Math.random() * 100)}vh`;
            let transform = `scale(${Math.random()})`;
            let width = `${Math.random()+0.3}em`;
            let height = width;
            let ball = <div className="ball" style={{background:background,left:left, top:top,transform:transform, height:height, width:width}} key={i}></div>
            setBalls(balls=>[...balls,ball]);
        }
    }
    
    return (
        <div className='welcomeContainer' >
            <Fireworks options={options} style={style} particles={100} explosion={10} />

            <div ref={particleContainer}>
                { balls.map((data)=>{
                    return (data)
                }) }
            </div>
            <div className="welcomeInner">
                <svg className="welcomePhrase" ref={main} width="400" height="80" viewBox="0 0 948 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="path-1-outside-1" maskUnits="userSpaceOnUse" x="-0.276001" y="0.0639954" width="948" height="140" fill="black">
                        <rect fill="white" x="-0.276001" y="0.0639954" width="948" height="140"/>
                        <path d="M189.884 2.98399L152.444 137H120.764L95.612 41.576L69.308 137L37.82 137.192L1.724 2.98399H30.524L54.14 107.048L81.404 2.98399H111.356L137.084 106.472L160.892 2.98399H189.884Z"/>
                        <path d="M234.315 24.68V58.28H279.436V79.592H234.315V115.112H285.195V137H207.435V2.79199H285.195V24.68H234.315Z"/>
                        <path d="M336.503 115.688H380.663V137H309.623V2.98399H336.503V115.688Z"/>
                        <path d="M391.22 69.8C391.22 56.616 394.164 44.84 400.052 34.472C406.068 23.976 414.196 15.848 424.436 10.088C434.804 4.2 446.388 1.256 459.188 1.256C474.164 1.256 487.284 5.096 498.548 12.776C509.812 20.456 517.684 31.08 522.164 44.648H491.252C488.18 38.248 483.828 33.448 478.196 30.248C472.692 27.048 466.292 25.448 458.996 25.448C451.188 25.448 444.212 27.304 438.068 31.016C432.052 34.6 427.316 39.72 423.86 46.376C420.532 53.032 418.868 60.84 418.868 69.8C418.868 78.632 420.532 86.44 423.86 93.224C427.316 99.88 432.052 105.064 438.068 108.776C444.212 112.36 451.188 114.152 458.996 114.152C466.292 114.152 472.692 112.552 478.196 109.352C483.828 106.024 488.18 101.16 491.252 94.76H522.164C517.684 108.456 509.812 119.144 498.548 126.824C487.412 134.376 474.292 138.152 459.188 138.152C446.388 138.152 434.804 135.272 424.436 129.512C414.196 123.624 406.068 115.496 400.052 105.128C394.164 94.76 391.22 82.984 391.22 69.8Z"/>
                        <path d="M607.331 138.344C594.787 138.344 583.267 135.4 572.771 129.512C562.275 123.624 553.955 115.496 547.811 105.128C541.667 94.632 538.595 82.792 538.595 69.608C538.595 56.552 541.667 44.84 547.811 34.472C553.955 23.976 562.275 15.784 572.771 9.89599C583.267 4.008 594.787 1.064 607.331 1.064C620.003 1.064 631.523 4.008 641.891 9.89599C652.387 15.784 660.643 23.976 666.659 34.472C672.803 44.84 675.875 56.552 675.875 69.608C675.875 82.792 672.803 94.632 666.659 105.128C660.643 115.496 652.387 123.624 641.891 129.512C631.395 135.4 619.875 138.344 607.331 138.344ZM607.331 114.344C615.395 114.344 622.499 112.552 628.643 108.968C634.787 105.256 639.587 100.008 643.043 93.224C646.499 86.44 648.227 78.568 648.227 69.608C648.227 60.648 646.499 52.84 643.043 46.184C639.587 39.4 634.787 34.216 628.643 30.632C622.499 27.048 615.395 25.256 607.331 25.256C599.267 25.256 592.099 27.048 585.827 30.632C579.683 34.216 574.883 39.4 571.427 46.184C567.971 52.84 566.243 60.648 566.243 69.608C566.243 78.568 567.971 86.44 571.427 93.224C574.883 100.008 579.683 105.256 585.827 108.968C592.099 112.552 599.267 114.344 607.331 114.344Z"/>
                        <path d="M841.985 2.98399V137H815.105V49.832L779.201 137H758.849L722.753 49.832V137H695.873V2.98399H726.401L769.025 102.632L811.649 2.98399H841.985Z"/>
                        <path d="M895.44 24.68V58.28H940.56V79.592H895.44V115.112H946.32V137H868.56V2.79199H946.32V24.68H895.44Z"/>
                    </mask>
                    <path className="path1" d="M189.884 2.98399L152.444 137H120.764L95.612 41.576L69.308 137L37.82 137.192L1.724 2.98399H30.524L54.14 107.048L81.404 2.98399H111.356L137.084 106.472L160.892 2.98399H189.884Z" stroke="#FF0000" strokeWidth="5" mask="url(#path-1-outside-1)"/>
                    <path className="path2" d="M234.315 24.68V58.28H279.436V79.592H234.315V115.112H285.195V137H207.435V2.79199H285.195V24.68H234.315Z" stroke="#FF0000" strokeWidth="5" mask="url(#path-1-outside-1)"/>
                    <path className="path3" d="M336.503 115.688H380.663V137H309.623V2.98399H336.503V115.688Z" stroke="#FF0000" strokeWidth="5" mask="url(#path-1-outside-1)"/>
                    <path className="path4" d="M391.22 69.8C391.22 56.616 394.164 44.84 400.052 34.472C406.068 23.976 414.196 15.848 424.436 10.088C434.804 4.2 446.388 1.256 459.188 1.256C474.164 1.256 487.284 5.096 498.548 12.776C509.812 20.456 517.684 31.08 522.164 44.648H491.252C488.18 38.248 483.828 33.448 478.196 30.248C472.692 27.048 466.292 25.448 458.996 25.448C451.188 25.448 444.212 27.304 438.068 31.016C432.052 34.6 427.316 39.72 423.86 46.376C420.532 53.032 418.868 60.84 418.868 69.8C418.868 78.632 420.532 86.44 423.86 93.224C427.316 99.88 432.052 105.064 438.068 108.776C444.212 112.36 451.188 114.152 458.996 114.152C466.292 114.152 472.692 112.552 478.196 109.352C483.828 106.024 488.18 101.16 491.252 94.76H522.164C517.684 108.456 509.812 119.144 498.548 126.824C487.412 134.376 474.292 138.152 459.188 138.152C446.388 138.152 434.804 135.272 424.436 129.512C414.196 123.624 406.068 115.496 400.052 105.128C394.164 94.76 391.22 82.984 391.22 69.8Z" stroke="#FF0000" strokeWidth="5" mask="url(#path-1-outside-1)"/>
                    <path className="path5" d="M607.331 138.344C594.787 138.344 583.267 135.4 572.771 129.512C562.275 123.624 553.955 115.496 547.811 105.128C541.667 94.632 538.595 82.792 538.595 69.608C538.595 56.552 541.667 44.84 547.811 34.472C553.955 23.976 562.275 15.784 572.771 9.89599C583.267 4.008 594.787 1.064 607.331 1.064C620.003 1.064 631.523 4.008 641.891 9.89599C652.387 15.784 660.643 23.976 666.659 34.472C672.803 44.84 675.875 56.552 675.875 69.608C675.875 82.792 672.803 94.632 666.659 105.128C660.643 115.496 652.387 123.624 641.891 129.512C631.395 135.4 619.875 138.344 607.331 138.344ZM607.331 114.344C615.395 114.344 622.499 112.552 628.643 108.968C634.787 105.256 639.587 100.008 643.043 93.224C646.499 86.44 648.227 78.568 648.227 69.608C648.227 60.648 646.499 52.84 643.043 46.184C639.587 39.4 634.787 34.216 628.643 30.632C622.499 27.048 615.395 25.256 607.331 25.256C599.267 25.256 592.099 27.048 585.827 30.632C579.683 34.216 574.883 39.4 571.427 46.184C567.971 52.84 566.243 60.648 566.243 69.608C566.243 78.568 567.971 86.44 571.427 93.224C574.883 100.008 579.683 105.256 585.827 108.968C592.099 112.552 599.267 114.344 607.331 114.344Z" stroke="#FF0000" strokeWidth="5" mask="url(#path-1-outside-1)"/>
                    <path className="path6" d="M841.985 2.98399V137H815.105V49.832L779.201 137H758.849L722.753 49.832V137H695.873V2.98399H726.401L769.025 102.632L811.649 2.98399H841.985Z" stroke="#FF0000" strokeWidth="5" mask="url(#path-1-outside-1)"/>
                    <path className="path7" d="M895.44 24.68V58.28H940.56V79.592H895.44V115.112H946.32V137H868.56V2.79199H946.32V24.68H895.44Z" stroke="#FF0000" strokeWidth="5" mask="url(#path-1-outside-1)"/>
                </svg>

                <div className="welc-desc-container" ref={forHeight}>
                    <p className="toText">to</p>
                    <img src={logo} alt="solo logo" className="soloLogo" />
                    <p className="collegeName">Agnel Institute of Technology and Design (AITD)</p>
                    <p className="welcomeLine">We are delighted to have you with us!</p>
                    {/* <p className="welcomeDesc">SOLO is a unique collaboration platform that brings together Universities, Companies, and Students in order to streamline the internship process for all sides. SOLO will allow students to browse a multitude of available internships, participate in hackathons, as well as take courses to gain more knowledge of their industry.</p> */}
                    <Ripples className="rippleBtn">
                        <button className="welcomeBtn">Get Started</button>
                    </Ripples>
                    {/* <p className="notNow2"><a className="notNow" href="#">Not now</a></p> */}
                </div>
                
            </div>
        </div>
    )
}

export default Welcome
