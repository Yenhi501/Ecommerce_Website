import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Comment from './Comment';
import ListComment from './ListComment';
import Rate from './Rate';
import social from './img/socials.png';

const Detail = () => {
  const params = useParams();
  const [data, setData] = useState('');
  const [listCmt, setListCmt] = useState([]);
  const [idCmt, setidCmt] = useState(null);

  function getnewCommentId(commentId) {
    setidCmt(commentId);
    console.log('Reply clicked for comment ID:', commentId);
  }

  useEffect(() => {
    axios
      .get(`https://localhost/laravel8/laravel8/public/api/blog/detail/${params.id}`)
      .then((res) => {
        setData(res.data.data);
        setListCmt(res.data.data.comment);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [params.id]);

  const getCmt = (newComment) => {
    setListCmt([...listCmt, newComment]);
  };

  return (
    <div className="col-sm-9">
      <div className="blog-post-area">
        <h2 className="title text-center">Latest From our Blog</h2>
        <div className="single-blog-post">
          <h3>{data ? data.title : ''}</h3>
          <div className="post-meta">
            <ul>
              <li>
                <i className="fa fa-user"> Mac Doe</i>
              </li>
              <li>
                <i className="fa fa-clock-o"></i> 1 {data ? data.created_at.split(' ')[1] : ''}
              </li>
              <li>{data ? data.created_at.split(' ')[0] : ''}</li>
            </ul>
          </div>
          <a href="/">
            <img src={`https://localhost/laravel8/laravel8/public/upload/Blog/image/${data ? data.image : ''}`} alt="" />
          </a>

          <p>{data ? data.content : ''}</p>
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
      <ul className="media-list">
        <ListComment listCmt={listCmt} getnewCommentId={getnewCommentId} />
      </ul>

      <Comment getCmt={getCmt} postId={params.id} idCmt={idCmt} />
    </div>
  );
};

export default Detail;
