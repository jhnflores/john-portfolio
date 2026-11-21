import type { Metadata } from "next";
import { projects } from "@/lib/data";

export const metadata: Metadata = { title: "Projects" };

export default function Projects() {
  return (
    <main>
      <section className="page-head">
        <div className="wrap">
          <h1>Projects</h1>
          <p className="lead">Things I've built while learning. Each one taught me something new.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <ul className="project-list full">
            {projects.map((p) => (
              <li key={p.title}>
                <div>
                  <h2 className="h3">{p.title}</h2>
                  <p>{p.description}</p>
                  <ul className="plain">
                    {p.highlights.map((h) => <li key={h}>{h}</li>)}
                  </ul>
                </div>
                <div className="meta">
                  <p className="stack">{p.stack.join(", ")}</p>
                  <p className="links">
                    {p.github && <a href={p.github}>Source code</a>}
                    {p.live && <a href={p.live}>Live demo</a>}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
