import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Lecobyte - Web Design & Development Studio',
	description:
		'Los Angeles web developer building modern websites, web apps, and tools with a personal, flexible approach that helps businesses grow online.',
	keywords: [
		'Web Ddesign',
		'Web Designer',
		'Shopify',
		'Wordpress',
		'Web Developer',
		'Frontend Developer',
		'React Developer',
		'Next.js',
		'JavaScript',
		'TypeScript',
		'HTML5',
		'CSS3',
		'Responsive Design',
		'UI/UX',
		'Web Accessibility',
		'Performance Optimization',
		'Modern Web Development',
		'Progressive Web Apps',
		'Max Leconiuc',
	],
	authors: [{ name: 'Max Leconiuc' }],
	creator: 'Max Leconiuc',
	openGraph: {
		title: 'Lecobyte - Web Design & Development Studio',
		description: 'Modern websites and web apps crafted in Los Angeles by Lecobyte — flexible, personal, and built to help your business grow.',
		url: 'https://lecobyte.com',
		siteName: 'Lecobyte - Web Design & Development Studio',
		images: [
			{
				url: 'public/High-Resolution-Logo-Black-on-White-Background.png',
				width: 1200,
				height: 630,
				alt: 'Lecobyte - Web Design & Development Studio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Lecobyte - Web Design & Development Studio',
		description: 'Modern websites and web apps crafted in Los Angeles by Lecobyte — flexible, personal, and built to help your business grow.',
		creator: '@yourusername',
		images: ['public/High-Resolution-Logo-Black-on-White-Background.png'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
