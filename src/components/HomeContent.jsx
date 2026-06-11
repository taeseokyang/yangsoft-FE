import styled from "styled-components";

const Wrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

const Hero = styled.section`
  padding: 100px 0 80px;
  max-width: 640px;
`;

const Eyebrow = styled.p`
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #AAAAAA;
  margin-bottom: 28px;
`;

const Headline = styled.h1`
  font-size: 52px;
  font-weight: 200;
  line-height: 1.18;
  color: #111111;
  margin-bottom: 28px;
  letter-spacing: -0.02em;
`;

const Sub = styled.p`
  font-size: 15px;
  font-weight: 300;
  color: #777777;
  line-height: 1.8;
  max-width: 440px;
`;

const Divider = styled.div`
  height: 1px;
  background: #EEEEEE;
`;

const Features = styled.section`
  padding: 56px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Feature = styled.div`
  padding: 0 40px 0 0;
  border-right: 1px solid #EEEEEE;
  margin-right: 40px;

  &:last-child {
    border-right: none;
    margin-right: 0;
    padding-right: 0;
  }

  @media (max-width: 640px) {
    border-right: none;
    border-bottom: 1px solid #EEEEEE;
    padding: 0 0 32px;
    margin: 0 0 32px;

    &:last-child {
      border-bottom: none;
      padding-bottom: 0;
      margin-bottom: 0;
    }
  }
`;

const FeatureTitle = styled.h3`
  font-size: 12px;
  font-weight: 500;
  color: #111111;
  letter-spacing: 0.04em;
  margin-bottom: 10px;
`;

const FeatureBody = styled.p`
  font-size: 13px;
  font-weight: 300;
  color: #888888;
  line-height: 1.8;
`;

const ClientsStrip = styled.section`
  padding: 48px 0 80px;
`;


const SectionLabel = styled.div`
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.14em;
  color: #BBBBBB;
  text-transform: uppercase;
  margin-bottom: 28px;
`;

const LogoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 32px;
`;

const LogoLink = styled.a`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  border: 1px solid #E0E0E0;
  border-radius: 8px;
  background: #ffffff;

  & img {
    height: 24px;
    width: auto;
    object-fit: contain;
  }
`;

const HomeContent = () => {
  return (
    <Wrap>
      <Hero>
        <Headline>
          Software for<br />
          digital media.
        </Headline>
        <Sub>
          We design, deploy, and maintain internet newspaper
          platforms for media organizations — from day one
          to long-term operation.
        </Sub>
      </Hero>

      <Divider />

      <Features>
        <Feature>
          <FeatureTitle>Installation</FeatureTitle>
          <FeatureBody>
            Complete setup and deployment of internet newspaper platforms, configured to your organization's needs.
          </FeatureBody>
        </Feature>
        <Feature>
          <FeatureTitle>Maintenance</FeatureTitle>
          <FeatureBody>
            Ongoing technical support, infrastructure management, and platform updates to keep your operation running.
          </FeatureBody>
        </Feature>
        <Feature>
          <FeatureTitle>Custom Development</FeatureTitle>
          <FeatureBody>
            Tailored features and integrations built to the specific requirements of your publication.
          </FeatureBody>
        </Feature>
      </Features>

      <ClientsStrip>
        <SectionLabel>Clients</SectionLabel>
        <LogoRow>
          <LogoLink
            href="https://thegachonherald.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/thegachonherald.png" alt="The Gachon Herald" />
          </LogoLink>
        </LogoRow>
      </ClientsStrip>
    </Wrap>
  );
};

export default HomeContent;
