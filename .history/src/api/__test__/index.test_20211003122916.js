import requestAPI from "../index"
import "babel-polyfill"
test('should get poster', () => {
    requestAPI('/poster/get', 'GET').then(res =>
        expect(res?.status).toBe({ status: 300 })

    )
})