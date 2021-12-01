import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { posts } from '../../action/requestPost'
import CardData from '../../screen/card/Card'
import Loader from '../loader/Loader'

export default function Home() {
    const dispatch=useDispatch()
    const postList=useSelector(state=>state.postList)
    const {loading,post}=postList;
    useEffect(()=>{
        dispatch(posts())
    },[])
  return (
    <div>
      {loading?(<Loader></Loader>):post?(post.map(pst=>(
          <CardData key={pst.id} title={pst.title} body={pst.body} id={pst.id} />
      ))):
      (<></>)
      }
    </div>
  )
}
