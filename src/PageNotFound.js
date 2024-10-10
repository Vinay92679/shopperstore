import { Button } from 'react-bootstrap'
import './App.css'
import { NavLink } from 'react-router-dom'
const PageNotFound = () => {
 return (
 <>
  <div className='container-fluid pageNotFound'>
    <div className='row text-center my-5'>
      <h2 className='display-2'>404</h2>
      <h2 className='display-6'>UH OH! You're lost.</h2>
      <p>The page you are looking for does not exist. How you got here is a mystery. But you can click the button below to go back to the homepage.</p>
      <div>
        <NavLink to="/" >
          <Button className='gobackHome_btn'>Go Back to Home</Button>
        </NavLink>
      </div>  
    </div>
 </div>
 </>
)
}

export default PageNotFound