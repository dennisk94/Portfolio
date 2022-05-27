import Switch from "react-switch";


const SwitchToggle = ( {toggleTheme, checked } ) => {
  return (
    <div className="header__toggle">

                <Switch 
                    onChange={toggleTheme}
                    checked={checked}
                    offColor='#fcf7e9'
                    onColor='#041C32'
                    offHandleColor='#000000'
                    onHandleColor='#ffffff'
                    uncheckedIcon={false}
                    checkedIcon={false}
                />

    </div>
  )
}

export default SwitchToggle;