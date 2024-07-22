import React from 'react';
import useVanta from '../ui/useVanta';
import styled from 'styled-components';

const Testing = () => {
  const vantaRef = useVanta();

  return (
    <TestkingContainer ref={vantaRef}>
      <div style={{ position: 'relative', zIndex: 1, padding: '20px', color: '#fff' }}>
        <h1>Welcome to My Website</h1>
        <p>This is an example of integrating Vanta.js Birds animation in a Next.js project.</p>
      </div>
    </TestkingContainer>
  );
};

export default Testing;

const TestkingContainer = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  overflow: hidden !important;
  border: 2px solid red;
  position: relative;
  z-index: 7 !important;
`;
