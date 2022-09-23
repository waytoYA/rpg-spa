import React from 'react'
import './interface/sass/main.css'

import CharacterMenu from './components/CharacterMenu';
import Parameters from './components/Parameters';
import Skills from './components/Skills';

const App = () => {
    return (
        <div className='main'>
            <div className='main__block'>

                <div className='main__block__item'>
                    <Parameters />
                </div>

                <div className='main__block__item'>
                    <CharacterMenu />
                </div>

                <div className='main__block__item'>
                    <Skills />
                </div>

            </div>
        </div>
);
}

export default App;
