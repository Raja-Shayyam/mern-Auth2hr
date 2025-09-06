import React from 'react'

export const Menu = () => {
  return (
    <>
      <select id="s_rooms" className="form-control" title="No. of Rooms">

        <option>menu</option>
        <option value="2">2 Rooms</option>
        <option value="3">3 Rooms</option>
        <option value="4">4 Rooms</option>
        <option value="5">5+ Rooms</option>
      </select>
    </>
  )
}
