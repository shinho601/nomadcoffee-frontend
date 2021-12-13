import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FatLink } from '../shared';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';

const SHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  margin-top: 10px;
  font-weight: bold;
  text-align: center;
  font-size: 20px;
`;

const Subtitle = styled(FatLink)`
  font-size: 16px;
  text-align: center;
  margin-top: 10px;
`;

function HeaderContainer({ title, subtitle }) {
  return (
    <SHeaderContainer>
      <FontAwesomeIcon icon={faMugHot} size="3x" />
      {title ? <Title>{title}</Title> : null}
      {subtitle ? <Subtitle>{subtitle}</Subtitle> : null}
    </SHeaderContainer>
  );
}

HeaderContainer.porpTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

HeaderContainer.defaultProps = {
  title: '',
  subtitle: '',
};

export default HeaderContainer;
