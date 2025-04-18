import { useState } from 'react';
import { SlimLayout } from '../web/components/SlimLayout';
import { InsertEmail } from './components/InsertEmail';
import { CheckEmail } from './components/CheckEmail';

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

/*
-Popunjavas email i saljes mutaciju
-stigne link i kad udjes na link
-izvuce se token sa linka
-gadjam odmah metodu authControllerForgotPasswordValidation
-kad to vrati success logovan je i ima status forgot password (who-am-i)
-baca ga na ui da ukuca password
-tu kad ukuca gadja authControllerResetPassword
*/
