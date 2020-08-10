import React from "react";
import Head from "next/head";
import axios from "axios";
import Error from "next/error";

function Home(props) {
  if (props.error) {
    return <Error statusCode={500} title={props.error.message} />;
  }
  if (props.data.faultInfo) {
    return <Error statusCode={500} />;
  }

  console.log(props.data.boxOfficeResult.dailyBoxOfficeList);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {props.data.boxOfficeResult.dailyBoxOfficeList.map((item) => (
        <div key={item.movieCd}>{item.movieNm}</div>
      ))}
    </div>
  );
}

Home.getInitialProps = async function (context) {
  let url =
    "https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json";
  url += "?key=" + process.env.KEY;
  url += "&targetDt=20200807";

  // Promise -> async/await
  try {
    const response = await axios.get(url);
    console.log(response.data);
    return {
      data: response.data,
    };
  } catch (error) {
    console.warn(error);
    return {
      error,
    };
  }
};

export default Home;
