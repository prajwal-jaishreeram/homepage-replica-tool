import React, { useEffect, useRef } from 'react';
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface BentoItemProps {
  className?: string;
  children: React.ReactNode;
}

// Reusable BentoItem component
const BentoItem = ({ className, children }: BentoItemProps) => {
    const itemRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const item = itemRef.current;
        if (!item) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            item.style.setProperty('--mouse-x', `${x}px`);
            item.style.setProperty('--mouse-y', `${y}px`);
        };

        item.addEventListener('mousemove', handleMouseMove);

        return () => {
            item.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div 
            ref={itemRef} 
            className={cn(
                "relative overflow-hidden rounded-lg bg-card border border-border p-6 transition-all duration-300",
                "before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/10 before:to-transparent before:opacity-0",
                "hover:before:opacity-100 hover:shadow-lg hover:shadow-primary/20 hover:border-primary/50",
                "before:transition-opacity before:duration-300",
                className
            )}
        >
            {children}
        </div>
    );
};

// Main Component
export const CyberneticBentoGrid = () => {
    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-auto">
                    {/* Testimonial - spans 2 columns and 2 rows */}
                    <BentoItem className="lg:col-span-2 lg:row-span-2 flex flex-col justify-between min-h-[300px]">
                        <div>
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <blockquote className="text-xl font-medium text-foreground mb-6 leading-relaxed">
                                "This AI is amazing, I got an extra $700 for this job by adding the electrician work it recommended"
                            </blockquote>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                                <span className="text-primary-foreground font-bold">E</span>
                            </div>
                            <div>
                                <p className="font-semibold text-foreground">Eric</p>
                                <p className="text-sm text-muted-foreground">Personal Plumbing</p>
                            </div>
                        </div>
                    </BentoItem>

                    {/* HVAC Manuals Processed */}
                    <BentoItem className="text-center">
                        <div className="text-3xl font-bold text-foreground mb-2">15M+</div>
                        <p className="text-muted-foreground text-sm">HVAC Manuals Processed</p>
                    </BentoItem>

                    {/* Faster Diagnostics */}
                    <BentoItem className="text-center">
                        <div className="text-3xl font-bold text-primary mb-2">10x</div>
                        <p className="text-muted-foreground text-sm">Faster Diagnostics</p>
                    </BentoItem>

                    {/* Revenue Increase */}
                    <BentoItem className="text-center lg:row-span-1">
                        <div className="text-3xl font-bold text-primary mb-2">5-10%</div>
                        <p className="text-muted-foreground text-sm">Revenue Increase</p>
                    </BentoItem>

                    {/* Compliance Badges - spans 2 columns */}
                    <BentoItem className="lg:col-span-2">
                        <h3 className="text-lg font-semibold text-foreground mb-4 text-center">Security & Compliance</h3>
                        <div className="flex justify-center flex-wrap gap-3">
                            <Badge variant="outline" className="text-xs">SOC 2 Type 1</Badge>
                            <Badge variant="outline" className="text-xs">GDPR Compliant</Badge>
                            <Badge variant="outline" className="text-xs">CCPA Compliant</Badge>
                            <Badge variant="outline" className="text-xs">ISO/IEC 27001</Badge>
                        </div>
                    </BentoItem>
                </div>
            </div>
        </section>
    );
};