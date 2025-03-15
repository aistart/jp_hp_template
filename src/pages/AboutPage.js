import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const AboutContainer = styled.div`
  width: 100%;
  padding: 60px 0;
`;

const AboutInner = styled.div`
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
  margin-bottom: 60px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #004f9f;
  position: relative;
  padding-left: 15px;
  border-left: 4px solid #004f9f;
`;

const SectionContent = styled.div`
  font-size: 16px;
  line-height: 1.8;
`;

const HistoryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const HistoryItem = styled.li`
  display: flex;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const HistoryYear = styled.div`
  flex: 0 0 100px;
  font-weight: 700;
  color: #004f9f;
  
  @media (max-width: 768px) {
    margin-bottom: 5px;
  }
`;

const HistoryDescription = styled.div`
  flex: 1;
`;

const PhilosophyItem = styled.div`
  margin-bottom: 30px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
`;

const PhilosophyTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #004f9f;
`;

const PhilosophyContent = styled.p`
  line-height: 1.6;
`;

const AboutPage = () => {
  const { t } = useTranslation();
  
  // 公司历史数据，从翻译文件中获取
  const historyData = t('about.historyData', { returnObjects: true });
  
  return (
    <AboutContainer>
      <AboutInner>
        <PageTitle>{t('about.title')}</PageTitle>
        
        {/* 企業理念セクション */}
        <SectionContainer>
          <SectionTitle>{t('about.philosophy')}</SectionTitle>
          <SectionContent>
            <PhilosophyItem>
              <PhilosophyTitle>{t('about.philosophy_items.vision.title')}</PhilosophyTitle>
              <PhilosophyContent>
                {t('about.philosophy_items.vision.content')}
              </PhilosophyContent>
            </PhilosophyItem>
            
            <PhilosophyItem>
              <PhilosophyTitle>{t('about.philosophy_items.mission.title')}</PhilosophyTitle>
              <PhilosophyContent>
                {t('about.philosophy_items.mission.content')}
              </PhilosophyContent>
            </PhilosophyItem>
            
            <PhilosophyItem>
              <PhilosophyTitle>{t('about.philosophy_items.values.title')}</PhilosophyTitle>
              <PhilosophyContent dangerouslySetInnerHTML={{ __html: t('about.philosophy_items.values.content') }} />
            </PhilosophyItem>
          </SectionContent>
        </SectionContainer>
        
        {/* 経営ビジョンセクション */}
        <SectionContainer>
          <SectionTitle>{t('about.vision')}</SectionTitle>
          <SectionContent>
            <p>
              {t('about.vision_content.paragraph1')}
            </p>
            <p>
              {t('about.vision_content.paragraph2')}
            </p>
          </SectionContent>
        </SectionContainer>
        
        {/* 会社沿革セクション */}
        <SectionContainer>
          <SectionTitle>{t('about.history')}</SectionTitle>
          <SectionContent>
            <HistoryList>
              {historyData.map((item, index) => (
                <HistoryItem key={index}>
                  <HistoryYear>{item.year}</HistoryYear>
                  <HistoryDescription>{item.description}</HistoryDescription>
                </HistoryItem>
              ))}
            </HistoryList>
          </SectionContent>
        </SectionContainer>
        
        {/* 組織構成セクション */}
        <SectionContainer>
          <SectionTitle>{t('about.organization')}</SectionTitle>
          <SectionContent>
            <p>
              {t('about.organization_content.paragraph1')}
            </p>
            <p>
              {t('about.organization_content.paragraph2')}
            </p>
            <ul>
              {t('about.organization_content.departments', { returnObjects: true }).map((dept, index) => (
                <li key={index}>{dept}</li>
              ))}
            </ul>
          </SectionContent>
        </SectionContainer>
      </AboutInner>
    </AboutContainer>
  );
};

export default AboutPage; 