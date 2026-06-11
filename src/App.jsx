import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, Mail, Moon, Search, SlidersHorizontal, Sun } from "lucide-react";
import { about, cvItems, entries, site } from "./content";

const routes = [
  { slug: "projects", label: "Projects" },
  { slug: "resume", label: "Resume" },
  { slug: "about", label: "About" },
];

const projectTags = Array.from(new Set(entries.flatMap((entry) => entry.tags)));

function getRoute() {
  const route = window.location.hash.replace(/^#\/?/, "");
  return route || "projects";
}

function useHashRoute() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const handleRouteChange = () => {
      setRoute(getRoute());
      window.scrollTo({ top: 0, behavior: "instant" });
    };

    window.addEventListener("hashchange", handleRouteChange);
    return () => window.removeEventListener("hashchange", handleRouteChange);
  }, []);

  return route;
}

function getInitialTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  useEffect(() => {
    if (localStorage.getItem("theme")) return undefined;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = (event) => {
      setTheme(event.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);
    return () => mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  return { theme, toggleTheme };
}

function useClock(timeZone) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const interval = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(interval);
  }, []);

  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    timeZone,
    timeZoneName: "short",
  }).format(now);
}

function ThemeSwitch({ theme, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="grid size-10 place-items-center rounded-full border border-zinc-200 bg-white text-zinc-600 shadow-sm transition hover:border-zinc-400 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:text-zinc-50"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}

function LinkedInIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.36 8.09h4.27V23H.36V8.09Zm7.16 0h4.09v2.04h.06c.57-1.08 1.96-2.22 4.04-2.22 4.32 0 5.12 2.84 5.12 6.54V23h-4.27v-7.57c0-1.8-.03-4.13-2.52-4.13-2.52 0-2.9 1.97-2.9 4V23H7.52V8.09Z" />
    </svg>
  );
}

function ContactPopover() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 dark:bg-emerald-400 dark:text-zinc-950 dark:hover:bg-emerald-300"
        aria-expanded={isOpen}
        aria-haspopup="dialog"
      >
        Contact
      </button>

      {isOpen ? (
        <div className="absolute right-0 top-12 z-20 w-64 rounded-2xl border border-zinc-200 bg-white p-3 text-sm shadow-xl dark:border-zinc-800 dark:bg-zinc-950">
          <p className="px-2 pb-2 text-xs text-zinc-500 dark:text-zinc-400">Reach me here</p>
          <a
            className="flex items-center justify-between rounded-xl px-3 py-2 text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-zinc-50"
            href={`mailto:${site.email}`}
          >
            {site.email} <Mail size={15} />
          </a>
          <a
            className="flex items-center justify-between rounded-xl px-3 py-2 text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-zinc-50"
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <ArrowUpRight size={15} />
          </a>
        </div>
      ) : null}
    </div>
  );
}

function PageLink({ route, activeRoute, children }) {
  const activeBaseRoute = activeRoute.split("?")[0];
  const isActive = activeBaseRoute === route || activeBaseRoute.startsWith(`${route}/`);

  return (
    <a
      className={`relative rounded-full px-3 py-1.5 transition ${
        isActive
          ? "bg-emerald-100 font-medium text-emerald-800 dark:bg-emerald-400/15 dark:text-emerald-200"
          : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-50"
      }`}
      href={`#/${route}`}
    >
      {children}
    </a>
  );
}

function EntryCard({ entry }) {
  return (
    <article className="group border-t border-zinc-200 py-8 dark:border-zinc-800">
      <a href={`#/projects/${entry.slug}`} className="block">
        <div className="mb-3 flex items-center justify-between gap-4 text-sm text-zinc-500 dark:text-zinc-400">
          <span>{entry.label}</span>
          <span>{entry.date}</span>
        </div>
        <div className="flex items-start justify-between gap-6">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">{entry.title}</h2>
          <ArrowUpRight
            size={22}
            className="mt-2 shrink-0 text-zinc-400 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-zinc-950 dark:group-hover:text-zinc-50"
          />
        </div>
        {entry.coverImage ? (
          <img
            className="mt-6 aspect-[16/9] w-full rounded-3xl object-cover shadow-sm transition group-hover:scale-[1.01]"
            src={assetUrl(entry.coverImage)}
            alt={entry.coverAlt || entry.title}
          />
        ) : null}
        <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">{entry.body}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {entry.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-600 dark:bg-zinc-900 dark:text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </a>
    </article>
  );
}

function projectTagFromRoute(route) {
  const queryString = route.split("?")[1] || "";
  const tag = new URLSearchParams(queryString).get("tag");

  return tag && projectTags.includes(tag) ? tag : "All";
}

function ProjectsPage({ route = "projects" }) {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState(() => projectTagFromRoute(route));
  const [showFilters, setShowFilters] = useState(() => projectTagFromRoute(route) !== "All");

  const filteredEntries = entries.filter((entry) => {
    const searchText = `${entry.title} ${entry.body} ${entry.tags.join(" ")}`.toLowerCase();
    const matchesQuery = searchText.includes(query.trim().toLowerCase());
    const matchesTag = activeTag === "All" || entry.tags.includes(activeTag);

    return matchesQuery && matchesTag;
  });

  return (
    <>
      <div className="mb-8">
        <div className="flex gap-3">
          <label className="relative min-w-0 flex-1">
            <span className="sr-only">Search projects</span>
            <Search
              size={18}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
            />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="h-12 w-full rounded-full border border-zinc-200 bg-white pl-11 pr-4 text-sm text-zinc-950 shadow-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:focus:border-zinc-600"
              placeholder="Search projects"
              type="search"
            />
          </label>
          <button
            type="button"
            onClick={() => setShowFilters((value) => !value)}
            className={`grid size-12 shrink-0 place-items-center rounded-full border shadow-sm transition ${
              showFilters || activeTag !== "All"
                ? "border-emerald-600 bg-emerald-600 text-white dark:border-emerald-300 dark:bg-emerald-300 dark:text-zinc-950"
                : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-400 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:text-zinc-50"
            }`}
            aria-label="Filter projects"
            aria-pressed={showFilters}
          >
            <SlidersHorizontal size={18} />
          </button>
        </div>

        {showFilters ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {["All", ...projectTags].map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => {
                  setActiveTag(tag);
                  window.history.replaceState(
                    null,
                    "",
                    tag === "All" ? "#/projects" : `#/projects?tag=${encodeURIComponent(tag)}`,
                  );
                }}
                className={`rounded-full px-3 py-1 text-xs transition ${
                  activeTag === tag
                    ? "bg-emerald-600 text-white dark:bg-emerald-300 dark:text-zinc-950"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        ) : null}
      </div>
      <section aria-label="Projects">
        {filteredEntries.map((entry) => (
          <EntryCard key={entry.title} entry={entry} />
        ))}
        {filteredEntries.length === 0 ? (
          <p className="border-t border-zinc-200 py-8 text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
            No projects match that search.
          </p>
        ) : null}
      </section>
    </>
  );
}

function ProjectImage({ src, alt, className = "" }) {
  if (!src) return null;

  return (
    <img
      className={`w-full rounded-3xl object-cover shadow-sm ${className}`}
      src={assetUrl(src)}
      alt={alt}
    />
  );
}

function ProjectFigure({ image, fallbackAlt, className = "" }) {
  const src = typeof image === "string" ? image : image.src;
  const alt = typeof image === "string" ? fallbackAlt : image.alt || fallbackAlt;
  const caption = typeof image === "string" ? "" : image.caption;

  if (!src) return null;

  return (
    <figure>
      <ProjectImage src={src} alt={alt} className={className} />
      {caption ? (
        <figcaption className="mt-3 text-center text-sm leading-6 text-zinc-500 dark:text-zinc-400">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function ProjectVisual({ project }) {
  if (project.coverImage) {
    return (
      <div className="mt-14 overflow-hidden rounded-3xl bg-[#f7efe3] p-3 shadow-sm dark:bg-zinc-900">
        <ProjectImage
          src={project.coverImage}
          alt={project.coverAlt || project.title}
          className="max-h-[640px]"
        />
      </div>
    );
  }

  return (
    <div className="mt-14 overflow-hidden rounded-3xl bg-[#f7efe3] p-6 shadow-sm dark:bg-zinc-900">
      <div className="grid gap-5 md:grid-cols-3">
        <div className="grid gap-5">
          <div className="rounded-xl bg-emerald-50 p-4 text-sm text-emerald-950 dark:bg-emerald-400/15 dark:text-emerald-100">
            <p className="font-medium">{project.tags[0]}</p>
            <p className="mt-2 text-xs leading-5 opacity-80">{project.body}</p>
          </div>
          <div className="rounded-xl bg-white p-4 shadow-sm dark:bg-zinc-950">
            <div className="h-28 rounded-lg bg-zinc-200 dark:bg-zinc-800" />
            <p className="mt-3 text-xs font-medium text-zinc-950 dark:text-zinc-50">Pipeline note</p>
            <p className="mt-1 text-xs leading-5 text-zinc-500 dark:text-zinc-400">
              Capture the inputs, outputs, and decisions that make the project useful.
            </p>
          </div>
        </div>

        <div className="grid gap-5">
          <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
            <div className="flex items-center justify-between border-b border-zinc-200 pb-3 text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
              <span>{project.title}</span>
              <span>{project.date}</span>
            </div>
            <div className="mt-4 grid aspect-[4/5] place-items-center rounded-lg bg-emerald-600 p-5 text-center text-3xl font-semibold leading-tight tracking-tight text-white dark:bg-emerald-400 dark:text-zinc-950">
              {project.title}
            </div>
          </div>
        </div>

        <div className="grid gap-5">
          <div className="rounded-xl bg-white p-4 shadow-sm dark:bg-zinc-950">
            <div className="h-36 rounded-lg bg-zinc-200 dark:bg-zinc-800" />
            <p className="mt-3 text-xs font-medium text-zinc-950 dark:text-zinc-50">Result</p>
            <p className="mt-1 text-xs leading-5 text-zinc-500 dark:text-zinc-400">
              A concise project page can show the motivation, implementation, and next step.
            </p>
          </div>
          <div className="rounded-xl bg-zinc-950 px-4 py-3 text-center text-xs font-medium text-white dark:bg-zinc-100 dark:text-zinc-950">
            View repository
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectSection({ section }) {
  const images = section.images?.length
    ? section.images
    : section.image
      ? [{ src: section.image, alt: section.imageAlt, caption: section.imageCaption }]
      : [];
  const visibleImages = images.filter((image) => image.src);
  const paragraphs = Array.isArray(section.body) ? section.body : [section.body].filter(Boolean);

  return (
    <section className="border-t border-zinc-200 py-10 dark:border-zinc-800">
      {section.heading ? (
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          {section.heading}
        </h2>
      ) : null}
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className="mt-5 text-xl leading-9 text-zinc-700 dark:text-zinc-300">
          {paragraph}
        </p>
      ))}
      {visibleImages.length > 0 ? (
        <div className={`mt-8 grid gap-5 ${visibleImages.length > 1 ? "sm:grid-cols-2" : ""}`}>
          {visibleImages.map((image) => (
            <ProjectFigure
              key={image.src}
              image={image}
              fallbackAlt={section.heading || "Project image"}
              className="max-h-[560px]"
            />
          ))}
        </div>
      ) : null}
    </section>
  );
}

function ProjectDetailPage({ project }) {
  if (!project) return <ProjectsPage />;
  const sections = project.sections?.length
    ? project.sections
    : [{ heading: "Overview", body: project.body }];

  return (
    <article className="pt-6">
      <a
        className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
        href="#/projects"
      >
        <span aria-hidden="true">{"<-"}</span> Projects
      </a>

      <header className="mt-28">
        <div className="flex items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <img
              className="size-10 rounded-full object-cover shadow-sm"
              src={assetUrl(site.avatar)}
              alt={site.name}
            />
            <span className="font-medium text-zinc-950 dark:text-zinc-50">{site.name}</span>
          </div>
          <time className="text-zinc-500 dark:text-zinc-400">{project.date}</time>
        </div>

        <h1 className="mt-8 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          {project.title}
        </h1>
      </header>

      <ProjectVisual project={project} />

      <div className="mx-auto mt-14 max-w-3xl">
        {sections.map((section) => (
          <ProjectSection key={`${section.heading}-${section.body}`} section={section} />
        ))}
        <a
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-700 dark:bg-emerald-300 dark:text-zinc-950 dark:hover:bg-emerald-200"
          href={project.href}
          target="_blank"
          rel="noreferrer"
        >
          Open project <ArrowUpRight size={16} />
        </a>
      </div>
    </article>
  );
}

function SkillText({ text }) {
  const skills = text.split(",").map((skill) => skill.trim()).filter(Boolean);

  if (skills.length <= 1) return text;

  return skills.map((skill, index) => {
    const isProjectTag = projectTags.includes(skill);
    const separator = index < skills.length - 1 ? ", " : "";

    return (
      <span key={`${skill}-${index}`}>
        {isProjectTag ? (
          <a
            className="inline-flex rounded-full border border-zinc-300 bg-zinc-100 px-2.5 py-0.5 text-xl font-normal leading-8 text-zinc-800 transition hover:border-zinc-400 hover:bg-zinc-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
            href={`#/projects?tag=${encodeURIComponent(skill)}`}
          >
            {skill}
          </a>
        ) : (
          skill
        )}
        {separator}
      </span>
    );
  });
}

function ResumePage() {
  const resumeHref = `${import.meta.env.BASE_URL}Kevin%20Niu%20Resume.pdf`;

  return (
    <>
      <div className="grid gap-16">
        {cvItems.map((section) => (
          <section key={section.heading}>
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
              {section.heading}
            </h1>
            <div className="mt-9 grid gap-9">
              {section.items.map((item) => (
                <article key={`${section.heading}-${item.meta}-${item.role}`}>
                  <p className="text-lg leading-7 text-zinc-500 dark:text-[#aebbe0]">{item.meta}</p>
                  <p className="mt-2 text-xl leading-8 text-zinc-700 dark:text-zinc-300">
                    {section.heading === "Skills" ? <SkillText text={item.role} /> : item.role}
                    {item.organization ? " at " : ""}
                    {item.organization && item.href ? (
                      <a
                        className="font-semibold text-zinc-950 underline decoration-zinc-300 underline-offset-4 transition hover:text-emerald-700 hover:decoration-emerald-500 dark:text-zinc-50 dark:decoration-zinc-700 dark:hover:text-emerald-300 dark:hover:decoration-emerald-300"
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.organization}
                        <ArrowUpRight className="ml-1 inline-block align-[-0.12em]" size={15} />
                      </a>
                    ) : null}
                    {item.organization && !item.href ? (
                      <span className="font-semibold text-zinc-950 dark:text-zinc-50">{item.organization}</span>
                    ) : null}
                  </p>
                  {item.description ? (
                    <p className="mt-2 max-w-2xl leading-7 text-zinc-500 dark:text-zinc-400">
                      {item.description}
                    </p>
                  ) : null}
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      <a
        className="mt-16 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-700 dark:bg-emerald-300 dark:text-zinc-950 dark:hover:bg-emerald-200"
        href={resumeHref}
        target="_blank"
        rel="noreferrer"
      >
        View resume PDF <ArrowUpRight size={15} />
      </a>
    </>
  );
}

function AboutPage() {
  return (
    <div className="max-w-2xl text-xl leading-9 text-zinc-700 dark:text-zinc-300">
      {about.map((paragraph) => (
        <p key={paragraph} className="mt-7 first:mt-0">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

function CurrentPage({ route }) {
  if (route.startsWith("projects/")) {
    const slug = route.split("/")[1];
    return <ProjectDetailPage project={entries.find((entry) => entry.slug === slug)} />;
  }
  if (route === "projects" || route.startsWith("projects?")) return <ProjectsPage key={route} route={route} />;
  if (route === "resume") return <ResumePage />;
  if (route === "about") return <AboutPage />;
  return <ProjectsPage />;
}

function assetUrl(path) {
  if (!path || /^https?:\/\//.test(path)) return path;
  return `${import.meta.env.BASE_URL}${path}`;
}

export default function Portfolio() {
  const route = useHashRoute();
  const { theme, toggleTheme } = useTheme();
  const clock = useClock(site.timezone);
  const year = useMemo(() => new Date().getFullYear(), []);
  const isProjectDetail = route.startsWith("projects/");

  return (
    <main className="min-h-screen bg-[#f7f4ee] text-zinc-950 transition-colors dark:bg-[#111110] dark:text-zinc-50">
      <div className={`mx-auto px-5 py-7 sm:px-8 ${isProjectDetail ? "max-w-5xl" : "max-w-3xl"}`}>
        {!isProjectDetail ? (
        <header className="mb-12 sm:mb-16">
          <div className="flex items-center justify-between gap-4">
            <a href="#/projects" className="block size-24 shrink-0 overflow-hidden rounded-full shadow-sm sm:size-28">
              <img
                className="size-full object-cover"
                src={assetUrl(site.avatar)}
                alt={site.name}
              />
            </a>

            <div className="flex items-center gap-3">
              <ThemeSwitch theme={theme} onToggle={toggleTheme} />
              <ContactPopover />
            </div>
          </div>

          <div className="mt-8">
            <h1 className="text-5xl font-semibold tracking-tight text-zinc-950 sm:text-6xl dark:text-zinc-50">
              {site.name}
            </h1>
            <p className="mt-5 max-w-2xl text-xl leading-8 text-zinc-600 dark:text-zinc-300">
              {site.tagline}
            </p>
          </div>

          <nav className="mt-9 flex flex-wrap items-center gap-x-2 gap-y-3 text-sm font-medium">
            {routes.map((item) => (
              <PageLink key={item.slug} route={item.slug} activeRoute={route}>
                {item.label}
              </PageLink>
            ))}
          </nav>
        </header>
        ) : null}

        <CurrentPage route={route} />

        <footer className="mt-16 flex flex-col gap-5 border-t border-zinc-200 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800 dark:text-zinc-400">
          <div className="flex flex-col gap-1">
            <span>
              {site.timezoneLabel} - {clock}
            </span>
            <span>
              @ {year} {site.name}
            </span>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              className="grid size-9 place-items-center rounded-full text-zinc-500 transition hover:bg-zinc-100 hover:text-emerald-700 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-emerald-300"
              href={`mailto:${site.email}`}
              aria-label="Email"
            >
              <Mail size={17} />
            </a>
            <a
              className="grid size-9 place-items-center rounded-full text-zinc-500 transition hover:bg-zinc-100 hover:text-emerald-700 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-emerald-300"
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="size-4" />
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
