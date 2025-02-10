import React from 'react';
import styles from './Privacy.module.css'; 

const mainContent = `
Finitic ("We" and "us") are committed to protecting and respecting your privacy. 

This privacy policy ("Privacy Policy”), together with our Customer Terms and any other documents referred to in this Privacy Policy, sets out the basis for which any personally identifiable information (“Personal Data”) we collect from you, or that you provide to us, will be processed by us. Please read the following information carefully to understand our practices regarding your Personal Data and how we will treat it with respect to your use of Finitic.com (the "Service”).

By using the Service, you accept the terms of this Privacy Policy. In the event of a conflict between the terms of this Privacy Policy and the Customer Terms, the Customer Terms will control. 

Information we may collect from you. 

We may collect and process the following information about you. 
`;


const ourPolicy = [
    {
        id: 1,
        title: "Information you give us",
        content: `If you decide to register with or use the Service, you will be asked to provide certain information about yourself. You will voluntarily provide us with Personal Data which includes your name, email address and contact details when you: `,
        list: `▪️Purchase or register to use the Service 
▪️Request and receive Customer Support 
▪️Provide billing and payment information 
▪️Register for offers or events. 
        `,
        lastContent: ``
    },
    {
        id: 2,
        title: "Information we collect about you.",
        content: `Each time you use the Service we may automatically collect the following information:`,
        list: `
▪️Technical information that your browser sends whenever you visit a website, or your mobile app sends when you are using it. This log data may include your Internet Protocol (IP) address, the address of the web page you visited before using the Service, your browser type and settings, the date and time of your use of the Service, information about your browser configuration and plug-ins, language preferences and cookie data. 

▪️Information about your visit, including the full Uniform Resource Locators (URL) clickstream to, through and from our website (including date and time); products you viewed or searched for; page response times, download errors, length of visits to certain pages, page interaction information (such as scrolling, clicks, and mouse-overs), and methods used to browse away from the page and any phone number used to call our customer service number.         

▪️We may also collect publicly accessible data about you from social media websites that you visit when using the Service. 

▪️§ We may also collect non-personally identifiable information (e.g. gender and location) to assist in providing the Service to you. Non-personally identifiable information by itself cannot be used to identify or contact you. However, this information may be combined with other identifiers in a way that enables you to be identified. 
`,
        lastContent: `By submitting your Personal Data and non-personally identifiable information, you consent to the collection, use and transfer of your information in accordance with the terms of this Privacy Policy. `
    }

]

export default function Page() {
  return (
    <div className={styles.fullContainer}>
        <div className="container">

            <div className={styles.lastUpdate}>
                Last Updated - {new Date().toLocaleDateString('en-US', {
                    month: 'short', // Abbreviated month (e.g., Jan)
                    day: '2-digit', // Two-digit day (e.g., 07)
                    year: 'numeric', // Full year (e.g., 2025)
                })}
            </div>
            
            <h1 className={styles.title}>Privacy Policy</h1>
            <p className={styles.content}>{mainContent}</p>

            <div className={styles.policiesContainer}>
            {
                ourPolicy.map((item) => (
                    <div key={item.id}>
                        <h2 className={styles.policyTitle}>{`${item.id}. ${item.title}`}</h2>
                        <p className={styles.content}>{item.content}</p>
                        <p className={styles.content}>{item.list}</p>
                        <p className={styles.content}>{item.lastContent}</p>
                    </div>
                ))
            }
            </div>
        </div>
    </div>

  );
}

