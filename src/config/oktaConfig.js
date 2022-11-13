
export const oktaConfig = {
    clientId: `0oa76x7zuelWnRbbu5d7`,
    issuer: "https://dev-02087076.okta.com/oauth2/default",
    redirectUri: `http://localhost:3000/login/callback`, 
    scopes: ["openid", "email","offline_access"],
    pkce: true,
};
