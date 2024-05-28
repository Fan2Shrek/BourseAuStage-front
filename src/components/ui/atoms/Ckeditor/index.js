import './ckeditor.scss';
import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Ckeditor = ({
    label = null,
    placeholder,
}) => {
    const [charCount, setCharCount] = useState(0);
    const maxChar = 500;

    const handleInput = (event, editor) => {
        const data = editor.getData();
        const plainText = new DOMParser().parseFromString(data, 'text/html').body.textContent || "";
        setCharCount(plainText.length);
    };

    return (
        <div className={'ckeditor__container'}>
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
            />
            <div className="ckeditor__count">
                <p>Maximum: {maxChar} caractères</p>
                <p>{charCount} / {maxChar}</p>
            </div>
        </div>
    );
};

export default Ckeditor;
