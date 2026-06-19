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

const App = () => {
  return (
    <div className="relative min-h-screen selection:bg-accent selection:text-base font-sans">
      <main className="max-w-3xl mx-auto px-6 md:px-8 relative z-10">
        <Hero />

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
