import '@styles/tailwind.css';
import '@styles/loader.css';
import MainLayout from '@layout/MainLayout';

function MyApp({ Component, pageProps }) {
  return (
    
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    
  );
}

export default MyApp;
