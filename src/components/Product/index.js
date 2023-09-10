import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { error } from 'jquery';
const Blog = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://localhost/laravel8/laravel8/public/api/blog')
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div class="col-sm-9">
      <div class="blog-post-area">
        <h2 class="title text-center">Latest From our Blog</h2>

        <div class="single-blog-post">
          {data.map((value) => (
            <h3 key={value.blog.id}>{value.title}</h3>
          ))}
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
            <span>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-half-o"></i>
            </span>
          </div>
          <a href="">
            <img src="images/blog/blog-one.jpg" alt="" />
          </a>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <a class="btn btn-primary" href="/blog/detail/:id">
            Read More
          </a>
        </div>

        <div class="pagination-area">
          <ul class="pagination">
            <li>
              <a href="" class="active">
                1
              </a>
            </li>
            <li>
              <a href="">2</a>
            </li>
            <li>
              <a href="">3</a>
            </li>
            <li>
              <a href="">
                <i class="fa fa-angle-double-right"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Blog;
