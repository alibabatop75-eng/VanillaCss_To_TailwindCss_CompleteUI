import React from "react";

const TermsAndConditions = () => {
  return (
    <section id="termsandcond" className="min-h-screen pt-32 pb-16 px-4 bg-gradient-to-b from-gray-400/55 to-transparent">
      <div className="container mx-auto max-w-4xl">
        <header className="text-center mb-12">
          <p className="text-gray-500 mb-4">CURRENT AS OF SEP 2024</p>
          <h1 className="text-4xl lg:text-5xl font-rufina text-custom-blue">Terms & Conditions</h1>
        </header>
        
        <div className="content space-y-8">
          <p className="text-gray-700 leading-relaxed">
            Welcome to LUXURY RENTAL. Please read these terms and conditions carefully before using our services.
          </p>
          <p className="text-gray-700 leading-relaxed">
            By accessing or using the Website, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you may not use the Website.
          </p>
          
          <ul className="space-y-8">
            <li>
              <h5 className="text-2xl font-rufina text-custom-blue mb-4">Acceptance of Terms:</h5>
              <p className="text-gray-700 leading-relaxed">
                By using the Website, you acknowledge that you have read, understood, and agree to be bound by these Terms and any future modifications. We reserve the right to update, change, or replace any part of these Terms by posting updates or changes to our Website. Your continued use of the Website constitutes acceptance of those changes.
              </p>
            </li>
            <li>
              <h5 className="text-2xl font-rufina text-custom-blue mb-4">Use of the Website</h5>
              <ol className="list-decimal list-inside space-y-3 ml-6">
                <li className="text-gray-700">You must be at least [age] years old to use the Website.</li>
                <li className="text-gray-700">
                  You agree to use the Website for lawful purposes and in compliance with all applicable laws and regulations.
                </li>
                <li className="text-gray-700">
                  You are solely responsible for maintaining the security of your account and password. We cannot and will not be liable for any loss or damage from your failure to comply with this security obligation.
                </li>
              </ol>
            </li>
            <li>
              <h5 className="text-2xl font-rufina text-custom-blue mb-4">Privacy Policy</h5>
              <p className="text-gray-700 leading-relaxed">
                Your use of the Website is also governed by our Privacy Policy, which is incorporated by reference into these Terms.
              </p>
            </li>
            <li>
              <h5 className="text-2xl font-rufina text-custom-blue mb-4">Intellectual Property</h5>
              <ol className="list-decimal list-inside space-y-3 ml-6">
                <li className="text-gray-700">
                  The content on the Website, including but not limited to text, graphics, logos, images, and software, is the property of [Your Company] and is protected by copyright, trademark, and other intellectual property laws.
                </li>
                <li className="text-gray-700">
                  You may not modify, publish, transmit, participate in the transfer or sale of, reproduce, create derivative works of, distribute, publicly perform, publicly display, or in any way exploit any of the materials or content on the Website.
                </li>
              </ol>
            </li>
            <li>
              <h5 className="text-2xl font-rufina text-custom-blue mb-4">Limitation of Liability</h5>
              <p className="text-gray-700 leading-relaxed">
                To the fullest extent permitted by applicable law, [Your Company] shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your use or inability to use the Website; (b) any unauthorized access to or use of our servers and/or any personal information stored therein; (c) any interruption or cessation of transmission to or from the Website; (d) any bugs, viruses, trojan horses, or the like that may be transmitted to or through our Website by any third party.
              </p>
            </li>
            <li>
              <h5 className="text-2xl font-rufina text-custom-blue mb-4">Governing Law</h5>
              <p className="text-gray-700 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of Jurisdiction. Contact Information If you have any questions about these Terms, please contact us at <span className="text-custom-blue">propertyrental@gmail.com</span>.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;