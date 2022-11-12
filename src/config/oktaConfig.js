
export const oktaConfig = {
    clientId: `0oa76x7zuelWnRbbu5d7`,
    issuer: "https://dev-02087076.okta.com/oauth2/default",
    redirectUri: `http://localhost:3000/dashboard`, // this makes it so redirects to login if not logged in for secure routes
    scopes: ["openid", "profile", "email"],
    pkce: true,
};
