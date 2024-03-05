import { SVGProps } from "react";
const PersonIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width={24}
        height={24}
        fill='none'
        {...props}>
        <g clipPath='url(#a)'>
            <path
                fill='#9B74F0'
                d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4Z'
            />
        </g>
        <defs>
            <clipPath id='a'>
                <path fill='#fff' d='M0 0h24v24H0z' />
            </clipPath>
        </defs>
    </svg>
);
export default PersonIcon;
