import React from 'react'
import DenseTable from './DenseTable'
import classes from './FinalPage.module.css'
function FinalPage() {
  return (
    <div className={classes.container}>
      <h3>All Users</h3>
        <DenseTable/>
    </div>
  )
}

export default FinalPage