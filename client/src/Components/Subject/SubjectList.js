import React from 'react';

const ListSubject = ({ subjects }) => {

  return (
    <ul>
      {
        subjects &&
          subjects.length > 0 ?
            (
              subjects.map(subject => {
                return (
                  <li key={subject._id}>{subject.subjectName}</li>
                )
              })
            )
            :
            (
              <li>No more left</li>
            )
          }
    </ul>
  )
}

export default ListSubject
