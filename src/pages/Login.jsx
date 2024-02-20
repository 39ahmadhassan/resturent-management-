import React, { useState } from 'react';
import login from '../assets/image/login.gif'
import Loginform from '../components/Loginform';
import Signup from '../components/Signup';
function Login() {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="form_wrap">
      <div className="container ">
        <div className="row">
          <div className="col-md-6 text-center">
            <img src={login} alt="not-available"/>
          </div>
          <div className="col-md-6">
            <div className="tabs">
              <div
                className={`tab_btn tab ${activeTab === 'tab1' ? 'active' : ''}`}
                onClick={() => handleTabClick('tab1')}
              >
                log-in
              </div>
              <div
                className={`tab_btn tab ${activeTab === 'tab2' ? 'active' : ''}`}
                onClick={() => handleTabClick('tab2')}
              >
                sign-up
              </div>
            </div>
            <div className="tab-content">
              {activeTab === 'tab1' && 
              // <div className='login'>
              //   <h2>
              //     welcome!
              //   </h2>
              //   <form action="">
              //     <input type="text" />
              //     <input type="submit" />  
              //   </form>  
              // </div>
              <Loginform/>
              }
              {activeTab === 'tab2' && 
              <Signup/>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
