import React from 'react';

const ListComment = ({ listCmt, getnewCommentId }) => {
  const handleClick = (e) => {
    getnewCommentId(e.target.id);
  };
  return (
    <div>
      <div className="response-area">
        <h2>{listCmt.length} RESPONSES</h2>
        <ul className="media-list">
          {listCmt &&
            listCmt.map((item, key) => {
              if (item.id_comment == 0) {
                return (
                  <div key={key}>
                    <li className="media" key={item.id}>
                      <a className="pull-left" href="#">
                        <img
                          className="media-object"
                          src={'https://localhost/laravel8/laravel8/public/upload/user/avatar/' + item.image_user}
                          alt={item.name_user}
                        />
                      </a>
                      <div className="media-body">
                        <ul className="sinlge-post-meta">
                          <li>
                            <i className="fa fa-user"></i>
                            {item.name_user}
                          </li>
                          <li>
                            <i className="fa fa-clock-o"></i>
                            {item.created_at}
                          </li>
                          <li>
                            <i className="fa fa-calendar"></i> DEC 5, 2013
                          </li>
                        </ul>
                        <div>
                          <p>{item.comment}</p>
                        </div>
                        <a id={item.id} className="btn btn-primary" href="#commentForm" onClick={handleClick}>
                          <i className="fa fa-reply"></i>Reply
                        </a>
                      </div>
                    </li>

                    {listCmt.map((item1) => {
                      if (item.id == item1.id_comment) {
                        return (
                          <li className="media second-media" key={item1.id}>
                            <a className="pull-left" href="#">
                              <img
                                className="media-object"
                                src={'https://localhost/laravel8/laravel8/public/upload/user/avatar/' + item1.image_user}
                                alt={item1.name_user}
                              />
                            </a>
                            <div className="media-body">
                              <ul className="sinlge-post-meta">
                                <li>
                                  <i className="fa fa-user"></i>
                                  {item1.name_user}
                                </li>
                                <li>
                                  <i className="fa fa-clock-o"></i>
                                  {item1.created_at}
                                </li>
                                <li>
                                  <i className="fa fa-calendar"></i> DEC 5, 2013
                                </li>
                              </ul>
                              <div>
                                <p>{item1.comment}</p>
                              </div>
                              <a className="btn btn-primary" href="#commentForm" onClick={handleClick}>
                                <i className="fa fa-reply"></i>Reply
                              </a>
                            </div>
                          </li>
                        );
                      }
                    })}
                  </div>
                );
              }
            })}
        </ul>
      </div>
    </div>
  );
};

export default ListComment;
