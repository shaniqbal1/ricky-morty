import { Typography } from 'antd';
const { Text } = Typography;

function CustomTypography({ content, className}) {
  return (
    <Text  className={className}>
      {content}
    </Text>
  );
}

export default CustomTypography;
