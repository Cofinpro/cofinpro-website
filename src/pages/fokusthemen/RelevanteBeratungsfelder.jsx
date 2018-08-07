import React from 'react'

class RelevanteBeratungsfelder extends React.Component {
  render() {
    const data = this.props.data

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    const { beratungsfelder } = this.props

    return (
      <div>
        <div className="">
          <p className="text-size-14">RELEVANTE BERATUNGSFELDER</p>

          {beratungsfelder !== undefined &&
            beratungsfelder.map((beratungsfeld, index) => (
              <p key={index} className="text-size-18">
                {beratungsfeld}
              </p>
            ))}
        </div>
      </div>
    )
  }
}

export default RelevanteBeratungsfelder
