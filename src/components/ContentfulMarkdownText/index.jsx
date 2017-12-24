import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import {  MarkdownPreview  } from 'react-marked-markdown';

import './style.scss'

class ContentfulMarkdownText extends React.Component {
    render() {
        const { text, styleClasses } = this.props
        const pathPrefix = process.env.NODE_ENV === 'development'
            ? '' 
            : __PATH_PREFIX__

        var marktText = "";

        if(text != null) {  
            marktText = text.replace(/##primary##(.*?)##primary##/g, "<span class='text-primary'>$1</span>")
        }
        
        return (
            <MarkdownPreview className={styleClasses} value={marktText} />
        )
    }
}

export default ContentfulMarkdownText
