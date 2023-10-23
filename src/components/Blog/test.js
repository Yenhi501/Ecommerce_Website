import axios from 'axios';
import React, { useState, useEffect } from 'react';
import StarRatings from 'react-star-ratings';
import { useParams } from 'react-router-dom';

const Rate = ({ postId }) => {
  const [rating, setRating] = useState(0);
  const params = useParams();

  function changeRating(newRating) {
    setRating(newRating);

    const accessToken = JSON.parse(localStorage.getItem('accessToken'));
    const userData = JSON.parse(localStorage.getItem('appState'));

    const url = `https://localhost/laravel8/laravel8/public/api/blog/rate/${params.id}`;

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    };

    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      alert('Vui lòng đăng nhập mới được đánh giá!');
    } else {
      const data = {
        user_id: userData.id,
        blog_id: postId,
        rate: newRating,
      };

      axios
        .post(url, JSON.stringify(data), config)
        .then((res) => {
          console.log('Result is:', res);
        })
        .catch((error) => {
          console.error('Error :', error);
        });
    }
  }

  useEffect(() => {
    async function fetchRating() {
      const url = `https://localhost/laravel8/laravel8/public/api/blog/rate/${params.id}`;

      try {
        const response = await axios.get(url);
        let data = response.data.data;
        if (data.length > 0 || Object.keys(data).length > 0) {
          console.log(111);
          // const total = data.reduce((total, rating) => total + rating.rate, 0);
          // console.log('Total :', total);
          // const newRating = total / Object.keys(data).length;
          // console.log(newRating);
          // setRating(newRating);
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
          {rating !== null && <li className="color">Average Rating: {rating}</li>}
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
