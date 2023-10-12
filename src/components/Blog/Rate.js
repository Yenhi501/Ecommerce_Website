import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import StarRatings from 'react-star-ratings';
import { useParams } from 'react-router-dom';
const Rate = ({ idBlog }) => {
  const [rating, setRating] = useState(0);
  const params = useParams();

  function changeRating(newRating, name) {
    setRating(newRating);
    // - xu ly logic
    // - xu ly api
    const access = localStorage.getItem('accessToken');
    const accessToken = JSON.parse(access);
    const userData = JSON.parse(localStorage.getItem('appState'));

    const url = `https://localhost/laravel8/laravel8/public/api/blog/rate/${params.id}`;

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
      },
    };

    const isLoggedIn = localStorage.getItem('isLoggedIn');
    console.log('isLoggedIn :', isLoggedIn);
    if (!isLoggedIn) {
      alert('Vui lòng đăng nhập mới được đánh giá!');
    } else {
      const formdata = new FormData();
      formdata.append('id_user', userData.id);
      formdata.append('id_blog', idBlog);
      formdata.append('rate', rating);
      axios
        .post(url, formdata, config)
        .then((res) => {
          console.log(res);
          setRating(newRating);
        })
        .catch((error) => {
          console.error('Error posting comment:', error);
        });
    }
  }

  return (
    <div>
      <div class="rating-area">
        <ul class="ratings">
          <li class="rate-this">Rate this item:</li>
          <li>
            <StarRatings
              rating={rating}
              starRatedColor="blue"
              changeRating={changeRating}
              numberOfStars={6}
              name="rating"
              starDimension="15px"
              starSpacing="4px"
            />
          </li>
          <li class="color">(6 votes)</li>
        </ul>
        <ul class="tag">
          <li>TAG:</li>
          <li>
            <a class="color" href="">
              Pink <span>/</span>
            </a>
          </li>
          <li>
            <a class="color" href="">
              T-Shirt <span>/</span>
            </a>
          </li>
          <li>
            <a class="color" href="">
              Girls
            </a>
          </li>
        </ul>
      </div>
      {/* <!--/rating-area--> */}
    </div>
  );
};

export default Rate;
