import {registerUser} from '../users';
import {login} from '../auth'

import {API_BASE_URL} from '../../config'

describe('registerUser', () => {
  it('should dispatch login', () => {
    const user = {
      username: "username",
      password: "password",
      firstName: "User",
      lastName: "Name"
    }
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json() {
          return user
        }
      })
    )
    const dispatch = jest.fn();
    return registerUser()(dispatch).then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/users`,
        {
        "method": "POST",
        "headers": {
          "Content-Type": "application/json"
          }
        })
      expect(dispatch).toHaveBeenCalledWith(login(user))
    })
  })
})
