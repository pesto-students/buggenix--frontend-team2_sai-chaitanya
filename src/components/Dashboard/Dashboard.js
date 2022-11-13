import {OktaAuth}  from '@okta/okta-auth-js';
import { oktaConfig } from "../../config/oktaConfig";
import { useOktaAuth } from "@okta/okta-react";
import React, { useState, useEffect } from 'react';


const Dashboard = () => {
    // useEffect(() => {
    //     // Update the document title using the browser API
    //     window.location.reload();
    // },[]);
    const { authState, oktaAuth } = useOktaAuth();  
    console.log("okta",useOktaAuth())


    // const authClient = new OktaAuth(oktaConfig)
    // oktaAuth.token.parseFromUrl()
    // .then(data => {
    //   const { idToken } = data.tokens;
    //   console.log(data.tokens)
    //   console.log(`Hi ${data.tokens}!`);
    //   // Store parsed token in Token Manager
    // //   authClient.tokenManager.add('idToken', idToken);
    //   console.log(idToken);
    // });
    return (
        <div>
            This is the dashboard
        </div>
    )
}

export default Dashboard;