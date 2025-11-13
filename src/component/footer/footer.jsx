// import Heading from "../common/heading/heading";
import { Row, Col } from "antd";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import Image  from "../image/image"
import Heading from "../heading/heading";
function Footer() {
 const recentVisitedProfiles = useSelector(
    (state)=> state.characters.recentVisitedProfile
  )
  return (
    <>
      <Heading level={4} heading="Recently visited profiles:" />
    <Row gutter={[24, 8]}>
  {recentVisitedProfiles.slice(0, 10).map((profile, index) => {
    return (
      <Col key={index}>
        <Link to={`/profile/${profile.id}`}>
          <Image
            width={40}
            height={30}
            src={profile.image}
            style={{
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          &nbsp;
          {profile.label}
        </Link>
      </Col>
    );
  })}
</Row>
    </>
  );
}
export default Footer;