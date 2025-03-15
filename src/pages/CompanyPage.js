import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const CompanyContainer = styled.div`
  width: 100%;
  padding: 60px 0;
`;

const CompanyInner = styled.div`
  max-width: 1000px;
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

const SectionContainer = styled.section`
  margin-bottom: 70px;
`;

const SectionTitle = styled.h2`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 30px;
  color: #004f9f;
  position: relative;
  padding-left: 15px;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 5px;
    background-color: #004f9f;
  }
`;

const CompanyInfoTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 30px;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #e0e0e0;
  
  &:last-child {
    border-bottom: none;
  }
`;

const TableHeader = styled.th`
  width: 25%;
  padding: 20px 15px;
  text-align: left;
  font-weight: 600;
  vertical-align: top;
  background-color: #f8f9fa;
  
  @media (max-width: 768px) {
    width: 35%;
  }
`;

const TableData = styled.td`
  padding: 20px 15px;
  line-height: 1.6;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  background-color: #e0e0e0;
  margin-top: 30px;
  position: relative;
  overflow: hidden;
  
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const PhilosophyContainer = styled.div`
  background-color: #f8f9fa;
  padding: 40px;
  border-radius: 8px;
  margin-bottom: 30px;
`;

const PhilosophyTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #004f9f;
  text-align: center;
`;

const PhilosophyText = styled.p`
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 20px;
  text-align: center;
`;

const ValueGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled.div`
  background-color: white;
  padding: 30px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ValueIcon = styled.div`
  font-size: 36px;
  margin-bottom: 15px;
  color: #004f9f;
`;

const ValueTitle = styled.h4`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 15px;
  color: #004f9f;
`;

const ValueDescription = styled.p`
  font-size: 15px;
  line-height: 1.6;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MessageHeader = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const CEOTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #004f9f;
  margin-bottom: 10px;
`;

const CEOName = styled.h4`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 5px;
`;

const CEOPosition = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
`;

const MessageContent = styled.div`
  max-width: 800px;
`;

const MessageText = styled.p`
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 20px;
  text-align: left;
`;

const CompanyPage = () => {
  // const { t, i18n } = useTranslation();
  const { t } = useTranslation();
  
  // 获取公司信息的翻译数据
  const companyInfo = [
    { label: t('company.info.name.label'), value: t('company.info.name.value') },
    { label: t('company.info.established.label'), value: t('company.info.established.value') },
    { label: t('company.info.capital.label'), value: t('company.info.capital.value') },
    { label: t('company.info.ceo.label'), value: t('company.info.ceo.value') },
    { label: t('company.info.employees.label'), value: t('company.info.employees.value') },
    { label: t('company.info.business.label'), value: t('company.info.business.value') },
    { label: t('company.info.headquarters.label'), value: t('company.info.headquarters.value') },
    { label: t('company.info.tel.label'), value: t('company.info.tel.value') },
    { label: t('company.info.fax.label'), value: t('company.info.fax.value') },
    { label: t('company.info.email.label'), value: t('company.info.email.value') }
  ];
  
  // 企业理念
  const companyValues = [
    {
      icon: '🌟',
      title: t('company.values.innovation.title'),
      description: t('company.values.innovation.description')
    },
    {
      icon: '🤝',
      title: t('company.values.trust.title'),
      description: t('company.values.trust.description')
    },
    {
      icon: '🌍',
      title: t('company.values.cocreation.title'),
      description: t('company.values.cocreation.description')
    }
  ];
  
  return (
    <CompanyContainer>
      <CompanyInner>
        <PageTitle>{t('company.title')}</PageTitle>
        
        <SectionContainer>
          <SectionTitle>{t('company.overview')}</SectionTitle>
          <CompanyInfoTable>
            <tbody>
              {companyInfo.map((info, index) => (
                <TableRow key={index}>
                  <TableHeader>{info.label}</TableHeader>
                  <TableData>{info.value}</TableData>
                </TableRow>
              ))}
            </tbody>
          </CompanyInfoTable>
          
          <MapContainer>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.828030555224!2d139.76493611525888!3d35.68123618019392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bf8b5d68e29%3A0x3ad3ab7bcd5aa596!2z5LiJ6I235bCP5bGLIOWMl-awkeW6lw!5e0!3m2!1sja!2sjp!4v1615880616324!5m2!1sja!2sjp" 
              allowFullScreen="" 
              loading="lazy"
              title={t('company.map.title')}
            ></iframe>
          </MapContainer>
        </SectionContainer>
        
        <SectionContainer>
          <SectionTitle>{t('company.philosophy_title')}</SectionTitle>
          <PhilosophyContainer>
            <PhilosophyTitle>{t('company.philosophy.main')}</PhilosophyTitle>
            <PhilosophyText>
              {t('company.philosophy.description')}
            </PhilosophyText>
          </PhilosophyContainer>
          
          <ValueGrid>
            {companyValues.map((value, index) => (
              <ValueCard key={index}>
                <ValueIcon>{value.icon}</ValueIcon>
                <ValueTitle>{value.title}</ValueTitle>
                <ValueDescription>{value.description}</ValueDescription>
              </ValueCard>
            ))}
          </ValueGrid>
        </SectionContainer>
        
        <SectionContainer>
          <SectionTitle>{t('company.message')}</SectionTitle>
          <MessageContainer>
            <MessageHeader>
              <CEOTitle>{t('company.ceo_message')}</CEOTitle>
              <CEOName>{t('company.ceo.name')}</CEOName>
              <CEOPosition>{t('company.ceo.position')}</CEOPosition>
            </MessageHeader>
            
            <MessageContent>
              <MessageText>{t('company.ceo.message.paragraph1')}</MessageText>
              <MessageText>{t('company.ceo.message.paragraph2')}</MessageText>
              <MessageText>{t('company.ceo.message.paragraph3')}</MessageText>
              <MessageText>{t('company.ceo.message.paragraph4')}</MessageText>
            </MessageContent>
          </MessageContainer>
        </SectionContainer>
        
      </CompanyInner>
    </CompanyContainer>
  );
};

export default CompanyPage; 