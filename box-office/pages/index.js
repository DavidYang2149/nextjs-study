import React from "react";
import Head from "next/head";
import axios from "axios";
import Error from "next/error";
import Link from "next/link";
import { DatePicker } from "antd";
import moment from "moment";
import Router from "next/router";

function Home(props) {
  if (props.error) {
    return <Error statusCode={500} title={props.error.message} />;
  }
  if (props.data.faultInfo) {
    return <Error statusCode={500} title={props.data.faultInfo.message} />;
  }

  console.log(props.data.boxOfficeResult.dailyBoxOfficeList);
  return (
    <div>
      <Head>
        <title>Box Office</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>영화 박스 오피스</h1>
      <div>
        <DatePicker
          defaultValue={moment(props.targetDt, "YYYYMMDD")}
          dateFormat={"YYYYMMDD"}
          onChange={(date) =>
            Router.push("/?targetDt=" + date.format("YYYYMMDD"))
          }
        />
      </div>
      {props.data.boxOfficeResult.dailyBoxOfficeList.map((item) => (
        <div key={item.movieCd}>
          [{item.rank}] &nbsp;
          <Link href="/movies/[code]" as={"/movies/" + item.movieCd}>
            <a>{item.movieNm}</a>
          </Link>
          &nbsp;
          <small>({item.openDt})</small>
        </div>
      ))}
    </div>
  );
}

Home.getInitialProps = async function (context) {
  const targetDt =
    context.query.targetDt || moment().subtract(1, "day").format("YYYYMMDD");
  const keyCode = process.env.KEY;

  let url =
    "https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json";
  url += "?key=" + keyCode;
  //url += "?key=" + process.env.KEY;
  //url += "?key=";
  url += "&targetDt=" + targetDt;

  // Promise -> async/await
  try {
    const response = await axios.get(url);
    console.log(response.data);
    return {
      targetDt,
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
