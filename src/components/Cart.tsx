import type { Post } from "@/utils/fetchPosts";
import Link from "next/link";

type TProps = {
  data: Post;
};

function Cart({ data }: TProps) {
  return (
    <div className="blogWrapGrid">
      <div className="blogBody">
        <h4 className="text-md mb-3">
          <Link href={`/posts/${data.id}`}>{data.title}</Link>
        </h4>
        <p>{data.body.slice(0, 100)}</p>
      </div>

      <div className="blogFooter">
        <Link
          href={`/posts/${data.id}`}
          className="cart-button"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default Cart;
