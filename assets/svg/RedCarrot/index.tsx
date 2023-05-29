import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const RedCarrot = (props: SvgProps) => (
    <Svg width={49} height={57} fill='none' {...props}>
        <Path
            fill='#53B175'
            fillRule='evenodd'
            d='M32.721 4.743c.239-2.134-1.274-4.06-3.407-4.3a3.862 3.862 0 0 0-4.3 3.408c-.286 2.436.112 5.35.622 8.344 1.417.43 2.786 1.05 4.06 1.783 1.37-3.232 2.707-6.433 3.025-9.235Zm14.984 9.363c-.844-1.975-3.137-2.867-5.112-2.023-2.595 1.13-5.286 3.344-7.993 5.621a21.116 21.116 0 0 1 2.787 3.36c3.073-.382 6.018-.844 8.295-1.831 1.975-.876 2.882-3.169 2.023-5.128ZM41.16 3.691c-1.72-1.274-4.156-.924-5.43.796-1.942 2.611-3.248 6.513-4.665 10.318.478.319.924.637 1.354.971.318.255.653.526.987.796 3.248-2.452 6.624-4.84 8.566-7.451a3.887 3.887 0 0 0-.812-5.43Z'
            clipRule='evenodd'
        />
        <Path
            fill='#F3603F'
            d='M33.772 34.869a46.091 46.091 0 0 1-3.821 3.646 147.799 147.799 0 0 1-5.78 4.761c-2.102-1.29-3.615-1.943-3.87-1.608-.222.302.653 1.417 2.23 2.866-5.287 3.933-10.875 7.404-16.878 10.254-.94.446-1.927.764-2.898 1.115-.255.095-.526.095-.637.111-1.529.175-1.99-.239-1.927-1.64.191-4.363 1.545-8.455 2.946-12.531.382-1.115.78-2.23 1.194-3.344 2.118 1.29 3.63 1.959 3.885 1.624.27-.366-1.003-1.83-3.137-3.662 1.529-3.949 3.233-7.834 5.239-11.56 4.013 2.978 7.58 4.936 7.977 4.395.398-.542-2.547-3.424-6.608-6.433l-.175-.127a69.132 69.132 0 0 1 2.213-3.551c.972-1.465 2.166-2.802 3.344-4.108 1.577-1.736 3.615-2.325 5.892-1.815 7.292 1.624 12.356 5.811 14.744 12.992.478 1.465.048 2.898-.7 4.22a21.225 21.225 0 0 1-1.688 2.532c-3.854-2.819-7.197-4.634-7.58-4.124-.366.51 2.293 3.137 6.035 5.987Z'
        />
    </Svg>
);

export default React.memo(RedCarrot);
