import counterReducer, { Increment, Decrement } from '../src/components/counter.reducer';

describe('Counter reducer', () => {
    it('should return 0 in initial run', () => {
        expect(counterReducer()).toEqual(0);
    });

    it('should return state without action', () => {
        expect(counterReducer(1)).toEqual(1);
    });

    it('should modify action', () => {
        expect(counterReducer(1, { type: Increment }))
            .toEqual(2);
        expect(counterReducer(1, { type: Decrement }))
            .toEqual(0);
    });
});
