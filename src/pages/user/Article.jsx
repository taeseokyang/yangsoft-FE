import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from 'react';
import Main from "../../components/homeContents/Main";
import ArticleHeader from "../../components/ArticleHeader";
import { ThinPageContainer } from "../../components/StyledComponents";
import Footer from "../../components/Footer";

const ArticleTitle = styled.div`
  margin-top: 30px;
  color: #000000;
  font-size: 40px;
  font-weight: 600;
`;
const ArticleSubTitle = styled.div`
  color: #adadad;
  font-size: 20px;
`;

const Separator = styled.div`
  height: 30px;
  border-bottom: 1px solid #eeeeee;
`;

const ArticleBody = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  & img{
    align-items: center; 
    margin: 0px auto;
    width: 100%;
  }
`;

const Article = () => {
  const { articleId } = useParams();

  const content = `
  <div>&nbsp;</div>
  <img src="http://www.gachonherald.com/news/photo/202404/1219_3293_2528.jpg"  alt="" />
  <div>&nbsp;</div>
  <div>&nbsp;Since November 2022, there have been changes in the use of disposable items such as paper straws in cafes. The Ministry of Environment introduced a new regulation aiming to reduce waste, but recent updates have stirred mixed reactions. Given these circumstances, this article purports to explore the details and varied opinions on these environmental measures in South Korea.</div>
  <div>&nbsp;</div>
  <div><strong>Announcement of the Ministry of Environment's Relaxation of Regulations</strong></div>
  <div>&nbsp;</div>
  <div>&nbsp;The Ministry of Environment extended the transition period for the following reasons. Firstly, it stated that South Korea is the only country regulating paper cups globally and aims to improve the separation and recycling of paper cups within establishments. It mentioned that the higher cost and lower consumer satisfaction of paper straws, which are three times more expensive than plastic straws, justify the extension. Regarding plastic bags, it was reported that consumer participation during the transition period led to significant improvements, and instead of imposing fines on supermarkets using plastic bags, the ministry will encourage alternatives such as biodegradable bags, baskets, and volume-based bags. Additionally, the Ministry of Environment introduced the story of Mr. B, who buys fish cakes from a food truck, to support their stance. The story illustrates the potential issue of not being able to provide fish cake broth if paper cups are regulated. The Ministry of Environment stressed that there is no change in their determination and direction to reduce disposable items. However, it was noted that the announcement contains inaccurate information.</div>
  <div>&nbsp;</div>
  <div><strong>Criticism and Opposition Voices</strong></div>
  <div>&nbsp;</div>
  <div>&nbsp;The group strongly opposing the government's announcement is environmental organizations. An Jae-hoon, head of the Environmental Movement Coalition representing environmental groups, commented on the announcement containing misinformation as follows: &quot;Countries like Germany are regulating paper cups, and biodegradable plastic bags are difficult to recycle.&quot; He also stated, &quot;Claiming that paper straws are a significant burden for small business owners compared to plastic ones is misleading, as the actual price difference for a cup of coffee is less than 1%. The difficulties faced by small business owners are not due to paper straws.&quot; He strongly urged the government to, &quot;Implement last year's single-use item regulation proposal as originally planned.&quot; In fact, Germany and France are already regulating paper cups, and the Netherlands is also planning to implement regulations soon. Moreover, the story introduced by the government about 'Mr. B who buys fish-shaped buns from a food truck' seems false.  The reason is that food trucks are not originally classified as food service establishments and are therefore not subject to regulation. Criticisms have been raised about whether the Environment Ministry properly reviewed the misinformation and changed its policies in response to the retreat.</div>
  <div>&nbsp;</div>
  <div>&nbsp;Opposition to the policy is not only coming from environmental organizations. Eco-friendly product manufacturers, who had been ramping up their efforts to develop alternatives following the announcement of the single-use item regulation policy, suddenly found themselves at a standstill overnight. Their warehouses were filled with unsold inventory, and they had to lay off all their employees. Just a month before the relaxation of regulations, they had trusted the Environment Ministry's assurance to continue with the policy. However, they received a sudden notification about the policy's termination about two weeks ago. They requested concrete measures to be taken for paper straw manufacturers.</div>
  <div>&nbsp;</div>
  <div><strong>Voices of Welcome</strong></div>
  <div>&nbsp;</div>
  <div>&nbsp;In contrast to the opposing position, small business owners welcome the relaxation of regulations by the Ministry of Environment. The reason for this is that they have faced many difficulties in terms of costs for eco-friendly alternatives, consumer satisfaction, and the need for manpower to wash cups in their establishments. The easing of regulations by the Ministry of Environment is seen as a decision that alleviates the burden on small business owners from cost increases and labor shortages. However, small business owners have expressed dissatisfaction as they had already placed bulk orders for alternatives in anticipation of the end of the grace period.</div>
  <div>&nbsp;</div>
  <div><strong>The Ministry of Environment's wavering policy</strong></div>
  <div>&nbsp;</div>
  <div>&nbsp;In fact, such flip-flopping policies by the Ministry of Environment have been ongoing. In January 2003, they implemented a deposit system for disposable cups, where fast-food outlets charged a deposit and refunded it upon return of the cup but  abolished the system five years later. Additionally, in June 2022, they decided to reintroduce this system, only to announce a six-month postponement a month before implementation in May. Moreover, after the six-month period, they changed their stance from nationwide implementation to piloting only in Jeju and Sejong City. Furthermore, there have been instances where they attempted to prohibit bundled discounts for packaged goods to reduce packaging waste but  faced significant backlash and had to retract the proposal. The Ministry of Environment's tendency to announce and retract policies without thorough consideration of their effectiveness or potential side effects leads to societal confusion.</div>
  <div>&nbsp;</div>
  <div>&nbsp;Small business owners welcome the government's decision, while environmental organizations and eco-friendly product companies express discontent. Some argue that such decisions are made with an eye on the upcoming general elections. Given the larger number of small business owners compared to environmental organizations and alternative product companies, it is seen as a move to win their support. Furthermore, the 5th session of the United Nations International Plastics Agreement is scheduled to take place in Korea at the end of this year. This international agreement aims to reduce plastic pollution. However, amidst this global environmental landscape, domestic environmental policies in South Korea are seen as regressive. The Ministry of Environment should exert more effort in proposing policies for environmental protection and should announce detailed plans accordingly.</div>
  <p>&nbsp;</p>
`;

  
  const article = {
      id: 1,
      title : "South Korea's Environmental Policy in Retreat",
      subTitle : "South Korea's Environmental Policy in Retreat",
      imgName : "img.png",
      reporter : "taeseok yang",
      createdAt : "May 12, 2024"
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ThinPageContainer>
      <ArticleHeader></ArticleHeader>
      <ArticleTitle>{article.title}</ArticleTitle>
      <ArticleSubTitle>{article.subTitle}</ArticleSubTitle>
      <Separator></Separator>
      <ArticleBody  dangerouslySetInnerHTML={{ __html: content }}>
      </ArticleBody>
      <Footer></Footer>
    </ThinPageContainer>
  );
};

export default Article;
