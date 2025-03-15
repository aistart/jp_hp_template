import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const ContactContainer = styled.div`
  width: 100%;
  padding: 60px 0;
`;

const ContactInner = styled.div`
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
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

const ContactForm = styled.form`
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #004f9f;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  display: block;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
`;

const RequiredMark = styled.span`
  color: #e74c3c;
  margin-left: 5px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px 15px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  transition: border-color 0.3s;
  
  &:focus {
    outline: none;
    border-color: #004f9f;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 10px 15px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  transition: border-color 0.3s;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #004f9f;
  }
`;

const SubmitButton = styled.button`
  display: inline-block;
  padding: 12px 30px;
  background-color: #004f9f;
  color: white;
  font-weight: 500;
  border-radius: 4px;
  transition: background-color 0.3s;
  cursor: pointer;
  
  &:hover {
    background-color: #003b76;
  }
  
  &:disabled {
    background-color: #999;
    cursor: not-allowed;
  }
`;

const FormNote = styled.p`
  font-size: 14px;
  color: #666;
  margin-top: 20px;
  line-height: 1.6;
`;

const AlertMessage = styled.div`
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 4px;
  font-weight: 500;
  background-color: ${({ type }) => (type === 'success' ? '#d4edda' : '#f8d7da')};
  color: ${({ type }) => (type === 'success' ? '#155724' : '#721c24')};
`;

const ContactPage = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 简单的表单验证
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        message: t('contact.error'),
      });
      return;
    }
    
    // 模拟表单提交
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: t('contact.success'),
      });
      
      // 重置表单
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 1000);
  };
  
  return (
    <ContactContainer>
      <ContactInner>
        <PageTitle>{t('contact.title')}</PageTitle>
        
        <ContactGrid>
          <ContactInfo>
            <InfoTitle>Triple AIL Co., Ltd.</InfoTitle>
            
            <InfoItem>
              <InfoLabel>{t('header.company')}</InfoLabel>
              <InfoText>{t('company.name')}</InfoText>
            </InfoItem>
            
            <InfoItem>
              <InfoLabel>{t('footer.address')}</InfoLabel>
              <InfoText>
                〒108-0023 東京都港区芝浦三丁目4番1号<br />
                グランパークタワー32階
              </InfoText>
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
          
          <ContactForm onSubmit={handleSubmit}>
            <FormTitle>{t('contact.title')}</FormTitle>
            
            {formStatus.submitted && (
              <AlertMessage type={formStatus.success ? 'success' : 'error'}>
                {formStatus.message}
              </AlertMessage>
            )}
            
            <FormGroup>
              <FormLabel>
                {t('contact.name')}
                <RequiredMark>*</RequiredMark>
              </FormLabel>
              <FormInput
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel>{t('contact.company')}</FormLabel>
              <FormInput
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel>
                {t('contact.email')}
                <RequiredMark>*</RequiredMark>
              </FormLabel>
              <FormInput
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel>{t('contact.phone')}</FormLabel>
              <FormInput
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel>{t('contact.subject')}</FormLabel>
              <FormInput
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel>
                {t('contact.message')}
                <RequiredMark>*</RequiredMark>
              </FormLabel>
              <FormTextarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <SubmitButton type="submit">
              {t('contact.submit')}
            </SubmitButton>
            
            <FormNote>
              <RequiredMark>*</RequiredMark> {t('contact.required')}
            </FormNote>
          </ContactForm>
        </ContactGrid>
      </ContactInner>
    </ContactContainer>
  );
};

export default ContactPage; 