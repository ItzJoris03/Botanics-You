import React, { ReactNode } from 'react';

interface IBanner{
    imgSrc: string;
    imgAlt: string;
    children: ReactNode;
}

const Banner: React.FC<IBanner> = (props) => {
    return (
        <>
            <img
                src={props.imgSrc}
                alt={`Banner image of ${props.imgAlt}`}
                className="absolute inset-0 object-cover w-full h-full z-[-1] brightness-50 select-none"
            />
            {props.children}
        </>
    );
};

export default Banner;
