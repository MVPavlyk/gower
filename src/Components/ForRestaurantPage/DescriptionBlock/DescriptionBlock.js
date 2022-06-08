import React from 'react';
import css from './DescriptionBlock.module.css';
import {cloudUrl} from '../../../config/cloudUrl';

const DescriptionBlock = ({description, path}) => {

    return (
        <div className={css.desc_block}>
            {description && <div className={css.desc_page_text}>
                {description.description}
            </div>}
            {description && <img
                src={`${cloudUrl}${path}`}
                alt="description"
                className={css.desc_page_photo}
            />}
        </div>
    );
};

export {DescriptionBlock};