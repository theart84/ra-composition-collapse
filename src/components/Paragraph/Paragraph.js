import React, { useRef } from "react";
import PropTypes from "prop-types";

const Paragraph = ({ children, getHeight }) => {
  const ref = useRef();
  if (ref.current) {
    const { offsetHeight } = ref.current;
    getHeight(offsetHeight);
  } 
  
  return (
    <p ref={ref} className="paragraph">
      {children}
    </p>
  );
};

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  getHeight: PropTypes.func.isRequired,
};

export default Paragraph;
