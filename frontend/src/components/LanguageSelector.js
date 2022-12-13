import React from 'react';
import { useTranslation } from 'react-i18next';
import {changeLanguage} from '../api/apiCalls';

const LanguageSelector = (props) => {
    const {i18n} = useTranslation();

    const onChangeLanguage = language => {
        i18n.changeLanguage(language);
        changeLanguage(language);
    }

    return (
        <div className='container' >
            <img width={"32px"} height={"24px"} src="https://countryflagsapi.com/png/tr" style={{float: 'left', cursor:'pointer'}} onClick={() => onChangeLanguage('tr')}></img>
            <img width={"32px"} height={"24px"} src="https://countryflagsapi.com/png/us" style={{float: 'left', cursor:'pointer'}} onClick={() => onChangeLanguage('en') }></img>               
        </div>
    );
    
}

export default LanguageSelector;