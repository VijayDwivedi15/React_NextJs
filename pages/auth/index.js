import React from 'react';
import User from '../../components/user';

const authIndexPage =(props) => (
     <div>
         <h1>The Auth Index Page - {props.appName} </h1>
         <User name="Vijay" age={25} />
     </div>
);

authIndexPage.getInitialProps= context => {
    const promise = new Promise((resolve,reject)=> {
        setTimeout(() => {
            resolve({appName : 'Super App (Auth) '});
        }, 3000);
    });
    
    return promise;
};

export default authIndexPage;