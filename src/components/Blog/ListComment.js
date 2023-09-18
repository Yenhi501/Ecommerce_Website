import React from 'react';
import Comment from './Comment';

const ListComment = () => {
  return (
    <div>
      <div class="response-area">
        <h2>3 RESPONSES</h2>
        <ul class="media-list">
          <Comment />
        </ul>
      </div>
    </div>
  );
};

export default ListComment;
