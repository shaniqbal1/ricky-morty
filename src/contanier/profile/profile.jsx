import MainLayout from "../../contanier/main-layout/mainlayout";
import Heading from "../../component/heading/heading";
import Homepage from "../../contanier/homepage/homepage";
import { Link, useParams } from "react-router";
import { Row, Col } from "antd";
import Imag from "../../component/image-/img";
import { ArrowLeftOutlined } from "@ant-design/icons";
import CustomTypography from "../../component/typography/typography";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProfile,
  SelectSinglecharacter,
  setRecentProfiles,
} from "../../app/characterSlice";

function Profile() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const singleProfile = useSelector(SelectSinglecharacter);
  const recentVisitedProfiles = useSelector(
    (state) => state.characters?.recentVisitedProfile ?? []
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchProfile(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (!singleProfile) return;
    if (recentVisitedProfiles.length > 0 && recentVisitedProfiles[0].id === singleProfile.id) return; // already most recent
    const updatedList = recentVisitedProfiles.filter(
      (item) => item.id !== singleProfile.id
    );
    dispatch(
      setRecentProfiles([
        {
          label: singleProfile.name,
          id: singleProfile.id,
          image: singleProfile.image,
        },
        ...updatedList,
      ])
    );
  }, [singleProfile, recentVisitedProfiles, dispatch]);

  return (
    <MainLayout>
      <Row justify="center" style={{ paddingBottom: "20px" }}>
        <Col span={10} offset={3} style={{ marginTop: "19px" }}>
          <Link to="/" target="_self" style={{ marginTop: "7px" }}>
            <ArrowLeftOutlined /> Back to Homepage
          </Link>
        </Col>
      </Row>

      <Row justify="center">
        <Col span={8}>
          {singleProfile?.image && (
            <Imag width="70%" height="300px" src={singleProfile.image} />
          )}
        </Col>
      </Row>

      <Row justify="center">
        <Col span={3}>
          <Heading level={5} heading="Name:" />
        </Col>
        <Col span={3} offset={2} style={{ paddingTop: "24px" }}>
          <CustomTypography content={singleProfile?.name} />
        </Col>
      </Row>

      <Row justify="center">
        <Col span={3}>
          <Heading level={5} heading="Gender:" />
        </Col>
        <Col span={3} offset={2} style={{ paddingTop: "24px" }}>
          <CustomTypography content={singleProfile?.gender} />
        </Col>
      </Row>

      <Row justify="center">
        <Col span={3}>
          <Heading level={5} heading="Species:" />
        </Col>
        <Col span={3} offset={2} style={{ paddingTop: "24px" }}>
          <CustomTypography content={singleProfile?.species} />
        </Col>
      </Row>
    </MainLayout>
  );
}

export default Profile;
