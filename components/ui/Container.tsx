type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  /** Use narrow max-width for content-heavy pages (e.g. FAQ, form) */
  narrow?: boolean;
};

export default function Container({ children, className = '', narrow = false }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${narrow ? 'max-w-3xl' : 'max-w-7xl'} ${className}`}
    >
      {children}
    </div>
  );
}
