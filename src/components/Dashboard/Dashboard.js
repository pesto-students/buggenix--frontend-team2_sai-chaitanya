import {OktaAuth}  from '@okta/okta-auth-js';
import { oktaConfig } from "../../config/oktaConfig";

const Dashboard = () => {
    const authClient = new OktaAuth(oktaConfig)
    authClient.token.parseFromUrl()
    .then(data => {
      const { idToken } = data.tokens;
      console.log(`Hi ${idToken.claims.email}!`);
      // Store parsed token in Token Manager
      authClient.tokenManager.add('idToken', idToken);
      console.log(idToken);
    });
    return (
        <div>
            This is the dashboard
        </div>
    )
}

export default Dashboard;