import assert from 'assert';
import ttlize from '../src/main';

function dummy() {
    return Math.floor(Math.random() * 100);
}

describe('ttlize', function() {
    it('returns same value when called before timeout', function() {
        const ttlized = ttlize(dummy, 10000);
        const a = ttlized();
        const b = ttlized();

        assert.equal(a, b);
    });

    it('returns different value after expired', function(done) {
        const ttlized = ttlize(dummy);
        const a = ttlized();

        setTimeout(function() {
            const b = ttlized();
            assert.notEqual(a, b);
            done();
        }, 1000);
    });

    describe('Web Storage', function() {
        beforeEach(function() {
            localStorage.clear();
        });

        it('does not work without key parameter', function() {
            const a = ttlize(dummy, 1000, {
               type: 'localStorage',
            });

            assert.throws(a);
        });

        it('returns same value on each call', function() {
            const key = '__ttlize__test__';
            const a = ttlize(dummy, 1000 * 60, {
                type: 'localStorage',
                key: key
            })();
            const b = ttlize(dummy, 1000 * 60, {
                type: 'localStorage',
                key: key
            })();

            assert.equal(a, b);
        });
    });
});
