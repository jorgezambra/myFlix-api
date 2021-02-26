import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Form from 'react-bootstrap/Form';

import { setFilter } from '../../actions/actions';

/**
* Movie filter
* @function VisibilityFilterInput
* @param {func} props - setFilter props
* @returns {VisibilityFilterInput}
*/
function VisibilityFilterInput(props) {
  return <Form.Control style={{ width: '15rem' }}
    onChange={e => props.setFilter(e.target.value)}
    value={props.visibilityFilter}
    placeholder="Search by Movie Name"
  />;
}

export default connect(
  null,
  { setFilter }
)(VisibilityFilterInput);