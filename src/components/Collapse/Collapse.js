import React from "react";
import PropTypes from "prop-types";

const Collapse = ({
  isExpanded,
  collapsedLabel,
  expandedLabel,
  onExpandedChange,
  height,
  children,
}) => {
  const onClickHandler = () => {
    onExpandedChange();
  };

  const expandedElement = (
    <span onClick={onClickHandler} className="title title__expanded">
      {expandedLabel}
      <span className="icon icon-arrow-top" />
    </span>
  );
  const collapsedElement = (
    <span onClick={onClickHandler} className="title title__collapsed">
      {collapsedLabel}
      <span className="icon icon-arrow-down" />
    </span>
  );

  let collapseContentClasses = "collapse-content";

  if (isExpanded) {
    collapseContentClasses += " collapse-content__visible";
  }

  return (
    <div className="collapse">
      <div className="collapse-body">
        <div
          className={collapseContentClasses}
          style={{ height: isExpanded ? height : 0 }}
        >
          {children}
        </div>
      </div>
      <div>{isExpanded ? expandedElement : collapsedElement}</div>
    </div>
  );
};

Collapse.propTypes = {
  children: PropTypes.node.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  collapsedLabel: PropTypes.string.isRequired,
  expandedLabel: PropTypes.string.isRequired,
  onExpandedChange: PropTypes.func.isRequired,
  height: PropTypes.number.isRequired
};

export default Collapse;
