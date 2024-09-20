import { IButtonProps } from "../../types/Interfaces";

const Button = ({ text, customClass, type, children, onClick, disabled, loading } : IButtonProps) => {
    return (
        <button
        className={`button_container ${customClass && customClass} ${disabled && 'disabled'} ${loading && "loading"}`}
        type={type && type}
        onClick={() => {
            const contentContainer = document.querySelector(".layout_content");
            contentContainer?.scrollTo({ top: 0, behavior: "smooth" });
            onClick && onClick();
        }}
        disabled={disabled}
    >
        {
            loading ?
                <div className="loader-page login">
                    <div className="submit_loading_container"></div>
                </div> :
                <>
                {text && 
                    <span className="bold">{text}</span>
                }
                    {children}
                </>
        }
    </button>
    );
}

export default Button;