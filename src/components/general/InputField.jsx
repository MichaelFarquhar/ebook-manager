import React from 'react';

export const InputField = ({
    label = '',
    id = '',
    name = '',
    className = '',
    placeholder = '',
    disabled = false,
    type = 'text',
    onChange,
    value = null,
    error = false,
    errorText = '',
}) => {
    return (
        <div className="form-control">
            {label && (
                <label className="label">
                    <span className="label-text font-medium">{label}</span>
                </label>
            )}

            <input
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
                className={className + `${error ? ' input-error' : ''}`}
                onChange={onChange}
                value={value}
                disabled={disabled}
            />

            {error && (
                <label className="label">
                    <span className="label-text-alt text-error font-medium">
                        {errorText}
                    </span>
                </label>
            )}
        </div>
    );
};
