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
      className={`bg-[#0b0b0f] section-wide ${className}`}
      aria-labelledby="register-cta-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center min-w-0">
          <h2
            id="register-cta-heading"
            className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl break-words"
          >
            {headline}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-400 sm:mt-5 sm:text-lg break-words">
            {supportingCopy}
          </p>
          <div className="mt-8">
            <Link
              href="/register"
              className="bcx-btn inline-flex w-full min-h-[48px] items-center justify-center text-base font-semibold px-6 py-3.5 sm:w-auto sm:min-h-0 sm:px-8 sm:py-4"
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
