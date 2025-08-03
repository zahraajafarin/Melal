import Image from "next/image"
import Link from "next/link"

function Error() {
  return (
    <div className="container text-center">
        <Image 
            src={'/notFound.jpg'}
            width={500}
            height={400}
            alt="Error"
            className="mx-auto my-10"
        />
        <h4 className="mb-10">Sorry. Page is not found!</h4>
        <Link href={'/'} className="cart-button mb-10">Back Home</Link>
    </div>
  )
}

export default Error