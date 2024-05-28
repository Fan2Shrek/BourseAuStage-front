import './ckeditor.scss';
import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Ckeditor = ({
    label = null,
    placeholder,
}) => {
    return (
        <div className={'ckeditor__container'}>
            {label && (
                <label
                    className={'ckeditor__label'}
                >
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
            />
        </div>
    );
};

export default Ckeditor;