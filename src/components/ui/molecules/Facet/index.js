import { useCallback, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaChevronUp } from "react-icons/fa"

import './Facet.scss'
import List from "../../atoms/List"
import cn from "../../../../utils/classnames"
import Input from '../../atoms/Input'

const Facet = ({
    label,
    values,
    defaultCheckedValues,
    defaultDisabledValues,
    allValue,
    onSelect,
    onUnselect,
}) => {
    const [isActive, setIsActive] = useState(true)
    const [isMaxHeightDefined, setIsMaxHeightDefined] = useState(false)
    const [disabledValues, setDisabledValues] = useState(defaultDisabledValues ?? [])
    const [lastClickedValue, setLastClickedValue] = useState({
        value: null,
        isActive: false
    })
    const { t } = useTranslation()
    const facet = useRef(null)

    useEffect(() => {
        if (!isMaxHeightDefined) {
            facet?.current?.style.setProperty('--facet-max-height', `${facet.current.clientHeight}px`)
            setIsMaxHeightDefined(true)
        }
    }, [facet, isMaxHeightDefined])

    useEffect(() => {
        if (lastClickedValue.value === null) {
            return
        }

        if (lastClickedValue.isActive) {
            onSelect && onSelect(label, lastClickedValue.value)
        } else {
            onUnselect && onUnselect(label, lastClickedValue.value)
        }
    }, [lastClickedValue, onSelect, onUnselect, label, disabledValues])

    const handleClick = useCallback(() => {
        setIsActive(isActive => !isActive)
    }, [setIsActive])

    const handleChange = useCallback((isActive, value) => {
        if (value === t('facets.options.all')) {
            if (isActive) {
                setDisabledValues(values)
            } else {
                disabledValues.forEach(value => {
                    onUnselect && onUnselect(label, value)
                });

                setDisabledValues([])
            }
        }

        setLastClickedValue({ value, isActive })
    }, [setLastClickedValue, values, disabledValues, onUnselect, label, t])

    return <div ref={facet} className="facet">
        <div className="facet__header" onClick={handleClick}>
            <p>{label}</p>
            <FaChevronUp className={cn(
                'facet__chevron',
                {
                    active: isActive
                },
            )} />
        </div>
        <List
            collection={[
                ...(allValue ? [t('facets.options.all')] : []),
                ...values,
            ]}
            uniqueAttr={value => value}
            renderItem={value => <Input
                id={`facet_${value}`}
                label={value}
                type='checkbox'
                defaultChecked={defaultCheckedValues?.includes(value)}
                disabled={disabledValues?.includes(value)}
                onChange={isActive => handleChange(isActive, value)}
            />}
            className={cn({
                active: isActive
            })}
        />
    </div>
}

export default Facet
