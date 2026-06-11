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

const Chapter = styled.div`
  margin-bottom: 52px;
`;

const ChapterTitle = styled.h2`
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #BBBBBB;
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 1px solid #F0F0F0;
`;

const Article = styled.div`
  margin-bottom: 28px;
`;

const ArticleTitle = styled.h3`
  font-size: 13px;
  font-weight: 500;
  color: #111111;
  margin-bottom: 8px;
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

  & p {
    margin: 2px 0;
    font-size: 13px;
    color: #555555;
    line-height: 1.9;
  }
`;

const DocFooter = styled.div`
  padding: 32px 0 72px;
  border-top: 1px solid #EEEEEE;
  margin-top: 16px;
`;

const TermsOfServiceContent = () => {
  return (
    <Wrap>
      <PageHeader>
        <PageTitle>Terms of Service</PageTitle>
        <PageMeta>Effective date: February 27, 2025</PageMeta>
      </PageHeader>

      <Chapter>
        <ChapterTitle>Chapter 1 — General Provisions</ChapterTitle>

        <Article>
          <ArticleTitle>Article 1 (Purpose)</ArticleTitle>
          <Body>
            These terms govern the conditions and procedures for using the rental-type internet newspaper service (the "Service") provided by Yangsoft (the "Company").
          </Body>
        </Article>

        <Article>
          <ArticleTitle>Article 2 (Definitions)</ArticleTitle>
          <Body>The terms used in these terms are defined as follows:</Body>
          <List>
            <li>Internet Newspaper Service: A program and hosting service installed by the Company that allows customers to operate an internet newspaper using content such as articles, photos, and videos.</li>
            <li>Hosting: A basic or additional service in which the Company provides customers with a designated space on its servers.</li>
            <li>Administrator: A member who has joined as a member to use the Service and operates an internet newspaper or uses the various services provided by the Company, and who meets the qualifications set by the Company.</li>
            <li>Admin Mode: A feature provided by the Company to administrators for managing articles, members, pop-ups, banners, etc. on the internet newspaper.</li>
            <li>Server: Management software or hardware configured to allow customers to operate an internet newspaper.</li>
            <li>Customer: A person who has entered into a service agreement with the Company and receives services.</li>
            <li>Service Agreement: A contract entered into between the Company and the customer regarding the use of the Service.</li>
            <li>Service Fee: All service costs charged by the Company to the customer in order to fulfill this service agreement, including regular contracted costs and irregular additional costs based on actual expenses for additional services performed by mutual agreement.</li>
            <li>Additional Service: A service provided in addition to the basic service to help customers smoothly use and operate the Service.</li>
            <li>Mobile Web: A free additional service that displays content produced using the Service on mobile devices.</li>
            <li>Network Advertising: Advertising that is simultaneously exposed on specific advertising positions across affiliated media, either through contextual or site targeting, or retargeted to customers who visited the advertiser's website.</li>
            <li>Backup: A service that stores duplicate copies of data on a separate storage device to protect against data loss due to storage device failure, unauthorized intrusion, or customer error.</li>
            <li>Security Service: An additional service that protects against unauthorized access or service disruption; customers may need to enter into a separate contract with a security service provider when necessary.</li>
          </List>
        </Article>

        <Article>
          <ArticleTitle>Article 3 (Effect and Amendment of Terms)</ArticleTitle>
          <List>
            <li>The Company may amend these terms within the scope permitted by applicable law if there is a reasonable cause.</li>
            <li>If the Company amends the terms, it will post the effective date and reason for amendment on the Company's homepage at least 7 days before the effective date.</li>
            <li>If a customer does not agree to the amended terms, they may request termination of the service agreement. If the customer continues to use the service without objecting after 7 days from the effective date of the amended terms, the customer is deemed to have consented to the changes.</li>
          </List>
        </Article>

        <Article>
          <ArticleTitle>Article 4 (Rules Outside These Terms)</ArticleTitle>
          <Body>
            Matters not covered by these terms and the interpretation of these terms shall be governed by the Act on Consumer Protection in Electronic Commerce, the Act on Regulation of Terms and Conditions, and other applicable laws and regulations.
          </Body>
        </Article>
      </Chapter>

      <Chapter>
        <ChapterTitle>Chapter 2 — Service Agreement</ChapterTitle>

        <Article>
          <ArticleTitle>Article 5 (Types and Changes of Service)</ArticleTitle>
          <List>
            <li>Customers apply for the service through a consultation request, during which the Company provides detailed information on service types, content, pricing, and other relevant details.</li>
            <li>The Company will post any new or changed service types on its homepage. For existing customers, notice will be given via the homepage or by email. If no objection is raised within 7 days of such posting or notice, the customer is deemed to have agreed to the changes.</li>
          </List>
        </Article>

        <Article>
          <ArticleTitle>Article 6 (Application for Use and Agreement to Terms)</ArticleTitle>
          <List>
            <li>Applications are submitted offline using a Company-prescribed form after the customer agrees to these terms. The Company may request supporting documents. Agreement to these terms is indicated by checking the "I agree to the Terms of Service" box on the service application form.</li>
            <li>Customers must provide their real name and accurate information when applying. Customers who violate this may not receive legal protection.</li>
            <li>Personal information provided at the time of application is protected in accordance with applicable laws and the Company's privacy policy.</li>
            <li>Applications are not accepted from individuals under the age of 14.</li>
          </List>
        </Article>

        <Article>
          <ArticleTitle>Article 7 (Approval of Application)</ArticleTitle>
          <List>
            <li>The Company will approve service applications in order of receipt, barring special circumstances, when customers have accurately completed the information required under Article 6.</li>
            <li>The Company may reject applications in the following cases:
              <p>a. Applications submitted under a false name</p>
              <p>b. Applications submitted using another person's identity</p>
              <p>c. Applications containing false information</p>
              <p>d. Cases where approval is judged to interfere with other customers' service operations</p>
              <p>e. Cases where the applicant has outstanding unpaid fees from prior use</p>
            </li>
            <li>The Company may defer approval in the following cases:
              <p>a. When approval is difficult due to internal Company circumstances</p>
              <p>b. When the applicant is a minor as defined by applicable law</p>
            </li>
          </List>
        </Article>
      </Chapter>

      <Chapter>
        <ChapterTitle>Chapter 3 — Service Installation</ChapterTitle>

        <Article>
          <ArticleTitle>Article 8 (Service Installation)</ArticleTitle>
          <List>
            <li>After confirming receipt of payment, the Company will notify the customer of the expected service activation date and request the necessary materials.</li>
            <li>Upon receipt of the submitted materials, the Company will review them and commence service installation.</li>
            <li>If the customer delays in submitting the requested materials, service activation may be delayed beyond the originally scheduled date.</li>
          </List>
        </Article>

        <Article>
          <ArticleTitle>Article 9 (Data Migration)</ArticleTitle>
          <List>
            <li>If a customer wishes to migrate a service currently used with another provider, the Company will provide a data migration service.</li>
            <li>Data migration is limited to articles; comments, member information, bulletin boards, and other programs are not included.</li>
            <li>If the customer wishes to migrate data other than articles, this may be arranged through prior consultation with the Company at an additional cost.</li>
            <li>The customer must back up the data to be migrated and deliver it to the Company.</li>
            <li>The Company will make every effort to migrate all article data, but some data may be omitted in unavoidable circumstances.</li>
          </List>
        </Article>
      </Chapter>

      <Chapter>
        <ChapterTitle>Chapter 4 — Technical Support</ChapterTitle>

        <Article>
          <ArticleTitle>Article 10 (Technical Support Procedures)</ArticleTitle>
          <List>
            <li>Customers are responsible for managing their own internet newspaper and may request technical support from the Company as needed.</li>
            <li>Technical support requests may be submitted by phone or email.</li>
            <li>After completion of technical support work, customers have 24 hours to inspect the results and request rework for any errors.</li>
            <li>The Company may charge a fee for technical support requests in accordance with its internal policies and the complexity of the work.</li>
          </List>
        </Article>

        <Article>
          <ArticleTitle>Article 11 (Program Modification)</ArticleTitle>
          <List>
            <li>As this is a rental-type solution, program modification is generally not performed.</li>
            <li>Notwithstanding the above, if a customer has compelling reasons to require program modification, the work may proceed after prior consultation with the Company.</li>
            <li>The Company may review the customer's request for program modification or development and decide whether to proceed, and will proceed after agreeing on costs and schedule.</li>
            <li>Customers are responsible for inspecting whether the developed or modified program operates normally. The Company is not responsible for any issues or errors discovered thereafter.</li>
          </List>
        </Article>
      </Chapter>

      <Chapter>
        <ChapterTitle>Chapter 5 — Additional Services</ChapterTitle>

        <Article>
          <ArticleTitle>Article 12 (Mobile Web)</ArticleTitle>
          <List>
            <li>The Company provides a mobile website as an additional service upon customer request.</li>
            <li>If a customer wishes to add custom design or features to the basic mobile website provided by the Company, costs and schedule must be agreed upon in advance.</li>
          </List>
        </Article>
      </Chapter>

      <Chapter>
        <ChapterTitle>Chapter 6 — Obligations</ChapterTitle>

        <Article>
          <ArticleTitle>Article 13 (Company's Obligations)</ArticleTitle>
          <List>
            <li>The Company must provide the service applied for by the customer in a stable and continuous manner.</li>
            <li>If a failure occurs that disrupts service operations, the Company must immediately repair or restore the service and make its best efforts to ensure stable service operation.</li>
            <li>The Company must handle legitimate complaints or requests from customers in accordance with the Company's prescribed timeframes and procedures.</li>
            <li>The Company collects and retains customers' personal information for smooth service application and operation, and shall not provide it to third parties without the customer's consent, except when required by investigative authorities under applicable law, when requested by the Korea Communications Commission, or when providing information to credit information companies due to unpaid fees.</li>
            <li>The Company shall endeavor to provide convenience to customers in all contract-related procedures, including formation, modification, and termination of service agreements.</li>
          </List>
        </Article>

        <Article>
          <ArticleTitle>Article 14 (Customer's Obligations)</ArticleTitle>
          <List>
            <li>Customers must pay the service fees set by the Company by the designated dates.</li>
            <li>Customers must not provide the Company's services to third parties without the Company's consent.</li>
            <li>Customers must not engage in any conduct that interferes with the service operations of the Company or other customers.</li>
            <li>Customers are responsible for the copyright of the information provided through their services and must not engage in any illegal activities.</li>
            <li>If any of the information provided to the Company at the time of service application changes, customers must promptly update this information through the appropriate procedures.</li>
            <li>Without the Company's explicit consent, customers may not transfer, gift, or use as collateral their service usage rights or other rights under the service agreement.</li>
            <li>Customers must comply with the obligations regarding transmission of advertising information under the Act on Promotion of Information and Communications Network Utilization and Information Protection, and with the Company's terms of service.</li>
          </List>
        </Article>

        <Article>
          <ArticleTitle>Article 15 (Domain Management)</ArticleTitle>
          <List>
            <li>The Company acts as an agent for domain connection services upon customer request.</li>
            <li>The Company shall endeavor to provide domain management convenience to prevent domain-related incidents for customers.</li>
          </List>
        </Article>

        <Article>
          <ArticleTitle>Article 16 (Intellectual Property Ownership and Prohibition of Infringement)</ArticleTitle>
          <List>
            <li>Copyright and other intellectual property rights to works created by the Company belong to the Company, and customers must not infringe on the intellectual property rights of the Company or third parties.</li>
            <li>Customers must not reproduce, transmit, publish, distribute, broadcast, or use for commercial purposes, or allow third parties to use, any information obtained through the Company's services without the Company's prior consent.</li>
          </List>
        </Article>
      </Chapter>

      <Chapter>
        <ChapterTitle>Chapter 7 — Service Use</ChapterTitle>

        <Article>
          <ArticleTitle>Article 17 (Service Provision)</ArticleTitle>
          <Body>Service is provided year-round without interruption, barring special operational or technical circumstances.</Body>
          <Body>However, the service may be temporarily suspended for scheduled maintenance or system upgrades.</Body>
        </Article>

        <Article>
          <ArticleTitle>Article 18 (Service Suspension)</ArticleTitle>
          <List>
            <li>The Company may temporarily suspend service without notice due to urgent system maintenance, expansion, or replacement.</li>
            <li>The Company may suspend service in the following cases. In such cases, the Company will notify customers by email or through a notice posted on the Company's homepage:
              <p>a. Unavoidable server maintenance or construction work</p>
              <p>b. Network line failures</p>
              <p>c. Mechanical failure due to natural disasters or national emergencies</p>
              <p>d. Accidents caused by hacking or distributed denial-of-service (DDoS) attacks</p>
            </li>
            <li>In cases of service suspension beyond the Company's control (e.g., disk failures or system downtime without administrator negligence), prior notice is not possible. No notice will be given in cases of system suspension caused by intentional or negligent acts of third parties.</li>
          </List>
        </Article>
      </Chapter>

      <Chapter>
        <ChapterTitle>Chapter 8 — Use Restrictions</ChapterTitle>

        <Article>
          <ArticleTitle>Article 19 (Restrictions on Use)</ArticleTitle>
          <Body>The Company may suspend network access to the operating site and request resolution if a customer's service use falls under any of the following:</Body>
          <List>
            <li>Violation of the customer's obligations under Article 16</li>
            <li>Daily traffic exceeding the usage limits specified for the applicable service type</li>
            <li>Serious interference with the use of Company-provided equipment</li>
          </List>
        </Article>

        <Article>
          <ArticleTitle>Article 20 (Lifting of Use Restrictions)</ArticleTitle>
          <Body>
            If a customer whose service has been restricted under Article 19 resolves the violation, the Company will lift the service restriction in accordance with the applicable procedures.
          </Body>
        </Article>
      </Chapter>

      <Chapter>
        <ChapterTitle>Chapter 9 — Contract Changes and Renewal</ChapterTitle>

        <Article>
          <ArticleTitle>Article 21 (Contract Changes)</ArticleTitle>
          <List>
            <li>Customers must promptly apply for changes through the applicable procedures when any of the following changes occur:
              <p>a. Changes to business registration number, trade name, representative, address, or administrator</p>
              <p>b. Changes to contract type (product, service type, contract period, or purpose of use)</p>
            </li>
            <li>If a customer's usage exceeds the contracted service standards, the Company may modify the contract terms after notifying the customer at the registered contact information.</li>
            <li>If cost increases arise before the contract period ends, the Company may increase fees with the customer's consent. As this constitutes a Company-initiated change, the customer may unilaterally terminate without paying any early termination fee if they cannot agree to the new fees.</li>
            <li>The Company may restrict change requests if the customer has outstanding unpaid service fees.</li>
            <li>The Company may restrict change requests if there is no available capacity, if the service cannot technically be provided, or if the Company's service policy changes.</li>
            <li>Contract changes require the existing contract to have been maintained for at least 3 months. If current usage exceeds the standards of the new product, the Company may refuse the change request.</li>
          </List>
        </Article>

        <Article>
          <ArticleTitle>Article 22 (Contract Renewal)</ArticleTitle>
          <Body>
            The Company and the customer may mutually agree on the service agreement term. If neither party expresses an intent not to renew before the contract expiration date, the contract is deemed to be automatically renewed under the same terms.
          </Body>
        </Article>
      </Chapter>

      <Chapter>
        <ChapterTitle>Chapter 10 — Contract Termination</ChapterTitle>

        <Article>
          <ArticleTitle>Article 23 (Contract Termination)</ArticleTitle>
          <List>
            <li>To terminate the service agreement, customers must notify the Company at least 30 days in advance following the Company's prescribed procedures and method.</li>
            <li>If there are any unpaid service fees, customers must complete payment before the requested termination date.</li>
          </List>
        </Article>

        <Article>
          <ArticleTitle>Article 24 (Data of Terminated Customers)</ArticleTitle>
          <List>
            <li>Upon termination of the service agreement, the Company will back up the data and send it to the customer by email.</li>
            <li>If the customer has outstanding unpaid fees, the Company may defer this process.</li>
            <li>The Company is not responsible for recovering data deleted from the server due to contract termination.</li>
          </List>
        </Article>

        <Article>
          <ArticleTitle>Article 25 (Compulsory Termination)</ArticleTitle>
          <Body>The Company may terminate the service agreement on its own authority in the following cases:</Body>
          <Body>If a customer whose service has been restricted under Article 21 does not remedy the situation within 7 days:</Body>
          <List>
            <li>If the information provided on the service application is false or the service was applied for using a third party's identity</li>
            <li>If the customer intentionally interferes with the Company's service operations and causes damage</li>
            <li>If the customer uses the service for purposes other than those for which the Company provides it</li>
          </List>
        </Article>
      </Chapter>

      <Chapter>
        <ChapterTitle>Chapter 11 — Service Fees</ChapterTitle>

        <Article>
          <ArticleTitle>Article 26 (General Principles of Service Fees)</ArticleTitle>
          <List>
            <li>Details of service fees and any changes thereto are posted on the Company's homepage in accordance with Article 5.</li>
            <li>Service fee types are as follows and are collected on a postpaid basis:
              <p>a. Setup fee: A fee paid when applying for service activation, reinstallation, or modification</p>
              <p>b. Monthly fee: A fee paid monthly for service provision and maintenance</p>
              <p>c. Additional fee: A fee paid when usage exceeds service standards or when applying for additional services</p>
            </li>
          </List>
        </Article>

        <Article>
          <ArticleTitle>Article 27 (Payment of Service Fees)</ArticleTitle>
          <List>
            <li>If a customer pays fees under a name that is difficult for the Company to identify, the customer must notify the Company. The Company is not responsible for any service suspension resulting from the customer's failure to provide such notification.</li>
            <li>Customers must pay service fees by the designated due date. Failure to do so may result in service restriction under Article 21 or termination under Article 27.</li>
          </List>
        </Article>

        <Article>
          <ArticleTitle>Article 28 (Settlement of Service Fees)</ArticleTitle>
          <List>
            <li>Service fee settlement is based on the service activation date, and payment dates and amounts are calculated according to the Company's designated payment cycle.</li>
            <li>If the contract is terminated mid-term, the service fees paid through the end of the termination month will not be refunded. However, fees prepaid for periods after the termination month will be refunded.</li>
          </List>
        </Article>

        <Article>
          <ArticleTitle>Article 29 (Overdue Fee Management)</ArticleTitle>
          <List>
            <li>If a customer has not paid service fees after the service period expires, the Company may restrict service. If payment is not made within 7 days of restriction, the Company may terminate the service agreement under Article 27.</li>
            <li>The Company may refer overdue fees to a credit information company for collection.</li>
          </List>
        </Article>

        <Article>
          <ArticleTitle>Article 30 (Penalty Fees)</ArticleTitle>
          <List>
            <li>When a dedicated server is configured at a customer's request, the mandatory usage period is one year.</li>
            <li>If the customer terminates the contract early during the mandatory usage period, a penalty equal to 30% of the remaining period's fees must be paid. If the customer refuses to pay, the Company may dispose of the server data and the customer may not object.</li>
          </List>
        </Article>
      </Chapter>

      <Chapter>
        <ChapterTitle>Chapter 12 — Ownership</ChapterTitle>

        <Article>
          <ArticleTitle>Article 31 (Ownership)</ArticleTitle>
          <List>
            <li>Ownership of articles, photos, videos, and posting data published by customers on their internet newspapers belongs to the customer.</li>
            <li>Ownership of deliverables produced through program development or maintenance services belongs to the Company.</li>
          </List>
        </Article>

        <Article>
          <ArticleTitle>Article 32 (License)</ArticleTitle>
          <List>
            <li>Customers have a license to use the works provided by the Company through the service.</li>
            <li>This license is non-exclusive, and the Company may provide the same services to other customers.</li>
          </List>
        </Article>
      </Chapter>

      <Chapter>
        <ChapterTitle>Chapter 13 — Liability, Indemnification and Dispute Resolution</ChapterTitle>

        <Article>
          <ArticleTitle>Article 33 (Liability for Damages)</ArticleTitle>
          <Body>
            If a customer is unable to use the service due to the Company's fault, and the service is continuously unavailable for 4 or more hours from the time the customer notifies the Company (or from the time the Company became aware of the situation), the Company will compensate within 5 times the amount calculated by multiplying the average daily fee for the most recent 3 months by the ratio of the service unavailability time to 24 hours. Fractions of less than 1 hour are calculated as 1 hour.
          </Body>
        </Article>

        <Article>
          <ArticleTitle>Article 34 (Customer's Claim for Damages)</ArticleTitle>
          <List>
            <li>Claims for damages must be submitted to the Company in writing, stating the reason for the claim, the claimed amount, and the basis for calculation.</li>
            <li>Claims must be submitted within 3 months of becoming aware of the reason for the claim. Claims are also extinguished if 3 months have passed since the cause of claim arose.</li>
          </List>
        </Article>

        <Article>
          <ArticleTitle>Article 35 (Company's Claim Against Customer)</ArticleTitle>
          <Body>
            The Company may claim damages against a customer who violates the obligations set forth in Articles 16 and 18 and causes damage to the Company.
          </Body>
        </Article>

        <Article>
          <ArticleTitle>Article 36 (Indemnification)</ArticleTitle>
          <List>
            <li>The Company is not responsible for a customer's failure to receive expected benefits from the Service, or for damages arising from the use or selection of potential value or service data provided through the Service.</li>
            <li>The Company is not responsible for service disruptions caused by the customer.</li>
            <li>The Company is not responsible for the content or value of data posted, transmitted, or received by customers.</li>
            <li>The Company is not responsible for damages arising from transactions between customers or between customers and third parties through the Service.</li>
            <li>The Company is not responsible for issues arising from the use of additional or affiliated services provided free of charge.</li>
            <li>The Company has no obligation to intervene in disputes between customers and third parties arising through the Service, and is not responsible for any resulting damages.</li>
            <li>The Company is not responsible for damages arising from service suspensions described in Article 20.</li>
          </List>
        </Article>

        <Article>
          <ArticleTitle>Article 37 (Jurisdiction)</ArticleTitle>
          <Body>
            Any litigation related to these terms and the use of the Service shall be filed with the court having jurisdiction over the Company's principal place of business.
          </Body>
        </Article>
      </Chapter>

      <DocFooter>
        <Body>These terms took effect on February 27, 2025.</Body>
      </DocFooter>
    </Wrap>
  );
};

export default TermsOfServiceContent;
