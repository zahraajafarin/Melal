import Image from "next/image"

function NoData() {
  return (
    <div className="container text-center">
        <Image 
            src={'/empty.jpg'}
            width={500}
            height={500}
            alt="Error"
            className="mx-auto my-10"
        />
        <h4 className="mb-10">No posts available!</h4>
    </div>
  )
}

export default NoData