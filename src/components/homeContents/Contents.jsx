import { Link } from "react-router-dom";
import styled from "styled-components";
import TopBlock from "./TopBlock";
import ImageNo from "./ImageNo";
import ImageOneFull from "./ImageOneFull";
import ImageOne from "./ImageOne";
import ImageTwo from "./ImageTwo";
import ImageThree from "./ImageThree";
import HorizontalLine from "./HorizontalLine";
import { Container } from "../StyledComponents";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Contents = () => {
  const [editorsPicks, setEditorsPicks] = useState([]);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_BACK_URL + "/articles/home");
        setEditorsPicks(response.data.data.editorsPicks);
        setSections(response.data.data.sections);
        console.log(response.data.data);
      } catch (error) {
        console.error("오류 발생:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <TopBlock articles={editorsPicks}></TopBlock>
      {sections.map((section, index) => (
        <React.Fragment key={index}>
          <HorizontalLine />
          {section.articles.length === 0 && section.imageArticles.length === 1 && (
            <ImageOneFull sectionId={section.sectionId} sectionName={section.sectionName} article={section.imageArticles[0]} />
          )}
          {section.articles.length > 0 && section.imageArticles.length === 1 && (
            <ImageOne sectionId={section.sectionId} sectionName={section.sectionName} imageArticles={section.imageArticles}  articles={section.articles} />
          )}
          {section.imageArticles.length === 2 && (
            <ImageTwo sectionId={section.sectionId} sectionName={section.sectionName} imageArticles={section.imageArticles}  articles={section.articles} />
          )}
          {section.imageArticles.length === 3 && (
            <ImageThree sectionId={section.sectionId} sectionName={section.sectionName} imageArticles={section.imageArticles}  articles={section.articles} />
          )}
          {section.articles.length > 0 && section.imageArticles.length === 0 && (
            <ImageNo sectionId={section.sectionId} sectionName={section.sectionName} articles={section.articles} />
          )}
        </React.Fragment>
      ))}
    </Container>
  );
};

export default Contents;
