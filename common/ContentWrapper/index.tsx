import cn from 'classnames';

interface ContentWrapperProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

function ContentWrapper ({ children, className }: ContentWrapperProps) {
  return (
    <div className={cn("mx-auto max-w-7xl px-2", className)}>{children}</div>
  )
}

export default ContentWrapper;