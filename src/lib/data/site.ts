export const site = {
	name: 'Praditya Aldi Syahputra',
	roles: ['Web Developer', 'Remote worker'],
	location: 'Based in Yogyakarta',
	email: 'pradityaaldi.s@gmail.com',
	bio: [
		"Hi! I'm a frontend developer who loves building clean, responsive, and user-friendly web interfaces. I enjoy working with technologies like JavaScript, React, and CSS to create seamless experiences that make users happy.",
		"While my main focus is on frontend, I also have experience in backend development, which helps me understand the full picture of a web project. I'm always eager to learn new things, explore the latest trends in design, and work on projects that challenge me to grow.",
		"Let's connect and chat about web development, design, or potential collaboration!"
	]
};

export interface SocialLink {
	label: string;
	href: string;
	icon: string; // svg path data
}

export const socials: SocialLink[] = [
	{
		label: 'GitHub',
		href: 'https://github.com/pradityaaldi',
		icon: 'M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.46-1.18-1.11-1.5-1.11-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.72 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z'
	},
	{
		label: 'LinkedIn',
		href: 'https://www.linkedin.com/in/praditya-aldi-syahputra',
		icon: 'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 18.34v-8H5.67v8h2.67Zm-1.33-9.1a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1Zm11.33 9.1v-4.4c0-2.35-1.26-3.45-2.93-3.45-1.35 0-1.96.74-2.3 1.26v-1.08h-2.66c.03.75 0 8 0 8h2.66v-4.47c0-.24.02-.48.09-.65.19-.48.62-.97 1.35-.97.96 0 1.34.72 1.34 1.78v4.31h2.65Z'
	},
	{
		label: 'Email',
		href: 'mailto:pradityaaldi.s@gmail.com',
		icon: 'M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2v.4l8 5 8-5V6H4Zm16 2.8-7.47 4.67a1 1 0 0 1-1.06 0L4 8.8V18h16V8.8Z'
	}
];
