import '../styles/main.scss';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider, } from 'react-query';


const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<QueryClientProvider client={queryClient}><Component {...pageProps} /></QueryClientProvider>);
}

export default MyApp
