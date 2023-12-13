import Layout from "./components/Layout/Layout";
import ScrollToTop from "react-scroll-to-top";

  import { ToastContainer,} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Layout/>
      <ToastContainer/>
      <ScrollToTop smooth />
    </>
  );
}

export default App;
