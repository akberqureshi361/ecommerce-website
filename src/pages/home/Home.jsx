import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'

function Home() {
  const context = useContext(myContext);

  const { state,color} = context
 

  return (
    <Layout>
      <h1>name : {state.name}</h1>
      <h1>Roll no : {state.rollno}</h1>
      <h1>Roll no : {color}</h1>
    </Layout>
  )
}

export default Home