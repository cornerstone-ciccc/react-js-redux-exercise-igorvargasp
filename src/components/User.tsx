import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../store'
import { incrementAge, setFirstname, setLastname } from '../features/UserSlice'

export default function User() {
  const dispatch = useDispatch()
  const firstname = useSelector((s: RootState) => s.user.firstname)
  const lastname = useSelector((s: RootState) => s.user.lastname)
  const age = useSelector((s: RootState) => s.user.age)

  return (
    <div>
      <p>
        <strong>Firstname:</strong> {firstname}
      </p>
      <p>
        <strong>Lastname:</strong> {lastname}
      </p>
      <p>
        <strong>Age:</strong> {age}
      </p>

      <button onClick={() => dispatch(incrementAge())}>Increment Age</button>

      <div style={{ marginTop: 12 }}>
        <div>
          <label>Firstname: </label>
          <input
            value={firstname}
            onChange={(e) => dispatch(setFirstname(e.target.value))}
          />
        </div>
        <div style={{ marginTop: 8 }}>
          <label>Lastname: </label>
          <input
            value={lastname}
            onChange={(e) => dispatch(setLastname(e.target.value))}
          />
        </div>
      </div>
    </div>
  )
}
