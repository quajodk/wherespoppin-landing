import wp from '@/images/wp-icon.png'
import wpLogo from '@/images/logo-wp.png'
import Image from 'next/image'

export function Logomark(props: React.ComponentPropsWithoutRef<any>) {
  return <Image src={wp} alt="wp-icon" {...props} />
}

export function Logo(props: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div aria-hidden="true" {...props}>
      <Logomark width="40" height="40" className="rounded-md" />
      <div className="h-4 w-40">
        <Image src={wpLogo} alt="logo-wp" className="h-full w-full" />
      </div>
    </div>
  )
}
