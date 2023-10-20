export const ShimmerUserCard = () => {
  return (
    <div className="flex flex-col gap-[2rem]">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div key={index} className="p-[2rem] bg-blue-300 "></div>
        ))}
    </div>
  );
};

export const ShimmerSingleCard = () => {
  return <div className="p-[3rem] bg-gray-300"></div>;
};

export const ShimmerPostCard = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-center flex-wrap gap-[1rem] mt-8">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div
            key={index}
            className="bg-gray-200 p-[5rem] rounded-md cursor-pointer md:basis-[32%]"
          ></div>
        ))}
    </div>
  );
};
