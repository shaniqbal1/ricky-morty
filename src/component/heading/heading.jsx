import { Typography } from "antd";

const { Title } = Typography;

function Heading({heading,level,className }) {
  return <Title level={level} 
         className={className}
  >{heading}</Title>;
}

export default Heading;
