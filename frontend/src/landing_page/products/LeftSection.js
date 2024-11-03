import React from 'react';

function LeftSection({
    imageURL,
    productNmae,
    prodectDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}) {
    return ( 
       <div className='container mt-5'>
        <div className='row'>
            <div className='col-6 p-4'>
                <img src={imageURL}/>
            </div>
            <div className='col-6 p-6 mt-5'>
                <h1>{productNmae}</h1>
                <p>{prodectDescription}</p>
                <div>
                <a href={tryDemo}style={{ textDecoration:"none"}}>Try Demo <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                <a href={learnMore} style={{marginLeft:"50px", textDecoration:"none"}}>Learn More <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='mt-3'>
                <a href={googlePlay}><img src='media\images\googlePlayBadge.svg'/></a>
                <a href={appStore} style={{marginLeft:"50px"}}><img src='media\images\appstoreBadge.svg'/></a>
               </div>
        </div>
        </div>
       </div>
     );
}

export default LeftSection;