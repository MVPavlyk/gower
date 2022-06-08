import React, {useEffect, useState} from 'react';
import css from './DescriptionPage.module.css';
import rootCss from '../../root.module.css';
import {useSelector} from 'react-redux';
import {DescriptionBlock} from '../../Components';
import {getPhoto} from '../../root_functions/getPhoto';


const DescriptionPage = () => {
    const {dark} = useSelector(state => state['themeReducers']);
    const {onePlace} = useSelector(state => state['placesReducers']);


    const [desc1, setDesc1] = useState();
    const [desc2, setDesc2] = useState();
    const [desc3, setDesc3] = useState();
    const [desc4, setDesc4] = useState();


    useEffect(() => {
        const id = onePlace.id;
        getPhoto(3, id).then(value => setDesc1(value));
        getPhoto(4, id).then(value => setDesc2(value));
        getPhoto(5, id).then(value => setDesc3(value));
        getPhoto(6, id).then(value => setDesc4(value));
    }, [onePlace]);


    return (

        <>
            {desc1 &&
                <div className={dark ? css.desc_page_dark : css.desc_page}>
                    <div className={rootCss.container}>
                        <div className={css.desc_wrap}>
                            <DescriptionBlock description={desc1} path={`/images/${onePlace.id}/Description1/3.png`}/>
                            <DescriptionBlock description={desc2} path={`/images/${onePlace.id}/Description2/4.png`}/>
                            <DescriptionBlock description={desc3} path={`/images/${onePlace.id}/Description3/5.png`}/>
                            <DescriptionBlock description={desc4} path={`/images/${onePlace.id}/Description4/6.png`}/>
                        </div>
                    </div>
                </div>
            }
        </>

    );
};

export {DescriptionPage};