function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        className="w-16 h-16 rounded-full border p-[2px]"
        src="https://media-exp1.licdn.com/dms/image/C4E03AQH5_54XQXJtPw/profile-displayphoto-shrink_800_800/0/1606752728327?e=1644451200&v=beta&t=BW7rZoo911IXAr483ZEWDjs-dsdYS5q6Y692QVvL2jM"
        alt=""
      />
      <div className="flex-1 mx-4">
        <h2 className="font-bold">Hussain Rizvi</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
    </div>
  );
}

export default MiniProfile;
