interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', ...props }) => {
  const baseClass = "px-6 py-3 rounded-apple font-medium transition-all duration-300 transform hover:scale-105 active:scale-95";
  
  const variants = {
    primary: "bg-accent text-base hover:bg-accent/90",
    secondary: "bg-mantle text-text border border-text/10 hover:bg-mantle/80"
  };

  return (
    <button className={`${baseClass} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
};