import { useState } from 'react';
import { InsertEmail } from './components/InsertEmail';
import { CheckEmail } from './components/CheckEmail';
import { SlimLayout } from '../components/SlimLayout';

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
        <CheckEmail email={email} />
      ) : (
        <InsertEmail onMutationSuccess={handleNextStep} />
      )}
    </SlimLayout>
  );
};
