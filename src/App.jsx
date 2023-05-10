
import './App.css'

import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <div className='mx-auto my-auto'>

        <h1 style={{ background: ' radial-gradient(126.75% 133.09% at 50% 49.99%, #DC8D48 0%, #D38745 4.19%, #91572B 36.95%, #5E3116 66.01%, #3F1A0A 87.87%, #331105 100%)' }} className='text-5xl font-bold p-5 text-center text-white
'>Chocolate Management System</h1>

        <div className='mt-96 mx-auto ml-32'>





          <div>

            <Outlet></Outlet>












          </div>




        </div>


      </div>
    </>
  )
}

export default App
