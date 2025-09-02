import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms and Conditions</h1>
          <p className="text-muted-foreground mb-8">Effective Date: 06/05/2025</p>

          <div className="bg-muted/50 border border-foreground rounded-lg p-6 mb-8">
            <p className="text-foreground font-medium leading-relaxed">
              <strong>PLEASE READ THE TERMS AND CONDITIONS CAREFULLY. THE TERMS AND CONDITIONS ("AGREEMENT") CONSTITUTE A LEGAL AGREEMENT BETWEEN YOU AND NOSO.</strong>
            </p>
            <p className="text-foreground font-medium leading-relaxed mt-4">
              <strong>SECTION 13 OF THIS AGREEMENT CONTAINS PROVISIONS THAT GOVERN HOW CLAIMS THAT YOU AND WE HAVE AGAINST EACH OTHER ARE RESOLVED, INCLUDING, WITHOUT LIMITATION, ANY CLAIMS THAT AROSE OR WERE ASSERTED BEFORE THE EFFECTIVE DATE OF THIS AGREEMENT. IN PARTICULAR, SECTION 13 SETS FORTH OUR ARBITRATION AGREEMENT WHICH WILL, WITH LIMITED EXCEPTIONS, REQUIRE DISPUTES BETWEEN US TO BE SUBMITTED TO BINDING AND FINAL ARBITRATION. PLEASE SEE SECTION 13 FOR MORE INFORMATION REGARDING THIS ARBITRATION AGREEMENT, THE POSSIBLE EFFECTS OF THIS ARBITRATION AGREEMENT.</strong>
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">1 / PURPOSE</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Noso Inc ("Noso," "we," "us," or "our") provides a platform which offers AI assistant tools and services. By using the Noso website/mobile application and any of the information and services offered through the application ("Services"), you agree to be bound by this Agreement. The success of the Services, however, depends on the adherence to the terms of this Agreement by you and other Users (collectively "you," "your," or "Users"). While we will do our best to enforce the terms of this Agreement, we cannot warrant or represent that other Users will in fact adhere to this Agreement and cannot act as insurers or accept any liability for their failure to do so.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">2 / ELIGIBILITY</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              By accessing or using the Services in any way, clicking on a button or taking similar action to signify your affirmative acceptance of this Agreement, you hereby represent that:
            </p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed mb-4 space-y-2">
              <li>You have read, understand, and agree to be bound by this Agreement and any future amendments and additions to this Agreement as published from time to time at this link or through the Services;</li>
              <li>You are 16 or older;</li>
              <li>You have the authority to enter into the Agreement personally. Except as otherwise provided herein, if you do not agree to be bound by the Agreement, you may not access or use the Services; and,</li>
              <li>You will comply with all applicable laws, including those of the country, state and city in which you are present while using the Services.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">3 / ACCESS</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Access</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              By entering into this Agreement, you will be granted a revocable license to access the Services without charge. Your access privileges, however, are conditioned on your adherence to the terms of this Agreement. We reserve the right to temporarily deny you access to the Services or permanently terminate your access privileges at any time if, in our sole discretion, you have failed to abide by the terms of this Agreement or appear to us likely to do so. By agreeing to grant you access, we do not obligate ourselves to do so or to maintain the Services, or to maintain it in its present form, and we expressly reserve the right to modify, suspend, or terminate your access privileges.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Prohibited Uses</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You understand, acknowledge, and agree that any access or use of the Services shall be solely on behalf of you or your organization, and that you have all authorizations and rights necessary to use any portion of the Services on behalf of your organization.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Privileges Nontransferable</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Your access privileges may not be transferred by you to any third parties.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Passwords and Security</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You agree not to disclose to anyone your confidential password and to notify us immediately if there has been a breach of your security that affects our Services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">17 / CONTACT INFORMATION</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <a href="mailto:support@noso.com" className="text-primary hover:underline">support@noso.com</a>
            </p>
          </section>

          <div className="bg-muted/50 border border-foreground rounded-lg p-6 mt-8">
            <p className="text-sm text-muted-foreground text-center">
              These terms and conditions are effective as of the date specified above and may be updated from time to time. Please review them regularly to stay informed of any changes.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;