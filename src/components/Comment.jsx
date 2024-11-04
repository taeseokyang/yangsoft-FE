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
  gap: 10px;
`;

const CommentInput = styled.input`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  outline: none;
  background: #f5f5f5;
  font-weight: 500;
  opacity: ${({ isDisabled }) => (isDisabled ? 0.5 : 1)};
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

const DeleteButton = styled.button`
  /* margin-left: 10px; */
  padding: 0px;
  background: none;
  /* background-color: #d9534f; */
  color: #bcbcbc;
  /* color: white; */
  border: none;
  font-weight: 500;
  border-radius: 5px;
  cursor: pointer;
`;

const CommentTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Comment = () => {
  const navigate = useNavigate(); 
  const { articleId } = useParams();
  const [cookie] = useCookies(); 
  const [page, setPage] = useState(0);
  const [pageNumbers, setPageNumbers] = useState([]);
  const [comments, setComments] = useState([]);
  const [content, setContent] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(process.env.REACT_APP_BACK_URL + "/comments/" + articleId + "?pageNumber=" + page);
      setComments(response.data.data.comments);
      setPageNumbers(Array.from({ length: response.data.data.pageCount }, (_, index) => index + 1));
    } catch (error) {
      console.error("오류 발생:", error);
    }
  };

  useEffect(() => {
    // window.scrollTo(0, 0);
    fetchData();
  }, [articleId]);

  useEffect(() => {
    fetchData();
  }, [page]);

  const handlePageClick = (number) => {
    setPage(number - 1);
  };

  const handleCommentSubmit = async () => {
    if (!content) return; // 내용이 없으면 제출하지 않음
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
      navigate("/");
      console.error("댓글 작성 오류:", error);
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      await axios.delete(`${process.env.REACT_APP_BACK_URL}/comments/${commentId}`, {
        headers: {
          Authorization: `Bearer ${cookie.accessToken}`,
        },
      });
      fetchData(); 
    } catch (error) {
      navigate("/");
      console.error("댓글 삭제 오류:", error);
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
            placeholder={cookie.accessToken != null ? "Write a comment..." : "Please log in to write a comment."}
            disabled={cookie.accessToken == null} // 로그인 여부에 따라 비활성화
          />
          <SubmitButton onClick={handleCommentSubmit} disabled={cookie.accessToken == null}>Submit</SubmitButton>
        </CommentInputBox>
       
        {comments.map((comment) => (
          <CommentBox key={comment.commentId}>
            <CommentTop>
            <Commenter>{comment.commenterNickname}</Commenter>
            {cookie.id == comment.commenterId && ( // 본인 댓글인 경우 삭제 버튼 표시
              <DeleteButton onClick={() => handleDeleteComment(comment.commentId)}>Delete</DeleteButton>
            )}
            </CommentTop>
            
            <CommentContent>{comment.content}</CommentContent>
            <CommentDate>{comment.createdAt.slice(0, 10)}</CommentDate>
            
          </CommentBox>
        ))}

        {comments.length != 0 ?
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
        : null}
      </ContentFit>
    </ThinContainer>
  );
};

export default Comment;
