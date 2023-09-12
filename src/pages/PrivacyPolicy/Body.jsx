import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

function Body ()
{
  return (
    <section className='blog'>
      <div className="blog-container">
        <div >
          <h1 style={ { fontSize: "8rem" } } className="h1">
            Privacy Policy
          </h1>
          <h4
            style={ { fontSize: "1.6rem", fontStyle: "italic" } }
            className="h4"
          >
            Last updated September 06, 2023
          </h4>
          {/* Under Line */ }
          {/* Body  */ }
          <hr />
          <p>
            This privacy notice for The Bengal Studio ("we," "us," or "our"),
            describes how and why we might collect, store, use, and/or share
            ("process") your information when you use our services ("Services"),
            such as when you:
          </p>
          <p>
            - Visit our website at https://dillkhush.com, or any website of ours
            that links to this privacy notice
            <br />
            <br />
            - Download and use our mobile application (dillkhush), our Facebook
            application (dillkhush), or any other application of ours that links
            to this privacy notice
            <br />
            <br />- Engage with us in other related ways, including any sales,
            marketing, or events
          </p>
          <p>
            <span style={ { fontStyle: "italic", fontSize: "1.6rem" } }>
              Questions or concerns?{ " " }
            </span>
            Questions or concerns? Reading this privacy notice will help you
            understand your privacy rights and choices. If you do not agree with
            our policies and practices, please do not use our Services. If you
            still have any questions or concerns, please contact us at
            https://thebengalstudio.com/payment-policy.
          </p>
          <h1>SUMMARY OF KEY POINTS</h1>
          <p style={ { fontStyle: "italic" } }>
            This summary provides key points from our privacy notice, but you
            can find out more details about any of these topics by clicking the
            link following each key point or by using our{ " " }
            <a href="#table_of_contents" >
              { " " }
              table of contents
            </a>{ " " }
            below to find the section you are looking for.
          </p>
          <div style={ { fontSize: "1.4rem", fontWeight: "700" } }>
            What personal information do we process?{ " " }
          </div>{ " " }
          <p>
            When you visit, use, or navigate our Services, we may process
            personal information depending on how you interact with us and the
            Services, the choices you make, and the products and features you
            use. Learn more about{ " " }
            <a href="#in-focus">
              { " " }
              personal information you disclose to us.
            </a>
          </p>
          <div style={ { fontSize: "1.4rem", fontWeight: "700" } }>
            Do we process any sensitive personal information?{ " " }
          </div>{ " " }
          <p>We do not process sensitive personal information.</p>
          <div style={ { fontSize: "1.4rem", fontWeight: "700" } }>
            Do we receive any information from third parties?{ " " }
          </div>{ " " }
          <p>We do not receive any information from third parties.</p>
          <div style={ { fontSize: "1.4rem", fontWeight: "700" } }>
            How do we process your information?
          </div>{ " " }
          <p>
            We process your information to provide, improve, and administer our
            Services, communicate with you, for security and fraud prevention,
            and to comply with law. We may also process your information for
            other purposes with your consent. We process your information only
            when we have a valid legal reason to do so. Learn more about{ " " }
            <a href="#2">
              { " " }
              how we process your information.
            </a>
          </p>
          <div style={ { fontSize: "1.4rem", fontWeight: "700" } }>
            In what situations and with which parties do we share personal
            information?
          </div>{ " " }
          <p>
            We may share information in specific situations and with specific
            third parties. Learn more about{ " " }
            <a href="#4">
              when and with whom we share your personal information.
            </a>
          </p>
          <div style={ { fontSize: "1.4rem", fontWeight: "700" } }>
            How do we keep your information safe?{ " " }
          </div>{ " " }
          <p>
            We have organizational and technical processes and procedures in
            place to protect your personal information. However, no electronic
            transmission over the internet or information storage technology can
            be guaranteed to be 100% secure, so we cannot promise or guarantee
            that hackers, cybercriminals, or other unauthorized third parties
            will not be able to defeat our security and improperly collect,
            access, steal, or modify your information. Learn more about{ " " }
            <a href="#9">
              how we keep your information safe.
            </a>
          </p>
          <div style={ { fontSize: "1.4rem", fontWeight: "700" } }>
            What are your rights?{ " " }
          </div>{ " " }
          <p>
            Depending on where you are located geographically, the applicable
            privacy law may mean you have certain rights regarding your personal
            information. Learn more about{ " " }
            <a href="#11">
              your privacy rights.
            </a>
          </p>
          <div style={ { fontSize: "1.4rem", fontWeight: "700" } }>
            How do you exercise your rights?{ " " }
          </div>{ " " }
          <p>
            The easiest way to exercise your rights is by submitting a{ " " }
            <a href="#17">
              data subject access request,{ " " }
            </a>
            or by contacting us. We will consider and act upon any request in
            accordance with applicable data protection laws.
          </p>
          <p>
            Want to learn more about what we do with any information we collect?
            <a href="#privacy-policy">
              Review the privacy notice in full.
            </a>
          </p>


          <div id="table_of_contents">
            <h1>TABLE OF CONTENTS</h1>
            <div>
              <a href="#1" style={ { textDecoration: "none" } }>
                { " " }
                <p>1. WHAT INFORMATION DO WE COLLECT?</p>
              </a>
              <a href="#2" style={ { textDecoration: "none" } }>
                <p>2. HOW DO WE PROCESS YOUR INFORMATION?</p>
              </a>
              <a href="#3" style={ { textDecoration: "none" } }>
                <p>
                  3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL
                  INFORMATION?
                </p>
              </a>
              <a href="#4" style={ { textDecoration: "none" } }>
                <p>4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</p>
              </a>
              <a href="#5" style={ { textDecoration: "none" } }>
                <p>5. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?</p>
              </a>
              <a href="#6" style={ { textDecoration: "none" } }>
                <p>6. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</p>
              </a>
              <a href="#7" style={ { textDecoration: "none" } }>
                <p>7. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</p>
              </a>
              <a href="#8" style={ { textDecoration: "none" } }>
                <p>8. HOW LONG DO WE KEEP YOUR INFORMATION?</p>
              </a>
              <a href="#9" style={ { textDecoration: "none" } }>
                <p>9. HOW DO WE KEEP YOUR INFORMATION SAFE?</p>
              </a>
              <a href="#10" style={ { textDecoration: "none" } }>
                <p>10. DO WE COLLECT INFORMATION FROM MINORS?</p>
              </a>
              <a href="#11" style={ { textDecoration: "none" } }>
                <p>11. WHAT ARE YOUR PRIVACY RIGHTS?</p>
              </a>
              <a href="#12" style={ { textDecoration: "none" } }>
                <p>12. CONTROLS FOR DO-NOT-TRACK FEATURES</p>
              </a>
              <a href="#13" style={ { textDecoration: "none" } }>
                <p>13. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</p>
              </a>
              <a href="#14" style={ { textDecoration: "none" } }>
                <p>14. DO VIRGINIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</p>
              </a>
              <a href="#15" style={ { textDecoration: "none" } }>
                <p>15. DO WE MAKE UPDATES TO THIS NOTICE?</p>
              </a>
              <a href="#16" style={ { textDecoration: "none" } }>
                <p>16. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</p>
              </a>
              <a href="#17" style={ { textDecoration: "none" } }>
                <p>
                  17. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT
                  FROM YOU?
                </p>
              </a>
            </div>
          </div>

          <div id="1">
            <h1>1. WHAT INFORMATION DO WE COLLECT?</h1>
            <h3 style={ { fontSize: "1.6rem", color: "black" } } id="in-focus" className="h4">
              Personal information you disclose to us
            </h3>
            <p>
              <span
                style={ {
                  fontSize: "1.6rem",
                  color: "#9E9FA5",
                  fontWeight: "700",
                } }
              >
                In Short:
              </span>{ " " }
              We collect personal information that you provide to us. We collect
              personal information that you voluntarily provide to us when you
              register on the Services, express an interest in obtaining
              information about us or our products and Services, when you
              participate in activities on the Services, or otherwise when you
              contact us.
            </p>
            <p>
              <span
                style={ {
                  fontSize: "1.6rem",
                  color: "#9E9FA5",
                  fontWeight: "700",
                } }
              >
                Personal Information Provided by You.
              </span>{ " " }
              The personal information that we collect depends on the context of
              your interactions with us and the Services, the choices you make,
              and the products and features you use. The personal information we
              collect may include the following:
              <p>- billing addresses</p>
              <p>- contact or authentication data</p>
              <p>- contact preferences</p>
              <p>- usernames</p>
              <p>- job titles</p>
              <p>- mailing addresses</p>
              <p>- email addresses</p>
              <p>- phone numbers</p>
            </p>
            <p>
              <h3 style={ { fontSize: "1.6rem", color: "black" } } className="h4">
                Sensitive Information.
              </h3>{ " " }
              We do not process sensitive information.
            </p>
            <p>
              <h3 style={ { fontSize: "1.6rem", color: "black" } } className="h4">
                Payment Data.
              </h3>{ " " }
              We may collect data necessary to process your payment if you make
              purchases, such as your payment instrument number, and the
              security code associated with your payment instrument. All payment
              data is stored by The Bengal Studio. You may find their privacy
              notice link(s) here:
              <a href="https://thebengalstudio.com/privacy-policy">
                https://thebengalstudio.com/privacy-policy
              </a>
              .
            </p>
            <p>
              <span
                style={ {
                  fontSize: "1.6rem",
                  color: "#9E9FA5",
                  fontWeight: "700",
                } }
              >
                Social Media Login Data.
              </span>{ " " }
              We may provide you with the option to register with us using your
              existing social media account details, like your Facebook,
              Twitter, or other social media account. If you choose to register
              in this way, we will collect the information described in the
              section called "HOW DO WE HANDLE YOUR SOCIAL LOGINS?" below
            </p>
            <p>
              <span
                style={ {
                  fontSize: "1.6rem",
                  color: "#9E9FA5",
                  fontWeight: "700",
                } }
              >
                Application Data.
              </span>{ " " }
              If you use our application(s), we also may collect the following
              information if you choose to provide us with access or permission:
            </p>
            <p>
              - Geolocation Information. We may request access or permission to
              track location-based information from your mobile device, either
              continuously or while you are using our mobile application(s), to
              provide certain location-based services. If you wish to change our
              access or permissions, you may do so in your device's settings.
            </p>
            <p>
               Mobile Device Access. We may request access or permission to
              certain features from your mobile device, including your mobile
              device's calendar, bluetooth, camera, contacts, microphone,
              reminders, sensors, sms messages, social media accounts, storage,
              call, phone, and other features. If you wish to change our access
              or permissions, you may do so in your device's settings.
            </p>
            <p>
               Mobile Device Data. We automatically collect device information
              (such as your mobile device ID, model, and manufacturer),
              operating system, version information and system configuration
              information, device and application identification numbers,
              browser type and version, hardware model Internet service provider
              and/or mobile carrier, and Internet Protocol (IP) address (or
              proxy server). If you are using our application(s), we may also
              collect information about the phone network associated with your
              mobile device, your mobile device’s operating system or platform,
              the type of mobile device you use, your mobile device’s unique
              device ID, and information about the features of our
              application(s) you accessed.
            </p>
            <p>
               Push Notifications. We may request to send you push
              notifications regarding your account or certain features of the
              application(s). If you wish to opt out from receiving these types
              of communications, you may turn them off in your device's
              settings.
            </p>
            <p>
              This information is primarily needed to maintain the security and
              operation of our application(s), for troubleshooting, and for our
              internal analytics and reporting purposes.
            </p>
            <p>
              All personal information that you provide to us must be true,
              complete, and accurate, and you must notify us of any changes to
              such personal information.
            </p>
            <h3>Information automatically collected</h3>
            <p>
              In Short: Some information — such as your Internet Protocol (IP)
              address and/or browser and device characteristics — is collected
              automatically when you visit our Services
            </p>
            <p>
              We automatically collect certain information when you visit, use,
              or navigate the Services. This information does not reveal your
              specific identity (like your name or contact information) but may
              include device and usage information, such as your IP address,
              browser and device characteristics, operating system, language
              preferences, referring URLs, device name, country, location,
              information about how and when you use our Services, and other
              technical information. This information is primarily needed to
              maintain the security and operation of our Services, and for our
              internal analytics and reporting purposes.
            </p>
            <p>
              Like many businesses, we also collect information through cookies
              and similar technologies. You can find out more about this in our
              Cookie Notice: https://dillkhush.com/cookie-policy.
            </p>
            <p>The information we collect includes:</p>
            <p>
               Log and Usage Data. Log and usage data is service-related,
              diagnostic, usage, and performance information our servers
              automatically collect when you access or use our Services and
              which we record in log files. Depending on how you interact with
              us, this log data may include your IP address, device information,
              browser type, and settings and information about your activity in
              the Services (such as the date/time stamps associated with your
              usage, pages and files viewed, searches, and other actions you
              take such as which features you use), device event information
              (such as system activity, error reports (sometimes called "crash
              dumps"), and hardware settings).
            </p>
            <p>
                Device Data. We collect device data such as information about
              your computer, phone, tablet, or other device you use to access
              the Services. Depending on the device used, this device data may
              include information such as your IP address (or proxy server),
              device and application identification numbers, location, browser
              type, hardware model, Internet service provider and/or mobile
              carrier, operating system, and system configuration information.
            </p>
            <p>
               Location Data. We collect location data such as information
              about your device's location, which can be either precise or
              imprecise. How much information we collect depends on the type and
              settings of the device you use to access the Services. For
              example, we may use GPS and other technologies to collect
              geolocation data that tells us your current location (based on
              your IP address). You can opt out of allowing us to collect this
              information either by refusing access to the information or by
              disabling your Location setting on your device. However, if you
              choose to opt out, you may not be able to use certain aspects of
              the Services.
            </p>
            <p>
              Information collected when you use our Facebook application(s). We
              by default access your Facebook basic account information,
              including your name, email, gender, birthday, current city, and
              profile picture URL, as well as other information that you choose
              to make public. We may also request access to other permissions
              related to your account, such as friends, check-ins, and likes,
              and you may choose to grant or deny us access to each individual
              permission. For more information regarding Facebook permissions,
              refer to the Facebook Permissions Reference page.
            </p>
          </div>
          <div id="2">
            <h1>2. HOW DO WE PROCESS YOUR INFORMATION?</h1>
            <p>
              { " " }
              In Short: We process your information to provide, improve, and
              administer our Services, communicate with you, for security and
              fraud prevention, and to comply with law. We may also process your
              information for other purposes with your consent
            </p>
            <p>
              <span style={ { fontSize: "1.6rem", color: "black" } }>
                We process your personal information for a variety of reasons,
                depending on how you interact with our Services, including:
              </span>
            </p>
            <p>
               To facilitate account creation and authentication and otherwise
              manage user accounts. We may process your information so you can
              create and log in to your account, as well as keep your account in
              working order.
            </p>
            <p>
               To save or protect an individual's vital interest. We may
              process your information when necessary to save or protect an
              individual’s vital interest, such as to prevent harm.
            </p>
          </div>
          <div id="3">
            <h1>
              3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?
            </h1>
            <p>
              In Short: We only process your personal information when we
              believe it is necessary and we have a valid legal reason (i.e.,
              legal basis) to do so under applicable law, like with your
              consent, to comply with laws, to provide you with services to
              enter into or fulfill our contractual obligations, to protect your
              rights, or to fulfill our legitimate business interests.
            </p>
            <p>
              If you are located in the EU or UK, this section applies to you.
            </p>
            <p>
              The General Data Protection Regulation (GDPR) and UK GDPR require
              us to explain the valid legal bases we rely on in order to process
              your personal information. As such, we may rely on the following
              legal bases to process your personal information:
            </p>
            <p>
               Consent. We may process your information if you have given us
              permission (i.e., consent) to use your personal information for a
              specific purpose. You can withdraw your consent at any time. Learn
              more about withdrawing your consent.
            </p>
            <p>
               Legal Obligations. We may process your information where we
              believe it is necessary for compliance with our legal obligations,
              such as to cooperate with a law enforcement body or regulatory
              agency, exercise or defend our legal rights, or disclose your
              information as evidence in litigation in which we are involved
            </p>
            <p>
               Vital Interests. We may process your information where we
              believe it is necessary to protect your vital interests or the
              vital interests of a third party, such as situations involving
              potential threats to the safety of any person.
            </p>
            <p>If you are located in Canada, this section applies to you.</p>
            <p>
              We may process your information if you have given us specific
              permission (i.e., express consent) to use your personal
              information for a specific purpose, or in situations where your
              permission can be inferred (i.e., implied consent). You can
              withdraw your consent at any time.
            </p>
            <p>
              In some exceptional cases, we may be legally permitted under
              applicable law to process your information without your consent,
              including, for example:
            </p>
            <p>
               If collection is clearly in the interests of an individual and
              consent cannot be obtained in a timely way
            </p>
            <p> For investigations and fraud detection and prevention</p>
            <p>
               For business transactions provided certain conditions are met
            </p>
            <p>
               If it is contained in a witness statement and the collection is
              necessary to assess, process, or settle an insurance claim
            </p>
            <p>
               For identifying injured, ill, or deceased persons and
              communicating with next of kin
            </p>
            <p>
               If we have reasonable grounds to believe an individual has been,
              is, or may be victim of financial abuse
            </p>
            <p>
               If it is reasonable to expect collection and use with consent
              would compromise the availability or the accuracy of the
              information and the collection is reasonable for purposes related
              to investigating a breach of an agreement or a contravention of
              the laws of Canada or a province
            </p>
            <p>
               If disclosure is required to comply with a subpoena, warrant,
              court order, or rules of the court relating to the production of
              records
            </p>
            <p>
               If it was produced by an individual in the course of their
              employment, business, or profession and the collection is
              consistent with the purposes for which the information was
              produced
            </p>
            <p>
               If the collection is solely for journalistic, artistic, or
              literary purposes
            </p>
            <p>
               If the information is publicly available and is specified by the
              regulations
            </p>
          </div>
          <div id="4">
            <h1>
              4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
            </h1>
            <p>
              In Short: We may share information in specific situations
              described in this section and/or with the following third parties.
              We may need to share your personal information in the following
              situations:
            </p>
            <p>
               Business Transfers. We may share or transfer your information in
              connection with, or during negotiations of, any merger, sale of
              company assets, financing, or acquisition of all or a portion of
              our business to another company.
            </p>
            <p>
               When we use Google Maps Platform APIs. We may share your
              information with certain Google Maps Platform APIs (e.g., Google
              Maps API, Places API). We obtain and store on your device
              ("cache") your location for six (6) months. You may revoke your
              consent anytime by contacting us at the contact details provided
              at the end of this document.
            </p>
            <p>
               Offer Wall. Our application(s) may display a third-party hosted
              "offer wall." Such an offer wall allows third-party advertisers to
              offer virtual currency, gifts, or other items to users in return
              for the acceptance and completion of an advertisement offer. Such
              an offer wall may appear in our application(s) and be displayed to
              you based on certain data, such as your geographic area or
              demographic information. When you click on an offer wall, you will
              be brought to an external website belonging to other persons and
              will leave our application(s). A unique identifier, such as your
              user ID, will be shared with the offer wall provider in order to
              prevent fraud and properly credit your account with the relevant
              reward.
            </p>
          </div>
          <div id="5">
            <h1>5. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?</h1>
            <p>
              In Short: We are not responsible for the safety of any information
              that you share with third parties that we may link to or who
              advertise on our Services, but are not affiliated with, our
              Services.
            </p>
            <p>
              The Services, including our offer wall, may link to third-party
              websites, online services, or mobile applications and/or contain
              advertisements from third parties that are not affiliated with us
              and which may link to other websites, services, or applications.
              Accordingly, we do not make any guarantee regarding any such third
              parties, and we will not be liable for any loss or damage caused
              by the use of such third-party websites, services, or
              applications. The inclusion of a link towards a third-party
              website, service, or application does not imply an endorsement by
              us. We cannot guarantee the safety and privacy of data you provide
              to any third parties. Any data collected by third parties is not
              covered by this privacy notice. We are not responsible for the
              content or privacy and security practices and policies of any
              third parties, including other websites, services, or applications
              that may be linked to or from the Services. You should review the
              policies of such third parties and contact them directly to
              respond to your questions.
            </p>
          </div>
          <div id="6">
            <h1>6. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h1>
            <p>
              In Short: We may use cookies and other tracking technologies to
              collect and store your information. We may use cookies and similar
              tracking technologies (like web beacons and pixels) to access or
              store information. Specific information about how we use such
              technologies and how you can refuse certain cookies is set out in
              our Cookie Notice:{ " " }
              <a href="https://dillkhush.com/cookie-policy">
                https://dillkhush.com/cookie-policy.
              </a>
            </p>
          </div>
          <div id="7">
            <h1>7. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</h1>
            <p>
              In Short: If you choose to register or log in to our Services
              using a social media account, we may have access to certain
              information about you. Our Services offer you the ability to
              register and log in using your third-party social media account
              details (like your Facebook or Twitter logins). Where you choose
              to do this, we will receive certain profile information about you
              from your social media provider. The profile information we
              receive may vary depending on the social media provider concerned,
              but will often include your name, email address, friends list, and
              profile picture, as well as other information you choose to make
              public on such a social media platform. If you log in using
              Facebook, we may also request access to other permissions related
              to your account, such as your friends, check-ins, and likes, and
              you may choose to grant or deny us access to each individual
              permission.
            </p>
            <p>
              We will use the information we receive only for the purposes that
              are described in this privacy notice or that are otherwise made
              clear to you on the relevant Services. Please note that we do not
              control, and are not responsible for, other uses of your personal
              information by your third-party social media provider. We
              recommend that you review their privacy notice to understand how
              they collect, use, and share your personal information, and how
              you can set your privacy preferences on their sites and apps.
            </p>
          </div>
          <div id="8">
            <h1>8. HOW LONG DO WE KEEP YOUR INFORMATION?</h1>
            <p>
              In Short: We keep your information for as long as necessary to
              fulfill the purposes outlined in this privacy notice unless
              otherwise required by law.
            </p>
            <p>
              We will only keep your personal information for as long as it is
              necessary for the purposes set out in this privacy notice, unless
              a longer retention period is required or permitted by law (such as
              tax, accounting, or other legal requirements). No purpose in this
              notice will require us keeping your personal information for
              longer than six (6) months past the termination of the user's
              account.
            </p>
            <p>
              When we have no ongoing legitimate business need to process your
              personal information, we will either delete or anonymize such
              information, or, if this is not possible (for example, because
              your personal information has been stored in backup archives),
              then we will securely store your personal information and isolate
              it from any further processing until deletion is possible.
            </p>
          </div>
          <div id="9">
            <h1>9. HOW DO WE KEEP YOUR INFORMATION SAFE?</h1>
            <p>
              In Short: We do not knowingly collect data from or market to
              children under 18 years of age.
            </p>
            <p>
              We have implemented appropriate and reasonable technical and
              organizational security measures designed to protect the security
              of any personal information we process. However, despite our
              safeguards and efforts to secure your information, no electronic
              transmission over the Internet or information storage technology
              can be guaranteed to be 100% secure, so we cannot promise or
              guarantee that hackers, cyber-criminals, or other unauthorized
              third parties will not be able to defeat our security and
              improperly collect, access, steal, or modify your information.
              Although we will do our best to protect your personal information,
              transmission of personal information to and from our Services is
              at your own risk. You should only access the Services within a
              secure environment.
            </p>
          </div>
          <div id="10">
            <h1>10. DO WE COLLECT INFORMATION FROM MINORS?</h1>
            <p>
              In Short: We do not knowingly collect data from or market to
              children under 18 years of age.
            </p>
            <p>
              We do not knowingly solicit data from or market to children under
              18 years of age. By using the Services, you represent that you are
              at least 18 or that you are the parent or guardian of such a minor
              and consent to such minor dependent’s use of the Services. If we
              learn that personal information from users less than 18 years of
              age has been collected, we will deactivate the account and take
              reasonable measures to promptly delete such data from our records.
              If you become aware of any data we may have collected from
              children under age 18, please contact us at
              dillkhush.com@gmail.com.
            </p>
          </div>
          <div id="11">
            <h1>11. WHAT ARE YOUR PRIVACY RIGHTS?</h1>
            <p>
              In Short: In some regions, such as the European Economic Area
              (EEA), United Kingdom (UK), Switzerland, and Canada, you have
              rights that allow you greater access to and control over your
              personal information. You may review, change, or terminate your
              account at any time.
            </p>
            <p>
              In some regions (like the EEA, UK, Switzerland, and Canada), you
              have certain rights under applicable data protection laws. These
              may include the right (i) to request access and obtain a copy of
              your personal information, (ii) to request rectification or
              erasure; (iii) to restrict the processing of your personal
              information; (vi) if applicable, to data portability; and (vii)
              not to be subject to automated decision-making. In certain
              circumstances, you may also have the right to object to the
              processing of your personal information. You can make such a
              request by contacting us by using the contact details provided in
              the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.
            </p>
            <p>
              We will consider and act upon any request in accordance with
              applicable data protection laws. If you are located in the EEA or
              UK and you believe we are unlawfully processing your personal
              information, you also have the right to complain to your Member
              State data protection authority or UK data protection authority{ " " }
            </p>
            <p>
              If you are located in Switzerland, you may contact the Federal
              Data Protection and Information Commissioner.
            </p>
            <p>
              Withdrawing your consent: If we are relying on your consent to
              process your personal information, which may be express and/or
              implied consent depending on the applicable law, you have the
              right to withdraw your consent at any time. You can withdraw your
              consent at any time by contacting us by using the contact details
              provided in the section "HOW CAN YOU CONTACT US ABOUT THIS
              NOTICE?" below or updating your preferences.
            </p>
            <p>
              However, please note that this will not affect the lawfulness of
              the processing before its withdrawal nor, when applicable law
              allows, will it affect the processing of your personal information
              conducted in reliance on lawful processing grounds other than
              consent.
            </p>
            <p>
              Opting out of marketing and promotional communications: You can
              unsubscribe from our marketing and promotional communications at
              any time by clicking on the unsubscribe link in the emails that we
              send, replying "STOP" or "UNSUBSCRIBE" to the SMS messages that we
              send, or by contacting us using the details provided in the
              section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below. You
              will then be removed from the marketing lists. However, we may
              still communicate with you — for example, to send you
              service-related messages that are necessary for the administration
              and use of your account, to respond to service requests, or for
              other non-marketing purposes.
            </p>
            <h4 className="h4" style={ { fontSize: "1.6rem", color: "black" } }>
              Account Information
            </h4>
            <p>
              If you would at any time like to review or change the information
              in your account or terminate your account, you can:
            </p>
            <p>
               Log in to your account settings and update your user account.
            </p>
            <p> Contact us using the contact information provided.</p>
            <p>
              Upon your request to terminate your account, we will deactivate or
              delete your account and information from our active databases.
              However, we may retain some information in our files to prevent
              fraud, troubleshoot problems, assist with any investigations,
              enforce our legal terms and/or comply with applicable legal
              requirements.
            </p>
            <p>
              Cookies and similar technologies: Most Web browsers are set to
              accept cookies by default. If you prefer, you can usually choose
              to set your browser to remove cookies and to reject cookies. If
              you choose to remove cookies or reject cookies, this could affect
              certain features or services of our Services. You may also opt out
              of interest-based advertising by advertisers on our Services. For
              further information, please see our Cookie Notice:
              https://dillkhush.com/cookie-policy.
            </p>
            <p>
              If you have questions or comments about your privacy rights, you
              may email us at https://thebengalstudio.com/payment-policy.
            </p>
          </div>
          <div id="12">
            <h1>12. CONTROLS FOR DO-NOT-TRACK FEATURES</h1>
            <p>
              Most web browsers and some mobile operating systems and mobile
              applications include a Do-Not-Track ("DNT") feature or setting you
              can activate to signal your privacy preference not to have data
              about your online browsing activities monitored and collected. At
              this stage no uniform technology standard for recognizing and
              implementing DNT signals has been finalized. As such, we do not
              currently respond to DNT browser signals or any other mechanism
              that automatically communicates your choice not to be tracked
              online. If a standard for online tracking is adopted that we must
              follow in the future, we will inform you about that practice in a
              revised version of this privacy notice.
            </p>
          </div>
          <div id="13">
            <h1>13. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h1>
            <p>
              In Short: Yes, if you are a resident of California, you are
              granted specific rights regarding access to your personal
              information.
            </p>
            <p>
              California Civil Code Section 1798.83, also known as the "Shine
              The Light" law, permits our users who are California residents to
              request and obtain from us, once a year and free of charge,
              information about categories of personal information (if any) we
              disclosed to third parties for direct marketing purposes and the
              names and addresses of all third parties with which we shared
              personal information in the immediately preceding calendar year.
              If you are a California resident and would like to make such a
              request, please submit your request in writing to us using the
              contact information provided below.
            </p>
            <p>
              If you are under 18 years of age, reside in California, and have a
              registered account with Services, you have the right to request
              removal of unwanted data that you publicly post on the Services.
              To request removal of such data, please contact us using the
              contact information provided below and include the email address
              associated with your account and a statement that you reside in
              California. We will make sure the data is not publicly displayed
              on the Services, but please be aware that the data may not be
              completely or comprehensively removed from all our systems (e.g.,
              backups, etc.).
            </p>
            <h3 style={ { fontSize: "1.6rem", color: "black" } }>
              CCPA Privacy Notice
            </h3>
            <p>The California Code of Regulations defines a "resident" as:</p>
            <p>
              1) every individual who is in the State of California for other
              than a temporary or transitory purpose and (2) every individual
              who is domiciled in the State of California who is outside the
              State of California for a temporary or transitory purpose
            </p>
            <p>All other individuals are defined as "non-residents."</p>
            <p>
              If this definition of "resident" applies to you, we must adhere to
              certain rights and obligations regarding your personal
              information.
            </p>
            <p>What categories of personal information do we collect?</p>
            <p>
              We have collected the following categories of personal information
              in the past twelve (12) months:
            </p>
            <Table style={ { color: "#9E9FA5", fontSize: "1.6rem", fontWeight: "500" } }>
              <Thead>
                <Tr>
                  <Th>Collected</Th>
                  <Th>Examples</Th>
                  <Th>Collected</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Personal information categories listed in the California Customer Records statute</Td>
                  <Td>Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name</Td>
                  <Td>YES</Td>
                </Tr>
                <Tr>
                  <Td>Protected classification characteristics under California or federal law</Td>
                  <Td>Gender and date of birth</Td>
                  <Td>YES</Td>
                </Tr>
                <Tr>
                  <Td>Commercial information</Td>
                  <Td>Transaction information, purchase history, financial details, and payment information</Td>
                  <Td>NO</Td>
                </Tr>
                <Tr>
                  <Td>Biometric information</Td>
                  <Td>Fingerprints and voiceprints</Td>
                  <Td>NO</Td>
                </Tr>
                <Tr>
                  <Td>Internet or other similar network activity</Td>
                  <Td>Browsing history, search history, online behaviour, interest data, and interactions with our and other websites, applications, systems, and advertisements</Td>
                  <Td>YES</Td>
                </Tr>
                <Tr>
                  <Td>Geolocation data</Td>
                  <Td>Device location</Td>
                  <Td>YES</Td>
                </Tr>
                <Tr>
                  <Td>Audio, electronic, visual, thermal, olfactory, or similar information</Td>
                  <Td>Images and audio, video or call recordings created in connection with our business activities</Td>
                  <Td>YES</Td>
                </Tr>
                <Tr>
                  <Td>Professional or employment-related information</Td>
                  <Td>Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us</Td>
                  <Td>NO</Td>
                </Tr>
                <Tr>
                  <Td>Education Information</Td>
                  <Td>Student records and directory information</Td>
                  <Td>YES</Td>
                </Tr>
                <Tr>
                  <Td>Inferences drawn from other personal information</Td>
                  <Td>Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics</Td>
                  <Td>YES</Td>
                </Tr>
                <Tr>
                  <Td>Sensitive Personal Information</Td>
                  <Td></Td>
                  <Td>NO</Td>
                </Tr>
              </Tbody>
            </Table>
            <p>
              We will use and retain the collected personal information as
              needed to provide the Services or for:
            </p>
            <p> Category B - As long as the user has an account with us</p>
            <p> Category F - As long as the user has an account with us</p>
            <p> Category G - As long as the user has an account with us</p>
            <p> Category H - As long as the user has an account with us</p>
            <p>  Category J - As long as the user has an account with us</p>
            <p> Category K - As long as the user has an account with us</p>
            <p>
              We may also collect other personal information outside of these
              categories through instances where you interact with us in person,
              online, or by phone or mail in the context of:
            </p>
            <p> Receiving help through our customer support channels;</p>
            <p> Participation in customer surveys or contests; and</p>
            <p>
               Facilitation in the delivery of our Services and to respond to
              your inquiries.
            </p>
            <h4 className="h3" style={ { fontSize: "1.6rem", color: "black" } }>
              How do we use and share your personal information?
            </h4>
            <p>
              More information about our data collection and sharing practices
              can be found in this privacy notice and our Cookie Notice:
              https://dillkhush.com/cookie-policy. You may contact us by email
              at dillkhush.com@gmail.com, by visiting
              https://dillkhush.com/contact, or by referring to the contact
              details at the bottom of this document. If you are using an
              authorized agent to exercise your right to opt out we may deny a
              request if the authorized agent does not submit proof that they
              have been validly authorized to act on your behalf.
            </p>
            <h4 className="h3" style={ { fontSize: "1.6rem", color: "black" } }>
              Will your information be shared with anyone else?
            </h4>
            <p>
              We may disclose your personal information with our service
              providers pursuant to a written contract between us and each
              service provider. Each service provider is a for-profit entity
              that processes the information on our behalf, following the same
              strict privacy protection obligations mandated by the CCPA
            </p>
            <p>
              We may use your personal information for our own business
              purposes, such as for undertaking internal research for
              technological development and demonstration. This is not
              considered to be "selling" of your personal information.
            </p>
            <p>
              We have not disclosed, sold, or shared any personal information to
              third parties for a business or commercial purpose in the
              preceding twelve (12) months. We will not sell or share personal
              information in the future belonging to website visitors, users,
              and other consumers.
            </p>
            <h4 className="h3" style={ { fontSize: "1.6rem", color: "black" } }>
              Your rights with respect to your personal data
            </h4>
            <p>Right to request deletion of the data — Request to delete</p>
            <p>
              You can ask for the deletion of your personal information. If you
              ask us to delete your personal information, we will respect your
              request and delete your personal information, subject to certain
              exceptions provided by law, such as (but not limited to) the
              exercise by another consumer of his or her right to free speech,
              our compliance requirements resulting from a legal obligation, or
              any processing that may be required to protect against illegal
              activities.
            </p>
            <p>
              Right to be informed — Request to know Depending on the
              circumstances, you have a right to know:
            </p>
            <p> whether we collect and use your personal information;</p>
            <p>
               the purposes for which the collected personal information is
              used;
            </p>
            <p>
               whether we sell or share personal information to third parties;
            </p>
            <p>
               the categories of personal information that we sold, shared, or
              disclosed for a business purpose;
            </p>
            <p>
               the categories of third parties to whom the personal information
              was sold, shared, or disclosed for a business purpose;
            </p>
            <p>
               the business or commercial purpose for collecting, selling, or
              sharing personal information; and
            </p>
            <p>
               the specific pieces of personal information we collected about
              you.
            </p>
            <p>
              In accordance with applicable law, we are not obligated to provide
              or delete consumer information that is de-identified in response
              to a consumer request or to re-identify individual data to verify
              a consumer request
            </p>
            <p>
              Right to Non-Discrimination for the Exercise of a Consumer’s
              Privacy Rights We will not discriminate against you if you
              exercise your privacy rights. Right to Limit Use and Disclosure of
              Sensitive Personal Information We do not process consumer's
              sensitive personal information
            </p>
            <p>Verification process</p>
            <p>
              Upon receiving your request, we will need to verify your identity
              to determine you are the same person about whom we have the
              information in our system. These verification efforts require us
              to ask you to provide information so that we can match it with
              information you have previously provided us. For instance,
              depending on the type of request you submit, we may ask you to
              provide certain information so that we can match the information
              you provide with the information we already have on file, or we
              may contact you through a communication method (e.g., phone or
              email) that you have previously provided to us. We may also use
              other verification methods as the circumstances dictate.
            </p>
            <p>
              We will only use personal information provided in your request to
              verify your identity or authority to make the request. To the
              extent possible, we will avoid requesting additional information
              from you for the purposes of verification. However, if we cannot
              verify your identity from the information already maintained by
              us, we may request that you provide additional information for the
              purposes of verifying your identity and for security or
              fraud-prevention purposes. We will delete such additionally
              provided information as soon as we finish verifying you.
            </p>
          </div>
          <div id="14">
            <h1>14. DO VIRGINIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h1>
            <p>
              In Short: Yes, if you are a resident of Virginia, you may be
              granted specific rights regarding access to and use of your
              personal information
            </p>
            <h3 style={ { fontSize: "1.6rem", color: "black" } }>
              Virginia CDPA Privacy Notice
            </h3>
            <p>
              Under the Virginia Consumer Data Protection Act (CDPA): "Consumer"
              means a natural person who is a resident of the Commonwealth
              acting only in an individual or household context. It does not
              include a natural person acting in a commercial or employment
              context. "Personal data" means any information that is linked or
              reasonably linkable to an identified or identifiable natural
              person. "Personal data" does not include de-identified data or
              publicly available information.
            </p>
            <p>
              "Sale of personal data" means the exchange of personal data for
              monetary consideration. If this definition "consumer" applies to
              you, we must adhere to certain rights and obligations regarding
              your personal data. The information we collect, use, and disclose
              about you will vary depending on how you interact with us and our
              Services. To find out more, please visit the following links:
            </p>
          </div>
          <div id="15">
            <h1>15. DO WE MAKE UPDATES TO THIS NOTICE?</h1>
            <p>
              In Short: Yes, we will update this notice as necessary to stay
              compliant with relevant laws.
            </p>
            <p>
              We may update this privacy notice from time to time. The updated
              version will be indicated by an updated "Revised" date and the
              updated version will be effective as soon as it is accessible. If
              we make material changes to this privacy notice, we may notify you
              either by prominently posting a notice of such changes or by
              directly sending you a notification. We encourage you to review
              this privacy notice frequently to be informed of how we are
              protecting your information.
            </p>
          </div>
          <div id="16">
            <h1>16. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h1>
            <p>
              If you have questions or comments about this notice, you may email
              us at dillkhush.com@gmail.com or contact us by post at:
            </p>
            <p>
              The Bengal Studio
              <br />
              Kolkata, West Bengal, India
              <br />
              Kolkata, West Bengal 700002
              <br />
              India
              <br />
            </p>
          </div>
          <div id="17">
            <h1>
              17. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
              YOU?
            </h1>
            <p>
              Based on the applicable laws of your country, you may have the
              right to request access to the personal information we collect
              from you, change that information, or delete it. To request to
              review, update, or delete your personal information, please fill
              out and submit a data subject access request.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Body;
