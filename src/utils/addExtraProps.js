const addExtraProps = (key, component, extraProps) => {
    return <component.type key={key} {...component.props} {...extraProps} />
}

export default addExtraProps
