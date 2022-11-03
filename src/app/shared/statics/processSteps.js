export const loanProcessSteps = [
    { id: 'personalInformation', name: 'Personal information', path: '/personal-information', form: true },
    { id: 'adressDetails', name: 'Adress details', path: '/adress-details', form: true, disabled: true },
    { id: 'income', name: 'Income', path: '/income', form: true },
    { id: 'verify', name: 'Verify', path: '/verify', form: true, disabled: true },
    { id: 'approved', name: 'Approved', path: '/approved', form: false },
    { id: 'denied', name: 'Denied', path: '/denied', form: false },
];

export default {
    loanProcessSteps,
};
