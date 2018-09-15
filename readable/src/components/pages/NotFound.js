import React from 'react'
import Typography from 'material-ui/Typography'
import { styles } from '../../styles/page/NotFound'

const NotFound = (props) => {
  const {classes} = props
  return (
    <div className={ classes.root }>
      <Typography type="display2" component="h1">
        404
        Página não encontrada
      </Typography>
    </div>
  )
}

export default styles(NotFound)
