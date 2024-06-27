import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import './ckeditor.scss';
import cn from '../../../../utils/classnames';

const Ckeditor = ({
    label = null,
    placeholder,
    className,
    onChange = null,
    defaultValue = null,
}) => {
    const [charCount, setCharCount] = useState(0);
    const maxChar = 500;

    const handleInput = (event, editor) => {
        const data = editor.getData();
        const plainText = new DOMParser().parseFromString(data, 'text/html').body.textContent || "";
        const currentCharCount = plainText.length;

        if (currentCharCount <= maxChar) {
            setCharCount(currentCharCount);
        } else {
            event.stop();
        }

        onChange && onChange(data);
    };

    return (
        <div className={cn('ckeditor__container', className)}>
            {label && (
                <label className={'ckeditor__label'}>
                    {label}
                </label>
            )}
            <CKEditor
                className={'ckeditor__input'}
                editor={ClassicEditor}
                config={{
                    toolbar: ['bold', 'italic', 'numberedList', 'bulletedList', 'link'],
                    placeholder: placeholder
                }}
                onChange={handleInput}
                onReady={editor => (editor.setData(defaultValue ?? ''))}
            />
            <div className="ckeditor__count">
                <p>Maximum: {maxChar} caractères</p>
                <p>{charCount} / {maxChar}</p>
            </div>
        </div>
    );
};

export default Ckeditor;
