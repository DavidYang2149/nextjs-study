import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Button } from "antd";

function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h1>{process.env.APP_NAME}</h1>
        <p>API_HOST : {process.env.API_HOST}</p>
        <button className="btn-blue">Tailwind Button</button>
        <div>
          <Button>Welcome</Button>
        </div>
      </div>
    </div>
  );
}

// Home.getInitialProps = async (context) => {
//   const API_HOST = process.env.API_HOST;
//   return {
//     API_HOST,
//   };
// };

export default Home;
