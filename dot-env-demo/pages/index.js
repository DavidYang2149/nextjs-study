import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Button } from "antd";
import styled from "styled-components";

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  font-size: 14px;
  border-radius: 50%;
  border: 1px solid #e5e5e5;
`;

function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h1>{process.env.APP_NAME}</h1>
        <p>API_HOST : {process.env.API_HOST}</p>
        <div className="flex">
          <Circle>1</Circle>
          <Circle>2</Circle>
          <Circle>3</Circle>
        </div>
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
