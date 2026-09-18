import { cn } from "@/lib/utils/cn";
import { LogoIcon, LogoText } from "@/ui/logo";
import { Link } from "@tanstack/react-router";
import type { ComponentProps } from "react";

export function Footer({ className, ...props }: ComponentProps<"footer">) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn(
        `border-primary-100 bg-background text-foreground dark:border-primary-900 border-t`,
        className,
      )}
      {...props}
    >
      {/* Main Footer */}
      <div className="2xs:px-5 mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8 lg:py-16">
        {/* Brand */}
        <div className="md:col-span-2 lg:col-span-1">
          <Link
            to="/"
            className="flex items-center"
          >
            <LogoIcon className={cn(`h-12 w-12`)} />
            <LogoText className={cn(`h-12 w-48`)} />
          </Link>

          <p className="text-foreground/55 mt-5 max-w-sm text-sm leading-6">
            Simple, transparent and flexible loan solutions designed to help you
            achieve your financial goals.
          </p>

          {/* Trust */}
          <div className="bg-secondary-800 text-white dark:bg-green-800 dark:text-white mt-5 inline-flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
              />

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9 12 2 2 4-4"
              />
            </svg>
            Safe & Secure
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-brand-secondary text-foreground text-sm font-bold tracking-wider uppercase">
            Navigation
          </h3>

          <div className="mt-5 flex flex-col items-start gap-3">
            <Link
              to="/"
              activeOptions={{
                exact: true,
              }}
              className="text-foreground/55 hover:text-primary-600 text-sm font-medium transition-colors"
              activeProps={{
                className: "text-primary-600 dark:text-primary-400",
              }}
            >
              Home
            </Link>

            <Link
              to="/contact-us"
              className="text-foreground/55 hover:text-primary-600 text-sm font-medium transition-colors"
              activeProps={{
                className: "text-primary-600 dark:text-primary-400",
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Loan Services */}
        <div>
          <h3 className="font-brand-secondary text-sm font-bold tracking-wider uppercase">
            Loan Services
          </h3>

          <div className="text-foreground/55 mt-5 flex flex-col gap-3 text-sm font-medium">
            <span>Personal Loan</span>
            <span>Home Loan</span>
            <span>Education Loan</span>
            <span>Business Loan</span>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-brand-secondary text-sm font-bold tracking-wider uppercase">
            Get In Touch
          </h3>

          <div className="mt-5 space-y-4">
            {/* Phone */}
            <div className="flex items-start gap-3">
              <div className="bg-primary-50 text-primary-600 dark:bg-primary-950 dark:text-primary-300 flex size-9 shrink-0 items-center justify-center rounded-xl">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M22 16.92v3a2 2 0 0 1-2.18 2
                    19.79 19.79 0 0 1-8.63-3.07
                    19.5 19.5 0 0 1-6-6
                    19.79 19.79 0 0 1-3.07-8.67
                    A2 2 0 0 1 4.11 2h3
                    a2 2 0 0 1 2 1.72"
                  />
                </svg>
              </div>

              <div>
                <p className="text-foreground/40 text-xs">Call us</p>

                <p className="mt-0.5 text-sm font-semibold">+91 98765 43210</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <div className="bg-primary-50 text-primary-600 dark:bg-primary-950 dark:text-primary-300 flex size-9 shrink-0 items-center justify-center rounded-xl">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 4h16a2 2 0 0 1 2 2v12
                    a2 2 0 0 1-2 2H4
                    a2 2 0 0 1-2-2V6
                    a2 2 0 0 1 2-2z"
                  />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m22 6-10 7L2 6"
                  />
                </svg>
              </div>

              <div>
                <p className="text-foreground/40 text-xs">Email us</p>

                <p className="mt-0.5 text-sm font-semibold break-all">
                  support@srloanservice.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-primary-100 dark:border-primary-900 border-t">
        <div className="text-foreground/45 2xs:px-5 mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-xs sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© {currentYear} SR Loan Service. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <button type="button" className="hover:text-primary-600 transition">
              Privacy Policy
            </button>

            <button type="button" className="hover:text-primary-600 transition">
              Terms & Conditions
            </button>

            <button type="button" className="hover:text-primary-600 transition">
              Disclaimer
            </button>
          </div>
        </div>
      </div>

      {/* Financial Disclaimer */}
      <div className="border-primary-100 bg-primary-50/50 dark:border-primary-900 dark:bg-primary-950/20 border-t">
        <div className="text-foreground/40 2xs:px-5 mx-auto max-w-7xl px-4 py-4 text-[11px] leading-5 sm:px-6 lg:px-8">
          Loan approval, interest rates and repayment terms are subject to
          eligibility, verification and applicable lending policies. Please
          review all terms carefully before accepting any loan offer.
        </div>
      </div>
    </footer>
  );
}
