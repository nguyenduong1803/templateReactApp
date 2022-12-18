import React from 'react';
import { useParams } from 'react-router-dom';

function ButtonPage() {
  const id = useParams('id');
  return (
    <div>
      <h2 className="main-title pl-24">1. {id.id}</h2>
      <h3 className="pl-24 fz-24 fw-500">Basic Components</h3>
    </div>
  );
}

export default ButtonPage;
