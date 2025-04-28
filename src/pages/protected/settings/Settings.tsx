import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import {
  CompanyInformationFormData,
  companyInformationSchema,
} from './schema/companyInformationSchema';
import { CompanyInformation } from './components/CompanyInformation';
import { UpdatePassword } from './components/UpdatePassword';
import { CampaignSettings } from './components/CampaignSettings';
import Tabs from '../../../components/Tabs';
import { QueryKeys } from '../../../enums/queryKeys';
import { api } from '../../../api/api';
import { StateContainer } from '../../../components/StateContainer';
import { ControlledForm } from '../../../components/ControlledForm';
import { useSearchParams } from 'react-router-dom';

// eslint-disable-next-line react-refresh/only-export-components
export const settingsTabs = [
  { name: 'Company Info', component: <CompanyInformation /> },
  { name: 'Update Password', component: <UpdatePassword /> },
  { name: 'Campaign Settings', component: <CampaignSettings /> },
];

const SettingsView = () => {
  const [searchParams] = useSearchParams();
  const selectedTabName = searchParams.get('tab') || settingsTabs[0].name;
  const [selectedTab, setSelectedTab] = useState(selectedTabName);

  const handleTabClick = (name: string) => {
    setSelectedTab(name);
  };

  return (
    <>
      <div className="lg:px-8">
        <Tabs
          tabs={settingsTabs.map((tab) => ({
            ...tab,
            isSelected: selectedTab === tab.name,
          }))}
          onTabClick={handleTabClick}
        />
        {settingsTabs.map(({ name, component }) => (
          <div key={name} className={name === selectedTab ? '' : 'hidden'}>
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
    address: data?.address || '',
    address2: data?.address2 || '',
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
