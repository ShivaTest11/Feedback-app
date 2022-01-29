import React from 'react';
import Card from '../Components/Shared/Card';
import { Link } from 'react-router-dom';

const About = () => {
  return (
<Card>
  <div className='about'>
    <h1>About this project</h1>
    <p>This is a React App to laeave feedback for product/service</p>
    <p>Version : 1.0.0</p>
    <p>
      <Link to='/'>Back to home</Link>
    </p>
  </div>
</Card>

  )
  
    
  
};

export default About;
