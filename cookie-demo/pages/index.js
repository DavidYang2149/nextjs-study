import Link from "next/link";

function Home(props) {
  return (
    <div>
      <Link href="/second">
        <a> 다음 페이지로</a>
      </Link>
    </div>
  );
}

Home.getInitialProps = async (context) => {
  console.log("Home.getInitialProps");
  return {
    a: 1,
  };
};

export default Home;
