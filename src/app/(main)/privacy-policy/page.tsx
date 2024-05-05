import { Container } from '@/components/Container'

export default function PrivacyPolicy() {
  return (
    <Container className="my-10 sm:mt-32">
      <div className="grid grid-cols-1">
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-gray-800 dark:text-gray-100 sm:text-5xl">
            Privacy Policy
          </h1>
          <div className="mt-6 space-y-7 text-base text-gray-600 dark:text-gray-400">
            <p>
              WheresPoppin is committed to protecting the privacy of our users.
              This Privacy Policy outlines how we collect, use, disclose, and
              safeguard your information when you use our mobile application.
            </p>
            <p>
              Information We Collect We do not collect any personal information
              from users of our App. How We Use Your Information We do not use
              any personal information as we do not collect any from our users.
              Disclosure of Your Information We do not disclose any personal
              information to third parties because we do not collect any. Data
              Deletion Users can request the deletion of any data that may have
              been inadvertently collected. Please contact us at
              enquires@wherespoppin.com to request data deletion.
            </p>
            <p>
              Security of Your Information We take reasonable measures to
              protect the information collected through our App. However, please
              be aware that no security measures are perfect or impenetrable,
              and we cannot guarantee the security of any information
              transmitted through our App. Changes to Our Privacy Policy We
              reserve the right to modify this Privacy Policy at any time. If we
              make changes to this Privacy Policy, we will post the revised
              policy on this page. Your continued use of the App following the
              posting of the revised Privacy Policy will constitute your
              acceptance of the changes.
            </p>
            <p>
              Contact Us If you have any questions or concerns about this
              Privacy Policy or our privacy practices, please contact us at
              <a href="mailto:privacy@wherespoppin.com" className="ml-1">
                privacy@wherespoppin.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}
