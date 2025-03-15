import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const SwitcherContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-left: 20px;
`;

const LanguageButton = styled.button`
  background: ${props => props.active ? '#004f9f' : 'transparent'};
  color: ${props => props.active ? 'white' : '#004f9f'};
  border: 1px solid #004f9f;
  border-radius: 4px;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? '#004f9f' : '#e6f0ff'};
  }
`;

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  
  const changeLanguage = (lng) => {
    console.log(`Changing language to: ${lng}`); // 调试日志
    i18n.changeLanguage(lng);
  };
  
  return (
    <SwitcherContainer>
      <LanguageButton 
        active={i18n.language === 'ja'} 
        onClick={() => changeLanguage('ja')}
      >
        日本語
      </LanguageButton>
      <LanguageButton 
        active={i18n.language === 'en'} 
        onClick={() => changeLanguage('en')}
      >
        English
      </LanguageButton>
    </SwitcherContainer>
  );
};

export default LanguageSwitcher; 