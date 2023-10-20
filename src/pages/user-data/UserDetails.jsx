import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleUserApi } from "../../api";
import { ShimmerSingleCard } from "../../components/Shimmer";
import PostCard from "../../components/PostCard";
import Clock from "../../components/Clock";

const UserDetails = () => {
  const [userData, setUserData] = useState(null);

  const { userId } = useParams();
  const navigator = useNavigate();

  const fetchSingleUser = async (userId) => {
    try {
      const response = await getSingleUserApi(userId);
      setUserData(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSingleUser(userId);
  }, [userId]);

  const goBack = () => {
    navigator("/");
  };

  return (
    <div className="bg-gradient-to-r from-pink-500 to-yellow-500 py-[1rem] px-[4rem] md:px-[8rem]">
      <div className="my-[2rem] flex flex-col md:flex-row md:justify-between gap-[2rem]">
        <button
          onClick={goBack}
          className="border border-black bg-blue-300 hover:bg-blue-400 rounded-md px-[1.5rem] py-[0.5rem] font-[400] text-[1.5rem]"
        >
          Back
        </button>
        <Clock />
      </div>
      <h2 className="text-center text-[2.5rem] text-black mb-[1.5rem]">
        Profile Page
      </h2>
      {!userData ? (
        <ShimmerSingleCard />
      ) : (
        <>
          <div className="flex flex-col md:flex-row justify-between bg-white px-[2rem] py-[1.5rem] rounded-md text-[1.2rem]">
            <div className="flex flex-col gap-[1rem]">
              <p>{userData?.name}</p>
              <p>
                {userData?.username} | {userData?.company?.catchPhrase}
              </p>
            </div>
            <div className="flex flex-col gap-[1rem]">
              <p>
                {userData?.address?.street} | {userData?.address?.city}
              </p>
              <p>
                {userData?.email} | {userData?.phone}
              </p>
            </div>
          </div>
          <PostCard id={userId} />
        </>
      )}
    </div>
  );
};

export default UserDetails;
