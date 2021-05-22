import React from 'react'
import ImageSearch from './ImageSearch/ImageSearch'
import './ImageSearch/Image.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Player from './YoutubePlayer/Player'
import Menu from './Menu'
import "./YoutubePlayer/Player.css"
import Quiz from './Quiz App/Quiz'
import "./Quiz App/Quiz.css"
import Data from './Quiz App/QuizData'

const App = () =>{
  return(
    <div>
      <BrowserRouter>
        <Menu/>
        <Switch>
          <Route exact path="/" component={ImageSearch} />
          <Route exact path="/Player" component={Player} />
          <Route exact path="/quizapp" component={ () => <Quiz data={Data} /> } />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App