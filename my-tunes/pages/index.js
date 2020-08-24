import React from "react";
import { Button, Form, Table, Input } from "antd";
import axios from "axios";
import Router from "next/router";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "아티스트",
    dataIndex: "artist",
    key: "artist",
  },
  {
    title: "앨범명",
    dataIndex: "title",
    key: "title",
  },
];

function Home(props) {
  const [albums, setAlbums] = React.useState(props.albums);
  const load = async () => {
    const albums = await axios.get("http://127.0.0.1:3000/api/albums");
    setAlbums(albums.data);
  };
  return (
    <div style={{ padding: 24 }}>
      <Table dataSource={albums} columns={columns} rowKey={"id"} />

      <Form
        onFinish={(values) => {
          axios
            .post("http://127.0.0.1:3000/api/albums", values)
            .then((response) => {
              // 기본 페이지 새로고침
              //Router.reload()

              // 리액트를 이용한 state 변경(리로딩 없음)
              load();
            })
            .catch((error) => console.warn(error));
        }}
      >
        <Form.Item
          name={"artist"}
          label={"아티스트"}
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name={"title"} label={"타이틀"} rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type={"primary"} htmlType={"submit"}>
            전송
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

Home.getInitialProps = async () => {
  const albums = await axios.get("http://127.0.0.1:3000/api/albums");
  return {
    albums: albums.data,
  };
};

export default Home;
