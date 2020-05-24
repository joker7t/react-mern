const auth = {
    clientId: '',
    clientSecret: ''
};

if (process.env.NODE_ENV !== 'production') {
    auth.clientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    auth.clientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
    auth.clientId = process.env.GITHUB_CLIENT_ID;
    auth.clientSecret = process.env.GITHUB_CLIENT_SECRET;
}
auth.clientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
auth.clientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;

export default auth;