import wp from '@/images/wp-icon-new.png'
import wpLogo from '@/images/logo-wp.png'
import Image from 'next/image'

export function Logomark(props: React.ComponentPropsWithoutRef<any>) {
  return <Image src={wp} alt="wp-icon-new" {...props} />
}

export function Logo(props: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div aria-hidden="true" {...props}>
      <Logomark width="40" height="40" className="rounded-md" />
    </div>
  )
}
