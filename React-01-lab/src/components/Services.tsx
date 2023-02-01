import React from 'react'

interface Services {
    serviceKind: string,
    expectedPrices: number
}

function Services(props: Services) {
  return (
    <div>
        <div className="card">
            <div className="card-header">
                <h4>Service Name: {props.serviceKind}</h4>
            </div>
            <div className="card-body">
                <h5 className="card-title">Service Expected Price: {props.expectedPrices}</h5>
            </div>
        </div>
    </div>
  )
}

export default Services