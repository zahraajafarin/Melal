'use client'
import Image from "next/image"

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
        <h4 className="mb-10">Sorry. It seems there is a problem!</h4>
    </div>
  )
}

export default Error