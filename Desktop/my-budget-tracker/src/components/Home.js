import React from 'react'
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';


const Home  = () => {
  
  


  return (
    <styledApp>
      <div>
      <section>
        <div>
          <div className="text-center drop-shadow-lg">
          <h3>Welcome to </h3>
          <h1 className="bg-gradient-to-b from-[#8DFBFF] to-[#308EC7] bg-clip-text text-8xl font-extrabold">BudgetFlow </h1>
          </div>
          <p className="text-center">
            BudgetFlow is a free App that helps you track your finances.
            Here you understand your income and spending. 
          </p >
          <a href="/#home">Home</a>
        </div>
      </section> 
    </div>
    </styledApp>
  );
}

const StyledApp = styled.div`
padding-top: 300px;
padding-bottom: 600px;
position: relative;
background-color: blue;
background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(0,152,155,1) 0.1%, rgba(0,94,120,1) 94.2% );
`

export default Home;