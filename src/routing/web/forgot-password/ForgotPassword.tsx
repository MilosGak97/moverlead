import { useState } from 'react';
import { SlimLayout } from '../components/SlimLayout';
import { InsertEmail } from './components/InsertEmail';
import { InsertCode } from './components/InsertCode';

export const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = (email: string) => {
    setEmail(email);
    setCurrentStep((prev) => prev + 1);
  };

  return (
    <SlimLayout>
      {currentStep ? (
        <InsertCode email={email} />
      ) : (
        <InsertEmail onMutationSuccess={handleNextStep} />
      )}
    </SlimLayout>
  );
};
