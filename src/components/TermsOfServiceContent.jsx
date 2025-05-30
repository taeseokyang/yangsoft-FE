import { Container } from "./StyledComponents";
import styled from "styled-components";

const Content = styled.div`
  padding: 20px 20px;
  min-height: 500px;
  max-width: 1000px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  color : #333333;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Subtitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 10px;
`;

const TermsOfServiceContent = () => {
  return (
    <Container>
      <Content>
        <div>
          <h3 class="p-titles">제1장 총칙</h3>
          <p><strong>제1조 (목적)</strong></p>
          <p>이 약관은 양소프트(이하 ”회사”)가 제공하는 임대형 인터넷신문 서비스(이하 “서비스”)의 이용조건 및 절차에 관한 사항을 규정함을 목적으로 합니다.</p>
          <p><strong>제2조 (용어의 정의)</strong></p>
          <p>이 약관에서 사용되는 용어의 정의는 다음과 같습니다.</p>
          <ol class="privacy-list">
            <li>인터넷신문 서비스 : 고객이 기사, 사진, 영상 등의 콘텐츠를 활용하여 인터넷신문을 운영할 수 있도록 회사가 설치하는 프로그램 및 호스팅 서비스를 말합니다.</li>
            <li>호스팅 : 회사가 고객에게 서버의 일정 공간을 제공하는 기본 또는 부가서비스를 말합니다.</li>
            <li>관리자 : 서비스를 이용하고자 회원으로 가입하여 인터넷신문을 운영하거나 회사가 제공하는 각종 서비스를 이용하는 자로써 회사가 정한 일정한 자격을 충족한 회원을 의미합니다.</li>
            <li>관리자모드 : 인터넷신문에서 기사, 회원, 팝업, 배너 등을 관리할 수 있도록 회사가 고객에게 제공하는 관리자를 위한 기능을 말합니다.</li>
            <li>서버 : 고객이 인터넷신문을 운영할 수 있도록 구성한 관리 소프트웨어 또는 하드웨어를 말합니다.</li>
            <li>고객 : 회사와 이용계약을 체결하고 서비스를 받는 자를 말합니다.</li>
            <li>이용계약 : 서비스의 이용과 관련하여 회사와 고객간에 체결하는 계약을 말합니다.</li>
            <li>이용요금 : 본 서비스 계약을 수행하기 위하여 고객에게 청구하는 회사의 제반 서비스 비용으로, 계약된 정규성 경비와 추가적인 트래픽 이용료, 서버의 설치, 기술지원 등 계약서 내에 규정되어 있지는 않으나 쌍방 합의에 의하여 수행된 추가적인 서비스 업무에 대한 실비기준의 비정규성 경비를 말합니다.</li>
            <li>부가 서비스 : 고객이 서비스의 이용 및 운영을 원활하게 하기 위하여 회사에서 기본으로 제공하는 서비스 이외의 추가 제공 서비스를 말합니다.</li>
            <li>모바일웹 : 서비스를 이용해 생산한 콘텐츠를 모바일기기로 보여주는 무료 부가서비스를 말합니다.</li>
            <li>네트워크광고 : 제휴 매체의 특정 광고 위치에 동시 다발적으로 노출시키는 광고를 말합니다. 문맥 또는 사이트 타깃팅을 통해 노출되거나 광고주의 웹사이트에 방문한 고객이 제휴 매체에 접속한 경우 광고가 노출되는 리타깃팅 형태의 광고를 말합니다.</li>
            <li>백업(Backup) : 데이터 저장 장치의 고장, 불순한 침입 혹은 고객의 실수에 의한 데이터의 망실에 대비하여, 여벌의 데이터 복제본을 별도의 저장 장치에 보관하여 주는 서비스를 말합니다.</li>
            <li>보안 서비스 : 고객의 시스템에 불순한 접속자가 침입되거나 서비스 운영을 방해받지 않도록 제공하는 부가 서비스를 말하며, 필요시 고객은 보안서비스 제공 업체와 별도의 계약을 체결하여야 합니다.</li>
          </ol>

          <p><strong>제3조 (약관의 효력 및 변경)</strong></p>
          <ol class="privacy-list">
            <li>회사는 합리적인 사유가 발생할 경우 관련법령에 위배되지 않는 범위에서 이 약관을 개정할 수 있습니다.</li>
            <li>회사가 약관을 개정할 경우에는 시행일자 및 개정사유를 명시하여 현행 약관과 함께 회사의 홈페이지 초기화면에 시행일자 이전부터 7일 이상 게시합니다.</li>
            <li>고객은 변경된 약관에 동의하지 않을 경우 이용계약 해지를 요청할 수 있으며, 변경된 약관의 효력 발생일로부터 7일 이후에도 거부의사를 표시하지 아니하고 서비스를 계속 사용할 경우 약관의 변경 사항에 동의한 것으로 간주됩니다.
            </li></ol>

          <p><strong>제4조 (약관 외 준칙)</strong></p>
          <p>이 약관에서 정하지 않은 사항과 이 약관의 해석에 관하여는 전자상거래등에서의 소비자보호에 관한 법률, 약관의 규제에 관한 법률, 기타 관련 법령의 규정에 따릅니다.</p>

        </div>


        <div class="privacy-group">
          <h3 class="p-titles">제2장 이용계약</h3>
          <p><strong>제5조 (서비스의 종류 및 변경)</strong></p>
          <ol class="privacy-list">
            <li>고객은 상담 요청을 통해 이용신청을 진행 하며, 회사는 이용신청 진행 과정에서 고객에게 자세한 서비스 종류, 서비스 내용, 가격 및 기타 서비스 관련 사항 정보를 제공합니다.</li>
            <li>회사는 서비스 종류의 신설 또는 기타 변경 사항에 대해 홈페이지를 통하여 게시하며, 이미 서비스를 이용 중인 고객에 대해서는 회사의 홈페이지에 게시하거나 고객의 전자우편 주소를 통해서 통보하며 게시 또는 통보 후 7일 이내에 이의를 제기하지 않으면 고객이 변경사항에 대해서 동의한 것으로 간주합니다.</li>
          </ol>

          <p><strong>제6조 (이용신청 및 약관 동의)</strong></p>
          <ol class="privacy-list">
            <li>이용신청은 고객이 이 약관에 동의하고 회사가 정한 신청양식을 오프라인에서 작성 후 신청하는 것으로 이루어지며, 회사는 고객에게 구비서류 제출을 요구할 수 있습니다. 이 이용약관에 대한 동의는 이용신청 시 계약서의 “서비스 이용약관에 동의합니다” 항목에 체크함로써 의사표시를 합니다.</li>
            <li>고객은 이용신청 시 실명과 실제정보를 작성하여야 하며 이를 위반한 고객은 법적인 보호를 받을 수 없습니다.</li>
            <li>고객이 이용신청 시 제공한 개인정보는 관계법령 및 회사의 개인정보보호정책에 따라 보호를 받습니다.</li>
            <li>고객의 연령이 만 14세 미만의 아동인 경우 서비스 신청이 불가능 합니다.</li>
          </ol>

          <p><strong>제7조 (이용 신청 승낙)</strong></p>
          <ol class="privacy-list">
            <li>회사는 고객이 제6조에서 정한 사항을 정확히 기재하여 이용 신청을 하였을 때 특별한 사정이 없는 한 접수 순서에 따라서 이용 신청을 승낙합니다.</li>
            <li>회사는 다음 각호에 대해서는 서비스 신청을 거절할 수 있습니다.
              <p>가. 비 실명으로 서비스를 신청하는 경우</p>
              <p>나. 타인 명의를 사용하여 서비스를 신청한 경우</p>
              <p>다. 신청서의 내용을 허위로 기재한 경우</p>
              <p>라. 타 고객의 서비스 운영에 지장이 있을 것으로 판단되는 경우</p>
              <p>마. 회사의 과거 서비스 이용요금을 체납하고 있는 경우</p>
            </li>
            <li>회사는 다음 각호의 경우에는 승낙을 유보할 수 있습니다.
              <p>가. 회사 사정으로 이용 승낙이 곤란한 경우</p>
              <p>나. 이용신청 고객이 관계법령에서 규정하는 미성년자일 경우</p>
            </li>
          </ol>
        </div>

        <div class="privacy-group">
          <h3 class="p-titles">제3장 서비스 설치</h3>
          <p><strong>제8조 (서비스의 설치)</strong></p>
          <ol class="privacy-list">
            <li>회사는 고객의 입금을 확인한 후 서비스 개통 예정일 안내와 필요한 준비자료를 요청합니다.</li>
            <li>고객이 준비한 자료를 제출하면 회사는 그 내용을 확인한 후 서비스 설치 작업에 착수 합니다.</li>
            <li>고객이 회사가 요청한 자료제출을 지연할 경우 서비스 개통은 최초 예정일보다 지연될 수 있습니다.</li>
          </ol>

          <p><strong>제9조 (데이터 이관)</strong></p>
          <ol class="privacy-list">
            <li>고객이 타사에서 이용중인 서비스를 이관하는 경우 회사는 데이터 이관 서비스를 제공합니다.</li>
            <li>데이터 이관 범위는 기사로 한정되며, 댓글, 회원정보, 게시판, 기타 프로그램 등은 포함되지 않습니다.</li>
            <li>고객이 기사 이외의 데이터 이관을 희망하는 경우, 회사와 사전협의를 통해 작업을 진행하실 수 있으며 별도의 비용이 청구 됩니다.</li>
            <li>고객은 이관하고자하는 데이터를 백업받아 회사에 전달해야 합니다.</li>
            <li>회사는 데이터 이관시 모든 기사데이터의 변환을 위해 노력하지만, 부득이한 경우 일부데이터가 누락 될 수 있습니다.</li>
          </ol>
        </div>

        <div class="privacy-group">
          <h3 class="p-titles">제4장 기술지원</h3>
          <p><strong>제10조 (기술 지원 절차)</strong></p>
          <ol class="privacy-list">
            <li>인터넷신문은 고객의 책임하에 관리하여야 하며 필요시 회사에 기술지원요청을 할 수 있습니다.</li>
            <li>고객은 전화나 이메일 등의 방법으로 기술지원을 신청할 수 있습니다.</li>
            <li>고객은 기술 지원에 대한 작업 완료 후 24시간 이내에 처리결과를 검수하여 오류에 대한 재작업 요구를 할 수 있습니다.</li>
            <li>회사는 고객의 기술지원 요청 시 내부정책과 작업의 난이도에 따라 비용을 청구할 수 있습니다.</li>
          </ol>

          <p><strong>제11조 (프로그램의 수정)</strong></p>
          <ol class="privacy-list">
            <li>회사에서 제공하는 서비스는 임대형 솔루션이므로 수정하지 않는 것을 원칙으로 합니다.</li>
            <li>전항에도 불구하고 고객의 부득이한 사유로 프로그램의 수정이 필요한 경우 회사와 사전 협의하여 작업을 진행할 수 있습니다.</li>
            <li>회사는 고객의 프로그램 수정 및 개발 요청에 대해 그 내용을 검토하여 작업 진행여부를 결정할 수 있으며, 이에 따른 비용과 일정을 협의 한 후 진행합니다.</li>
            <li>고객은 프로그램의 개발 또는 수정 작업 후 정상 작동 여부에 대한 검수 의무가 있으며, 이후 발견되는 장애나 오류에 따른 손해에 대해서 회사는 책임지지 않습니다.</li>
          </ol>
        </div>

        <div class="privacy-group">
          <h3 class="p-titles">제5장 부가서비스</h3>
          <p><strong>제12조 (모바일웹)</strong></p>
          <ol class="privacy-list">
            <li>회사는 고객이 요청하는 경우 모바일 웹사이트를 부가 서비스로 제공합니다.</li>
            <li>고객은 회사가 기본 제공하는 모바일웹 사이트에 별도의 디자인이나 기능을 추가하고자하는 경우 사전에 비용과 일정을 협의해야 합니다.</li>
          </ol>
        </div>

        <div class="privacy-group">
          <h3 class="p-titles">제6장 의 무</h3>
          <p><strong>제13조 (회사의 의무)</strong></p>
          <ol class="privacy-list">
            <li>회사는 고객이 신청한 서비스를 안정적이고 지속적으로 제공해야 합니다.</li>
            <li>회사는 서비스 운영에 지장이 되는 장애가 발생했을 경우 이를 즉시 수리 또는 복구해야 하며, 안정적인 서비스 운영을 위해 최선을 다해야 합니다.</li>
            <li>회사는 고객이 정당하게 요구하는 의견이나 불만에 대해서 회사가 정한 기간과 절차에 따라 처리해야 합니다.</li>
            <li>회사는 원활한 서비스 신청 및 운영을 위해 고객의 개인정보를 수집하여 보관하며 고객의 허락없이는 제3자에게 이를 제공하지 않습니다. 다만, 관계법령에 의한 수사상의 목적으로 관계기관으로부터 요구받은 경우나 방송통신위원회의 요청이 있는 경우, 회사의 이용요금을 체납하여 신용정보사업자 또는 신용정보집중기관에 제공하는 경우는 예외로 합니다.</li>
            <li>회사는 이용계약의 체결, 계약사항의 변경 및 해지 등 고객과의 계약관련 절차 및 내용 등에 있어 고객에게 편의를 제공하도록 노력합니다.</li>
          </ol>

          <p><strong>제14조 (고객의 의무)</strong></p>
          <ol class="privacy-list">
            <li>고객은 회사가 정한 서비스 이용요금을 지정된 일자에 납입할 의무가 있습니다.</li>
            <li>고객은 회사의 동의없이 회사가 제공하는 서비스를 제3자에게 제공해서는 안 됩니다.</li>
            <li>고객은 회사와 타 고객의 서비스 운영에 방해가 되는 행위를 하지 않아야 합니다.</li>
            <li>고객은 운영하는 서비스를 통해 제공하는 정보의 저작권에 대해 책임을 지고 불법적인 행위를 하지 않아야 합니다.</li>
            <li>고객은 서비스 신청 시 회사에 제공한 정보에 변경내용이 발생했을 경우, 해당절차를 거쳐 빠른 시일 내에 수정, 보완해야 합니다.</li>
            <li>고객은 회사의 명시적 동의가 없는 한 서비스의 이용권한, 기타 이용계약상의 지위를 타인에게 양도하거나 증여할 수 없으며 이를 담보로 제공할 수 없습니다.</li>
            <li>고객은 정보통신망이용촉진및정보보호등에관한법률의 광고성 정보 전송 시 의무사항 및 회사의 이용약관을 준수하여야 합니다.</li>
          </ol>

          <p><strong>제15조 (도메인 관리)</strong></p>
          <ol class="privacy-list">
            <li>회사는 고객의 신청에 의하여 도메인 연결 업무를 대행합니다.</li>
            <li>회사는 고객의 도메인 관련사고를 예방하기 위하여 도메인 관리를 위한 편의를 제공하도록 노력합니다.</li>
          </ol>

          <p><strong>제16조 (지식 재산권의 귀속 및 침해 금지)</strong></p>
          <ol class="privacy-list">
            <li>회사가 작성한 저작물에 대한 저작권 기타 지식 재산권은 회사에 귀속하며, 고객은 회사 및 제3자의 지식 재산권을 침해하여서는 안 됩니다.</li>
            <li>고객은 회사의 서비스를 이용하여 얻은 정보를 회사의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.</li>
          </ol>
        </div>

        <div class="privacy-group">
          <h3 class="p-titles">제7장 이용</h3>
          <p><strong>제17조 (서비스의 제공)</strong></p>
          <p>서비스 이용은 회사의 업무상 또는 기술상 특별한 지장이 없는 한 연중 무휴 제공을 원칙으로 합니다.</p>
          <p>단, 정기점검이나 시스템의 업그레이드가 필요한 경우 서비스를 일시 중단할 수 있습니다.</p>

          <p><strong>제18조 (서비스의 중단)</strong></p>
          <ol class="privacy-list">
            <li>회사는 긴급한 시스템 점검, 증설, 교체 등 부득이한 사유로 인하여 예고없이 일시적으로 서비스를 중단할 수 있습니다.</li>
            <li>회사는 다음 각 호의 경우에 서비스 제공을 일시 중단할 수 있습니다. 서비스 중단이 발생할 경우 회사는 고객에게 이러한 사실을 전자우편 등의 방법으로 통보하며, 회사가 운영하는 홈페이지를 통하여 게시하는 것으로 대신할 수 있습니다.
              <p>가. 서버 설비의 보수 혹은 공사상 불가피한 경우</p>
              <p>나. 전용회선 경로상의 장애가 발생한 경우</p>
              <p>다. 천재지변, 국가비상사태 등의 사유로 인하여 기계적인 작동불능이 발생한 경우</p>
              <p>라. 해커에 의한 해킹 또는 분산서비스거부공격(DDoS) 등에 의한 사고</p>
            </li>
            <li>회사는 회사가 통제할 수 없는 사유로 인한 서비스 중단(시스템 관리자의 고의나 과실이 없는 디스크장애, 시스템 다운 등)의 경우, 사전통지가 불가능하며 타인의 고의, 또는 과실로 인한 시스템 중단 등의 경우에는 통지하지 않습니다.</li>
          </ol>
        </div>

        <div class="privacy-group">
          <h3 class="p-titles">제8장 이용 제한</h3>
          <p><strong>제19조 (이용의 제한)</strong></p>
          <p>회사는 고객의 서비스 이용 내용이 다음 각 호에 해당할 경우, 운영 중인 사이트의 네트워크 접속을 중지하고 고객에게 이의 해소를 요구할 수 있습니다.</p>

          <ol class="privacy-list">
            <li>제16조 규정에 의한 고객의 의무를 위반한 경우</li>
            <li>1일 트래픽이 해당 서비스 종류에 명시된 사용범위를 초과하는 경우</li>
            <li>회사가 제공하는 장비의 이용에 중대한 지장을 초래한 경우</li>
          </ol>

          <p><strong>제20조 (이용제한 해제)</strong></p>
          <p>회사는 제21조에 의하여 서비스가 제한된 고객이 그 위반행위를 해소할 경우에는 관련 절차에 따라 서비스 이용제한을 해제합니다.</p>
        </div>

        <div class="privacy-group">
          <h3 class="p-titles">제9장 계약변경 및 갱신</h3>
          <p><strong>제21조(계약사항의 변경)</strong></p>
          <ol class="privacy-list">
            <li>고객은 서비스 이용계약 내용 중 다음에 해당하는 변경 사유가 발생한 즉시 관련 절차에 따라 변경 신청해야 하며 이와 관련한 정보 변경의 지연으로 인한 문제 발생 시 그 책임은 고객에게 있습니다.
              <p>가. 고객의 사업자번호, 상호, 대표자, 주소, 관리자 등의 변경이 발생한 경우</p>
              <p>나. 계약 종류(상품 및 회선의 종류, 이용계약기간, 이용목적 등)의 변경</p>
            </li>
            <li>고객이 계약된 서비스의 기준을 초과하여 이용하는 경우, 회사는 등록되어 있는 고객의 연락처로 사실 통지 후 계약사항을 변경할 수 있습니다.</li>
            <li>회사는 계약 기간 이전이라 하더라도 원가의 과도한 상승 요인이 발생할 경우 고객의 동의를 얻어 이용료를 인상할 수 있습니다. 이는 회사의 귀책사유이므로 고객이 변경된 이용료에 동의할 수 없을 경우, 고객은 계약 기간과 관련한 위약 수수료를 지급하지 않고도 일방적으로 해지할 수 있습니다.</li>
            <li>고객이 회사가 청구한 서비스 이용 요금을 체납하고 있는 경우, 회사는 변경 신청을 제한할 수 있습니다.</li>
            <li>설비의 여유가 없거나, 기술상 서비스 제공이 어렵거나 회사의 서비스 정책이 변경되는 경우에 회사는 변경 신청을 제한할 수 있습니다.</li>
            <li>고객이 계약상품을 변경하고자 하는 경우에는 기존계약을 과거 3개월 이상 유지한 경우에 가능하며, 현재의 서비스 사용량이 변경하고자하는 상품 기준을 초과하는 경우 회사는 계약변경 요청을 거부할 수 있습니다.</li>
          </ol>

          <p><strong>제22조(계약의 갱신)</strong></p>
          <p>회사와 고객은 합의하여 서비스 이용계약의 기간을 정할 수 있으며 고객 또는 회사가 계약기간 만료 전일까지 이용계약을 갱신하지 않는다는 의사표시가 없으면 동일한 조건으로 이용계약기간이 연장되는 것으로 간주 합니다.</p>
        </div>

        <div class="privacy-group">
          <h3 class="p-titles">제10장 계약해지</h3>
          <p><strong>제23조(계약의 해지)</strong></p>
          <ol class="privacy-list">
            <li>고객이 이용 계약을 해지하고자 할 경우, 최소 30일 이전에 회사에서 안내한 절차와 방식에 따라 통보해야 합니다.</li>
            <li>고객은 미납 이용 요금이 있는 경우, 해지 희망일 전에 회사에 미납요금 지불을 완료하여야 합니다.</li>
          </ol>

          <p><strong>제24조 (해지 고객의 데이터)</strong></p>
          <ol class="privacy-list">
            <li>고객이 서비스 이용 계약을 해지하는 경우, 회사는 데이터를 백업하여 이메일로 전송합니다.</li>
            <li>고객이 서비스 이용 요금의 연체가 있는 경우, 회사는 전항의 작업을 보류할 수 있습니다.</li>
            <li>계약 해지로 인해 서버에서 삭제한 데이터에 대해 회사는 복구의 책임이 없습니다.</li>
          </ol>

          <p><strong>제25조 (직권해지)</strong></p>
          <p>회사는 고객의 서비스 이용 내용이 다음 각호에 해당할 경우 서비스 이용 계약을 직권 해지할 수 있습니다.</p>

          <p><strong class="subs">제21조 규정에 따라 이용 제한이 된 고객이 7일 이내에 이를 시정하지 않을 경우</strong></p>
          <ol class="privacy-list">
            <li>이용 신청서에 기재한 내용이 허위이거나 제3자 명의로 서비스를 신청한 경우</li>
            <li>회사의 서비스 운영을 고의로 방해하여 손해를 입힌 경우</li>
            <li>회사의 서비스 제공 목적 외의 용도로 서비스를 이용하는 경우</li>
          </ol>
        </div>

        <div class="privacy-group">
          <h3 class="p-titles">제11장 이용요금</h3>
          <p><strong>제26조(이용요금의 알반원칙)</strong></p>
          <ol class="privacy-list">
            <li>서비스 이용요금의 세부 내역 및 그 변경사항은 제5조에 따라 회사의 홈페이지에 명기합니다.</li>
            <li>고객이 납부하여야 하는 서비스 이용 요금의 종류는 다음 각호와 같으며 후납제로 운영됩니다.
              <p>가. 셋팅요금 : 서비스 개통, 재설치, 변경을 신청하는 경우에 지불하는 요금</p>
              <p>나. 월 이용요금 : 서비스 제공 및 유지보수를 위해 매월 지불하는 요금</p>
              <p>다. 추가요금 : 서비스 기준을 초과하거나 별도의 부가 서비스 신청할 경우 지불하는 요금</p>
            </li>
          </ol>

          <p><strong>제27조(이용요금의 납부)</strong></p>
          <ol class="privacy-list">
            <li>고객은 회사가 인지하기 어려운 이름으로 이용요금을 납부하는 경우, 이에 대해 회사에 통보할 의무가 있습니다. 회사가 인지하기 어려운 이름의 납부에 대한 통지를 하지 않음으로 인해 발생하는 서비스 중단 등의 불이익에 대해 회사는 책임을 지지 않습니다.</li>
            <li>고객은 정해진 납부일자에 이용요금을 납부해야 합니다. 이를 납부하지 못할 경우에는 제21조에 따른 서비스 이용제한 또는 제27조에 의거 이용계약이 해지 될 수 있습니다.</li>
          </ol>

          <p><strong>제28조(이용요금의 정산)</strong></p>
          <ol class="privacy-list">
            <li>서비스 이용요금의 정산은 서비스개통일을 기준으로 하고, 회사가 정하고 있는 납입주기에 따라서 납입일자와 납입금액을 산정합니다.</li>
            <li>이용중인 계약을 중도에 해지신청하는 경우 해당월의 말까지 납부된 서비스의 사용금액을 환불하지 않습니다. 단, 해지신청 월 이후의 비용이 미리 납부되어 있는 경우 그 금액은 환불 합니다.</li>
          </ol>

          <p><strong>제29조(연체요금 관리)</strong></p>
          <ol class="privacy-list">
            <li>고객이 서비스 기간 만료일 경과 후에도 이용요금을 납부하지 않을 경우 차후의 서비스 이용제한을 제한하고, 이용제한일로부터 7일이 경과한 후에도 이를 납부하지 않으면 제27조에 따라 회사는 이용계약을 해지할 수 있습니다.</li>
            <li>회사는 이용요금 등을 연체한 고객에 대하여 연체된 요금을 변제 받기 위하여 신용정보회사에 채권추심을 의뢰할 수 있습니다.</li>
          </ol>

          <p><strong>제30조(위약금)</strong></p>
          <ol class="privacy-list">
            <li>고객의 요청으로 독립서버를 구성하는 경우 의무사용 기간은 1년입니다.</li>
            <li>고객은 의무 사용기간 중 중도해지 시 남은기간 사용료의 30%만큼 위약금을 지불해야 합니다. 고객이 위약금 지불을 거부하는 경우 회사는 해당 서버의 데이터를 폐기할 수 있으며 고객은 이의제기를 할 수 없습니다.</li>
          </ol>
        </div>

        <div class="privacy-group">
          <h3 class="p-titles">제12장 소유권</h3>
          <p><strong>제31조(소유권)</strong></p>
          <ol class="privacy-list">
            <li>고객이 인터넷신문에 게재한 기사, 사진, 영상, 게시물 데이터의 소유권은 고객에게 있습니다.</li>
            <li>프로그램의 개발 또는 유지보수 서비스를 통해 산출된 결과물의 소유권은 회사에 있습니다.</li>
          </ol>

          <p><strong>제32조(사용권)</strong></p>
          <ol class="privacy-list">
            <li>고객은 서비스 과정에서 회사가 제공한 저작물에 대해 사용권을 가집니다.</li>
            <li>사용권은 배타적인 권리가 아니며 회사는 다른 고객에게도 서비스를 제공할 수 있습니다.</li>
          </ol>
        </div>

        <div class="privacy-group">
          <h3 class="p-titles">제13장 손해배상, 면책, 분쟁조정</h3>
          <p><strong>제33조 (손해배상의 책임)</strong></p>
          <p>회사의 귀책 사유로 고객이 서비스를 이용하지 못하는 경우에 회사는 고객이 그 사실을 회사에서 정한 절차에 따라 통보한 때(또는 그 전에 회사가 그 사실을 알았거나 알 수 있게 된 때)로부터 계속 4시간 이상의 서비스 제공 중지시간에 대해 최근 3개월의 1일 평균요금에 서비스 제공중지 시간을 24로 나눈 수를 곱하여 산출한 금액의 5배 범위내에서 협의 후 배상합니다. 이 경우 단수가 1시간 미만인 경우에는 1시간으로 계산합니다.</p>

          <p><strong>제34조(고객의 손해배상의 청구)</strong></p>
          <ol class="privacy-list">
            <li>고객의 손해배상의 청구는 회사에 청구사유, 청구금액 및 산출근거를 기재하여 서면으로 제출하여야 합니다.</li>
            <li>손해배상 청구는 그 청구 사유를 알게 된 날로부터 3개월 내에 청구하지 않으면 청구권이 소멸합니다. 청구사유가 발생한 날로부터 3개월이 경과한 때에도 이와 같습니다.</li>
          </ol>

          <p><strong>제35조(고객에 대한 손해배상 청구)</strong></p>
          <p>회사는 고객이 제16조와 제18조에 규정한 의무사항을 위반하여 회사에 손해를 끼친 경우 고객에 대한 손해배상을 청구할 수 있습니다.</p>

          <p><strong>제36조(면책)</strong></p>
          <ol class="privacy-list">
            <li>회사는 고객이 회사의 서비스 제공으로부터 기대되는 이익을 얻지 못하였거나 서비스로부터 수반되는 잠재가치 및 서비스 자료에 대한 취사선택 또는 이용으로 발생하는 손해에 대해서는 책임이 없습니다.</li>
            <li>회사는 고객의 귀책사유로 인해 서비스 이용장애가 발생한 경우에는 책임을 지지 않습니다.</li>
            <li>회사는 고객이 게시 또는 전송하거나 전송받은 자료의 내용 및 가치에 대해서는 책임이 없습니다.</li>
            <li>회사는 고객 상호간 또는 이용고객과 제3자간 서비스를 매개로 한 거래의 손해에 대해 책임이 없습니다.</li>
            <li>고객에게 무료로 제공되는 부가서비스나 제휴서비스의 이용과 관련해서는 책임을 지지 않습니다.</li>
            <li>회사는 고객과 제3자간 서비스를 매개로 발생한 분쟁에 대해 개입할 의무가 없으며, 이로인한 손해를 배상할 책임이 없습니다.</li>
            <li>회사는 제20조에 해당하는 서비스 중단으로 발생하는 손해에 대해서는 책임이 없습니다.</li>
          </ol>

          <p><strong>제37조(관할법원)</strong></p>
          <p>약관 및 서비스의 이용과 관련된 분쟁에 관한 소송은 회사의 본사 소재지를 관할하는 법원에 제기합니다.</p>
        </div>

        <div class="privacy-group">
          <h3 class="p-titles">[부칙]</h3>
          <ul class="privacy-list">
            <li>본 약관은 2025년 2월 27일 시행되었습니다.</li>
          </ul>
        </div>
      </Content>
    </Container>
  );
};

export default TermsOfServiceContent;
