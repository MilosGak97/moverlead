import { useQuery } from '@tanstack/react-query';
import { StateContainer } from '../../components/StateContainer';
import Tabs from '../../components/Tabs';
import { useState } from 'react';
import { QueryKeys } from '../../enums/queryKeys';
import { api } from '../../api/api';
import { ControlledForm } from '../../components/ControlledForm';
import {
  CompanyInformationFormData,
  companyInformationSchema,
} from './schema/companyInformationSchema';
import { CompanyInformation } from './components/CompanyInformation';
import { UpdatePassword } from './components/UpdatePassword';

const tabs = [
  { name: 'Company Information', component: <CompanyInformation /> },
  { name: 'Update Password', component: <UpdatePassword /> },
];

const SettingsView = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0].name);

  const handleTabClick = (name: string) => {
    setSelectedTab(name);
  };

  return (
    <>
      <div className="px-8">
        <Tabs
          tabs={tabs.map((tab) => ({
            ...tab,
            isSelected: selectedTab === tab.name,
          }))}
          onTabClick={handleTabClick}
        />
        {tabs.map(({ name, component }) => (
          <div className={name === selectedTab ? '' : 'hidden'}>
            {component}
          </div>
        ))}
      </div>
    </>
  );
};

export const Settings = () => {
  const { data, isFetching, isError, refetch } = useQuery({
    queryKey: [QueryKeys.COMPANY],
    queryFn: () => api.settings.settingsControllerGetCompany(),
  });

  const parsedCompanyInfo: CompanyInformationFormData = {
    companyName: data?.companyName || '',
    addressLine1: data?.address || '',
    addressLine2: data?.address2 || '',
    city: data?.city || '',
    state: data?.state || '',
    zip: data?.zip || '',
    website: data?.website || '',
    phoneNumber: data?.phoneNumber || '',
  };

  return (
    <StateContainer
      isLoading={isFetching}
      isError={isError}
      onErrorButtonClick={refetch}
    >
      <ControlledForm
        schema={companyInformationSchema}
        defaultValues={parsedCompanyInfo}
      >
        <SettingsView />
      </ControlledForm>
    </StateContainer>
  );
};
