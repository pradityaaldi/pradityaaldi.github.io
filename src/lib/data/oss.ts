export interface OssProject {
	title: string;
	tagline: string;
	description: string;
	highlight: string;
	stack: string[];
	link: string;
	category: 'AI' | 'Security';
}

export const ossProjects: OssProject[] = [
	{
		title: 'docs-ai',
		tagline: 'Multi-LLM documentation assistant.',
		description:
			'A documentation assistant that talks to multiple LLM providers through a single unified API. It handles provider switching, API orchestration, and a full front-to-back data flow so the app logic never depends on which model is running underneath.',
		highlight: 'Provider-agnostic LLM layer — swap models without touching app logic.',
		stack: ['Full-Stack', 'Multi-LLM API', 'REST', 'API Orchestration'],
		link: 'https://github.com/pradityaaldi/docs-ai',
		category: 'AI'
	},
	{
		title: 'chatbot-react-native-macos',
		tagline: 'Native macOS AI agent with MCP tooling.',
		description:
			'A React Native (macOS) chatbot that runs as an AI agent with Model Context Protocol (MCP) tool integration. MCP gives the assistant real tool-calling abilities — fetching data and triggering actions — well beyond plain chat.',
		highlight: 'MCP tool integration on a native desktop target — uncommon and non-trivial.',
		stack: ['React Native (macOS)', 'AI Agent', 'MCP', 'TypeScript'],
		link: 'https://github.com/pradityaaldi/chatbot-react-native-macos',
		category: 'AI'
	},
	{
		title: 'tele-simple-scan',
		tagline: 'Website security scanner as a Telegram bot.',
		description:
			'A Telegram bot that runs basic website security scans straight from a chat interface — HTTP security headers, SSL/TLS certificate validation, and open-port checks. It is built on an object-oriented scanner core using a facade pattern.',
		highlight: 'Clean OOP scanner design — a facade combining header, SSL, and port scanners.',
		stack: ['Python', 'python-telegram-bot', 'OOP', 'Security Scanning'],
		link: 'https://github.com/pradityaaldi/tele-simple-scan',
		category: 'Security'
	},
	{
		title: 'woles',
		tagline: 'Detect website tech + flag End-of-Life risk.',
		description:
			'A CLI tool that fingerprints the technologies running on a website via Wappalyzer, then checks each detected version against the End-of-Life API. It surfaces outdated, unsupported components that carry real security risk.',
		highlight: 'Cross-references live tech detection with EOL data — practical recon, not just a fingerprinter.',
		stack: ['Python', 'Wappalyzer', 'endoflife.date API', 'CLI'],
		link: 'https://github.com/pradityaaldi/woles',
		category: 'Security'
	}
];

export const ossSkills: string[] = [
	'AI/LLM integration (multi-provider, agents, MCP)',
	'Full-stack development',
	'React Native (macOS)',
	'Python automation & tooling',
	'Web security (scanning, recon, EOL awareness)',
	'Clean architecture (OOP, facade pattern)'
];
