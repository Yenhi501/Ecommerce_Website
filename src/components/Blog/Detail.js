import React from 'react';
import Rate from './Rate';
import social from './img/socials.png';
import ListComment from './ListComment';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { error } from 'jquery';
import axios from 'axios';
const Detail = (props) => {
  let params = useParams();

  const [data, setData] = useState('');
  // const [comment, setComment] = useState([]);
  // const [idRely, setIdRely] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://localhost/laravel8/laravel8/public/api/blog/detail/' +
          params.id,
        // console.log(params.id),
      )
      .then((res) => {
        console.log(res);
        setData(res.data.data);
        // setComment(res.data.data.comment);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div class="col-sm-9">
      <div class="blog-post-area">
        <h2 class="title text-center">Latest From our Blog</h2>
        <div class="single-blog-post">
          <h3>Girls Pink T Shirt arrived in store</h3>
          <div class="post-meta">
            <ul>
              <li>
                <i class="fa fa-user"></i> Mac Doe
              </li>
              <li>
                <i class="fa fa-clock-o"></i> 1:33 pm
              </li>
              <li>
                <i class="fa fa-calendar"></i> DEC 5, 2013
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

          <div class="pager-area">
            <ul class="pager pull-right">
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

      <div class="socials-share">
        <a href="#">
          <img src={social} alt="" />
        </a>
      </div>

      <ListComment />

      <div class="replay-box">
        <div class="row">
          <div class="col-sm-12">
            <h2>Leave a replay</h2>

            <div class="text-area">
              <div class="blank-arrow">
                <label>Your Name</label>
              </div>
              <span>*</span>
              <textarea name="message" rows="11"></textarea>
              <a class="btn btn-primary" href="">
                post comment
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
