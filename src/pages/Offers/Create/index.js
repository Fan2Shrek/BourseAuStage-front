import { RxCross1 } from "react-icons/rx";
import { useContext, useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { GiHandBag } from "react-icons/gi";
import { TbNotes } from "react-icons/tb";
import { CiGift } from "react-icons/ci";
import { useTranslation } from "react-i18next";

import {UserContext} from "../../../context/UserContext";
import page403 from "../../Error/403";
import tokens from "../../../translations/tokens";
import styles from "./Create.module.scss";
import Container from "../../../components/ui/atoms/Container"
import IconBadge from "../../../components/ui/atoms/IconBadge";
import cn from "../../../utils/classnames";
import Input from "../../../components/ui/molecules/Input";
import Button from "../../../components/ui/atoms/Button";
import Ckeditor from "../../../components/ui/atoms/Ckeditor";
import apiClient from "../../../api/ApiClient";
import Modal from "../../..//components/ui/atoms/Modal";
import Select from "../../../components/ui/atoms/Select";
import Calendar from "../../../components/ui/atoms/Calendar";

const states = {
    1: {
        name: tokens.page.createOffer.states[2].name,
        icon: <TbNotes />
    },
    2: {
        name: tokens.page.createOffer.states[1].name,
        icon: <GiHandBag />
    },
    3: {
        name: tokens.page.createOffer.states[3].name,
        icon: <CiGift />
    },

}

const Create = () => {
    const { user } = useContext(UserContext);
    const { t } = useTranslation();

    const [state, setState] = useState(1);
    const [form, setForm] = useState({});

    const [searchSkills, setSearchSkills] = useState([]);
    const [skills, setSkills] = useState([]);

    const [activities, setActivities] = useState([]);
    const [skillsList, setSkillsList] = useState([]);

    const [displayModal, setDisplayModal] = useState(false);
    const [currentSelection, setCurrentSelection] = useState({});
    
    const handleDelete = (type, value) => {
        switch (type) {
            case 'skill':
                setSkills(skills.filter(skill => skill !== value));
                break;
            case 'searchSkill':
                setSearchSkills(searchSkills.filter(searchSkill => searchSkill !== value));
                break;
        }
    };

    const handleSubmit = () => {
        console.log(form);
    }

    // @todo: avec kevin
    // useEffect(() => {
    //     apiClient.activities.get()
    // }, []);

    useEffect(() => {
        apiClient.skill.getAll().then(response => {
            setSkillsList(response['hydra:member'].map((el) => ({...el, value: el.id})));
        });

    }, []);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleButton = () => {
        if (state === Object.keys(states).length) {
            handleSubmit();
            
            return;
        }

        setState(state + 1);
    }

    if (!user || !user.roles.includes('ROLE_COLLABORATOR')) {
        return page403();
    }

    return <Container className={styles.content}>
        <h2>{t(tokens.page.createOffer.title)}</h2>
        <div className={styles.header}>
            {Object.entries(states).map(([key, value]) => 
                <div key={key} className={cn(styles.stateStep, state == key ? styles.current : '')}>
                    <IconBadge icon={value.icon} className={styles.icon}/>
                    <div className={styles.description}>
                        <span className={styles.title}>{t(tokens.page.createOffer.step)} {key}/{Object.keys(states).length}</span>
                        <span className={styles.name}>{t(value.name)}</span>
                    </div>
                </div>
            )}
        </div>
        <div className={styles.divider}></div>
        {state === 1 && <div>
            <div className={styles.formRow}>
                <div className={styles.formLeft}>
                    <h3>{t(tokens.page.createOffer.name.title)}</h3>
                    <p>{t(tokens.page.createOffer.name.description)}</p>
                </div>
                <div className={styles.formRight}>
                    <Input className={styles.input} name='name' placeholder={t(tokens.page.createOffer.name.placeholder)} onChange={handleChange} value={form.name || ""}/>
                    <p>{t(tokens.page.createOffer.name.formInfo)}</p>
                </div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.formRow}>
                <div className={styles.formLeft}>
                    <h3>{t(tokens.page.createOffer.type.title)}</h3>
                </div>
                <div className={styles.formRight}>
                    <div className={styles.select}>
                        <div>
                            <input type='radio' className={cn(styles.input, styles.radio)} checked={form.isIntership || true} name='isInternship' onChange={() => setForm({...form, isIntership: true})} />
                            <label>{t(tokens.page.createOffer.type.internship)}</label>
                        </div>
                        <div>
                            <input type='radio' className={cn(styles.input, styles.radio)} checked={!form.isIntership && false} name='isInternship' onChange={(e) => setForm({...form, isIntership: false})} />
                            <label>{t(tokens.page.createOffer.type.workStudy)}</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.formRow}>
                <div className={styles.formLeft}>
                    <h3>{t(tokens.page.createOffer.remuneration.title)}</h3>
                </div>
                <div className={styles.formRight}>
                    <Input className={styles.input} name='remuneration' placeholder={t(tokens.page.createOffer.remuneration.placeholder)} onChange={handleChange} defaultValue={form.remuneration || ""}/>
                    <p>{t(tokens.page.createOffer.remuneration.formInfo)}</p>
                </div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.formRow}>
                <div className={styles.formLeft}>
                    <h3>{t(tokens.page.createOffer.searchSkills.title)}</h3>
                    <p>{t(tokens.page.createOffer.searchSkills.description)}</p>
                </div>
                <div className={cn(styles.formRight, styles.list)}>
                    {searchSkills.map((searchSkill) => <Button onClick={() => handleDelete('searchSkill', searchSkill)} className={styles.btn} key={searchSkill} label={searchSkill.name} icon={<RxCross1 />} rightIcon />)}
                    <Button onClick={() => setDisplayModal('searchSkills')} className={styles.btn} label={t(tokens.actions.add)} icon={<FaPlus />} inverted rightIcon />
                </div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.formRow}>
                <div className={styles.formLeft}>
                    <h3>{t(tokens.page.createOffer.skills.title)}</h3>
                    <p>{t(tokens.page.createOffer.skills.description)}</p>
                </div>
                <div className={cn(styles.formRight, styles.list)}>
                    {skills.map((skill) => <Button onClick={() => handleDelete('skill', skill)} className={styles.btn} key={skill} label={skill.name} icon={<RxCross1 />} rightIcon />)}
                    <Button onClick={() => setDisplayModal('skill')} className={styles.btn} label={t(tokens.actions.add)} icon={<FaPlus />} inverted rightIcon />
                </div>
            </div>
        </div>}
        {state === 2 && <div className={styles['step2']}>
            <div className={styles.formRow}>
                <div className={styles.formLeft}>
                    <h3>{t(tokens.page.createOffer.description.title)}</h3>
                    <p>{t(tokens.page.createOffer.description.description)}</p>
                </div>
                <div className={styles.formRight}>
                    <Ckeditor className={styles.input} placeholder={t(tokens.page.createOffer.description.placeholder)} onChange={(content) => setForm({...form, description: content})} defaultValue={form.description || ""}/>
                </div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.formRow}>
                <div className={styles.formLeft}>
                    <h3>{t(tokens.page.createOffer.missions.title)}</h3>
                    <p>{t(tokens.page.createOffer.missions.description)}</p>
                </div>
                <div className={styles.formRight}>
                    <Ckeditor className={styles.input} placeholder={t(tokens.page.createOffer.missions.placeholder)} onChange={(content) => setForm({...form, missions: content})} defaultValue={form.missions || ""}/>
                </div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.formRow}>
                <div className={styles.formLeft}>
                    <h3>{t(tokens.page.createOffer.profils.title)}</h3>
                    <p>{t(tokens.page.createOffer.profils.description)}</p>
                </div>
                <div className={styles.formRight}>
                    <Ckeditor className={styles.input} placeholder={t(tokens.page.createOffer.profils.placeholder)} onChange={(content) => setForm({...form, profils: content})} defaultValue={form.profils || ""}/>
                </div>
            </div>
        </div>}
        {state === 3 && <div>
            <div className={styles.formRow}>
                <div className={styles.formLeft}>
                    <h3>{t(tokens.page.createOffer.start.title)}</h3>
                    <p>{t(tokens.page.createOffer.start.description)}</p>
                </div>
                <div className={styles.formRight}>
                    <Calendar className={styles.input} onChange={(e) => setForm({...form, start: e['$d']})} defaultValue={form.start || ""}/>
                </div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.formRow}>
                <div className={styles.formLeft}>
                    <h3>{t(tokens.page.createOffer.end.title)}</h3>
                    <p>{t(tokens.page.createOffer.end.description)}</p>
                </div>
                <div className={styles.formRight}>
                    <Calendar className={styles.input} onChange={(e) => setForm({...form, end: e['$d']})} defaultValue={form.end || ""}/>
                </div>
            </div>
        </div>}
        <div className={styles.divider}></div>
        <div className={styles.footer}> 
            <Button label={state === Object.keys(states).length ? t(tokens.page.createOffer.submit) : t(tokens.page.createOffer.nextStep)} onClick={handleButton}/>
            {state !== 1 && <Button label={t(tokens.page.createOffer.previousStep)} onClick={() => setState(state - 1)} />}
        </div>
        <Modal
            title={t(tokens.page.createOffer.add[displayModal])}
            active={displayModal}
            setDisplayModal={setDisplayModal}
        >
            <div className={styles.modalContent}>
                {displayModal === 'searchSkills' && searchSkills.map((el) => <Button key={el.id} label={el.name} onClick={() => setSearchSkills(searchSkills.filter(p => p.id !== el.id))} />)}
                {displayModal === 'skill' && <Select placeholder={t(tokens.page.apply.addSkill)} onChange={(e) => setCurrentSelection({value: parseInt(e.target.value, 10)})} values={skillsList.filter(s => !skills.includes(s))} />}
                <Button className={styles.modalBtn} label={t(tokens.actions.add)} onClick={() => {
                    switch (displayModal) {
                        case 'skill':
                            setSkills([...skills, ...skillsList.filter(el => el.value === currentSelection.value)]);
                            break;
                        default:
                            break;
                    }
                    setCurrentSelection({});
                    setDisplayModal(false);
                }} />
            </div>
        </Modal>
    </Container>
}

export default Create;
