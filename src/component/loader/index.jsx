import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import { Heading, Text } from '../common/topography';

const LoaderContainer = styled(motion.div)`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  color: #080808;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 500ms ease all;
`;

const DigitContainer = styled.div`
  height: 37px;
  overflow: hidden;
`;

const Digit = styled(motion.div)`
  transition: 300ms ease all;
`;

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev >= 100 ? 100 : prev + 4;
        if (newProgress === 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsCompleted(true); // Start fading after a delay
          }, 1300);
        }
        return newProgress;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  const unitPlace = [];
  for (let j = 0; j < 100; j += 4) {
    unitPlace.push(j % 10);
  }
  const tenPlace = Array.from({ length: 11 }, (_, i) => i % 10);
  const hundredPlace = Array.from({ length: 2 }, (_, i) => i);

  const renderDigit = ({ array, divisor }) => (
    <DigitContainer>
      {array.map((num, i) => (
        <Digit key={i}>
          <Heading
            weight="500"
            animate={{ y: -Math.floor(progress / divisor) * 39 }}
          >
            {num}
          </Heading>
        </Digit>
      ))}
    </DigitContainer>
  );

  return (
    <AnimatePresence>
      {!isCompleted && (
        <LoaderContainer
          initial={{ opacity: 1 }}
          animate={{
            opacity: 1,
            backgroundColor: progress === 100 ? '#080808' : 'white',
            color: progress === 100 ? '#ddd' : '#080808',
            transition: { duration: 0.8 }, // 800ms fade to black
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.7 }, // 500ms delay before slide up
          }}
        >
          <div style={{ display: 'flex' }}>
            {renderDigit({ array: hundredPlace, divisor: 100 })}
            {renderDigit({ array: tenPlace, divisor: 10 })}
            {renderDigit({ array: [...unitPlace, 0], divisor: 4 })}<Heading weight="500">%</Heading>
          </div>
        </LoaderContainer>
      )}
    </AnimatePresence>
  );
};

export default Loader;
