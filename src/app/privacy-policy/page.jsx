import React from 'react';
import styles from './Privacy.module.css'; 

const mainContent = `
Finitic ("We" and "us") are committed to protecting and respecting your privacy. 

This privacy policy ("Privacy Policy”), together with our Customer Terms and any other documents referred to in this Privacy Policy, sets out the basis for which any personally identifiable information (“Personal Data”) we collect from you, or that you provide to us, will be processed by us. Please read the following information carefully to understand our practices regarding your Personal Data and how we will treat it with respect to your use of Finitic.com (the "Service”).

By using the Service, you accept the terms of this Privacy Policy. In the event of a conflict between the terms of this Privacy Policy and the Customer Terms, the Customer Terms will control. 

Information we may collect from you:  

We may collect and process the following information about you. 
`;


const ourPolicy = [
    {
        id: 1,
        number: 1,
        title: "Information you give us",
        content: `If you decide to register or use the Service, you will be asked to provide certain information about yourself. You will voluntarily provide us with Personal Data which includes your name, email address and contact details when you: `,
        array: [
            {
                id: 1,
                text: "Request and receive Customer Support."
            },
            {
                id: 2,
                text: "Provide billing and payment informatio."
            },
            {
                id: 3,
                text: "Register for offers or events."
            }
        ],
        lastContent: ``
    },
    {
        id: 2,
        number: 2,
        title: "Information we collect about you",
        content: `Each time you use the Service we may automatically collect the following information:`,
        array: [
            {
                id: 1,
                text: "Technical information that your browser sends whenever you visit a website, or your mobile app sends when you are using it. This log data may include your Internet Protocol (IP) address, the address of the web page you visited before using the Service, your browser type and settings, the date and time of your use of the Service, information about your browser configuration and plug-ins, language preferences and cookie data."
            },
            {
                id: 2,
                text: "Information about your visit, including the full Uniform Resource Locators (URL) clickstream to, through and from our website (including date and time); products you viewed or searched for; page response times, download errors, length of visits to certain pages, page interaction information (such as scrolling, clicks, and mouse-overs), and methods used to browse away from the page and any phone number used to call our customer service number."
            },
            {
                id: 3,
                text: "We may also collect publicly accessible data about you from social media websites that you visit when using the Service."
            },
            {
                id: 4,
                text: "We may also collect non-personally identifiable information (e.g. gender and location) to assist in providing the Service to you. Non-personally identifiable information by itself cannot be used to identify or contact you. However, this information may be combined with other identifiers in a way that enables you to be identified."
            }
        ],
        lastContent: `By submitting your Personal Data and non-personally identifiable information, you consent to the collection, use and transfer of your information in accordance with the terms of this Privacy Policy. `
    },
    {
        id: 3,
        number: 3,
        title: "Information we receive from other sources",
        content: "We may receive information about you if you use any of the other websites we operate or the other services we provide. In this case we will have informed you when we collected that data that it may be shared internally and combined with data collected via the Service. We are also working closely with third parties (including, for example, business partners, sub-contractors in technical, payment and delivery services, advertising networks, analytics providers, search information providers, credit reference agencies) and may receive information about you from them. ",
        array:[]
    },
    {
        id: 4,
        number: 4,
        title: "Use of cookies",
        content: "We use cookies on our website to distinguish you from other users of our website and Service. This helps us to provide you with a better experience when you browse our website and allows us to improve the website and Service.",
        array: []
    },
    {
        id: 5,
        number: 5,
        title: "If you are under 13 years of age",
        content: "If you're under the age of 13, you may not have an account on the Service. We do not knowingly collect information from or direct any of our content specifically to children under 13. If we learn or have reason to suspect that you are a user who is under the age of 13, we will unfortunately have to close your account. Please see our Customer Terms for information about account termination.",
        array: [],
    },
    {
        id: 6,
        number: 6,
        title: "Uses made of Information",
        content: "We will only use information held about you for the following purposes.",
        array: []
    },
    {
        id: 7,
        number: "A",
        title: "Information you give to us",
        content: `We will use this information :
To understand and improve our Services to you.`,
        array: [
            {
                id: 2,
                text: "To ensure that content from our Service is presented in the most effective manner for you and for your computer."
            },
            {
                id: 3,
                text: "To communicate with you by responding to your requests and sending you emails and messages about invoicing and account management."
            },
            {
                id: 4,
                text: "To administer your account and keep track of billing and payments."
            },
            {
                id: 5,
                text: "To keep the Service secure by investigating and preventing abuse and fraud."
            },
            {
                id: 6,
                text: "To carry out our obligations arising from any contracts between you and us and to provide you with the information, products and services that you request from us."
            },
            {
                id: 7,
                text: "To provide you with information about other goods and services we offer that are similar to those that you have already purchased or enquired about."
            },
            {
                id: 8,
                text: "To notify you about changes to our Service."
            }
        ]
    },
    {
        id: 8,
        number: "B",
        title: "Information we collect about you",
        content: `We will use this information:
To administer our Service and for internal operations, including troubleshooting, data analysis, testing, research, statistical and survey purposes.`,
        array: [
            {
                id: 1,
                text: "To improve our Service to ensure that content is presented in the most effective manner for you and for your computer."
            },
            {
                id: 2,
                text: "To allow you to participate in interactive features of our Service, when you choose to do so."
            },
            {
                id: 3,
                text: "To measure or understand the effectiveness of advertising we serve to you and others, and to deliver relevant advertising to you."
            },
            {
                id: 4,
                text: "To make suggestions and recommendations to you and other users of our Service about services that may interest you or them."
            }
        ],
        lastContent: "By using the Service, you agree that we can access, aggregate and use non-personally identifiable data we have collected from you. This data will in no way identify you or any other individual. We may use this aggregated non-personally identifiable data to:"
  },
  {
    id: 9,
    number: "|",
    title: "Information we receive from other sources",
    content: `
We may combine this information with information you give to us and information we collect about you. We may use this information and the combined information for the purposes set out above (depending on the types of information we receive). By using the Service, you consent to Personal Data being collected, held and used in this way and for any other use you authorize. 

▪️Disclosure of your information
        We may share your Personal Data with any member of our company. 
    `
  },
  {
    id: 10,
    number: "||",
    title: "Information we share with third parties",
    content: "We may share your information with selected third parties including:",
    array: [
        {
            id: 1,
            text: `Business partners, suppliers and sub-contractors for the performance of any contract we enter with them or you and for the purposes of providing part of the Service to you. Such third parties supply the hardware infrastructure, storage and associated services necessary for us to provide the Service. All information submitted to third parties will be encrypted using SSL technology.
By using our websites and/or the Service you consent to our third-party service partners having access to your Personal Data.`
        },
        {
            id: 2,
            text: "Analytics and search engine providers that assist us in the improvement and optimization of our Service. "
        }
    ]
  },
  {
    id: 11,
    number: "|||",
    title: "Personal Data we disclose to third parties",
    content: "We follow strict guidelines in the storage and disclosure of information which you have given us, to prevent unauthorized access. We comply with the laws of the countries from which we operate. We may disclose your Personal Data to third parties:",
    array: [
        {
            id: 1,
            text: "If we sell or buy any business or assets, in which case we may disclose your Personal Data to the prospective seller or buyer of such business or assets. "
        },
        {
            id: 2,
            text: "If Finitic or substantially all of its assets are acquired by a third party, in which case Personal Data held by it about its customers will be one of the transferred assets. "
        },
        {
            id: 3,
            text: "If we are under a duty to disclose or share your Personal Data to comply with any legal obligation, or to enforce or apply our Customer Terms and/or any other agreements, or to protect the rights, property, or safety of Finitic, our customers, or others. This includes exchanging information with other companies and organizations for the purposes of fraud protection and credit risk reduction. "
        }
    ],
    lastContent: "In complying with court orders and similar legal processes, we strive for transparency. When permitted, we will make a reasonable effort to notify users of any disclosure of their information, unless we are prohibited by law or court order from doing so, or in rare, exigent circumstances. "
  },
  {
    id: 12,
    number: 7,
    title: "Your rights",
    content: "",
    array:[],
    lastContent: ``
  }
]

const rights = [
    {
        id: 1,
        title: "Consent.",
        content: "If you wish to subscribe to our marketing communications, we will use your name and email address to send communications to you. We will inform you (before collecting your data) if we intend to use your data for such purposes or if we intend to disclose your information to any third party for such purposes. You may elect to stop receiving our marketing emails by following the unsubscribe instructions included in such emails."
    },
    {
        id: 2,
        title: "Access to information.",
        content: " You have the right to access information held about you. Right to deletion, rectification and data export. We permit you to delete, rectify and export information you have provided to us, subject to the conditions of our Customer Terms and our legal obligations set out below."
    },
    {
        id: 3,
        title: "Retention.",
        content: `We retain Personal Data for as long as we provide the Services to you, or your account remains open. We may keep some data after your account is closed or you cease using the Service for the purposes set out below. 
After you have closed your account we may retain Personal Data where reasonably necessary to comply with our legal obligations (including law enforcement requests), meet regulatory requirements, maintain security, prevent fraud and abuse, resolve disputes, enforce our Customer Terms, offer new features you may be interested in, or fulfil your request to “unsubscribe” from further messages from us. If none of these obligations apply, we will delete Personal Data within 12 months of your account being closed. 

We will retain de-personalized information after your account has been closed. 
        `
    },
    {
        id: 4,
        title: "Complaints:",
        content: `If you have any complaints about our use of your information, please contact us as set out at the end of this Privacy Policy. 

▪️Where we store your Personal Data [for EU Customers only] 

The Personal Data that we collect from you may be transferred to, and stored at, a destination outside the European Economic Area ("EEA"). It may also be processed by staff operating outside the EEA who work for us or for one of our contractors. Such staff may be engaged in, among other things, the provision of support services. By submitting your Personal Data, you agree to this transfer, storing or processing outside of the EEA. We will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy. 
We always ensure that your information is only transferred in full accordance with BVI data protection laws and/or applicable EU data protection law. In particular, this means that your information will only be transferred to a country that provides an adequate level of protection, or the recipient is bound by standard contractual clause according to conditions provided by the European Commission (“EU Model Clauses”). You are responsible for checking the privacy policy of any third-party websites we link to. Our Service is accessible via the Internet and may potentially be accessed by any user around the world. Other users may access the Service from outside the EEA. This means that where you chose to upload your data to the Service, it could be accessed from anywhere around the world and therefore a transfer of your data outside of the EEA may be deemed to have occurred. You consent to such transfer of your data for and by way of this purpose. 

Where we have given you (or where you have chosen) a password which enables you to access certain parts of the Service, you are responsible for keeping this password confidential. We ask you not to share any password with anyone. 

Unfortunately, the transmission of information via the Internet is not completely secure. Although we will do our best to protect your Personal Data, we cannot guarantee the security of your data transmitted to our Service, any transmission is at your own risk. Once we have received your information, we will use strict procedures and security features to try to prevent unauthorised access. 

The Service may contain links to and from third party websites of our partners, networks, advertisers and affiliates. If you follow a link to any of these websites, please note that these websites have their own privacy policies, and we do not accept any responsibility or liability for the privacy practices or content of these websites. 

Changes To This Privacy Policy 

We reserve the right to change this Privacy Policy at any time and any amended Privacy Policy will be posted on our websites and notified to you by email, where appropriate. Please check back frequently to see any updates or changes to our Privacy Policy. This Privacy Policy was last updated on Jan 07, 2025, and replaces any other Privacy Policy previously applicable from this date. 
        `
    }
]
export const metadata = {
    title: "Privacy Policy | Finitic Technologies - Forex Data Protection",
    description:"Review Finitic Technologies' Privacy Policy to understand how we protect your personal information and ensure data security in forex trading.",
    keywords: ["Privacy policy", "forex data protection", "data security", "personal information", "forex trading" ],
  };
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
                    <div className={styles.policyItem} data-aos="fade-up" key={item.id}>
                        <h2 className={styles.policyTitle}>{`${item.number}. ${item.title}`}</h2>
                        <p className={styles.content}>{item.content}</p>
                        {
                            item.array && 
                            <ul className={styles.list}>
                                {item.array.map((listItem) => (
                                    <li className={styles.listItem} key={listItem.id}>
                                        {listItem.text}
                                        {listItem.sub && (
                                            <p className={styles.subText}>{listItem.sub}</p>
                                        )}
                                    </li>
                                ))}
                                
                            </ul>
                        }
                        <p className={styles.content}>{item.lastContent}</p>
                    </div>
                ))
            }
            {
                rights.map((item)=>{
                    return(
                        <div key={item.id}>
                        <h3 className={styles.policyTitle}>{item.title}</h3>
                        <p className={styles.content}>{item.content}</p>
                    </div>
                    )
                })
            }
            </div>
        </div>
    </div>

  );
}

