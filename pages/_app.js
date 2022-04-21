import '../styles/globals.css';
/* ensure all pages have Bootstrap CSS */
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from '../components/layout';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
    // next.js renders the app on both the server-side and client-side
    // there is no 'window, document' on the server side so will get errors
    // make sure that 'window' and 'document' objects can only be used on the client side
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap');
    }, []);
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
