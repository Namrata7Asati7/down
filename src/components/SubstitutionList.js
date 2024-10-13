import React from 'react';

const SubstitutionList = ({ substitutes }) => {
  return (
    <div>
      <h2>Substitutes:</h2>
      <ul>
        {substitutes.length > 0 ? (
          substitutes.map((substitute, index) => (
            <li key={index}>
              {substitute.name} - {substitute.details}
            </li>
          ))
        ) : (
          <p>No substitutes found for this ingredient.</p>
        )}
      </ul>
    </div>
  );
};

export default SubstitutionList;
