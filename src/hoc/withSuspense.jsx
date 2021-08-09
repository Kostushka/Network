import { Suspense } from 'react';

const withSuspense = (Component) => (props) => {
    return (
        <Suspense fallback={<div>Загрузка...</div>}>
            <Component {...props} />
        </Suspense>
    );
};

export default withSuspense;
