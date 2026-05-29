export interface Project {
	title: string;
	description: string;
	date: string;
	image: string;
	link: string | null;
}

export const projects: Project[] = [
	{
		title: 'Neuversity',
		description: 'Mentor Frontend Development di Neuversity',
		date: 'Jun 2023 - Present',
		image: '/projects/neuversity.jpg',
		link: 'https://maps.app.goo.gl/bTP2cxPCo2sKhSZB8'
	},
	{
		title: 'Fasticket',
		description: 'Frontend Developer untuk Website Fasticket',
		date: 'August 1, 2023',
		image: '/projects/bakoelkarcis.jpg',
		link: 'https://fasticket.id/'
	},
	{
		title: 'Krasanvilla',
		description: 'Web Developer untuk Website Krasanvilla',
		date: 'June 1, 2023',
		image: '/projects/krasanvilla.jpg',
		link: 'https://krasanvilla.com'
	},
	{
		title: 'Gunasehat',
		description: 'Frontend Web Developer untuk website Gunasehat.',
		date: 'April 1, 2022',
		image: '/projects/gunasehat.jpg',
		link: null
	},
	{
		title: 'PDF Preview Komdigi',
		description: 'Create PDF Preview feature for Komdigi pdf',
		date: 'March 24, 2025',
		image: '/projects/flipbook-komdigi.png',
		link: 'https://preview-flipbook-komdigi.pradityaaldi.com/'
	},
	{
		title: 'Perempuan Pandai',
		description: 'Create learning platform for perempuan pandai',
		date: 'Dec 24, 2024',
		image: '/projects/perempuan-pandai.jpg',
		link: 'https://perempuanpandai.org'
	},
	{
		title: 'Trainner',
		description: 'Hard Skill Training: IT Basic for Advertiser',
		date: 'Oct 2024',
		image: '/projects/trainner.jpeg',
		link: 'https://www.linkedin.com/posts/praditya-aldi-syahputra_im-happy-to-share-this-hard-skill-training-activity-7296853678735429632-a5yd/'
	},
	{
		title: 'NU Kaderisasi',
		description: 'Create new pages homepage NU Kaderisasi',
		date: 'Oct 2024',
		image: '/projects/siskader.png',
		link: 'https://siskader.nu.id/'
	}
];
