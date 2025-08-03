import { notFound } from "next/navigation";
import Image from "next/image";

import { fetchPostById } from "@/utils/fetchPosts";
type TProps = {
  params: {
    id: string;
  };
}

async function page({ params }: TProps) {
    const { id } = await params
    const post = await fetchPostById(parseInt(id));

    if (!post) {
    notFound();
  }

  return (
    <main className="mt-10 mx-auto container">
        <div className="post-container">
            <h2>{post?.title}</h2>
            <p>{post?.body}</p>
        </div>
    </main>
  )
}

export default page