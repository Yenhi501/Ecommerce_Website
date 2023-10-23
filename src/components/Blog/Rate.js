import axios from 'axios';
import React, { useState, useEffect } from 'react';
import StarRatings from 'react-star-ratings';
import { useParams } from 'react-router-dom';

const Rate = ({ postId }) => {
  const [rating, setRating] = useState(0);
  const params = useParams();

  function changeRating(newRating) {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (!isLoggedIn) {
      alert('Vui lòng đăng nhập mới được đánh giá!');
      return;
    }

    setRating(newRating);

    const accessToken = JSON.parse(localStorage.getItem('accessToken'));
    const userData = JSON.parse(localStorage.getItem('appState'));

    const url = `https://localhost/laravel8/laravel8/public/api/blog/rate/${params.id}`;

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
      },
    };

    const formdata = new FormData();
    formdata.append('user_id', userData.id);
    formdata.append('blog_id', postId);
    formdata.append('rate', newRating);

    console.log('IdUser - IdBlog - Rating:', userData.id, ' - ', postId, ' - ', newRating);

    axios
      .post(url, formdata, config)
      .then((res) => {
        console.log('POST:', res);
      })
      .catch((error) => {
        console.error('Error :', error);
      });
  }

  useEffect(() => {
    async function fetchRating() {
      const url = `https://localhost/laravel8/laravel8/public/api/blog/rate/${params.id}`;

      try {
        const response = await axios.get(url);
        console.log('Get data:', response);
        let ratingData = response.data.data;
        console.log('data:', ratingData);

        if (ratingData.length > 0) {
          let totalRating = ratingData.reduce((total, rating) => total + rating.rate, 0);
          let averageRating = totalRating / ratingData.length;
          setRating(averageRating);
        } else {
          setRating(0);
        }
      } catch (error) {
        console.error('Error fetching rating:', error);
      }
    }

    fetchRating();
  }, [params.id]);

  return (
    <div>
      <div className="rating-area">
        <ul className="ratings">
          <li className="rate-this">Rate this item:</li>
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
          {rating !== null && <li className="color">Average Rating: {rating.toFixed(2)}</li>}
        </ul>
        <ul className="tag">
          <li>TAG:</li>
          <li>
            <a className="color" href="">
              Pink <span>/</span>
            </a>
          </li>
          <li>
            <a className="color" href="">
              T-Shirt <span>/</span>
            </a>
          </li>
          <li>
            <a className="color" href="">
              Girls
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Rate;
