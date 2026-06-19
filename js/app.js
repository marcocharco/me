const Hero = () => {
  return (
    <section className="flex flex-col justify-center relative pt-24 md:pt-32 pb-10">
      <h1 className="text-l md:text-xl font-medium tracking-tight text-charcoal mb-4">
        Marco Chen
      </h1>

      <div className="max-w-2xl">
        <p className="text-sm font-normal leading-relaxed tracking-normal mb-4 text-charcoal/70">
          I’m currently a Software Developer intern at Wealthsimple, studying CS
          and Business at Western University. I like to build thoughtful
          software that feels human to use while delivering value to users.{" "}
        </p>

        <div className="flex items-center gap-6 text-sm font-normal">
          <a
            href="assets/Marco_Chen_Resume.pdf"
            target="_blank"
            className="link-interactive text-charcoal"
          >
            Resume
          </a>
          <a
            href="https://github.com/marcocharco"
            target="_blank"
            className="link-interactive text-charcoal"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/marcochen1"
            target="_blank"
            className="link-interactive text-charcoal"
          >
            LinkedIn
          </a>
          <a
            href="mailto:chenmarco16@gmail.com"
            className="link-interactive text-charcoal"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const history = [
    {
      years: "2026—2026",
      org: "Wealthsimple",
      role: "Software Developer Intern",
      url: "https://wealthsimple.com/",
    },
    {
      years: "2025—2026",
      org: "Tethos",
      orgSuffix: "(Plan International)",
      role: "Lead Software Engineer",
      url: "https://www.tethos.ca/",
    },
    {
      years: "2025",
      org: "IDI Consulting Group",
      role: "Software Developer Intern",
    },
  ];

  return (
    <section className="py-10 relative">
      <h2 className="text-sm font-medium text-charcoal mb-6">Experience</h2>

      <div className="flex flex-col gap-1">
        {history.map((item, i) => (
          <div
            key={i}
            className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 p-4 -mx-4 rounded-xl hover:bg-black/5 transition-colors items-center"
          >
            <div className="md:col-span-3 text-sm font-normal text-charcoal/70">
              {item.years}
            </div>
            <div className="md:col-span-4 text-sm font-normal text-charcoal">
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline underline-offset-2"
                >
                  {item.org}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="inline-block align-middle ml-0.5 text-charcoal"
                  >
                    <path d="M13 5H19V11" />
                    <path d="M19 5L5 19" />
                  </svg>
                </a>
              ) : (
                item.org
              )}
              {item.orgSuffix && (
                <span className="text-charcoal/70"> {item.orgSuffix}</span>
              )}
            </div>
            <div className="md:col-span-5 text-sm font-normal text-charcoal/70">
              {item.role}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div className="relative min-h-screen selection:bg-accent selection:text-base font-sans">
      <main className="max-w-3xl mx-auto px-6 md:px-8 relative z-10">
        <Hero />
        <Experience />

        <footer className="py-12 mt-8 flex justify-center items-center">
          <button
            className="text-sm font-normal text-charcoal/70 hover:text-charcoal transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Back to top ↑
          </button>
        </footer>
      </main>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
