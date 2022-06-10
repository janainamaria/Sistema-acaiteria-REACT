import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../components/home/Home'
import UserCrud from '../components/user/userCrud'

export default props => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/users" element={<UserCrud />} />
    <Route exact path="*" element={<Home />} />
  </Routes>
)
