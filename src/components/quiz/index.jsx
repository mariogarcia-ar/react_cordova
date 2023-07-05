// import React from 'react'
import { Container } from 'react-bootstrap'
import QuizBody from './body'
import QuizFooter from './footer'
import QuizHeader from './header'

import './styles.css'

function Quiz() {
  return (
    <Container fluid className='g-0'>
      <QuizHeader />
      <QuizBody />
      <QuizFooter />
    </Container>
  )
}

export default Quiz
