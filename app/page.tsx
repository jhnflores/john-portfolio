import Image from "next/image";
import Link from "next/link";
import { profile, projects, education, experience } from "@/lib/data";

export default function Home() {
  const featured = projects.slice(0, 2);
  return (
    <main>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-text">
          <p className="kicker">{profile.title}</p>
          <h1>{profile.name}</h1>
          <p className="headline">{profile.headline}</p>
          <p className="lead">{profile.intro}</p>
          <div className="actions">
            <Link className="btn" href="/projects">View projects</Link>
            <Link className="btn ghost" href="/resume">See resume</Link>
            <Link className="btn ghost" href="/about">About me</Link>
          </div>
          </div>
          <div className="hero-photo">
            <Image
              src="/john.jpg"
              alt="Portrait of John Earl Flores"
              width={800}
              height={1000}
              priority
              sizes="(max-width: 700px) 70vw, 340px"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <h2>Education</h2>
            {education.map((e) => (
              <div key={e.degree} className="snap">
                <h3>{e.degree}</h3>
                <p>{e.school}</p>
                <p className="muted">{e.dates}</p>
              </div>
            ))}
          </div>
          <div>
            <h2>Experience</h2>
            {experience.map((x) => (
              <div key={x.role} className="snap">
                <h3>{x.role}</h3>
                <p>{x.org}</p>
                <p className="muted">{x.dates}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <div className="section-head">
            <h2>Selected projects</h2>
            <Link href="/projects">All projects</Link>
          </div>
          <ul className="project-list">
            {featured.map((p) => (
              <li key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <p className="stack">{p.stack.join(", ")}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
