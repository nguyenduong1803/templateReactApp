import React from 'react';
import styled from 'styled-components';
import Paper from '~/layouts/Styled/Paper';
import PropTypes from 'prop-types';
function Table({ labels, borderColor, p }) {
  return (
    <Paper r={6}>
      <Wrap>
        <thead>
          <Tr>
            {labels.map((item) => {
              return (
                <Th p={p} className='fw-600' key={item}>
                  {item}
                </Th>
              );
            })}
          </Tr>
        </thead>
        <tbody>
          <tr>
            <Td p={p}>Ripple</Td>
            <Td p={p}>Boolean</Td>
            <Td p={p}>Display of the ripple when click</Td>
            <Td p={p}>False</Td>
            <Td p={p}>1</Td>
          </tr>
          <tr>
            <Td p={p}>Ripple</Td>
            <Td p={p}>Boolean</Td>
            <Td p={p}>Display of the ripple when click</Td>
            <Td p={p}>False</Td>
            <Td p={p}>1</Td>
          </tr>
          <tr>
            <Td p={p}>Ripple</Td>
            <Td p={p}>Boolean</Td>
            <Td p={p}>Display of the ripple when click</Td>
            <Td p={p}>False</Td>
            <Td p={p}>1</Td>
          </tr>
        </tbody>
      </Wrap>
    </Paper>
  );
}

Table.propTypes = {
  labels: PropTypes.array
};
Table.defaultProps = {
  labels: [],
  p: '6px'
};

const Wrap = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
`;
const Tr = styled.tr`
  border: 1px solid #ddd;
`;
const Td = styled.td`
  border: 1px solid #ddd;
  padding: ${({ p }) => p};
  text-align: center;
`;
const Th = styled.td`
  border: 1px solid #ddd;
  padding: ${({ p }) => p};
  text-align: center;
`;
export default Table;
