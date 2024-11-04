import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useCookies } from "react-cookie";
import { ThinContainer, ContentFit } from "./StyledComponents";
import { useState, useEffect } from 'react';
import axios from "axios";

const CommentTitle = styled.div`
  margin-top: 20px;
  font-size: 23px;
  font-weight: 700;
  color: #3E5977;
  padding-bottom: 10px;
  /* border-bottom: 2px solid #eeeeee; */
  margin-bottom: 10px;
`;

const Pages = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const PageNumber = styled.div`
  font-weight: ${({ isOn }) => (isOn ? '700' : '500')};
  color: ${({ isOn }) => (isOn ? '#3E5977' : '#bcbcbc')};
  display: flex;
  justify-content: center;
  align-items: center; 
  cursor: pointer;
`;

const CommentInputBox = styled.div`
  display: flex;
  justify-content: space-around;
  gap:10px;
  
`;
const CommentInput = styled.input`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  /* margin-bottom: 10px; */
  border-radius: 5px;
  border: none;
  font-size: 16px;
  outline: none;
  background: #f5f5f5;
  font-weight: 500;
`;

const CommentBox = styled.div`
  margin: 20px 0px;
  
`;

const Commenter = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #000000;
  margin-bottom: 5px;
`;

const CommentContent = styled.div`
    font-size: 14px;
  font-weight: 500;
  color: #828282;
  margin-bottom: 5px;
`;

const CommentDate = styled.div`
      font-size: 12px;
  font-weight: 500;
  color: #bcbcbc;
`;

const SubmitButton = styled.button`
  padding: 0px 20px;
  background-color: #3E5977;
  color: white;
  border: none;
  font-weight: 700;
  border-radius: 5px;
  white-space: nowrap; 
  outline: none;
  cursor: pointer;
`;

const Comment = () => {
  const { articleId } = useParams();
  const [cookie] = useCookies(); 
  const [page, setPage] = useState(0);
  const [pageNumbers, setPageNumbers] = useState([]);
  const [comments, setComments] = useState([]);
  const [content, setContent] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(process.env.REACT_APP_BACK_URL + "/comments/" + articleId+"?pageNumber="+page);
      setComments(response.data.data.comments);
      setPageNumbers(Array.from({ length: response.data.data.pageCount }, (_, index) => index + 1));
    } catch (error) {
      console.error("오류 발생:", error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
  }, [articleId]);

  useEffect(() => {
    fetchData();
  }, [page]);

  const handlePageClick = (number) => {
    setPage(number - 1);
  };

  const handleCommentSubmit = async () => {
    try {
      await axios.post(`${process.env.REACT_APP_BACK_URL}/comments`, {
        articleId,
        content,
      }, {
        headers: {
          Authorization: `Bearer ${cookie.accessToken}`,
        },
      });
      setContent(""); // 입력 필드 초기화
      setPage(0);
      fetchData();
    } catch (error) {
      console.error("댓글 작성 오류:", error);
    }
  };

  return (
    <ThinContainer>
      <ContentFit>
        <CommentTitle>Comments</CommentTitle>

        <CommentInputBox>
        <CommentInput 
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write a comment..."
        />
        <SubmitButton onClick={handleCommentSubmit}>Submit</SubmitButton>

        </CommentInputBox>
       
        {comments.map((comment) => (
          <CommentBox key={comment.commentId}>
            <Commenter>{comment.commenterNickname}</Commenter>
            <CommentContent>{comment.content}</CommentContent>
            <CommentDate>{comment.createdAt.slice(0,10)}</CommentDate>
          </CommentBox>
        ))}

        <Pages>
          {pageNumbers.map((number) => (
            <PageNumber 
              key={number} 
              isOn={page + 1 === number} 
              onClick={() => handlePageClick(number)}
            >
              {number}
            </PageNumber>
          ))}
        </Pages>
      </ContentFit>
    </ThinContainer>
  );
};

export default Comment;
