import React from 'react'
import useLocalStorage from 'use-local-storage'

import './index.css'

function App() {

  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }

  return (
    <div className='app' data-theme={theme}>
      <div className='title'>
        <h1>Bridget's Theme Slider</h1>
        <div className='container'>
          <div className='content'>
            <i class="fa-regular fa-envelope"></i><a href='/'>bridget.wagnon4552@gmail.com</a>
            <br/>
            <i class="fa-brands fa-linkedin"></i><a href='www.linkedin.com/in/bridget-wagnon'>linkedin.com/in/bridget-wagnon</a>
            <br/>
            <i class="fa-brands fa-github"></i><a href='https://github.com/BCWagnon'>github.com/BCWagnon</a>
            <br/>
            <i class="fa-solid fa-user-ninja"></i><a href='https://www.codingdojo.com/'>I'm a Coding Dojo Alumni!</a>
          </div>
        </div>
          <div className='toggle'>
            <h2>Toggle Theme</h2>
            <i onClick={switchTheme} class="fa-solid fa-toggle-on"></i>
          </div>
      </div>
    </div>
  );
}

export default App;
