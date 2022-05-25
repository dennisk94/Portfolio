import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { DiSass } from "react-icons/di";
import { FaPhp } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { SiReact } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { MdOutlineMail } from "react-icons/md";
import { DiGithubBadge } from "react-icons/di";
import { TiSocialLinkedinCircular } from "react-icons/ti";

export const IconGenerator = (tech) => {
    switch (tech) {
        case 'Html':
            return <AiFillHtml5 />;
        case 'css':
            return <DiCss3 />;
        case 'sass':
            return <DiSass />;
        case 'JavaScript':
            return <SiJavascript />;
        case 'WordPress':
            return <FaWordpress/>;
        case 'React':
            return <SiReact/>;
        case 'NextJs':
            return <SiNextdotjs/>;
        case 'Redux':
            return <SiRedux/>;
        case 'TypeScript': 
            return <SiTypescript/>;
        case 'php':
            return <FaPhp />;
        case 'Tailwind':
            return <SiTailwindcss/>;
        case 'email':
            return <MdOutlineMail/>;
        case 'github':
            return <DiGithubBadge/>;
        case 'linkedin':
            return <TiSocialLinkedinCircular/>;
        default:
            return;
    }
}