import React from 'react'
import PropTypes from 'prop-types'
import Schools from "../Schools/Schools";

import sharedStyle from "../Shared.module.css";

const SchoolsPage = ({ degrees, schools }) => {
  return (
    <div>
      <hr />
        <div>
          <h2 className={sharedStyle.title}>Schools</h2>
          <Schools degrees={degrees} schools={schools} />
        </div>
    </div>
  )
}

SchoolsPage.propTypes = {
  degrees: PropTypes.array.isRequired,
  schools: PropTypes.array.isRequired
}

export default SchoolsPage
