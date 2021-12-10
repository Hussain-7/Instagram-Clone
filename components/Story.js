function Story({ img, username }) {
  return (
    <div>
      <img
        className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2
        object-contain cursor-pointer
        hover:scale-125 transition transform duration-200 ease-out"
        src="https://media-exp1.licdn.com/dms/image/C4E03AQH5_54XQXJtPw/profile-displayphoto-shrink_800_800/0/1606752728327?e=1644451200&v=beta&t=BW7rZoo911IXAr483ZEWDjs-dsdYS5q6Y692QVvL2jM"
        alt=""
      />
      <p className="text-xs w-14 truncate text-center ">{username}</p>
    </div>
  );
}

export default Story;
