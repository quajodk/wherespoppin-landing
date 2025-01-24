import { Container } from '@/components/Container'
import PrivacyPolicyContent from './agreement.mdx'

export default function PrivacyPolicy() {
  return (
    <Container className="my-10 sm:mt-32">
      <div className="grid grid-cols-1">
        <PrivacyPolicyContent />
      </div>
    </Container>
  )
}
