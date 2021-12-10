import faker from "faker";
import { useEffect, useState } from "react";
import Story from "./Story";
function Stories() {
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const gensuggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    // gensuggestions.map((profile) => ({
    //   ...profile,
    //   avatar:
    //     "https://media-exp1.licdn.com/dms/image/C4E03AQH5_54XQXJtPw/profile-displayphoto-shrink_800_800/0/1606752728327?e=1644451200&v=beta&t=BW7rZoo911IXAr483ZEWDjs-dsdYS5q6Y692QVvL2jM",
    // }));
    setSuggestions(gensuggestions);
  }, []);
  return (
    <div
      className="flex space-x-3 p-6
		bg-white mt-8 border-gray-200 border rounded-sm
		overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-200"
    >
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
}

export default Stories;
