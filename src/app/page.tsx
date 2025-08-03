import { fetchPosts } from "@/utils/fetchPosts";
import Cart from "@/components/Cart";
import Image from "next/image";
import NoData from "@/components/NoData";
import { error } from "console";

export default async function Home() {
  const posts = await fetchPosts();

  return (
    <main className="mt-10 mx-auto container">
      {posts?.length == 0 ? (
        <NoData />
      ) : (
        <>
          <Image
            src={"/banner.png"}
            width={500}
            height={250}
            alt="banner"
            className="w-[60%]"
            loading="lazy"
          />
          <div className="grid-box">
            {posts?.map((post) => <Cart key={post.id} data={post} />)}
          </div>
        </>
      )}
    </main>
  );
}
