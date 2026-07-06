import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'gold' | 'navy' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  fullWidth?: boolean;
}

export default function GradientButton({
  children,
  variant = 'gold',
  size = 'md',
  href,
  className,
  fullWidth = false,
  ...props
}: GradientButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 relative overflow-hidden group";
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantClasses = {
    gold: "gradient-gold text-white glow-gold border border-transparent hover:scale-[1.02]",
    navy: "gradient-navy text-white hover:scale-[1.02] border border-transparent",
    outline: "bg-transparent border-2 border-gold-500 text-gold-600 hover:bg-gold-50 dark:hover:bg-gold-900/20",
    ghost: "bg-transparent text-navy-800 hover:bg-navy-50",
  };

  const classes = cn(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    fullWidth ? "w-full" : "",
    className
  );

  const InnerContent = () => (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {(variant === 'gold' || variant === 'navy') && (
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        <InnerContent />
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      <InnerContent />
    </button>
  );
}
