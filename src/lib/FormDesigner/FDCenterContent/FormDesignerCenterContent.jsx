import React from 'react';

import styles from './FormDesignerCenterContent.module.css';
import FormDesignerSideBar from './SideBar/FormDesignerSideBar';
import DesignerSurface from './DesignerSurface/DesignerSurface'
import FormDesignerRightBar from './RightBar/FormDesignerRightBar';

const FormDesignerCenterContent = (props) => {
    return (
        <div className={styles.fdCenterContentContainer}>
            <div>
                <FormDesignerSideBar /> 
            </div>
            <div>
                <DesignerSurface />
            </div>
            <div>
                <FormDesignerRightBar /> 
            </div>
        </div>
    );
};

export default FormDesignerCenterContent;