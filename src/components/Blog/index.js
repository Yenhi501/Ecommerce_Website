import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Blog = () => {
  const [data, setData] = useState({ blog: { data: [] } });

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
    <div className="col-sm-9">
      <div class="blog-post-area">
        <h2 class="title text-center">Latest From our Blog</h2>
        {data.blog.data.map((value) => (
          <div key={value.id}>
            <h3>{value.title}</h3>
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
            <a href="/">
              <img
                src={
                  'https://localhost/laravel8/laravel8/public/upload/Blog/image/' +
                  value.image
                }
                alt=""
              />
            </a>
            <p>{value.description}</p>
            <Link
              to={'/blog/detail/' + value.id}
              class="btn btn-primary"
              href="/blog/detail/:id"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
