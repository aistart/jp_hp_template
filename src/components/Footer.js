import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #f5f5f5;
  padding: 50px 0 20px;
  border-top: 1px solid #e0e0e0;
`;

const FooterInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FooterInfo = styled.div`
  flex: 1;
  margin-right: 40px;
  
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 30px;
  }
`;

const FooterLogo = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #004f9f;
  margin-bottom: 15px;
`;

const FooterAddress = styled.address`
  font-style: normal;
  margin-bottom: 15px;
  line-height: 1.6;
`;

const FooterContact = styled.div`
  margin-bottom: 15px;
  line-height: 1.6;
`;

const FooterBottom = styled.div`
  border-top: 1px solid #e0e0e0;
  padding-top: 20px;
  text-align: center;
  font-size: 14px;
  color: #666;
`;

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <FooterContainer>
      <FooterInner>
        <FooterTop>
          <FooterInfo>
            <FooterLogo>Triple AIL</FooterLogo>
            <FooterAddress>
              {t('footer.address')}
            </FooterAddress>
            <FooterContact>
              <div>{t('footer.phone')}</div>
              <div>{t('footer.fax')}</div>
              <div>{t('footer.email')}</div>
            </FooterContact>
          </FooterInfo>
        </FooterTop>
        <FooterBottom>
          <p>{t('footer.copyright')}</p>
        </FooterBottom>
      </FooterInner>
    </FooterContainer>
  );
};

export default Footer; 