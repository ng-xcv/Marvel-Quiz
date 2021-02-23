import React, {useRef, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'


const Landing = () => {

    const refWolverine = useRef(null)

    //Etat pour la gestion de l'affichage des buttons 
    const [btn, setBtn] = useState(false)

    useEffect(()=> {
        //Affichage des griffes 
        refWolverine.current.classList.add('startingImg')

        // Aprés 1s le les griffes seront retirées et les buttons affichés
        setTimeout(() => {
            refWolverine.current.classList.remove('startingImg')
            setBtn(true)
        }, 1000)
    }, [])

    const setLeftImage = () => {
        refWolverine.current.classList.add('leftImg')
    }
    const setRightImage = () => {
        refWolverine.current.classList.add('rightImg')
    }

    const clearImage = () => {
        if(refWolverine.current.classList.contains('leftImg')){
            refWolverine.current.classList.remove('leftImg')
            
        }else if(refWolverine.current.classList.contains('rightImg')){
            refWolverine.current.classList.remove('rightImg')
        }
    }

    // Si la valeur de btn est true le code entre les parenthéses sera exécuté 
    const  displayBtn = btn && (
        <>
            <div onMouseOver={setLeftImage} onMouseOut={clearImage} className='leftBox'>
                <Link to='/signup' className='btn-welcome'>Connexion</Link>
            </div>
            <div onMouseOver={setRightImage} onMouseOut={clearImage} className='rightBox'>
                <Link to='/login' className='btn-welcome'>Inscription</Link>
            </div>
        </>
    )
    return (
        <main ref={refWolverine} className='welcomePage'>
           {displayBtn}
        </main>
    )
}

export default Landing 