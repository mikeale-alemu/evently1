import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer>
      <div className="sm:flex-row flex-center border-t wrapper flex-between flex flex-col gap-4 p-5 text-center">
        <Link href='/'>
          <Image
            src="/assets/images/logo.svg"
            width={47}
            height={30}
            alt="Evently logo"
          />
        </Link>
        <p>2024 Mikeale Alemu. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer