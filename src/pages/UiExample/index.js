import {useMemo} from 'react';
import {FaArrowRight, FaGithub} from "react-icons/fa";

import styles from './UiExample.module.scss';
import Button from '../../components/ui/atoms/Button';
import List from '../../components/ui/atoms/List';

const UiExample = () => {
    const exampleMainButtons = useMemo(() => [
        {
            identifier: 1,
            label: 'Button 1',
            redirectTo: '/home',
            onClick: () => console.log('Button clicked'),
            className: styles.btn,
        },
        {identifier: 2, label: 'Button 2', inverted: true, className: styles.btn},
        {identifier: 3, label: 'Button 3', inverted: true, transparent: true, className: styles.btn},
        {identifier: 4, label: 'Button 4', inverted: true, transparent: true, dashedBorder: true, className: styles.btn},
        {identifier: 5, label: 'Button 5', inverted: true, transparent: true, withoutBorder: true, className: styles.btn},
        {identifier: 6, label: 'Button 6', icon: <FaGithub />, className: styles.btn},
        {identifier: 7, label: 'Button 7', inverted: true, transparent: true, icon: <FaArrowRight />, rightIcon: true, className: styles.btn},
    ], [])

    const exampleNeutralButtons = useMemo(() => [
        {identifier: 1, label: 'Button 1', neutral: true, className: styles.btn},
        {identifier: 2, label: 'Button 2', neutral: true, inverted: true, className: styles.btn},
        {identifier: 3, label: 'Button 3', neutral: true, inverted: true, transparent: true, className: styles.btn},
        {identifier: 4, label: 'Button 4', neutral: true, inverted: true, transparent: true, dashedBorder: true, className: styles.btn},
        {identifier: 5, label: 'Button 5', neutral: true, inverted: true, transparent: true, withoutBorder: true, className: styles.btn},
        {identifier: 6, label: 'Button 6', neutral: true, icon: <FaGithub />, className: styles.btn},
        {identifier: 7, label: 'Button 7', neutral: true, inverted: true, transparent: true, icon: <FaArrowRight />, rightIcon: true, className: styles.btn},
    ], [])

    const exampleSecondaryButtons = useMemo(() => [
        {identifier: 1, label: 'Button 1', secondary: true, className: styles.btn},
        {identifier: 2, label: 'Button 2', secondary: true, inverted: true, className: styles.btn},
        {identifier: 3, label: 'Button 3', secondary: true, inverted: true, transparent: true, className: styles.btn},
        {identifier: 4, label: 'Button 4', secondary: true, inverted: true, transparent: true, dashedBorder: true, className: styles.btn},
        {identifier: 5, label: 'Button 5', secondary: true, inverted: true, transparent: true, withoutBorder: true, className: styles.btn},
        {identifier: 6, label: 'Button 6', secondary: true, icon: <FaGithub />, className: styles.btn},
        {identifier: 7, label: 'Button 7', secondary: true, inverted: true, transparent: true, icon: <FaArrowRight />, rightIcon: true, className: styles.btn},
    ], [])

    return <div className={styles.container}>
        <List
            collection={exampleMainButtons}
            // pick item.id by default
            uniqueAttr={btn => btn.identifier}
            renderItem={({identifier: _, ...attr}) => {
                return <Button {...attr} />
            }}
        />

        <List
            collection={exampleNeutralButtons}
            // pick item.id by default
            uniqueAttr={btn => btn.identifier}
            renderItem={({identifier: _, ...attr}) => {
                return <Button {...attr} />
            }}
        />

        <List
            collection={exampleSecondaryButtons}
            // pick item.id by default
            uniqueAttr={btn => btn.identifier}
            renderItem={({identifier: _, ...attr}) => {
                return <Button {...attr} />
            }}
        />
    </div>
}

export default UiExample;
