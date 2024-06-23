import { useContext, useState } from "react";
import { GiHandBag } from "react-icons/gi";
import { TbNotes } from "react-icons/tb";
import { CiGift } from "react-icons/ci";

import {UserContext} from "../../../context/UserContext";
import page403 from "../../Error/403";
import { useTranslation } from "react-i18next";
import tokens from "../../../translations/tokens";
import styles from "./Create.module.scss";
import Container from "../../../components/ui/atoms/Container"
import IconBadge from "../../../components/ui/atoms/IconBadge";
import cn from "../../../utils/classnames";

const states = {
    1: {
        name: tokens.page.createOffer.states[1].name,
        icon: <GiHandBag />
    },
    2: {
        name: tokens.page.createOffer.states[2].name,
        icon: <TbNotes />
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

    if (!user || !user.roles.includes('ROLE_COLLABORATOR')) {
        return page403();
    }

    return <Container className={styles.content}>
        <h2>{t(tokens.page.createOffer.title)}</h2>
        <div className={styles.header}>
            {Object.entries(states).map(([key, value]) => 
                <div class={cn(styles.stateStep, state == key ? styles.current : '')}>
                    <IconBadge icon={value.icon} className={styles.icon}/>
                    <div className={styles.description}>
                        <span className={styles.title}>{t(tokens.page.createOffer.step)} {key}/{Object.keys(states).length}</span>
                        <span className={styles.name}>{t(value.name)}</span>
                    </div>
                </div>
            )}
        </div>
        <div className={styles.divider}></div>
    </Container>
}

export default Create;
