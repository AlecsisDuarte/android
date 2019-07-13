import googleVerify from '../config/google_verification.json'

export default () => (
    <body>{googleVerify.token}</body>
);