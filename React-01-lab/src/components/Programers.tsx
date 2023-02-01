import React from 'react'

interface Programers {

    name: string,
    progLangs: string,
    experienceWork: number,
    company: string
}

function Programers(props: Programers) {
  return (
    <div>
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-header">
                <h4>Name: {props.name}</h4>
            </div>
            <div className="card-body">
                <h5 className="card-title">Languages: {props.progLangs}</h5>
                <p className="card-text">Experience: {props.experienceWork}</p>
                <p>Company: {props.company}</p>
            </div>
        </div>
    </div>
  )
}

export default Programers