import React, { useEffect, useState, useContext } from 'react';

import { UserContext } from 'context/context';
import moment from 'moment';
// import { SERVER_PORT } from 'config';

import UserProfile from 'components/profile/UserProfile';
import { BsFillTrashFill } from 'react-icons/bs';
import styled from 'styled-components';

function CommentInput() {
  // const [input, setInput] = useState();
  // const { userData } = useContext(UserContext);
  const [data, setData] = useState();
  const user = useContext(UserContext);

  useEffect(() => {
    // fetch('http//localhost:3000/district-info/detail').then(res => {
    //   return res.json();
    // });
  }, []);

  // useEffect(() => {
  //   getCommentList(infoCommentsId).then(data => {
  //     if (data.message === 'SUCCESS') {
  //       setData(data.infoCommentsId);
  //     }
  //   });
  // }, [infoCommentsId]);

  return data ? (
    <div>
      {data.map(item => {
        return (
          <Comments key={item.id}>
            <UserProfile user={item.user} />
            <BsFillTrashFill
              className="trashIcon"
              // onClick={() => this.handleRemove(e.id)}
            />
            <div
              dangerouslySetInnerHTML={{
                __html: `<p>${item.comment}</p>`,
              }}
            />
            <span>{moment(item.createdAt).format('YYYY-MM-DD')}</span>
          </Comments>
        );
      })}
    </div>
  ) : (
    <div></div>
  );
}

const Comments = styled.div`
  padding: 20px 6px 20px 6px;
  border-bottom: 1px solid #99999940;
  div {
    padding: 15px 0px;
    font-size: 15px;
    line-height: 1.47;
    letter-spacing: -0.5px;
  }
  span {
    font-size: 13px;
    color: #71717199;
  }
  .trashIcon {
    /* margin-left: 10px; */
    width: 15px;
    color: #ababab;
  }
`;

export default CommentInput;
