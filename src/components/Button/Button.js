import React from 'react'
import './Button.css'
import { Button } from "@itwin/itwinui-react";

/**
 * UI component for user interaction
 */
function ButtonComponent(props) {
  const { variant = 'cta', children, ...rest } = props
  return (
    <Button styleType={variant} className={`button ${variant}`} {...rest}>
      {children}
    </Button>
  )
}

export default ButtonComponent
