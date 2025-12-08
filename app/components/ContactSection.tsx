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
					<span>Beverly Hills,CA USA</span>
					
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

					{/* Phone Button */}
					<a
						href="tel:+18186968045"
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
						Call: +1(818)-696-8045
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
						<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
					</a>

					{/* LinkedIn */}
					<a
						href="https://www.linkedin.com/company/lecobyte-web-design-development-studio"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 hover:text-gray-900 transition-colors p-2 hover:bg-gray-100 rounded-lg"
					>
						<svg xmlns="http://www.w3.org/2000/svg" aria-label="LinkedIn" role="img" viewBox="0 0 512 512" fill="#ffffff" width="24px" height="24px" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><rect width="512" height="512" rx="15%" fill="#0077b5"></rect><circle cx="142" cy="138" r="37"></circle><path stroke="#ffffff" stroke-width="66" d="M244 194v198M142 194v198"></path><path d="M276 282c0-20 13-40 36-40 24 0 33 18 33 45v105h66V279c0-61-32-89-76-89-34 0-51 19-59 32"></path></g></svg>
					</a>

					{/* Google */}
					<a
						href="https://share.google/zoYIxwbIswJOJ918s"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 hover:text-gray-900 transition-colors p-2 hover:bg-gray-100 rounded-lg"
					>
						<svg width="24px" height="24px" viewBox="-3 0 262 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"></path><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"></path><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"></path><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"></path></svg>
					</a>

					{/* Reddit */}
					<a
						href="https://www.reddit.com/user/LeMa_95/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 hover:text-gray-900 transition-colors p-2 hover:bg-gray-100 rounded-lg"
					>
						<svg width="24px" height="24px" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <circle fill="#FF4500" cx="128" cy="128" r="128"> </circle> <path d="M213.149867,129.220267 C213.149867,118.843733 204.758756,110.603378 194.532978,110.603378 C189.498311,110.603378 184.918756,112.585956 181.562311,115.791644 C168.745244,106.635378 151.195022,100.6848 131.662222,99.9224889 L140.206933,59.9409778 L167.980089,65.8915556 C168.287289,72.9116444 174.084267,78.5578667 181.257956,78.5578667 C188.5824,78.5578667 194.532978,72.6072889 194.532978,65.28 C194.532978,57.9555556 188.5824,52.0049778 181.257956,52.0049778 C176.069689,52.0049778 171.490133,55.0570667 169.353956,59.4830222 L138.377956,52.9208889 C137.462044,52.7672889 136.546133,52.9208889 135.934578,53.3788444 C135.172267,53.8368 134.714311,54.5991111 134.563556,55.5150222 L125.100089,100.073244 C105.262933,100.6848 87.4083556,106.635378 74.4376889,115.945244 C71.0812444,112.739556 66.5016889,110.756978 61.4670222,110.756978 C51.0904889,110.756978 42.8501333,119.148089 42.8501333,129.373867 C42.8501333,137.002667 47.4268444,143.4112 53.8382222,146.312533 C53.5310222,148.141511 53.3802667,149.973333 53.3802667,151.958756 C53.3802667,180.644978 86.7996444,203.995022 128.001422,203.995022 C169.2032,203.995022 202.622578,180.798578 202.622578,151.958756 C202.622578,150.126933 202.468978,148.141511 202.164622,146.312533 C208.573156,143.4112 213.149867,136.849067 213.149867,129.220267 Z M85.2721778,142.495289 C85.2721778,135.170844 91.2227556,129.220267 98.5500444,129.220267 C105.874489,129.220267 111.825067,135.170844 111.825067,142.495289 C111.825067,149.819733 105.874489,155.773156 98.5500444,155.773156 C91.2227556,155.923911 85.2721778,149.819733 85.2721778,142.495289 Z M159.588978,177.746489 C150.432711,186.902756 133.036089,187.514311 128.001422,187.514311 C122.813156,187.514311 105.416533,186.749156 96.4110222,177.746489 C95.04,176.372622 95.04,174.236444 96.4110222,172.862578 C97.7848889,171.491556 99.9210667,171.491556 101.294933,172.862578 C107.094756,178.6624 119.303111,180.644978 128.001422,180.644978 C136.699733,180.644978 149.058844,178.6624 154.705067,172.862578 C156.078933,171.491556 158.215111,171.491556 159.588978,172.862578 C160.809244,174.236444 160.809244,176.372622 159.588978,177.746489 Z M157.1456,155.923911 C149.821156,155.923911 143.870578,149.973333 143.870578,142.648889 C143.870578,135.324444 149.821156,129.373867 157.1456,129.373867 C164.472889,129.373867 170.423467,135.324444 170.423467,142.648889 C170.423467,149.819733 164.472889,155.923911 157.1456,155.923911 Z" fill="#FFFFFF" fill-rule="nonzero"> </path> </g> </g></svg>
					</a>
				</div>

			</div>
		</section>
	);
};
