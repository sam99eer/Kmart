

import React from 'react';
import { SvgXml } from 'react-native-svg';

function UserImg() {
    const UserImg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="128px" height="128px"><circle cx="28" cy="18.026" r="8.046" fill="#53B175"/><path fill="#53B175" d="M38.228,33H17.772c-2.152,0-3.896,1.791-3.896,4c0,12,28.248,12,28.248,0h0.001 C42.125,34.791,40.38,33,38.228,33z"/><path fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="5" stroke-width="3" d="M21.388,5.909C22.211,5.643,23.089,5.5,24,5.5c4.694,0,8.5,3.806,8.5,8.5s-3.806,8.5-8.5,8.5s-8.5-3.806-8.5-8.5"/><path fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M32.191,29.5h2.31c2.209,0,4,1.791,4,4v0H38.5c0,12-29,12-29,0v0c0-2.209,1.791-4,4-4h11.798"/></svg>
`;

    const UserImgSvg = () => (
        <SvgXml xml={UserImg} height={32} width={32} />
    );
    return <UserImgSvg />;
}

export default React.memo(UserImg);
