import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Hero from './context/Hero';

export const HeroContext = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <HeroContext.Provider value={{
        hero: new Hero(),
    }}>
        <App />
    </HeroContext.Provider>
);
