import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const SocialProofSection = () => {
  return (
    <section className="py-20 bg-section-light">
      <div className="max-w-7xl mx-auto px-6">
        {/* Customer Testimonial */}
        <Card className="max-w-4xl mx-auto border-none shadow-lg">
          <CardContent className="p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="flex text-yc-orange">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <blockquote className="text-2xl font-medium text-foreground mb-6 leading-relaxed">
              "This AI is amazing, I got an extra $700 for this job by adding the electrician work it recommended"
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-tech-blue rounded-full flex items-center justify-center">
                <span className="text-white font-bold">E</span>
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">Eric</p>
                <p className="text-sm text-muted-foreground">Personal Plumbing</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-foreground mb-2">15M+</div>
            <p className="text-muted-foreground">HVAC Manuals Processed</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-success-green mb-2">10x</div>
            <p className="text-muted-foreground">Faster Diagnostics</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-tech-blue mb-2">5-10%</div>
            <p className="text-muted-foreground">Revenue Increase</p>
          </div>
        </div>

        {/* Compliance Badges */}
        <div className="flex justify-center flex-wrap gap-4 mt-16">
          <Badge variant="outline" className="text-xs">SOC 2 Type 1</Badge>
          <Badge variant="outline" className="text-xs">GDPR Compliant</Badge>
          <Badge variant="outline" className="text-xs">CCPA Compliant</Badge>
          <Badge variant="outline" className="text-xs">ISO/IEC 27001</Badge>
        </div>
      </div>
    </section>
  );
};