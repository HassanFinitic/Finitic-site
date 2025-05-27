import React from 'react'
import styles from './cancellation.module.css'

const policySections = [
  {
    title: '1. Cancellation Policy',
    description: 'We understand that business needs evolve, and we strive to be flexible. You may cancel your subscription under the following conditions:',
    items: [
      {
        label: 'Notice Period',
        text: 'A minimum of 30 days written notice is required for cancellation of any active software subscription or API service.'
      },
      {
        label: 'How to Cancel',
        text: 'To initiate cancellation, please email info@finitic.com or contact your assigned Account Manager. Cancellations are only processed upon confirmation from our support team.'
      },
      {
        label: 'Billing After Cancellation Notice',
        text: 'Services will remain active and billable during the 30-day notice period. You are responsible for any usage or charges incurred during this time.'
      },
      {
        label: 'Refunds',
        text: 'We do not offer refunds for partial months or unused services during an active billing cycle. For prepaid quarterly plans, any cancellation will be honored at the end of the billing period.'
      }
    ]
  },
  {
    title: '2. Replacement Policy',
    description: 'As Finitic offers software and digital services only, physical replacements do not apply. However, we are committed to resolving any issues you may encounter:',
    items: [
      {
        label: 'Service Errors or Malfunctions',
        text: 'In case of technical faults, bugs, or service outages caused by our systems, we will promptly provide fixes or alternative access solutions at no additional cost.'
      },
      {
        label: 'Incorrect API Quotas or Features',
        text: 'If you are provisioned with incorrect API quotas or software versions, we will correct the issue within 48 hours of receiving your complaint.'
      }
    ]
  },
  {
    title: '3. Limitations',
    items: [
      {
        text: 'No returns or refunds are applicable for digital services already consumed or accessed.'
      },
      {
        text: 'Finitic is not responsible for any third-party software or integration issues outside our control.'
      },
      {
        text: 'All services are subject to the terms outlined in your Service Level Agreement (SLA) and Master Service Agreement (MSA).'
      }
    ]
  },
  {
    title: '4. Compliance',
    items: [
      {
        text: 'This policy complies with applicable laws and digital service guidelines within the United Arab Emirates. We reserve the right to update this policy to reflect regulatory changes or internal process improvements.'
      }
    ]
  }
];

export default function page() {
  return (
    <div className={styles.fullContainer}>
      <div className="container">
        {policySections.map((section, index) => (
          <div key={index} className={styles.section}>
            <h2 className={styles.title}>{section.title}</h2>
            {section.description && <p className={styles.description}>{section.description}</p>}
            <ul className={styles.list}>
              {section.items.map((item, i) => (
                <li key={i} className={styles.listItem}>
                  {item.label ? <strong>{item.label}:</strong> : null} {item.text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
