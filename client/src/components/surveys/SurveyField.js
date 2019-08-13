//SurveyField contains logic to render a single label and text input

import React from 'react';

export default (props) => {
    console.log(props.meta);
    return (
        <div>
            <label>{props.label}</label>
            <input {...props.input} style={{ marginBottom: '5px'}} />
            <div className="red-text" style={{ marginBottom: '20px '}}>
            {(props.meta.touched && props.meta.error)?
                props.meta.error : undefined}
            </div>
        </div>
    );
};