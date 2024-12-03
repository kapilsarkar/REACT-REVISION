import { useEffect, useState } from "react";

const Github = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/kapilsarkar")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <>
      <div className="text-center m-3 bg-gray-600 text-white text-3xl">
        GitHub Followers:{data.followers}
        <img className="w-72 p-3" src={data.avatar_url} alt="Github-img" />
      </div>
    </>
  );
};

export default Github;
