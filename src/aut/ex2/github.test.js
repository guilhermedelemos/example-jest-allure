const axios = require('axios').default;

describe('github', ()=>{
    beforeEach(() => {
        reporter
            .severity('Moderate')
            .epic('GitHub Integration')
            .feature('Api')
            .story('Root');
    });

    test('Fetch data', async () => {
        const response = await axios.get('https://api.github.com');
        expect(response).toBeTruthy();
        expect(response.status).toBe(200);
        expect(response.data).toBeTruthy();
        // expect(response.data).toBeFalsy();
    });
});