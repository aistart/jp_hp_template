
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const ContactContainer = styled.div`
  width: 100%;
  padding: 60px 0;
`;

const ContactInner = styled.div`
  max-width: 80%;
  margin: 0 auto;
  padding: 0 20px;
`;

const PageTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 40px;
  text-align: center;
  color: #004f9f;
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 50px;
    height: 3px;
    background-color: #004f9f;
    margin: 15px auto;
  }
`;

const ContactInfo = styled.div`
  background-color: #f5f5f5;
  padding: 30px;
  border-radius: 8px;
`;

const InfoTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #004f9f;
`;

const InfoItem = styled.div`
  margin-bottom: 20px;
`;

const InfoLabel = styled.h3`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 5px;
`;

const InfoText = styled.p`
  font-size: 16px;
  line-height: 1.6;
`;

const MapContainer = styled.div`
  margin-top: 30px;
  height: 250px;
  background-color: #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
`;

const ContactPage = () => {
  const { t } = useTranslation();
  
  return (
    <ContactContainer>
      <ContactInner>
        <PageTitle>{t('contact.title')}</PageTitle>
        
  
          <ContactInfo>
            <InfoTitle>Triple AIL Co., Ltd.</InfoTitle>
            
            <InfoItem>
              <InfoLabel>{t('header.company')}</InfoLabel>
            </InfoItem>
            
            <InfoItem>
              <InfoText>{t('footer.address')}</InfoText>
            </InfoItem>
            
            <InfoItem>
              <InfoLabel>{t('contact.phone')}</InfoLabel>
              <InfoText>{t('footer.phone')}</InfoText>
            </InfoItem>
            
            <InfoItem>
              <InfoLabel>FAX</InfoLabel>
              <InfoText>{t('footer.fax')}</InfoText>
            </InfoItem>
            
            <InfoItem>
              <InfoLabel>Email</InfoLabel>
              <InfoText>{t('footer.email')}</InfoText>
            </InfoItem>
            
            <MapContainer>
              {/* 这里可以集成Google Maps或其他地图服务 */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.2775373839317!2d139.7518!3d35.6472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDM4JzQ5LjkiTiAxMznCsDQ1JzA2LjUiRQ!5e0!3m2!1sen!2sjp!4v1615280000000!5m2!1sen!2sjp" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Company Location"
              ></iframe>
            </MapContainer>
          </ContactInfo>
          

        
      </ContactInner>
    </ContactContainer>
  );
};

export default ContactPage; 