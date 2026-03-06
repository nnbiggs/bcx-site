type PageHeroProps = {
  title: string;
  subtitle?: string;
  footnote?: string;
};

export default function PageHero({ title, subtitle, footnote }: PageHeroProps) {
  return (
    <section className="bg-gradient-to-br from-[#c8102e] to-[#9f0d24] py-12 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg text-red-50 sm:mt-6 sm:text-xl lg:text-2xl">
            {subtitle}
          </p>
        )}
        {footnote && (
          <p className="mt-3 text-sm text-red-100/90 sm:mt-4 sm:text-base">
            {footnote}
          </p>
        )}
      </div>
    </section>
  );
}
