import styled from 'styled-components';

const NewButtonStyle = styled.div<{ size: 'small' | 'large' }>`
  background-color: red;
  color: whitesmoke;
  width: ${(props) => (props.size === 'small' ? '75px' : '200px')};
  height: ${(props) => (props.size === 'small' ? '75px' : '200px')};
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface NewButtonProps {
  label: string;
  size: 'small' | 'large';
  onClick?: () => void;
}

function Button({ label, size, onClick }: NewButtonProps) {
  return (
    <NewButtonStyle size={size}>
      <p>{label}</p>
    </NewButtonStyle>
  );
}

export default Button;
