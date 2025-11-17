import MainLayout from "../../contanier/main-layout/mainlayout";
import Heading from "../../component/heading/heading";
import Homepage from "../../contanier/homepage/homepage";
import { Link, useParams } from "react-router";
import { Row, Col, Spin, Alert } from "antd";
import Imag from "../../component/image/image";
import { ArrowLeftOutlined } from "@ant-design/icons";
import CustomTypography from "../../component/typography/typography";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProfile,
  SelectSinglecharacter,
  setRecentProfiles,
  selectError,
  selectStatus,
} from "../../app/characterSlice";

function Profile() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const singleProfile = useSelector(SelectSinglecharacter);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);
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

  if (status === "pending") {
    return (
      <MainLayout>
        <Row justify="center" style={{ paddingTop: "50px" }}>
          <Col>
            <Spin size="large" />
          </Col>
        </Row>
      </MainLayout>
    );
  }

  if (status === "rejected") {
    return (
      <MainLayout>
        <Row justify="center" style={{ paddingTop: "50px" }}>
          <Col span={12}>
            <Alert
              message="Error Loading Profile"
              description={`Failed to load character profile. ${error ? `Error: ${error}` : "Please check your internet connection or try again later."}`}
              type="error"
              showIcon
            />
          </Col>
        </Row>
        <Row justify="center" style={{ paddingTop: "20px" }}>
          <Col>
            <Link to="/" target="_self">
              <ArrowLeftOutlined /> Back to Homepage
            </Link>
          </Col>
        </Row>
      </MainLayout>
    );
  }

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
            <Imag width="90%" height="350px" src={singleProfile.image} />
          )}
        </Col>
      </Row>

      <Row justify="center">
        <Col span={3}>
          <Heading level={4} heading="Name:" />
        </Col>
        <Col span={3} offset={2} style={{ paddingTop: "24px" }}>
          <CustomTypography content={singleProfile?.name} />
        </Col>
      </Row>

      <Row justify="center">
        <Col span={3}>
          <Heading level={5} heading="Gender:"/>
        </Col>
        <Col span={3} offset={2} style={{ paddingTop: "20px" }}>
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

      <Row justify="center">
        <Col span={3}>
          <Heading level={5} heading="Status:" />
        </Col>
        <Col span={3} offset={2} style={{ paddingTop: "24px" }}>
          <CustomTypography content={singleProfile?.status} />
        </Col>
      </Row>

      <Row justify="center">
        <Col span={3}>
          <Heading level={5} heading="Origin:" />
        </Col>
        <Col span={3} offset={2} style={{ paddingTop: "24px" }}>
          <CustomTypography content={singleProfile?.origin?.name} />
        </Col>
      </Row>

      <Row justify="center">
        <Col span={3}>
          <Heading level={5} heading="Location:" />
        </Col>
        <Col span={3} offset={2} style={{ paddingTop: "24px" }}>
          <CustomTypography content={singleProfile?.location?.name} />
        </Col>
      </Row>
    </MainLayout>
  );
}

export default Profile;
