import "../styles/globals.css";
import Cookies from "universal-cookie";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async function ({ Component, ctx }) {
  console.log("App.getInitialProps");

  let cookies;

  if (ctx.req) {
    console.log("Server-side");
    cookies = new Cookies(ctx.req.headers.cookie);
    console.log("ctx.req.headers.cookie : ", ctx.req.headers.cookie);
  } else {
    cookies = new Cookies();
    console.log("Client-side");
  }

  console.log("cookie", cookies.get("temp-cookie"));

  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {
    pageProps,
  };
};

export default MyApp;
