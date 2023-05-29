import * as React from 'react';
import Svg, { Circle, Defs, G, Path, SvgProps } from 'react-native-svg';

const SuccessTick = (props: SvgProps) => (
    <Svg width={271} height={240} fill='none' {...props}>
        <Path
            stroke='#F3603F'
            strokeLinecap='round'
            strokeWidth={3}
            d='M227.555 48.853c7.909.77 24.452-1.779 27.352-18.125 2.9-16.345 10.656-20.87 14.171-21.09'
        />
        <Circle cx={136.076} cy={116.076} r={79.076} fill='#53B175' />
        <G filter='url(#a)'>
            <Circle
                cx={136.076}
                cy={116.076}
                r={68.142}
                stroke='#fff'
                strokeOpacity={0.7}
                strokeWidth={2}
            />
        </G>
        <Path
            fill='#fff'
            d='M171.217 98.776c0 2.154-.845 4.233-2.381 5.718l-35.717 34.599c-1.613 1.484-3.764 2.375-5.991 2.375a8.589 8.589 0 0 1-5.915-2.375l-17.896-17.3c-1.537-1.485-2.382-3.564-2.382-5.717 0-2.153.922-4.158 2.458-5.717 1.613-1.485 3.687-2.302 5.915-2.376 2.227 0 4.301.817 5.914 2.302l11.906 11.508 29.802-28.808a8.657 8.657 0 0 1 5.914-2.301c2.228.074 4.302.89 5.915 2.45 1.536 1.485 2.458 3.49 2.458 5.642Z'
        />
        <Path
            stroke='#F7B23B'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={3}
            d='M216.526 194.603c7.382 2.133 21.654 10.236 19.686 25.59'
        />
        <Path
            stroke='#6E89FA'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={3}
            d='M2 208.016c11.328 4.266 35.75 7.326 42.812-14.565m0 0c1.03-6.032 0-17.964-12.358-17.434-2.354 5.811-3.178 17.434 12.358 17.434Zm0 0c5.15.956 17.125.044 23.834-11.255'
        />
        <Circle cx={179.771} cy={231.423} r={7.58} fill='#637BFE' />
        <Circle cx={251.425} cy={111.396} r={7.08} stroke='#C05EFD' />
        <Circle cx={85.723} cy={8.3} r={8.3} fill='#53B175' />
        <Circle cx={162.673} cy={22.006} r={4.383} fill='#F3603F' />
        <Circle cx={41.104} cy={68.682} r={7.182} stroke='#F7B23B' />
        <Circle cx={88.704} cy={218.512} r={7.947} stroke='#53B175' />
        <Circle
            cx={4.035}
            cy={4.035}
            r={4.035}
            fill='#53B175'
            transform='matrix(-1 0 0 1 160.239 218.695)'
        />
        <Defs></Defs>
    </Svg>
);
export default React.memo(SuccessTick);
