import React from 'react';
import styled from 'styled-components';
import Paper from '~/layouts/Styled/Paper';
function Table({ labels }) {
  return (
    <Paper r={6}>
      <Wrap>    
        <thead>
          <Tr>
            {labels.map((item) => {
              return (
                <Th className='fw-600' key={item}>
                  {item}
                </Th>
              );
            })}
          </Tr>
        </thead>
        <tbody>
          <tr>
            <Td>Ripple</Td>
            <Td>Boolean</Td>
            <Td>Display of the ripple when click</Td>
            <Td>False</Td>
            <Td>1</Td>
          </tr>
          <tr>
            <Td>Ripple</Td>
            <Td>Boolean</Td>
            <Td>Display of the ripple when click</Td>
            <Td>False</Td>
            <Td>1</Td>
          </tr>
          <tr>
            <Td>Ripple</Td>
            <Td>Boolean</Td>
            <Td>Display of the ripple when click</Td>
            <Td>False</Td>
            <Td>1</Td>
          </tr>
        </tbody>
      </Wrap>
    </Paper>
  );
}

const Wrap = styled.table`
  width: 100%;
  border: 1px solid #ddd;
  border-collapse: collapse;
  border-spacing: 0;
`;
const Tr = styled.tr`
  border: 1px solid #ddd;
`;
const Td = styled.td`
  border: 1px solid #ddd;
  padding: 6px;
  text-align: center;
`;
const Th = styled.td`
  border: 1px solid #ddd;
  padding: 6px;
  text-align: center;
`;
export default Table;
