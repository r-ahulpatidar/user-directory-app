import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserAction } from "../../store/users/action";
import { getPostAction } from "../../store/posts/action";
import { Link } from "react-router-dom";
import { ShimmerUserCard } from "../../components/Shimmer";

const UserList = () => {
  const users = useSelector((state) => state?.user?.users);
  const posts = useSelector((state) => state?.post?.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!users.length) {
      dispatch(getUserAction());
    }
    if (!posts.length) {
      dispatch(getPostAction());
    }
  }, []);

  // Create a function to compute user data with post count
  const computeUserListData = () => {
    return users.map((user) => ({
      userId: user.id,
      name: user.name,
      postCount: posts.filter((post) => post.userId === user.id).length,
    }));
  };

  const userListData = computeUserListData();

  return (
    <div className="bg-gradient-to-r from-pink-500 to-yellow-500 py-[1rem] px-[4rem] sm:px-[6rem] md:px-[10rem]">
      <h1 className="text-center text-[2.5rem] text-black font-[500]">
        Directory
      </h1>
      <div className="w-[3rem] mx-auto h-[0.2rem] bg-black mb-[2rem]"></div>
      {users.length === 0 ? (
        <ShimmerUserCard />
      ) : (
        userListData.map((user) => (
          <Link to={`/user/${user.userId}`} key={user.userId}>
            <div className="flex flex-col md:flex-row md:justify-between bg-blue-300 p-[1rem] mb-[1rem] rounded-md text-[1.2rem] cursor-pointer hover:bg-blue-400">
              <p>Name: {user.name}</p>
              <p>Number of Posts: {user.postCount}</p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default UserList;
