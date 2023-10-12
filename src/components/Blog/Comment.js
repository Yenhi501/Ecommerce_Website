import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRef } from 'react';
const Comment = ({ getCmt, postId, idCmt }) => {
  const [newComment, setNewComment] = useState('');
  const focusComment = useRef(null);
  const params = useParams();

  const handleCheckLogin = () => {
    const access = localStorage.getItem('accessToken');
    const accessToken = JSON.parse(access);
    const userData = JSON.parse(localStorage.getItem('appState'));

    const url = `https://localhost/laravel8/laravel8/public/api/blog/comment/${params.id}`;

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
      },
    };

    if (!userData) {
      console.log('Vui lòng đăng nhập trước khi đăng bình luận.');
    } else if (!newComment) {
      alert('Vui lòng nhập bình luận');
    } else {
      const formData = new FormData();
      formData.append('id_blog', postId);
      formData.append('id_user', userData.id);
      formData.append('id_comment', idCmt ? idCmt : 0);
      formData.append('comment', newComment);
      formData.append('image_user', userData.avatar);
      formData.append('name_user', userData.name);

      console.log(idCmt);

      axios
        .post(url, formData, config)
        .then((response) => {
          console.log(response);
          getCmt(response.data.data);
          setNewComment('');
          focusComment.current.focus();
        })
        .catch((error) => {
          console.error('Error posting comment:', error);
        });
    }
  };

  return (
    <div>
      <div className="replay-box">
        <div className="row">
          <div className="col-sm-12">
            <h2>Leave a replay</h2>

            <div className="text-area">
              <div className="blank-arrow">
                <label>Your Name</label>
              </div>
              <span>*</span>
              <textarea
                id="commentForm"
                name="message"
                rows="11"
                value={newComment}
                ref={focusComment}
                onChange={(e) => setNewComment(e.target.value)}
              ></textarea>
              <button onClick={handleCheckLogin} className="btn btn-primary" href="">
                post comment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
