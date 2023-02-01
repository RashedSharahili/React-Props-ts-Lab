import React from 'react'

interface Companies {
    
    coName: string,
    emp_count: number,
    founderYear: number
}

function Companies(props: Companies) {
  return (
    <div>
        <h2>Company</h2>
        <div className="card">
            <div className="card-header">
                <h4>Co Name: {props.coName}</h4>
            </div>
            <div className="card-body">
                <h5 className="card-title">Emp Count: {props.emp_count}</h5>
                <p className="card-text">Founder Year: {props.founderYear}</p>
            </div>
        </div>
    </div>
  )
}

export default Companies