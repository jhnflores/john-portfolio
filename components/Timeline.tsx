import type { Education, Experience } from "@/lib/data";

export function EducationList({ items }: { items: Education[] }) {
  return (
    <ul className="timeline">
      {items.map((e) => (
        <li key={e.degree + e.school}>
          <div className="when">{e.dates}</div>
          <div>
            <h3>{e.degree}</h3>
            <p className="org">{e.school}</p>
            <ul className="plain">
              {e.details.map((d) => <li key={d}>{d}</li>)}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function ExperienceList({ items }: { items: Experience[] }) {
  return (
    <ul className="timeline">
      {items.map((x) => (
        <li key={x.role + x.org}>
          <div className="when">{x.dates}</div>
          <div>
            <h3>{x.role}</h3>
            <p className="org">{x.org}</p>
            <ul className="plain">
              {x.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
}
