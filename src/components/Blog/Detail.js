import React from 'react';
import Rate from './Rate';
import social from './img/socials.png';
import ListComment from './ListComment';
const Detail = () => {
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
          <a href="#">
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
          <br />
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Sed ut perspiciatis
            unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <br />
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
          </p>
          <br />
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>
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