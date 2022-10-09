import React from 'react'
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';


const Home  = () => {
  
  


  return (
    <styledApp>
      <div>
        <h1>Welcome to the home page</h1>
      </div>
    </styledApp>
  );
}

const StyledApp = styled.div`
padding-top: 100px;
padding-bottom: 100px;
position: relative;
background-image: ./assets/bg-ocean.png
`

export default Home;