import styled from "styled-components";

const Wrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

const PageHeader = styled.div`
  padding: 64px 0 40px;
  border-bottom: 1px solid #EEEEEE;
  margin-bottom: 52px;
`;

const PageTitle = styled.h1`
  font-size: 26px;
  font-weight: 200;
  color: #111111;
  margin-bottom: 10px;
  letter-spacing: -0.01em;
`;

const PageMeta = styled.p`
  font-size: 12px;
  color: #BBBBBB;
  font-weight: 300;
`;

const Section = styled.div`
  margin-bottom: 44px;
`;

const SectionTitle = styled.h2`
  font-size: 13px;
  font-weight: 500;
  color: #111111;
  margin-bottom: 12px;
`;

const SubTitle = styled.h3`
  font-size: 12px;
  font-weight: 500;
  color: #333333;
  margin: 14px 0 6px;
`;

const Body = styled.p`
  font-size: 13px;
  font-weight: 300;
  color: #555555;
  line-height: 1.9;
  margin-bottom: 6px;
`;

const List = styled.ol`
  font-size: 13px;
  font-weight: 300;
  color: #555555;
  line-height: 1.9;
  padding-left: 18px;
  margin: 6px 0 0;

  & li {
    margin-bottom: 4px;
  }
`;

const Divider = styled.div`
  height: 1px;
  background: #F0F0F0;
  margin-bottom: 44px;
`;

const DocFooter = styled.div`
  padding: 32px 0 72px;
  border-top: 1px solid #EEEEEE;
  margin-top: 16px;
`;

const PrivacyPolicyContent = () => {
  return (
    <Wrap>
      <PageHeader>
        <PageTitle>Privacy Policy</PageTitle>
        <PageMeta>Effective date: February 27, 2025</PageMeta>
      </PageHeader>

      <Section>
        <SectionTitle>1. Personal Information Collected and How</SectionTitle>
        <Body>
          Yangsoft (the "Company") collects personal information for membership registration, service provision, and consultations. The Company avoids collecting sensitive personal information (such as race, ethnicity, beliefs, political views, or criminal records) and will obtain prior consent from users if such collection is unavoidable. Any information collected will not be used for purposes other than those disclosed to users.
        </Body>
        <Body>The personal information collected is as follows:</Body>
        <List>
          <li>Required: Name, email address, password, phone number, address</li>
          <li>Optional: Credit card information, bank account information, mobile phone information necessary for payment</li>
          <li>Collection method: Web hosting site, service contract</li>
        </List>
      </Section>

      <Divider />

      <Section>
        <SectionTitle>2. Purpose of Collection and Use</SectionTitle>
        <Body>The Company collects personal information for the following purposes:</Body>
        <List>
          <li>Service provision: Fulfilling contractual obligations related to service delivery</li>
          <li>Billing: Sending invoices, processing payments, and providing financial services</li>
        </List>
      </Section>

      <Divider />

      <Section>
        <SectionTitle>3. Consent to Collection</SectionTitle>
        <Body>
          The Company obtains consent for the collection of personal information as part of the service application process, which includes a notice regarding the collection and use of personal information and an agreement procedure. By checking the "I consent to the collection and use of personal information" box, the user is deemed to have consented to the collection.
        </Body>
      </Section>

      <Divider />

      <Section>
        <SectionTitle>4. Sharing of Personal Information</SectionTitle>
        <Body>
          The Company uses users' personal information only within the scope disclosed in Section 2 and will not share it externally without the user's prior consent. Exceptions include:
        </Body>
        <List>
          <li>When the user has given prior consent to disclosure</li>
          <li>When required by law or requested by investigative authorities under legally prescribed procedures</li>
        </List>
      </Section>

      <Divider />

      <Section>
        <SectionTitle>5. Retention and Use Period</SectionTitle>
        <Body>
          As long as the user continues to use the Company's services as a member, the Company will retain and use the user's personal information for service provision.
        </Body>
        <Body>
          Personal information will be destroyed by irreversible means once the purpose of collection and use has been fulfilled or when the user directly deletes it or withdraws membership.
        </Body>
        <Body>
          In cases of abuse of rights, defamation disputes, or requests for investigative cooperation, the Company may retain member information for up to 1 year after account termination to prevent recurrence. If retention is required by applicable laws such as the Commercial Act or the Act on Consumer Protection in Electronic Commerce, the Company will retain such information for the period prescribed by those laws.
        </Body>

        <SubTitle>a. Retention based on Company policy</SubTitle>
        <List>
          <li>Basis: Prevention of re-registration by problematic users, dispute resolution and investigation cooperation</li>
          <li>Period: 1 year after account withdrawal</li>
        </List>

        <SubTitle>b. Retention required by applicable law</SubTitle>
        <List>
          <li>Records of contracts or withdrawal of offers — Act on Consumer Protection in Electronic Commerce — 5 years</li>
          <li>Records of payment and supply of goods — Act on Consumer Protection in Electronic Commerce — 5 years</li>
          <li>Records of consumer complaints or dispute resolution — Act on Consumer Protection in Electronic Commerce — 3 years</li>
          <li>Records of identity verification — Act on Promotion of Information and Communications Network Utilization and Information Protection — 6 months</li>
          <li>Records of visits — Act on Promotion of Information and Communications Network Utilization and Information Protection — 3 months</li>
        </List>
      </Section>

      <Divider />

      <Section>
        <SectionTitle>7. Destruction Procedures and Methods</SectionTitle>
        <Body>
          Users may view or modify their registered personal information at any time and may request account withdrawal. After the purpose of collection has been fulfilled, personal information is moved to a separate database (or separate physical filing system for paper records) and destroyed after a designated period pursuant to internal policies and applicable laws.
        </Body>

        <SubTitle>Destruction procedure</SubTitle>
        <Body>
          Information entered by users is moved to a separate database after its purpose has been fulfilled and stored for a designated period in accordance with internal policies and applicable laws before being destroyed. Such personal information is not used for any purpose other than retention as permitted by law.
        </Body>

        <SubTitle>Destruction method</SubTitle>
        <Body>
          Personal information printed on paper is destroyed by shredding or incineration. Electronically stored personal information is deleted using technical methods that render recovery impossible.
        </Body>
      </Section>

      <Divider />

      <Section>
        <SectionTitle>8. Rights of Users and Legal Representatives</SectionTitle>
        <Body>
          Users and their legal representatives may view or modify their registered personal information at any time, and may request account withdrawal.
        </Body>
        <Body>
          To view or modify personal information, users may log in through "Edit Profile" on the site. Alternatively, users may contact the Privacy Officer in writing, by phone, or by email, and the Company will take action without delay.
        </Body>
        <Body>
          If a user requests correction of an error, the Company will not use or provide the personal information until the correction is complete. If inaccurate information has already been provided to a third party, the Company will promptly notify the third party of the correction.
        </Body>
        <Body>
          Users have the right to request access to, correction/deletion of, and suspension of processing of their personal information under applicable law. The Company will respond within 10 days. Requests may be submitted through the following contact:
        </Body>
        <List>
          <li>Officer in charge: Taeseok Yang</li>
        </List>
      </Section>

      <Divider />

      <Section>
        <SectionTitle>9. Cookies and Tracking Technologies</SectionTitle>
        <Body>
          Cookies are small data files sent from an HTTP server to the user's browser and stored on the user's computer. The Company uses cookies to understand browser types and service usage patterns in order to provide more convenient and personalized services.
        </Body>
        <Body>
          Users have a choice regarding cookies. Through the options in your web browser, you may allow all cookies, confirm each time a cookie is stored, or refuse all cookies. Note that refusing cookies will prevent access to services that require login.
        </Body>
      </Section>

      <Divider />

      <Section>
        <SectionTitle>10. Technical and Administrative Security Measures</SectionTitle>
        <Body>
          Users' personal information is protected by passwords. Only the account holder can know the password, and only the account holder can confirm or change personal information. Never share your password with others. After use, log out and close the browser, especially on shared or public computers.
        </Body>

        <SubTitle>Password encryption</SubTitle>
        <Body>
          Member passwords are encrypted for storage and management. Only the account holder knows the password, and only the account holder can confirm or modify personal information.
        </Body>

        <SubTitle>Measures against hacking and malware</SubTitle>
        <Body>
          The Company makes every effort to prevent the leakage or damage of member personal information through hacking or computer viruses. Data is regularly backed up, and the latest antivirus programs are used to prevent leakage or damage to user information. Encrypted communications are used for secure network transmission, and intrusion prevention systems control unauthorized external access.
        </Body>
      </Section>

      <Divider />

      <Section>
        <SectionTitle>11. Privacy Officer</SectionTitle>
        <Body>
          If you have any comments regarding this Privacy Policy, please contact us by email and we will respond promptly. The Privacy Officer is as follows:
        </Body>
        <List>
          <li>Privacy Officer: Taeseok Yang</li>
        </List>
        <Body>For other personal information infringement reports or consultations, please contact:</Body>
        <List>
          <li>Personal Information Infringement Report Center — (no area code) 118 — privacy.kisa.or.kr</li>
          <li>Supreme Prosecutors' Office Cyber Crime Investigation Division — 02-3480-3571 — cybercid@spo.go.kr</li>
          <li>National Police Agency Cyber Terror Response Center — (no area code) 182 — ctrc.go.kr</li>
        </List>
      </Section>

      <Divider />

      <Section>
        <SectionTitle>12. Children's Privacy</SectionTitle>
        <Body>
          The Company does not, as a rule, collect personal information from children under the age of 14.
        </Body>
      </Section>

      <Divider />

      <Section>
        <SectionTitle>13. Amendments</SectionTitle>
        <Body>
          Any modifications or changes to this Privacy Policy will be announced on the site at least 7 days in advance.
        </Body>
      </Section>

      <DocFooter>
        <Body>This Privacy Policy took effect on February 27, 2025.</Body>
      </DocFooter>
    </Wrap>
  );
};

export default PrivacyPolicyContent;
