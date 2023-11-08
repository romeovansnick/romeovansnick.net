import css from "./styles.module.css"

const skills: Record<string, number> = {
	React: 7,
	JavaScript: 8,
	TypeScript: 6,
	"Node.js": 7,
	Deno: 1,
	Go: 3,
	Webpack: 6,
	Rollup: 3,
	babel: 6,
	GraphQL: 3,
	OpenAPI: 3,
	CSS: 9,
	HTML: 9,
	Redux: 3,
	SVG: 4,
	SQL: 4,
	Postgres: 4,
	Redis: 3,
	nginx: 6,
	lua: 2,
	Docker: 6,
	Jest: 5,
	"Next.js": 2,
	Electron: 1,
	"Frontend Development": 6,
	Cloudflare: 2,
	"Single Page Applications": 5,
	OAuth: 5,
	SSO: 4,
	JWT: 5,
	Kubernetes: 2,
	Rust: 0,
	Arduino: 0,
	Haskell: 0,
	Clojure: 0,
	ClojureScript: 0,
	"WAI-ARIA": 0,
}

const languages = ["Dutch", "English", "German", "French"]
const all = [...Object.keys(skills), ...languages]

export function Skills() {
	return (
		<section className={css.skills}>
			<h2>Skills and Expertise</h2>
			<ul>
				{all.map(function (skill, idx, arr) {
					const last = idx === arr.length - 1
					const years = skills[skill] ?? 0
					return (
						<li role="listitem">
							<span className={css.skill} key={skill}>
								{skill}
								{years > 0 && <span> {years}yrs</span>}
							</span>
							{!last && ",  "}
						</li>
					)
				})}
			</ul>
		</section>
	)
}
