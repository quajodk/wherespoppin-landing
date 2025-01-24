import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: '1. What is WheresPoppin, and how does it work?',
      answer:
        'WheresPoppin is a social discovery app that helps users find trending events, parties, and social gatherings happening near them. Users can explore, share, and engage with events in real-time.',
    },
    {
      question: '2. How do I create an account on WheresPoppin?',
      answer:
        'It\'s Simple! You can sign up using your email, password, or social media accounts like Google or AppleId. Simply download the app, follow the registration process, and set up your profile.',
    },
    {
      question: '3. Can I post my own events on WheresPoppin?',
      answer:
        'Event posting is oonly available to vendors or businesses. Event organizers can create and promote their events as vendors. Simply tap on your dropdown arrow beside your profile in the profile section, and select any of the vendor accounts, got o events and click on add to create a new event, you can also click on the plus sign to add a post to which shows inthe stories section',
    },
  ],
  [
    {
      question: '4. How does WheresPoppin determine trending events?',
      answer:
        'In the next possible update, the app uses an AI-driven algorithm that tracks user interactions, check-ins, and social engagement to highlight the most popular and trending events in your area.',
    },
    {
      question: '5. Does WheresPoppin support ticket sales?',
      answer:
        'Yes, In the next possible update, WheresPoppin allows event organizers to sell tickets directly within the app. Users can purchase tickets securely via multiple payment options like Apple Pay, Google Pay, PayPal, and Stripe.',
    },
    {
      question: '6. How can I report inappropriate content or events?',
      answer:
        'If you come across any abusive, misleading, or inappropriate content, you can report it by clicking the last icon on the right bottom of the post, click on report and add a reason for your report. Our moderation team will review and take appropriate action withing 24 hours',
    },
  ],
  [
    {
      question: '7. Can I follow my favorite event organizers or influencers?',
      answer:
        'Yes! In the next possible update, you can follow event organizers, businesses, and influencers to get updates on their upcoming events, promotions, and exclusive content.',
    },
    {
      question: '8. What payment methods are supported for event bookings?',
      answer:
        'In the next possible update, WheresPoppin supports multiple payment gateways, including Apple Pay, Google Pay, PayPal, Stripe, and credit/debit cards, ensuring a seamless checkout process.',
    },
    {
      question: '9. Is WheresPoppin available in multiple cities?',
      answer:
        'Yes! WheresPoppin is continuously expanding to new locations. Check the app to see if your city is supported, and if not, stay tuned for updates.',
    }
  ],
]

const generals = [
  [
    {
      question: '11. How do I reset my password if I forget it?',
      answer:
        'If you forget your password, click on the "Forgot Password" link on the login page, enter your email or phone number, and follow the instructions to reset it. Or you can also change yopur password at the profile section if you are already in the app.',
    },
    {
      question: '12. Can I customize my event feed based on my interests?',
      answer:
        'Yes! In the next possible update, you will be able to set your event preferences in the Settings section to receive recommendations based on your favorite categories, locations, and past event interactions.',
    }
  ],
  [
    {
      question: '13. How can I change my location to see events in another city?',
      answer:
        'In the next possible update, you will be update your location manually in the Settings section or allow the app to use your current GPS location for personalized event suggestions.',
    },
    {
      question: '14. Is WheresPoppin free to use?',
      answer:
        'Yes! WheresPoppin is free to download and use. However, in the next possible update, some premium features, event ticket purchases, or promotions may require payment.',
    }
  ],
  [
    {
      question: '15. Can I use WheresPoppin to plan private events?',
      answer:
        'Yes, In the next possible update, WheresPoppin allows you to create private events that only invited guests can see and RSVP for.',
    }
  ],
]

const events=[
  [
    {
      question: '16. How do I RSVP for an event on WheresPoppin?',
      answer:
        'In the next possible update,  you will simply click on the event you’re interested in and tap "RSVP" or "Get Ticket" if required. You’ll receive a confirmation notification once your RSVP is successful.',
    },
    {
      question: '17. Can I invite my friends to an event through WheresPoppin?',
      answer:
        'Yes! You can share event links with friends via in-app invites, WhatsApp, SMS, or social media platforms.',
    }
  ],
  [
    {
      question: '18. How do I interact with posts and event updates?',
      answer:
        'You can like, pin, and share posts just like on other social platforms. Additionally, you can use the "Follow" feature in the next possible update to stay updated on events from specific organizers.',
    },
    {
      question: '19. Does WheresPoppin have a live streaming feature?',
      answer:
        'Yes! In the next possible update Users can "Go Live" from an event to share their experiences in real time with followers.',
    }
  ],
  [
    {
      question: '20. How do I boost my event to reach more people?',
      answer:
        'You can use the "Boost Event" option in the next possible update to promote your event to a wider audience. Different pricing plans are available based on reach and location targeting.',
    }
  ],
]

const privacy=[
  [
    {
      question: '21. How do I block or report another user?',
      answer:
        'If you experience inappropriate behavior, go to the user’s profile and select "Block" in the next possible update or "Report" the post to notify our moderation team.',
    },
    {
      question: '22. Can I delete my account permanently?',
      answer:
        'Yes. If you want to delete your account, go to Profile > Tap on profile details > Delete Account. Please note that this action is irreversible.',
    }
  ],
  [
    {
      question: '23. How does WheresPoppin protect my data and privacy?',
      answer:
        'We take privacy seriously. Your data is encrypted and protected following strict security measures. You can read our Privacy Policy for more details.',
    },
    {
      question: '24. Can I recover a deleted post or event?',
      answer:
        'No, once a post or event is deleted, it cannot be restored. We recommend archiving events instead of deleting them if you may need them later.',
    }
  ],
  [
    {
      question: '25. How do I contact WheresPoppin customer support?',
      answer:
        'You can contact us via Help & Support in the app or email [support@wherespoppin.app]. Our support team is available 24/7.',
    }
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions & Support
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul><br></br><br></br><br></br><br></br>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            General Knowledge
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {generals.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((general, generalIndex) => (
                  <li key={generalIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {general.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{general.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul><br></br><br></br><br></br><br></br>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Event & Social Engagement
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {events.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul><br></br><br></br><br></br><br></br>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Safety, Privacy & Support Questions
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {privacy.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <br></br><br></br>
        <div className="mx-auto max-w-2xl lg:mx-0"><br></br><br></br>
          <strong>
            <p className="mt-2 text-lg text-gray-600">
              If you have anything else you want to ask,{' '}
              <a
                href="mailto:support@wherespoppin.app"
                className="text-gray-900 underline"
              >
                reach out to us
              </a>
              .
            </p>
          </strong>
        </div>
      </Container>
    </section>
  )
}
