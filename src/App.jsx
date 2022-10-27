import React from 'react'

import './App.css'

import Button from './components/Button'

import github from './assets/icons/github.svg'
import instagram from './assets/icons/instagram.svg'
import linkedin from './assets/icons/linkedin.svg'
import twitch from './assets/icons/twitch.svg'
import twitter from './assets/icons/twitter.svg'
import profile from './assets/img/profile.png'

function App() {

  return (
    <div className="App">
      <div className="container">
        <div className="profile">
          <img src={profile} />
         <p> <a href="https://www.instagram.com/imkakau_/" target='_blank'>@imkakau_</a></p>
        </div>
        <div>
          <Button
            valueBtt={'Link 1'}
            url={'#'}
          />
          <Button
            valueBtt={'Link 2'}
            url={'#'}
          />
          <Button
            valueBtt={'Link 3'}
            url={'#'}
          />
          <Button
            valueBtt={'Link 4'}
            url={'#'}
          />
        </div>
        <div className="icons">
          <a href="#" target="_blank"><img src={twitter} alt="" /></a>
          <a href="#" target="_blank"><img src={twitch} alt="" /></a>
          <a href="https://www.instagram.com/imkakau_/" target="_blank"><img src={instagram} alt="" /></a>
          <a href="https://www.linkedin.com/in/kauanny-vieira-3960561a5/" target="_blank"><img src={linkedin} alt="" /></a>
          <a href="https://github.com/Kauanny-cmd" target="_blank"><img src={github} alt="" /></a>
        </div>
      </div>
      <div className="footer">
      <p>Feito com 💜 por kakauzu</p>
      </div>

    </div>
  )
}

export default App
