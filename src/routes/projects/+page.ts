import { fetchRepos, GH_PROFILE } from '$lib/data/github';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const repos = await fetchRepos(fetch);
	return { repos, githubUrl: GH_PROFILE };
};
