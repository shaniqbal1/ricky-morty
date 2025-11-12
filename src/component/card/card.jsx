import { Badge } from "antd";
import { Image } from "antd";
import { Link } from "react-router";

import Pagination from"../pagination/pagination";
import Heading from "../heading/heading";


import "./card.css";


function Card({ data }) {
   let statusColor = {
		'Alive': "success",
		'Dead': "error",
		'unknown': "default",
	}
  return (
    <div className="cardmaindiv">
      <Image src={data.image} className="styimg" />

      
        
         
        <Badge dot status={statusColor[data.status]} >
           <Heading heading={data.name} level={4} className="externalcss" />
        </Badge>
        <Link to={`/profile/${data.id}`}>
          <Heading heading="View Profile" level={5} className="profile-link" />
        </Link>
      
    </div>
  );
}

export default Card;
