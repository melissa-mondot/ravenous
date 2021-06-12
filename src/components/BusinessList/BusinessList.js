import React from "react";
import Business from "../Business/Business";
import "./BusinessList.css";

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        {this.props.businesses.map((business, idx) => {
          return <Business key={idx} business={business} />;
        })}
      </div>
    );
  }
}

export default BusinessList;
