

interface ButtonProps {
    handleClick: () => void,
    label: string,
    btnClass?: string
}
const Button = ({  handleClick, label, btnClass }: ButtonProps) => {
    return (
        <button
            className={`rounded-md px-10 py-2 w-full  ring-1 ring-blue-200 ${btnClass}`}
            onClick={handleClick}
        >
            {label}
        </button>
    )
}

export default Button