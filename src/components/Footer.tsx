import React from 'react';
import { cn } from '@/lib/utils';
import { Linkedin } from 'lucide-react';

export function Footer({ className, ...props }: React.ComponentProps<'footer'>) {
	return (
		<footer
			className={cn(
				'border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)]',
				className,
			)}
			{...props}
		>
			<div className="relative mx-auto max-w-7xl px-6 py-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div className="md:col-span-2">
						<div className="flex items-center space-x-3 mb-6">
							<img 
								src="/lovable-uploads/8437d24e-c6d4-40ce-9e2b-9b39b225e490.png" 
								alt="NOSO LABS Logo" 
								className="w-8 h-8"
							/>
							<span className="text-xl font-bold text-foreground">NOSO LABS</span>
						</div>
						<p className="text-muted-foreground text-sm max-w-md leading-relaxed">
							AI-powered HVAC diagnostics from 15M+ manuals. Increase revenue, reduce callbacks, 
							and turn every technician into an expert.
						</p>
						<div className="mt-6">
							<div className="flex items-center space-x-2 mb-2">
								<div className="w-4 h-4 bg-yc-orange rounded-sm flex items-center justify-center">
									<span className="text-white font-bold text-xs">Y</span>
								</div>
								<span className="text-sm font-medium text-foreground">Backed by Y Combinator</span>
							</div>
						</div>
					</div>

					{/* Links */}
					<div>
						<h3 className="text-foreground/75 mb-4 text-xs font-medium tracking-wider uppercase">
							Legal
						</h3>
						<ul className="space-y-3">
							<li>
								<a
									href="/privacy"
									className="text-muted-foreground hover:text-foreground text-sm transition-colors"
								>
									Privacy Policy
								</a>
							</li>
							<li>
								<a
									href="/terms"
									className="text-muted-foreground hover:text-foreground text-sm transition-colors"
								>
									Terms of Service
								</a>
							</li>
						</ul>
					</div>

					{/* Contact & Social */}
					<div>
						<h3 className="text-foreground/75 mb-4 text-xs font-medium tracking-wider uppercase">
							Connect
						</h3>
						<ul className="space-y-3">
							<li>
								<a
									href="/contact"
									className="text-muted-foreground hover:text-foreground text-sm transition-colors"
								>
									Contact
								</a>
							</li>
							<li>
								<a
									href="https://linkedin.com/company/noso-labs"
									className="text-muted-foreground hover:text-foreground text-sm transition-colors flex items-center space-x-2"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Linkedin className="w-4 h-4" />
									<span>LinkedIn</span>
								</a>
							</li>
							<li>
								<a
									href="https://ycombinator.com"
									className="text-muted-foreground hover:text-foreground text-sm transition-colors"
									target="_blank"
									rel="noopener noreferrer"
								>
									Y Combinator
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			
			<div className="border-t">
				<div className="mx-auto max-w-7xl px-6 py-4">
					<p className="text-muted-foreground text-xs text-center">
						© 2025 NOSO LABS. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}