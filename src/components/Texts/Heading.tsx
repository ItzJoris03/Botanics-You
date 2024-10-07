import { IHeading, IText } from "@/types/texts";
import textFormatter from "@/utils/TextFormatter";

export const Title: React.FC<IText> = ({ content }) => <Heading lvl={1} content={content} className={`font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl`}/>
export const SubTitle: React.FC<IText> = ({ content, className = '' }) => <Heading lvl={2} content={content} className={`text-sm sm:text-base md:text-lg lg:text-xl ${className}`}/>
export const Chapter: React.FC<IText> = ({ content, className = '' }) => <Heading lvl={2} content={content} className={`${className}`}/>
export const ChapterSubtext: React.FC<IText> = ({ content, className = '' }) => <Heading lvl={3} content={content} className={`${className}`}/>

const Heading: React.FC<IHeading> = ({ lvl, content, className = '' }) => {
    const formatted = textFormatter(content);

    const getTag = () => {
        switch (lvl) {
            case 1:
                return <h1 className={`${className}`}>{ formatted }</h1>
                break;
            case 2:
                return <h2 className={`${className}`}>{ formatted }</h2>
                break;
            case 3:
                return <h3 className={`${className}`}>{ formatted }</h3>
                break;
            case 4:
                return <h4 className={`${className}`}>{ formatted }</h4>
                break;
            case 5:
                return <h5 className={`${className}`}>{ formatted }</h5>
                break;
            case 6:
                return <h6 className={`${className}`}>{ formatted }</h6>
                break;
        }
    }

    return getTag();
}

export default Heading;