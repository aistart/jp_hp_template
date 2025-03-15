import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const ServicesContainer = styled.div`
  width: 100%;
  padding: 60px 0;
`;

const ServicesInner = styled.div`
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

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  gap: 40px;
  margin-bottom: 60px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
`;

const ServiceImage = styled.div`
  height: 200px;
  background-color: #e0e0e0;
  background-image: ${({ image }) => (image ? `url(${image})` : 'none')};
  background-size: cover;
  background-position: center;
`;

const ServiceContent = styled.div`
  padding: 25px;
`;

const ServiceTitle = styled.h2`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 15px;
  color: #004f9f;
`;

const ServiceDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
`;

const ServiceFeatureItem = styled.li`
  position: relative;
  padding-left: 25px;
  margin-bottom: 10px;
  line-height: 1.5;
  
  &:before {
    content: "✓";
    position: absolute;
    left: 0;
    color: #004f9f;
    font-weight: bold;
  }
`;

const SolutionSection = styled.section`
  margin-top: 80px;
`;

const SolutionTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 30px;
  text-align: center;
  color: #004f9f;
  
  &::after {
    content: '';
    display: block;
    width: 40px;
    height: 3px;
    background-color: #004f9f;
    margin: 15px auto;
  }
`;

const SolutionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SolutionItem = styled.div`
  background-color: #f8f9fa;
  padding: 25px;
  border-radius: 8px;
  text-align: center;
`;

const SolutionIcon = styled.div`
  font-size: 36px;
  margin-bottom: 15px;
  color: #004f9f;
`;

const SolutionName = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 15px;
  color: #004f9f;
`;

const SolutionText = styled.p`
  font-size: 15px;
  line-height: 1.5;
`;

const ServicesPage = () => {
  const { t } = useTranslation();
  
  // 服务数据
  const services = [
    {
      id: 1,
      title: t('services.service1.title'),
      description: t('services.service1.description'),
      image: '/images/service1.jpg',
      features: [
        t('services.service1.features.feature1'),
        t('services.service1.features.feature2'),
        t('services.service1.features.feature3'),
        t('services.service1.features.feature4'),
        t('services.service1.features.feature5')
      ]
    },
    {
      id: 2,
      title: t('services.service2.title'),
      description: t('services.service2.description'),
      image: '/images/service2.jpg',
      features: [
        t('services.service2.features.feature1'),
        t('services.service2.features.feature2'),
        t('services.service2.features.feature3'),
        t('services.service2.features.feature4'),
        t('services.service2.features.feature5')
      ]
    },
    {
      id: 3,
      title: t('services.service3.title'),
      description: t('services.service3.description'),
      image: '/images/service3.jpg',
      features: [
        t('services.service3.features.feature1'),
        t('services.service3.features.feature2'),
        t('services.service3.features.feature3'),
        t('services.service3.features.feature4'),
        t('services.service3.features.feature5')
      ]
    },
    {
      id: 4,
      title: t('services.service4.title'),
      description: t('services.service4.description'),
      image: '/images/service4.jpg',
      features: [
        t('services.service4.features.feature1'),
        t('services.service4.features.feature2'),
        t('services.service4.features.feature3'),
        t('services.service4.features.feature4'),
        t('services.service4.features.feature5')
      ]
    }
  ];
  
  // 解决方案数据
  const solutions = [
    {
      id: 1,
      icon: '🏢',
      name: t('services.solutions.manufacturing.name'),
      description: t('services.solutions.manufacturing.description')
    },
    {
      id: 2,
      icon: '💰',
      name: t('services.solutions.finance.name'),
      description: t('services.solutions.finance.description')
    },
    {
      id: 3,
      icon: '🏥',
      name: t('services.solutions.healthcare.name'),
      description: t('services.solutions.healthcare.description')
    },
    {
      id: 4,
      icon: '🛒',
      name: t('services.solutions.retail.name'),
      description: t('services.solutions.retail.description')
    },
    {
      id: 5,
      icon: '🚗',
      name: t('services.solutions.automotive.name'),
      description: t('services.solutions.automotive.description')
    },
    {
      id: 6,
      icon: '🏙️',
      name: t('services.solutions.smartcity.name'),
      description: t('services.solutions.smartcity.description')
    }
  ];
  
  return (
    <ServicesContainer>
      <ServicesInner>
        <PageTitle>{t('services.title')}</PageTitle>
        
        <ServiceGrid>
          {services.map(service => (
            <ServiceCard key={service.id}>
              <ServiceImage image={service.image} />
              <ServiceContent>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
                <ServiceFeatures>
                  {service.features.map((feature, index) => (
                    <ServiceFeatureItem key={index}>{feature}</ServiceFeatureItem>
                  ))}
                </ServiceFeatures>
              </ServiceContent>
            </ServiceCard>
          ))}
        </ServiceGrid>
        
        <SolutionSection>
          <SolutionTitle>{t('services.solutions.title')}</SolutionTitle>
          <SolutionGrid>
            {solutions.map(solution => (
              <SolutionItem key={solution.id}>
                <SolutionIcon>{solution.icon}</SolutionIcon>
                <SolutionName>{solution.name}</SolutionName>
                <SolutionText>{solution.description}</SolutionText>
              </SolutionItem>
            ))}
          </SolutionGrid>
        </SolutionSection>
        
      </ServicesInner>
    </ServicesContainer>
  );
};

export default ServicesPage; 