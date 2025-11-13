import { Card as AntCard, Badge, Row, Col, Typography } from "antd";
import { Link } from "react-router";

const { Title } = Typography;

function Card({ data }) {
  const statusColors = {
    'Alive': "success",
    'Dead': "error",
    'unknown': "default",
  };

  const onViewDetail = (character) => {
    // Navigate to profile
    window.location.href = `/profile/${character.id}`;
  };

  return (
    <AntCard
      hoverable
      cover={
        <img
          alt={data.name}
          src={data.image}
          style={{
            height: '200px',
            objectFit: 'cover',
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px'
          }}
        />
      }
      bodyStyle={{
        padding: '16px',
        height: '120px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
      }}
      style={{
        height: '340px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
        cursor: 'pointer'
      }}
      onClick={() => onViewDetail(data)}
    >
      <Row>
        <Col span={24}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
            <Title level={4} style={{ margin: 0, fontSize: '16px' }}>
              {data.name}
            </Title>
            <Badge
              status={statusColors[data.status]}
              style={{ marginLeft: '8px' ,marginBottom: '13px'}}
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Link
            onClick={(e) => {
              e.stopPropagation();
              onViewDetail(data);
            }}
            style={{ alignSelf: 'flex-start', fontSize: '14px' }}
          >
            View Profile
          </Link>
        </Col>
      </Row>
    </AntCard>
  );
}

export default Card;
