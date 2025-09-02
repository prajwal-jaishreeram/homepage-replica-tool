import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy for NOSO by Noso Labs</h1>
          <p className="text-muted-foreground mb-8">Effective Date: July 17, 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This Privacy Policy describes how Noso Labs (Noso Inc.) collects, uses, and protects information in connection with the NOSO platform. NOSO is an AI assistant platform designed for HVAC technicians and related business use. Noso Labs is committed to safeguarding your privacy and ensuring that we only collect and use business-related data needed to provide our services. By using NOSO, you agree to the practices described in this Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We only collect business information necessary to operate and improve the NOSO service. This includes information that you or your company provide when using NOSO, such as:
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Account Information</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Business contact details of technicians and authorized users (e.g. name, work email address, phone number) used for account creation and login.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Business Data and Job Records</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Information entered into NOSO related to your work, such as service job records, equipment details, diagnostics, notes, or other technical data. This data is about your business operations and not consumer personal information. We do not actively collect personal data about your customers or other individual consumers.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Communications</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Any communications you send to us, including support requests or feedback. If you contact us by email or through support tools, we may keep those communications.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Automatic Data (Usage and Device Information)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When you use our website or platform, we may receive basic technical information automatically. This can include standard log data such as your device type, browser version, IP address, and timestamps of interactions with the service. We use this information purely for operating, securing, and troubleshooting the service. Importantly, we do not use this data to track you across other sites or for advertising purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use the collected information strictly for legitimate business purposes in delivering and improving NOSO. These purposes include:
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Providing and Improving the Service</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use your information to set up your account, authenticate you (for example, sending a verification code to your phone or email), and to enable the AI platform to function for your HVAC diagnostic and documentation tasks. We also analyze usage in an aggregate manner to improve NOSO's features, accuracy, and performance over time.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Business Operations and Support</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Information such as job records and technical data is used to deliver the AI assistance and to maintain reliable operation of the platform. We also use your information to provide customer support, respond to inquiries, and address any issues you report.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Communications</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may use your contact information (email or phone) to send you important service updates, notifications, and administrative messages related to NOSO. For example, we might inform you of new features, security updates, or scheduled downtime. If you provide a phone number for login or support, we will send necessary text messages to authenticate or assist you (standard messaging rates may apply).
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Marketing (Opt-In)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Noso Labs does not engage in any unsolicited or third-party advertising, but we may occasionally send you our own product or feature updates and newsletters if you have an existing business relationship with us. You have the choice to opt out of or unsubscribe from such promotional communications at any time. Opting out of marketing emails will not affect your receipt of important service-related communications (which are not promotional in nature).
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              We do not use personal or business data for any purposes unrelated to NOSO's functionality and your experience. In particular, we do not use your information for targeted advertising, nor do we profile or monitor you beyond what is needed to assist with your HVAC service tasks.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Cookies and Tracking</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We prioritize your privacy by minimizing the use of cookies and similar tracking technologies. NOSO does not use any tracking or advertising cookies. We do not embed third-party advertising trackers or analytics cookies that follow you across other websites.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If our website or application uses any cookies at all, they are strictly limited to essential purposes—for example, to keep you logged in securely or to remember certain preferences so that the service functions correctly. These cookies are typically "session" or functional cookies that enable core features of NOSO.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You can adjust your browser settings to refuse or delete cookies, but please note that doing so might affect some functionality (such as staying logged in). We do not use Google Analytics or similar third-party analytics services that rely on tracking cookies. Instead, any performance or usage analysis we conduct is done in-house or using privacy-focused methods that do not identify individual users.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Because we do not engage in cross-site tracking, we do not respond to "Do Not Track" signals in web browsers; however, we want to emphasize that we do not track your activities across other sites in any case.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Disclosure of Information to Third Parties</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Noso Labs values the trust you place in us and does not sell or rent your personal information to third parties under any circumstances. We also do not share your information with third parties for their own independent marketing or advertising purposes. The information you provide and generate in NOSO is used for your benefit in the context of our service, and we treat it as confidential business information.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may need to share certain information with a limited number of trusted third-party service providers in order to run NOSO effectively. For example, we use third-party infrastructure and services such as Amazon Web Services (AWS) to host and store data securely. Likewise, we might use email or messaging service providers to send authentication codes, notifications, or customer support messages. These service providers act on our behalf and are contractually obligated to use your information only to provide services to Noso Labs (for example, maintaining our cloud servers or facilitating communications) and not for any other purpose. They are required to protect your data and keep it confidential.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Besides service providers, we will only disclose your information in a few special scenarios:
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Legal Compliance</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If we are required by law, regulation, legal process, or governmental request (such as a subpoena or court order) to disclose information, we may do so. We will only provide the minimum necessary information and, if lawful to do so, will inform you of such disclosure.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Protection of Rights and Safety</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may disclose information if we believe it is necessary to enforce our terms of service or other agreements, or to investigate potential violations, fraud, or security issues. We may also share information to protect the rights, property, and safety of Noso Labs, our users, or others as required or permitted by law.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Business Transfers</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In the event that Noso Labs (Noso Inc.) is involved in a merger, acquisition, financing due diligence, reorganization, bankruptcy, receivership, sale of company assets, or transition of service to another provider, your information may be transferred as part of that transaction. If such a transfer occurs, we will ensure that your information remains protected by equivalent privacy obligations, and we will notify you (for example, via email or a notice on our site) of any change in ownership or use of your personal information, as well as any choices you may have regarding that information.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Outside of the above situations, we will not share your personal or business data with any third party unless you direct us to or give us consent for a specific situation. We remain dedicated to keeping your information within the scope of NOSO's services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Data Retention and Security</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Data Retention</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We retain personal and business information only for as long as it is necessary to fulfill the purposes outlined in this Privacy Policy or as required by law. In practice, this means we keep your account and job data while you continue to use NOSO. If you discontinue use of NOSO or request deletion of your data, we will delete or de-identify your personal information within a reasonable timeframe, except to the extent we are required to retain it for legal, tax, or regulatory reasons, or for legitimate business purposes (such as maintaining backup archives or records of a transaction).
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When we no longer need personal information, we remove it from our active systems. Any residual information that remains in our backup or archival systems will continue to be safeguarded until those archives are rotated or deleted.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Security Measures</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We take the security of your data seriously and implement reasonable administrative, technical, and physical safeguards to protect the personal information in our custody. For example, data transmitted between your device and NOSO is encrypted using industry-standard encryption protocols (HTTPS/TLS) to prevent eavesdropping. We store data on secure servers (such as AWS cloud data centers) that employ robust security measures including firewalls and access controls.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We limit access to personal data to authorized Noso Labs personnel and contractors who need it to operate or support the service, and all such individuals are bound by confidentiality obligations. We also maintain internal policies and conduct training aimed at protecting data privacy and security.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Despite our efforts, please understand that no method of transmission over the internet or method of electronic storage is completely secure. While we strive to protect your personal information and use commercially acceptable means to do so, we cannot guarantee absolute security. You share and store data with us at your own risk. If we ever experience a data breach that compromises your personal information, we will notify you and the appropriate authorities as required by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Your Privacy Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              As a user of NOSO, and particularly if you are a resident of California, you have certain rights regarding your personal information. Noso Labs is committed to honoring your rights in accordance with applicable laws such as the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA). These rights include:
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Right to Know</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You have the right to request details about the personal information we have collected about you. This includes the categories of personal information, the sources from which it was collected, the business purpose for collecting it, and the categories of third parties with whom we have shared it (if any). You can also request to receive a copy of the specific pieces of personal information we hold about you.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Right to Delete</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You have the right to request that we delete personal information we have collected from you, subject to certain exceptions. Once we verify a deletion request, we will remove your personal information from our records (and direct our service providers to do the same), unless retaining the information is permitted or required by law (for example, for safety, legal compliance, or internal business purposes like maintaining financial records).
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Right to Correct</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You have the right to request that we correct inaccurate personal information that we maintain about you. If any of your information is out of date or incorrect, please contact us and we will work to update it so that it is accurate and complete.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Right to Opt-Out of Sale/Sharing</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You have the right to opt out of the sale of your personal information or the sharing of your personal information for cross-context behavioral advertising. Note: Noso Labs does not sell your personal information to third parties, nor do we share it for targeted advertising purposes. In other words, we already refrain from these activities by default. If that policy ever changes, we will update this Privacy Policy accordingly and provide a method for you to exercise this opt-out right.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Right to Non-Discrimination</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We will not discriminate against you for exercising any of your privacy rights. This means, for example, we will not deny you service, charge you a different price, or provide a different level of quality because you chose to exercise your rights under privacy laws. Your experience with NOSO will remain the same regardless of whether you have submitted privacy requests.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              To exercise any of your rights described above or to inquire about your privacy rights in your jurisdiction, you can contact us at <a href="mailto:contact@noso.so" className="text-primary hover:underline">contact@noso.so</a>. Please describe your request with sufficient detail so that we can understand and respond to it. For your protection, we will need to verify your identity (or authority, if you are making a request on behalf of someone else) before fulfilling certain requests, such as providing a copy of your data or deleting data. Verification may involve confirming information we already have on file or asking for additional information as necessary. We will use the information you provide in a request only to verify and fulfill your request.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              We aim to respond to privacy requests within the timeframes required by law (for example, within 45 days for most CCPA requests, with an extension if needed which we will communicate to you). If we cannot fulfill your request for a specific legal reason, we will inform you of that reason in our response.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Note for Non-California Users:</strong> Even if you are not a California resident, Noso Labs will strive to honor similar rights and requests regarding your personal information, in line with applicable laws. We believe you should have transparency and control over your data no matter where you live.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may update or modify this Privacy Policy from time to time to reflect changes in our practices, technologies, legal requirements, or for other operational reasons. If we make material changes to how we handle your personal information, we will provide you with notice in a manner appropriate to the significance of the changes. For example, we may post a prominent notice on our website or notify registered users via email or through the NOSO platform.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Each version of this Privacy Policy will be identified by its effective date at the top. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information. Your continued use of NOSO after any changes to this Privacy Policy signifies your acceptance of those changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information and Complaints</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Your privacy is important to us, and we welcome any questions or concerns you might have about this policy or how your information is handled. If you have any questions, feedback, or complaints regarding our Privacy Policy or data practices, please contact us at <a href="mailto:contact@noso.so" className="text-primary hover:underline">contact@noso.so</a>. This is the dedicated email address for privacy inquiries and requests. We will do our best to respond promptly and address your concerns.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Noso Labs is confident in our commitment to privacy and security. However, if you feel that we have not adequately resolved an issue related to your personal information, you may have the right to seek further recourse. This could include contacting your state or national data protection authority or regulatory agency. In California, this may mean reaching out to the California Privacy Protection Agency or the Office of the Attorney General. We hope that you will first allow us the opportunity to address your concerns directly.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Thank you for reading our Privacy Policy. We appreciate your trust in Noso Labs and NOSO, and we are dedicated to maintaining that trust by respecting and protecting your personal and business data.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;