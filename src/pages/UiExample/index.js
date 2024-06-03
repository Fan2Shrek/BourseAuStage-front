import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaArrowRight, FaGithub } from "react-icons/fa";

import styles from './UiExample.module.scss';
import cn from '../../utils/classnames';
import tokens from '../../translations/tokens';
import path from '../../path';
import Button from '../../components/ui/atoms/Button';
import List from '../../components/ui/atoms/List';
import Tag from '../../components/ui/atoms/Tag';
import Container from '../../components/ui/atoms/Container';
import Loader from '../../components/ui/atoms/Loader';
import Input from '../../components/ui/molecules/Input';
import ProgressBar from '../../components/ui/atoms/ProgressBar';
import Select from '../../components/ui/atoms/Select';
import Card from '../../components/ui/atoms/Card';
import Calendar from '../../components/ui/atoms/Calendar';
import Ckeditor from '../../components/ui/atoms/Ckeditor';
import UnderlinedContent from '../../components/ui/atoms/UnderlinedText';
import Banner from '../../components/layout/Banner';
import Modal from '../../components/ui/atoms/Modal';
import Dot from '../../components/ui/atoms/Dot';

const UiExample = () => {
    const [displayModal, setDisplayModal] = useState(false)
    const { t } = useTranslation()

    const breadCrumb = useMemo(() => [
        {
            label: t(tokens.breadCrumb.home),
            link: path.home
        },
        {
            label: t(tokens.breadCrumb.uiExample),
            link: null
        },
    ], [t])

    const exampleMainButtons = useMemo(() => [
        {
            identifier: 1,
            label: 'Button 1',
            redirectTo: '/home',
            onClick: () => console.log('Button clicked'),
            className: styles.btn,
        },
        { identifier: 2, label: 'Button 2', inverted: true, className: styles.btn },
        { identifier: 3, label: 'Button 3', inverted: true, transparent: true, className: styles.btn },
        { identifier: 4, label: 'Button 4', inverted: true, transparent: true, dashedBorder: true, className: styles.btn },
        { identifier: 5, label: 'Button 5', inverted: true, transparent: true, withoutBorder: true, className: styles.btn },
        { identifier: 6, label: 'Button 6', icon: <FaGithub />, className: styles.btn },
        { identifier: 7, label: 'Button 7', inverted: true, transparent: true, icon: <FaArrowRight />, rightIcon: true, className: styles.btn },
    ], [])

    const exampleNeutralButtons = useMemo(() => [
        { identifier: 1, label: 'Button 1', neutral: true, className: styles.btn },
        { identifier: 2, label: 'Button 2', neutral: true, inverted: true, className: styles.btn },
        { identifier: 3, label: 'Button 3', neutral: true, inverted: true, transparent: true, className: styles.btn },
        { identifier: 4, label: 'Button 4', neutral: true, inverted: true, transparent: true, dashedBorder: true, className: styles.btn },
        { identifier: 5, label: 'Button 5', neutral: true, inverted: true, transparent: true, withoutBorder: true, className: styles.btn },
        { identifier: 6, label: 'Button 6', neutral: true, icon: <FaGithub />, className: styles.btn },
        { identifier: 7, label: 'Button 7', neutral: true, inverted: true, transparent: true, icon: <FaArrowRight />, rightIcon: true, className: styles.btn },
    ], [])

    const exampleSecondaryButtons = useMemo(() => [
        { identifier: 1, label: 'Button 1', secondary: true, className: styles.btn },
        { identifier: 2, label: 'Button 2', secondary: true, inverted: true, className: styles.btn },
        { identifier: 3, label: 'Button 3', secondary: true, inverted: true, transparent: true, className: styles.btn },
        { identifier: 4, label: 'Button 4', secondary: true, inverted: true, transparent: true, dashedBorder: true, className: styles.btn },
        { identifier: 5, label: 'Button 5', secondary: true, inverted: true, transparent: true, withoutBorder: true, className: styles.btn },
        { identifier: 6, label: 'Button 6', secondary: true, icon: <FaGithub />, className: styles.btn },
        { identifier: 7, label: 'Button 7', secondary: true, inverted: true, transparent: true, icon: <FaArrowRight />, rightIcon: true, className: styles.btn },
    ], [])

    const exampleTags = useMemo(() => [
        { id: 1, label: 'Tag 1' },
        { id: 2, label: 'Tag 2', color: '#eb8533' },
        { id: 3, label: 'Tag 3', color: '#56cdad' },
        { id: 4, label: 'Tag 4', color: '#ff6550' },
        { id: 5, label: 'Tag 5', color: '#26a4ff' },
        { id: 6, label: 'Tag 6', color: '#ff007a' },
        { id: 7, label: 'Tag 7', color: '#f5c400' },
        { id: 8, label: 'Tag 8', color: '#6a4c93' },
    ], [])

    const exampleSecondaryTags = useMemo(() => [
        { id: 1, label: 'Tag 1', secondary: true },
        { id: 2, label: 'Tag 2', color: '#eb8533', secondary: true },
        { id: 3, label: 'Tag 3', color: '#56cdad', secondary: true },
        { id: 4, label: 'Tag 4', color: '#ff6550', secondary: true },
        { id: 5, label: 'Tag 5', color: '#26a4ff', secondary: true },
        { id: 6, label: 'Tag 6', color: '#ff007a', secondary: true },
        { id: 7, label: 'Tag 7', color: '#f5c400', secondary: true },
        { id: 8, label: 'Tag 8', color: '#6a4c93', secondary: true },
    ], [])

    const exampleWithoutRadiusTags = useMemo(() => [
        { id: 1, label: 'Tag 1', radius: 0 },
        { id: 2, label: 'Tag 2', color: '#eb8533', radius: 0 },
        { id: 3, label: 'Tag 3', color: '#56cdad', radius: 0 },
        { id: 4, label: 'Tag 4', color: '#ff6550', radius: 0 },
        { id: 5, label: 'Tag 5', color: '#26a4ff', radius: 0 },
        { id: 6, label: 'Tag 6', color: '#ff007a', radius: 0 },
        { id: 7, label: 'Tag 7', color: '#f5c400', radius: 0 },
        { id: 8, label: 'Tag 8', color: '#6a4c93', radius: 0 },
    ], [])

    const exampleSecondaryWithoutRadiusTags = useMemo(() => [
        { id: 1, label: 'Tag 1', secondary: true, radius: 0 },
        { id: 2, label: 'Tag 2', color: '#eb8533', secondary: true, radius: 0 },
        { id: 3, label: 'Tag 3', color: '#56cdad', secondary: true, radius: 0 },
        { id: 4, label: 'Tag 4', color: '#ff6550', secondary: true, radius: 0 },
        { id: 5, label: 'Tag 5', color: '#26a4ff', secondary: true, radius: 0 },
        { id: 6, label: 'Tag 6', color: '#ff007a', secondary: true, radius: 0 },
        { id: 7, label: 'Tag 7', color: '#f5c400', secondary: true, radius: 0 },
        { id: 8, label: 'Tag 8', color: '#6a4c93', secondary: true, radius: 0 },
    ], [])

    const exampleLoaders = useMemo(() => [
        { id: 1, width: 40 },
        { id: 2, width: 50, secondary: true },
        { id: 3, width: 60, third: true },
        { id: 4, width: 50, color: '#56cdad' },
    ], [])

    const exampleThinnerLoaders = useMemo(() => [
        { id: 5, width: 40, thickness: 5 },
        { id: 6, width: 50, secondary: true, thickness: 5 },
        { id: 7, width: 60, third: true, thickness: 5 },
        { id: 8, width: 50, color: '#56cdad', thickness: 5 },
    ], [])

    const exampleInputs = useMemo(() => [
        { identifier: 1, id: 'required', label: 'Required', type: 'input', placeholder: 'required', required: true },
        { identifier: 2, id: 'notRequired', label: 'Not Required', type: 'input', placeholder: 'not required', required: false },
    ], [])

    const exampleInputsSimple = useMemo(() => [
        { identifier: 1, type: 'input' },
        { identifier: 2, type: 'input', placeholder: 'placeholder' },
    ], [])

    const exampleCheckbox = useMemo(() => [
        { identifier: 1, id: 'checkbox', type: 'checkbox', label: 'Checkbox' },
    ], [])

    const exampleProgressBars = useMemo(() => [
        { id: 1 },
        { id: 2, value: (40 * 100) / 80 },
        { id: 3, value: (10 * 100) / 80 },
        { id: 4, value: (5 * 100) / 80 },
    ], [])

    const exampleSelects = useMemo(() => [
        { identifier: 1, id: 'selectRequired', label: 'Required', name: 'selectRequired', placeholder: 'placeholder', values: ['valeur1', 'valeur2', 'valeur3'], required: true },
        { identifier: 2, id: 'selectNotRequired', label: 'Not Required', name: 'selectNotRequired', values: ['valeur1', 'valeur2'], required: false },
    ], [])

    const exampleSpecificSelects = useMemo(() => [
        { identifier: 1, id: 'selectSecondary', name: 'selectSecondary', secondary: true, placeholder: 'placeholder', values: ['valeur1', 'valeur2', 'valeur3'] },
        { identifier: 2, id: 'selectThird', name: 'selectThird', third: true, placeholder: 'placeholder', values: ['valeur1', 'valeur2', 'valeur3'] },
    ], [])

    const exampleCalendar = useMemo(() => [
        { id: 1, label: 'Date de naissance', required: true },
    ], [])

    const exampleCkeditor = useMemo(() => [
        { id: 1, label: 'label', placeholder: 'placeholder' },
    ], [])

    const exampleInputFile = useMemo(() => [
        {
            identifier: 1,
            id: 'inputFile',
            name: 'inputFile',
            type: 'file',
            label: 'Votre document',
            accept: 'image/png,image/svg+xml',
            placeholder: 'Importer un document',
            required: true,
            onChange: (file) => console.log(file),
        },
    ], [])

    const exampleDots = useMemo(() => [
        { id: 1 },
        { id: 2, size: 8 },
        { id: 2, size: 16 },
        { id: 2, size: 32 },
    ], [])

    const exampleUnderlinedTexts = useMemo(() => [
        { id: 1, item: <h2>Ce texte est <UnderlinedContent>souligné</UnderlinedContent></h2> },
        { id: 2, item: <h3><UnderlinedContent>Ce texte est completement souligné</UnderlinedContent></h3> },
    ], [])


    return <Container inline className={styles.container}>
        <Banner breadCrumb={breadCrumb}>
            <h1>Ui Exemples</h1>
        </Banner>

        <Container>
            <Container inline className={styles.section}>
                <h2>Bouton :</h2>

                <List
                    collection={exampleMainButtons}
                    // pick item.id by default
                    uniqueAttr={btn => btn.identifier}
                    renderItem={({ identifier: _, ...attr }) => {
                        return <Button {...attr} />
                    }}
                />

                <List
                    collection={exampleNeutralButtons}
                    // pick item.id by default
                    uniqueAttr={btn => btn.identifier}
                    renderItem={({ identifier: _, ...attr }) => {
                        return <Button {...attr} />
                    }}
                />

                <List
                    collection={exampleSecondaryButtons}
                    // pick item.id by default
                    uniqueAttr={btn => btn.identifier}
                    renderItem={({ identifier: _, ...attr }) => {
                        return <Button {...attr} />
                    }}
                />
            </Container>

            <Container inline className={styles.section}>
                <h2>Full Container :</h2>
                <Container inline cornerTop cornerBottom className={cn(styles.section, styles.bg)}>
                    <h2>Tag :</h2>

                    <List
                        collection={exampleTags}
                        renderItem={({ id: _, ...attr }) => {
                            return <Tag {...attr} />
                        }}
                    />

                    <List
                        collection={exampleSecondaryTags}
                        renderItem={({ id: _, ...attr }) => {
                            return <Tag {...attr} />
                        }}
                    />

                    <List
                        collection={exampleWithoutRadiusTags}
                        renderItem={({ id: _, ...attr }) => {
                            return <Tag {...attr} />
                        }}
                    />

                    <List
                        collection={exampleSecondaryWithoutRadiusTags}
                        renderItem={({ id: _, ...attr }) => {
                            return <Tag {...attr} />
                        }}
                    />
                </Container>
            </Container>

            <Container inline className={styles.section}>
                <h2>Loader :</h2>

                <List
                    collection={exampleLoaders}
                    renderItem={({ id: _, ...attr }) => {
                        return <Loader {...attr} />
                    }}
                />

                <List
                    collection={exampleThinnerLoaders}
                    renderItem={({ id: _, ...attr }) => {
                        return <Loader {...attr} />
                    }}
                />
            </Container>

            <Container inline className={styles.section}>
                <h2>Input :</h2>

                <List
                    collection={exampleInputs}
                    uniqueAttr={input => input.identifier}
                    renderItem={({ identifier: _, ...attr }) => {
                        return <Input {...attr} />
                    }}
                />

                <List
                    collection={exampleInputsSimple}
                    uniqueAttr={input => input.identifier}
                    renderItem={({ identifier: _, ...attr }) => {
                        return <Input {...attr} />
                    }}
                />
            </Container>

            <Container inline className={styles.section}>
                <h2>Checkbox :</h2>

                <List
                    collection={exampleCheckbox}
                    uniqueAttr={input => input.identifier}
                    renderItem={({ identifier: _, ...attr }) => {
                        return <Input {...attr} />
                    }}
                />
            </Container>

            <Container inline className={styles.section}>
                <h2>Barre de progression :</h2>

                <List
                    collection={exampleProgressBars}
                    renderItem={({ id: _, ...attr }) => {
                        return <ProgressBar {...attr} />
                    }}
                    className={styles.progressBarList}
                />
            </Container>

            <Container inline className={styles.section}>
                <h2>Select :</h2>

                <List
                    collection={exampleSelects}
                    uniqueAttr={select => select.identifier}
                    renderItem={({ identifier: _, ...attr }) => {
                        return <Select {...attr} />
                    }}
                />

                <List
                    collection={exampleSpecificSelects}
                    uniqueAttr={select => select.identifier}
                    renderItem={({ identifier: _, ...attr }) => {
                        return <Select {...attr} />
                    }}
                />
            </Container>

            <Container inline className={styles.section}>
                <h2>Calendrier :</h2>

                <List
                    collection={exampleCalendar}
                    renderItem={({ id: _, ...attr }) => {
                        return <Calendar {...attr} />
                    }}
                />
            </Container>

            <Container inline className={styles.section}>
                <h2>Ckeditor :</h2>

                <List
                    collection={exampleCkeditor}
                    renderItem={({ id: _, ...attr }) => {
                        return <Ckeditor {...attr} />
                    }}
                />

            </Container>

            <Container inline className={styles.section}>
                <h2>Import de fichier :</h2>

                <List
                    collection={exampleInputFile}
                    uniqueAttr={inputFile => inputFile.identifier}
                    renderItem={({ identifier: _, ...attr }) => {
                        return <Input {...attr} />
                    }}
                />
            </Container>

            <Container inline className={styles.section}>
                <h2>Base carte :</h2>

                <Card />
            </Container>

            <Container inline className={styles.section}>
                <h2>Point :</h2>

                <List
                    collection={exampleDots}
                    renderItem={({ id: _, ...attr }) => {
                        return <Dot {...attr} />
                    }}
                />
            </Container>

            <Container inline className={styles.section}>
                <h2>Text souligné :</h2>

                <List
                    collection={exampleUnderlinedTexts}
                    renderItem={({ id: _, item }) => {
                        return item
                    }}
                    className={styles.underlinedContentList}
                />
            </Container>

            <Container inline className={styles.section}>
                <h2>Modal :</h2>

                <Modal
                    title="Exemple de modal"
                    active={displayModal}
                    setDisplayModal={setDisplayModal}
                >
                    <div className={styles.modalContent}>
                        <p>Contenu de la modal</p>
                        <img
                            src={`/images/logo.svg`}
                            alt='Logo dans la modal'
                        />
                        <p className={styles.bigModal}>Fin de la modal</p>
                    </div>
                </Modal>

                <Button label={'Modal'} onClick={() => setDisplayModal(true)} />
            </Container>
        </Container>
    </Container>
}

export default UiExample
