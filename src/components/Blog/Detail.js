import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from './Comment';
import ListComment from './ListComment';
import Rate from './Rate';
import social from './img/socials.png';
const Detail = (props) => {
  let params = useParams();

  const [data, setData] = useState('');
  const [listCmt, setListCmt] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://localhost/laravel8/laravel8/public/api/blog/detail/' +
          params.id,
      )
      .then((res) => {
        console.log(res);
        setData(res.data.data);
        setListCmt(res.data.data.comment);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [params.id]);

  function getCmt(data) {
    setListCmt((prevListCmt) => [...prevListCmt, data]);
  }

  return (
    <div className="col-sm-9">
      <div className="blog-post-area">
        <h2 className="title text-center">Latest From our Blog</h2>
        <div className="single-blog-post">
          <h3>Girls Pink T Shirt arrived in store</h3>
          <div className="post-meta">
            <ul>
              <li>
                <i className="fa fa-user"></i>
              </li>
              <li>
                <i className="fa fa-clock-o"></i> 1:33 pm
              </li>
              <li>
                <i className="fa fa-calendar"></i> DEC 5, 2013
              </li>
            </ul>
          </div>
          <a href="/">
            <img
              src={
                'https://localhost/laravel8/laravel8/public/upload/Blog/image/' +
                data.image
              }
              alt=""
            />
          </a>

          <p>{data.content}</p>
          <br />

          <div className="pager-area">
            <ul className="pager pull-right">
              <li>
                <a href="#">Pre</a>
              </li>
              <li>
                <a href="#">Next</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Rate />

      <div className="socials-share">
        <a href="#">
          <img src={social} alt="" />
        </a>
      </div>

      <ListComment listCmt={listCmt} />
      <Comment getCmt={getCmt} />
    </div>
  );
};

export default Detail;

// khi gọi API về thì trong này có mảng chứa các comment lấy cái này set vào biến cmt và gửi qua bên ListComment.js
