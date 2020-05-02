import React, {Component} from 'react';
import QuizScreen from '../../images/quizapp.jpg';
import {drawCode, getRepoCommits} from '../../resources/utils.js';

export default class Quiz extends Component {
  componentDidMount(){
    drawCode();
  }

  render(){
    return (
      <div className='projPageWrapper'>
      <main className="projContainer3">
        <h1>Quiz App</h1>
        <img src={QuizScreen} alt="Quiz App" className="projImage" />
        <h2>About</h2>
        <p>
          This is a simple seven-question quiz that renders each new question
          as well as a results screen using jQuery.
        </p>
        <p id='lastUpdated'>Last updated: {getRepoCommits('thinkful-ei-armadillo', 'irem-michael')}</p>
        <h2>Tech Stack</h2>
        <ul className="techStack">
          <li>Client: HTML, CSS, jQuery.</li>
        </ul>
        <div className="projLinks">
          {"Links: "}
          <a href="https://github.com/thinkful-ei-armadillo/irem-michael">
            Client Repo
          </a>
          {" / "}
          <a href="https://thinkful-ei-armadillo.github.io/irem-michael/">
            Live App
          </a>
        </div>
      </main>
      <section className='codeContainer' id='code'>
      <p id='ind0'>{'<!DOCTYPE html>'}</p>
      <p id='ind0'>{'<html lang="en">'}</p>
      <p id='ind1'>{'<head>'}</p>
      <p id='ind2'>{'<meta charset="UTF-8">'}</p>
      <p id='ind2'>{'<meta name="viewport" content="width=device-width, initial-scale=1.0">'}</p>
      <p id='ind2'>{'<meta http-equiv="X-UA-Compatible" content="ie=edge">'}</p>
      <p id='ind2'>{'<link rel="stylesheet" type="text/css" href="index.css">'}</p>
      <p id='ind2'>{'<link href="https://fonts.googleapis.com/css?family=Roboto+Condensed" rel="stylesheet">'}</p>
      <p id='ind2'>{'<title>Quiz App</title>'}</p>
      <p id='ind1'>{'</head>'}</p>
      <p id='ind1'>{'<body class="container">'}</p>
      <p id='ind2'>{'<header role="heading">'}</p>
      <p id='ind3'>{'<h1>Dachshund Quiz App</h1>'}</p>
      <p id='ind2'>{'</header>'}</p>
      <p id='ind2'>{'<main class="main" role="main">'}</p>
      <p id='ind3'>{'<div class="startQuiz">'}</p>
      <p id='ind4'>{'<br>'}</p>
      <p id='ind4'>{`<h2>How well do you think you know dachshunds? Let's find out!</h2>`}</p>
      <p id='ind4'>{'<img src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12234102/Dachshund-On-White-05.jpg" alt="brown cute Dachshund">'}</p>
      <p id='ind4'>{'<button type="submit" class="button startBtn">Start Quiz!</button>'}</p>
      <p id='ind3'>{'</div>'}</p>
      <p id='ind3'>{'<div class="quizStage"></div>'}</p>
      <p id='ind2'>{'</main>'}</p>
      <p id='ind1'>{'<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>'}</p>
      <p id='ind1'>{'<script src = "index.js"></script>'}</p>
      <p id='ind1'>{'</body>'}</p>
      <p id='ind0'>{'</html>'}</p>
      <br />
      <br />
      <br />
      <p id='ind0'>The JavaScript file had way too many lines to preview here! :)</p>
      </section>
      </div>
    )
  }
}