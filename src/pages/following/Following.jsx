import React from "react";
import Follow from "../../components/follow/Follow";
import axios from "axios";

const Following = () => {
  const [state, setState] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    axios("https://api.github.com/users/samandareshmamatov/following").then(
      (res) => {
        setState(res.data);
        setTimeout(() => {
          setLoading(false);
        }, 300);
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

export default Following;
