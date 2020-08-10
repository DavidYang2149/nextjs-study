import axios from "axios";
import Error from "next/error";
import Router from "next/router";

function MovieInfo(props) {
  if (props.error) {
    return <Error statusCode={500} title={props.error.message} />;
  }
  if (props.data.faultInfo) {
    return <Error statusCode={500} title={props.data.faultInfo.message} />;
  }

  const info = props.data.movieInfoResult.movieInfo;
  return (
    <div>
      <h1>{info.movieNm}</h1>
      <small>{info.movieNmEn}</small>
      <p>{info.openDt}</p>
      <dl>
        <dt>감독</dt>
        <dd>
          {info.directors.map((directors) => directors.peopleNm).join(", ")}
        </dd>
        <dt>출연</dt>
        <dd>{info.actors.map((actors) => actors.peopleNm).join(", ")}</dd>
        <dt>쟝르</dt>
        <dd>{info.genres.map((genres) => genres.genreNm).join(", ")}</dd>
        <dt>국가</dt>
        <dd>{info.nations.map((nations) => nations.nationNm).join(", ")}</dd>
      </dl>

      <button onClick={() => Router.back()}>돌아가기</button>
    </div>
  );
}

MovieInfo.getInitialProps = async function (context) {
  let url =
    "https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json";
  url += "?key=" + process.env.KEY;
  //url += "?key=";
  url += "&movieCd=" + context.query.code;
  try {
    const response = await axios.get(url);
    return {
      data: response.data,
    };
  } catch (error) {
    return { error };
  }
};

export default MovieInfo;
