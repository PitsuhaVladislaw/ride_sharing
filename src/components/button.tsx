import React from 'react';

interface ButtonProps {
    params: {
        text: string;
        svgFile?: React.ElementType | string;
    };
}

const Button: React.FC<ButtonProps> = ({ params }) => {
    const { text, svgFile: SvgIcon } = params;

    return (
        <button>
            {SvgIcon && <SvgIcon />} {text}
        </button>
    );
}

export default Button;