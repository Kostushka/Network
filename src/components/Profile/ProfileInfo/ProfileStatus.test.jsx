import { create } from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe('ProfileStatus component', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status='hi' />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('hi');
    });

    test('after creation <span> should be displayed', () => {
        const component = create(<ProfileStatus status='hi' />);
        const root = component.root;
        let span = root.findByType('span');
        expect(span).not.toBeNull();
    });
});
