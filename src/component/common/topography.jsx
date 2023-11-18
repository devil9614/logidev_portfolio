import { motion } from 'framer-motion';
import styled from 'styled-components';

// Basic text component with motion and the ability to take props
const Text = styled(motion.span)`
  font-size: ${(props) => props.size || '1rem'};
  color: ${(props) => props.color || 'black'};
  font-weight: ${(props) => props.weight || 'normal'};
  text-transform: ${(props) => props.transform || 'none'};
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '0'};
  line-height: ${(props) => props.lineHeight || 'normal'};
`;

// Heading component
const Heading = styled(Text).attrs({ as: 'h1' })`
  font-size: ${(props) => props.size || '2rem'};
`;

// Subheading component
const Subheading = styled(Text).attrs({ as: 'h2' })`
  font-size: ${(props) => props.size || '1.5rem'};
`;

// Paragraph component
const Paragraph = styled(Text).attrs({ as: 'p' })`
  font-size: ${(props) => props.size || '1rem'};
`;

// Label component
const Label = styled(Text).attrs({ as: 'label' })`
  font-size: ${(props) => props.size || '0.75rem'};
`;

export { Text, Heading, Subheading, Paragraph, Label };

