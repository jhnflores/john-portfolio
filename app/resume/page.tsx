import type { Metadata } from "next";
import PrintButton from "@/components/PrintButton";
import { profile, skills, projects, education, experience } from "@/lib/data";

export const metadata: Metadata = { title: "Resume" };

export default function ResumePage() {
  return (
    <main className="section">
      <div className="wrap resume">
        <div className="toolbar">
          <h1 className="h3">Resume</h1>
          <PrintButton />
        </div>

        <article className="paper">
          <header>
            <h2 className="name">{profile.name}</h2>
            <p className="role">{profile.title} | Aspiring Web Developer</p>
            <p className="contact">
              {profile.location} | {profile.email} | {profile.phone}
              <br />
              {profile.github.replace("https://", "")}
            </p>
          </header>

          <section>
            <h3>Summary</h3>
            <p>{profile.intro}</p>
          </section>

          <section>
            <h3>Education</h3>
            {education.map((e) => (
              <div key={e.degree} className="item">
                <p><strong>{e.degree}</strong></p>
                <p>{e.school} | {e.dates}</p>
                <ul>{e.details.map((d) => <li key={d}>{d}</li>)}</ul>
              </div>
            ))}
          </section>

          <section>
            <h3>Experience</h3>
            {experience.map((x) => (
              <div key={x.role + x.org} className="item">
                <p><strong>{x.role}</strong>, {x.org} | {x.dates}</p>
                <ul>{x.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </div>
            ))}
          </section>

          <section>
            <h3>Projects</h3>
            {projects.map((p) => (
              <div key={p.title} className="item">
                <p><strong>{p.title}</strong> | {p.stack.join(", ")}</p>
                <ul>{p.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
              </div>
            ))}
          </section>

          <section>
            <h3>Skills</h3>
            {skills.map((s) => (
              <p key={s.group}><strong>{s.group}:</strong> {s.items.join(", ")}</p>
            ))}
          </section>
        </article>
      </div>
    </main>
  );
}
