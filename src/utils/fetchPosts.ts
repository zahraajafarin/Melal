export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export async function fetchPosts(crash?: boolean): Promise<Post[] | null> {
  if (crash) throw new Error("Simulated backend crash");

  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 * 5 }, // 5 min
  });

  if (!res.ok) throw new Error("Failed to fetch posts");

  const data: Post[] = await res.json();
  return data.slice(0, 10);
}

export async function fetchPostById(
  id: number,
  crash?: boolean
): Promise<Post | null> {
  if (crash) throw new Error("Simulated backend crash");

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 60 * 5 }, // 5 min
  });

  if (res.status === 404) {
    return null;
  }

  if (!res.ok) throw new Error("Failed to fetch post");

  const data: Post = await res.json();
  return data;
}