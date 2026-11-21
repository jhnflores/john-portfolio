import type { Metadata } from "next";
import Image from "next/image";
import { profile, skills, education, experience } from "@/lib/data";
import { EducationList, ExperienceList } from "@/components/Timeline";

export const metadata: Metadata = { title: "About" };

export default function About() {
  return (
    <main>
      <section className="page-head">
        <div className="wrap">
          <h1>About me</h1>
        </div>
      </section>

      <section className="section">
        <div className="wrap split wide-left">
          <div className="prose">
            {profile.about.map((p) => <p key={p}>{p}</p>)}
          </div>
          <div className="side">
          <figure className="portrait">
            <Image src="/john-formal.jpg" alt="Formal portrait of John Earl Flores" width={720} height={720} sizes="(max-width: 700px) 90vw, 340px" />
          </figure>
          <dl className="facts">
            {profile.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <h2>Education</h2>
          <EducationList items={education} />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Experience</h2>
          <ExperienceList items={experience} />
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <h2>Skills</h2>
          <dl className="skills">
            {skills.map((s) => (
              <div key={s.group}>
                <dt>{s.group}</dt>
                <dd>{s.items.map((i) => <span className="chip" key={i}>{i}</span>)}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </main>
  );
}
