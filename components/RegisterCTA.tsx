import Link from 'next/link';

type RegisterCTAProps = {
  headline?: string;
  supportingCopy?: string;
  buttonText?: string;
  className?: string;
};

export default function RegisterCTA({
  headline = 'Ready to join BCX?',
  supportingCopy = 'Register for the 2026 season and take the first step toward your track & field goals.',
  buttonText = 'Register for the 2026 Season',
  className = '',
}: RegisterCTAProps) {
  return (
    <section
      className={`bg-[#0b0b0f] py-14 sm:py-20 lg:py-24 ${className}`}
      aria-labelledby="register-cta-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center min-w-0 px-1 sm:px-0">
          <h2
            id="register-cta-heading"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl break-words"
          >
            {headline}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-300 sm:mt-6 sm:text-lg lg:text-xl break-words">
            {supportingCopy}
          </p>
          <div className="mt-8 sm:mt-10">
            <Link
              href="/register"
              className="bcx-btn inline-flex w-full min-h-[48px] items-center justify-center text-base font-semibold px-6 py-3.5 sm:w-auto sm:min-h-0 sm:text-lg sm:px-8 sm:py-4 shadow-lg hover:shadow-xl"
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
