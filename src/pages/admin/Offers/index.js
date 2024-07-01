import { useContext } from "react";
import { useTranslation } from "react-i18next";

import { UserContext } from "../../../context/UserContext";
import { existsFilter, withCompany } from "../../../api/filters";
import tokens from "../../../translations/tokens";
import Error from "../../Error";
import UserRoleEnum from "../../../enum/UserRoleEnum";
import Container from "../../../components/ui/atoms/Container";
import Tag from "../../../components/ui/atoms/Tag";
import ApiCollectionTable from "../../../components/ui/molecules/ApiCollectionTable";

const Offers = () => {
    const { t } = useTranslation();
    const { user } = useContext(UserContext);

    if (!user || !user.roles.includes(UserRoleEnum.COLLABORATOR)) {
        return <Error code={403} />;
    }

    return <Container admin>
        <ApiCollectionTable
            url={`/offers`}
            foundLabel={t(tokens.page.admin.offers.apiCollectionTable.foundLabel)}
            itemsPerPageLabel={t(tokens.page.admin.offers.apiCollectionTable.itemsPerPageLabel)}
            fields={[
                {
                    property: 'name',
                    label: t(tokens.entities.offer.name),
                    renderField: offer => offer.name,
                    sortable: true,
                },
                {
                    property: 'deletedAt',
                    label: t(tokens.entities.offer.deletedAt),
                    renderField: offer => <Tag
                        label={t(tokens.page.admin.offers.status[offer.deletedAt ? 'inactive' : 'active'])}
                        color={offer.deletedAt ? 'var(--color-danger)' : 'var(--color-success)'}
                    />,
                },
                {
                    property: 'createdAt',
                    label: t(tokens.entities.offer.createdAt.second),
                    renderField: offer => new Date(offer.createdAt).toLocaleDateString(),
                    sortable: true,
                },
                {
                    property: 'availableAt',
                    label: t(tokens.entities.offer.availableAt),
                    renderField: offer => new Date(offer.availableAt).toLocaleDateString(),
                    sortable: true,
                },
                {
                    property: 'internship',
                    label: t(tokens.entities.offer.isInternship),
                    renderField: offer => <Tag
                        label={t(tokens.page.admin.offers.type[offer.internship ? 'internship' : 'workStudy'])}
                        {...(!offer.internship ? { color: '#FFB836' } : {})}
                    />,
                },
            ]}
            filters={[
                existsFilter({
                    name: 'search-all-status',
                    property: 'deletedAt',
                    propertyTranslation: t(tokens.filters.all),
                    value: null
                }),
                existsFilter({
                    name: 'search-active-status',
                    property: 'deletedAt',
                    propertyTranslation: t(tokens.page.admin.offers.status.active),
                    value: false
                }),
                existsFilter({
                    name: 'search-inactive-status',
                    property: 'deletedAt',
                    propertyTranslation: t(tokens.page.admin.offers.status.inactive),
                    value: true
                }),
            ]}
            permanentFilters={[
                withCompany('company.id', user.company.id)
            ]}
            defaultFilter={'search-active-status'}
            defaultSort={{
                property: 'availableAt',
                direction: 'asc'
            }}
            itemsPerPageChoices={[8, 16, 32]}
            defaultItemsPerPage={8}
        />
    </Container>
}

export default Offers;
