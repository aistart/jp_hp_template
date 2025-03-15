import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const HomeContainer = styled.div`
  width: 100%;
`;

const HeroSection = styled.section`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  position: relative;
  overflow: hidden;
  background-image: url('/images/about.jpg');
  background-size: cover;
  background-position: center;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 0 20px;
  position: relative;
  z-index: 2;
`;

const HeroTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
  // color: #004f9f;
  color: #fff;
`;

const HeroDescription = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
  line-height: 1.6;
`;

const HeroButton = styled(Link)`
  display: inline-block;
  padding: 12px 30px;
  background-color: #004f9f;
  color: white;
  font-weight: 500;
  border-radius: 4px;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #003b76;
  }
`;

const ServicesSection = styled.section`
  padding: 80px 0;
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 50px;
  text-align: center;
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const ServiceCard = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const ServiceImage = styled.div`
  height: 180px;
  background-color: #e0e0e0;
  background-image: ${({ image }) => (image ? `url(${image})` : 'none')};
  background-size: cover;
  background-position: center;
`;

const ServiceContent = styled.div`
  padding: 20px;
`;

const ServiceTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #004f9f;
`;

const ServiceDescription = styled.p`
  font-size: 16px;
  margin-bottom: 15px;
  line-height: 1.6;
`;

const ServiceLink = styled(Link)`
  display: inline-block;
  color: #004f9f;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;


const HomePage = () => {
  const { t } = useTranslation();
  
  // 模拟服务数据
  const services = [
    {
      id: 1,
      title: t('services.service1.title'),
      description: t('services.service1.description'),
      image: '/images/service1.jpg',
    },
    {
      id: 2,
      title: t('services.service2.title'),
      description: t('services.service2.description'),
      image: '/images/service2.jpg',
    },
    {
      id: 3,
      title: t('services.service3.title'),
      description: t('services.service3.description'),
      image: '/images/service3.jpg',
    },
    {
      id: 4,
      title: t('services.service4.title'),
      description: t('services.service4.description'),
      image: '/images/service4.jpg',
    },
  ];
  
  
  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle>{t('home.welcome')}</HeroTitle>
          <HeroDescription>{t('home.description')}</HeroDescription>
          <HeroButton to="/about">{t('home.learnMore')}</HeroButton>
        </HeroContent>
      </HeroSection>
      
      <ServicesSection>
        <SectionTitle>{t('services.title')}</SectionTitle>
        <ServicesGrid>
          {services.map((service) => (
            <ServiceCard key={service.id}>
              <ServiceImage image={service.image} />
              <ServiceContent>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
                <ServiceLink to="/services">{t('home.learnMore')}</ServiceLink>
              </ServiceContent>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </ServicesSection>

    </HomeContainer>
  );
};

export default HomePage; 