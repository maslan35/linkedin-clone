import React from 'react'
import './widget.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Widget = () => {
    const newsArticle= (heading,subTitle) => {
        return(
            <div className='widget_article'>
                <div className='widget_articleLeft'>
                    <FiberManualRecordIcon />
                </div>
                <div className='widget_articleRight'>
                    <h4>{heading}</h4>
                    <p>{subTitle}</p>
                </div>
            </div>
        )
    }

  return (
    <div className='widget'>
        <div className='widget_header'>
            <h2>Widget</h2>
            <InfoIcon />
        </div>
        {newsArticle('Heading','Subtitle')}
        {newsArticle('Heading','Subtitle')}
        {newsArticle('Heading','Subtitle')}
        {newsArticle('Heading','Subtitle')}
        {newsArticle('Heading','Subtitle')}
        {newsArticle('Heading','Subtitle')}
    </div>
  )
}

export default Widget