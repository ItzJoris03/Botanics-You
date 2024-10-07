import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IButton {
    className?: string;
    text?: string;
}

const Button: React.FC<IButton> = ({ className = '', text }) => {
    return (
        <button className={`hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-4 px-4 py-2 border border-white rounded-sm ${className}`}>
            { text }
            <FontAwesomeIcon icon={faArrowRight} />
        </button>
    );
} 

export default Button;