import React from 'react';
import {useSelector} from 'react-redux';
import css from './DescriptionBlock.module.css';

const DescriptionBlock = ({description}) => {

    return (
        <div className={css.desc_block}>
            {description && <div className={css.desc_page_text}>
                {description.description}
            </div>}
            {description && <img
                src={`https://glitch4.s3.eu-central-1.amazonaws.com/${description.filePath}`}
                alt="description"
                className={css.desc_page_photo}
            />}
        </div>
    );
};

export {DescriptionBlock};