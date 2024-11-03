import React from 'react';

function Signup() {
    return ( 

        <div className='container p-5  text-center'>
            <div className='row'>
                <div className='col-4 mb-2'>
                  <img src='media\images\signup.png' style={{width:"120%"}}/>
                </div>
                <div className='col-2'>

                </div>
                <div className='col-6'>
                <h1 className='mb-3 fs-1 text-muted'>Signup now</h1>
                    <p>Or track your existing application.</p>
                <input className='number'>
                
                </input>
            
          <p className='mt-5'>
          You will receive an OTP on your number
          </p>
          <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%",margin:"0 auto"}}>Create</button>

                </div>
            </div>
            <p>I authorise Zerodha to contact me even if my number is registered on DND. I authorise Zerodha to fetch my KYC information from the C-KYC registry with my PAN.<br/> Please visit this article to know more.</p>
            <p>If you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the offline forms. For help, click here.</p>
        </div>
     );
}

export default Signup;