export interface Repo {
	name: string;
	description: string | null;
	url: string;
	language: string | null;
	stars: number;
	forks: number;
	topics: string[];
	updated: string;
}

export const GH_USER = 'pradityaaldi';
export const GH_PROFILE = `https://github.com/${GH_USER}`;

// Fetch + normalize public repos. Reused at build time (static prerender, for
// fast first paint + SEO) and again in the browser (for an always-fresh list
// without needing a redeploy). Returns [] on any failure so nothing breaks.
export async function fetchRepos(fetchFn: typeof fetch = fetch): Promise<Repo[]> {
	try {
		const res = await fetchFn(
			`https://api.github.com/users/${GH_USER}/repos?per_page=100&sort=updated`,
			{ headers: { Accept: 'application/vnd.github+json' } }
		);
		if (!res.ok) return [];
		const raw = (await res.json()) as Array<Record<string, any>>;
		return raw
			.filter((r) => !r.fork && !r.archived)
			.map((r) => ({
				name: r.name,
				description: r.description,
				url: r.html_url,
				language: r.language,
				stars: r.stargazers_count ?? 0,
				forks: r.forks_count ?? 0,
				topics: Array.isArray(r.topics) ? r.topics : [],
				updated: r.updated_at
			}))
			.sort((a, b) => b.stars - a.stars || b.updated.localeCompare(a.updated));
	} catch {
		return [];
	}
}
