import React from 'react';

export const ContactSection = () => {
	return (
		<section id="contact" className="py-12 sm:py-20 px-4 scroll-mt-20">
			<div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
				
				<h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-900">
					Let&apos;s Build Something Amazing
				</h2>

				<p className="text-sm sm:text-base text-gray-600 mb-6">
					Looking for a developer who can create high-performance, interactive web experiences?
				</p>

				{/* Location */}
				<div className="flex items-center justify-center gap-2 text-gray-600 mb-8">
					<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
						/>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
						/>
					</svg>
					<span>Chisinau, Moldova</span>
				</div>

				{/* Contact Buttons */}
				<div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">

					{/* Phone Button */}
					<a
						href="tel:+37376736298"
						className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
					>
						<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.518 4.554a1 1 0 01-.502 1.21l-1.93.965a11.042 11.042 0 005.517 5.517l.965-1.93a1 1 0 011.21-.502l4.554 1.518a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C8.268 21 3 15.732 3 9V5z"
							/>
						</svg>
						Call: +373 76 736 298
					</a>

					{/* Email Button */}
					<a
						href="mailto:admin@lecobyte.com"
						className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
					>
						<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
							<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
							<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
						</svg>
						Email Us
					</a>

					{/* Resume */}
					<a
						href="/LM-CV-EN.pdf"
						target="_blank"
						className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
					>
						<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
							<path
								fillRule="evenodd"
								d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
								clipRule="evenodd"
							/>
							<path fillRule="evenodd" d="M8 11a1 1 0 100 2h4a1 1 0 100-2H8zm0-4a1 1 0 100 2h4a1 1 0 100-2H8z" clipRule="evenodd" />
						</svg>
						View Resume
					</a>
				</div>

				{/* Social Links */}
				<div className="flex justify-center gap-6">
					{/* GitHub */}
					<a
						href="https://github.com/LeMax95"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 hover:text-gray-900 transition-colors p-2 hover:bg-gray-100 rounded-lg"
					>
						<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
							<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387..." />
						</svg>
					</a>

					{/* LinkedIn */}
					<a
						href="https://www.linkedin.com/company/lecobyte-web-design-development-studio"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 hover:text-gray-900 transition-colors p-2 hover:bg-gray-100 rounded-lg"
					>
						{/* LinkedIn SVG */}
						...
					</a>

					{/* Google */}
					<a
						href="https://share.google/zoYIxwbIswJOJ918s"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 hover:text-gray-900 transition-colors p-2 hover:bg-gray-100 rounded-lg"
					>
						{/* Google SVG */}
						...
					</a>

					{/* Reddit */}
					<a
						href="https://www.reddit.com/user/LeMa_95/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 hover:text-gray-900 transition-colors p-2 hover:bg-gray-100 rounded-lg"
					>
						{/* Reddit SVG */}
						...
					</a>
				</div>

			</div>
		</section>
	);
};
