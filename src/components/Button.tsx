import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secundary",
    children: React.ReactNode
}

export function Button({
    variant="primary",
    children,
    className = "",
    ...props
}: ButtonProps) {
    const baseStyles = "rounded-md px-4 py-2 transition-all duration-300 font-medium cursor-pointer"

    const variantStyles = {
        "primary" :
            "bg-amber-500 hover:bg-amber-600 text-white shadow-lg hover:shadow-xl",
        "secundary" :
            "bg-transparent border-2 border-amber-500 text-amber hover:bg-amber-500 hover:text-white",
    }

    return(
        <button
        className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props}>
            {children}
        </button>
    )
}
