type SectionHeadProps = {
  title: React.ReactNode;
  description?: string;
  className?: string;
};

export default function SectionHead({ title, description, className = '' }: SectionHeadProps) {
  return (
    <div className={`mx-auto max-w-3xl text-center mb-10 sm:mb-14 ${className}`}>
      <h2 className="text-2xl font-bold tracking-tight text-[#0b0b0f] sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base text-gray-600 sm:mt-4 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
