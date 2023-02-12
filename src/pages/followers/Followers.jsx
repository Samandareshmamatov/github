import React from "react";
import Follow from "../../components/follow/Follow";
import axios from "axios";

const Followers = () => {
  const [state, setState] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    axios("https://api.github.com/users/samandareshmamatov/followers").then(
      (res) => {
        setState(res.data);
        setLoading(false);
      }
    );
  }, []);
  //https://api.github.com/users/samandareshmamatov/followers
  return (
    <div className="fol-box">
      {loading ? (
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        state?.map((el) => <Follow key={el.id} data={el} />)
      )}
    </div>
  );
};

export default Followers;
