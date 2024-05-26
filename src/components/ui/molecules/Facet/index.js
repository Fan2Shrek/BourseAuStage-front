import { useCallback, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaChevronUp } from "react-icons/fa"

import './Facet.scss'
import cn from "../../../../utils/classnames"
import List from "../../atoms/List"
import Input from '../Input'

const Facet = ({
    defaultValues = [],
    defaultDisabledValues = [],
    allValue = false,
    andMore = false,
    isRange = false,
    label,
    values,

    onSelect,
    onUnselect,
}) => {
    const [isActive, setIsActive] = useState(true)
    const [isMaxHeightDefined, setIsMaxHeightDefined] = useState(false)
    const [disabledValues, setDisabledValues] = useState(defaultDisabledValues)
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

    const isLastValue = useCallback((value, index) => {
        return index === (values.length - 1 + [allValue].filter(additionnalFacet => additionnalFacet).length)
    }, [values, allValue])

    return <div ref={facet} className="facet">
        <div className="facet__header" onClick={handleClick}>
            <p>{t(`facets.label.${label}${isRange ? '.global' : ''}`, isRange
                ? {
                    min: values.min ?? 0,
                    max: values.max ?? 100
                }
                : {}
            )}</p>
            <FaChevronUp className={cn(
                'facet__chevron',
                {
                    active: isActive
                },
            )} />
        </div>
        {isRange
            ? <Input
                id={`facet_${label}`}
                label={`facets.label.${label}.input`}
                type='range'
                min={values.min ?? 0}
                max={values.max ?? 100}
                step={values.step ?? 1}
                defaultValue={defaultValues.value ?? 50}
                // active pas géré dans le sprint 2
                disabled
                onChange={value => console.log(`${value} pas géré dans le sprint 2`)}
                className={cn({
                    active: isActive
                })}
            />
            : <List
                collection={[
                    ...(allValue ? [t('facets.options.all')] : []),
                    ...values,
                ]}
                uniqueAttr={value => value}
                renderItem={(value, index) => <Input
                    id={`facet_${label}_${value}`}
                    label={isLastValue(value, index) && andMore ? `${value} ${t('facets.options.betweenAndMore')}` : value}
                    type='checkbox'
                    defaultChecked={defaultValues.includes(value)}
                    disabled={disabledValues?.includes(value)}
                    onChange={isActive => handleChange(isActive, value)}
                />}
                className={cn({
                    active: isActive
                })}
            />}
    </div>
}

export default Facet
