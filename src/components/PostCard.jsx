import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostAction } from "../store/posts/action";
import { ShimmerPostCard } from "./Shimmer";

const PostCard = (props) => {
  const { id } = props;
  const posts = useSelector((state) => state?.post?.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!posts.length) {
      dispatch(getPostAction());
    }
  }, [dispatch]);

  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalRef = useRef();

  const filteredPosts = posts?.filter((post) => post?.userId == id);

  const openModal = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPost(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {posts.length === 0 ? (
        <ShimmerPostCard />
      ) : (
        <div className="flex flex-col lg:flex-row md:justify-center flex-wrap gap-[1rem] mt-8">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-blue-200 hover:bg-blue-300 p-3 rounded-2xl cursor-pointer lg:basis-[32%]"
              onClick={() => openModal(post)}
            >
              <p className="text-lg font-bold">{post.title}</p>
              <p className="mt-2">{post.body}</p>
            </div>
          ))}
        </div>
      )}
      {isModalOpen && selectedPost && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60">
          <div
            ref={modalRef}
            className="bg-white p-6 max-w-md rounded-lg text-center"
          >
            <p className="text-lg font-bold">{selectedPost.title}</p>
            <p className="mt-2">{selectedPost.body}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default PostCard;
