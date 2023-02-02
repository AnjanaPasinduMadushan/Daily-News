import React, {useRef, useEffect} from 'react'
import {Form, Button} from 'react-bootstrap'

import {useDispatch} from 'react-redux'

import { addToNewsletter } from '../../store/utils/thunks'
import { showToast } from './tools'

import { ToastContainer } from 'react-toastify'; 
import { clearNewsLetter } from '../../store/reducers/users'

const NewsLetter = () => {

  const textInput = useRef();
    const dispatch = useDispatch();


    

  const handleSubmit = (e) =>{
    e.preventDefault();

    const value = textInput.current.value;

    dispatch(addToNewsletter({email:value}))
    .unwrap()
    .then((response)=>{
      if(response.newsletter === "added"){

        showToast('SUCCESS','Thank you for subcribing !!')
        textInput.current.value = '';

      }

      if(response.newsletter === "failed"){

        showToast('ERROR','You are already on the the DB')
        textInput.current.value = '';

      }
      dispatch(clearNewsLetter())
    })

  }



  return (
    <>
    <div className='newsletter_container'>
        <h1>Join Our Newsletter</h1>

        <div className='form'>
            <Form onSubmit={handleSubmit} className='mt-4'>
            <Form.Group>
                <Form.Control 
                    type="text"
                    placeholder='EXAMPLE:abc@gmail.com'
                    name="email"
                    ref={textInput}
                >

                </Form.Control>
            </Form.Group>

            <Button className='mt-2' variant="primary" type="submit">Add me to the List</Button>
            </Form>

        </div>
    </div>
    <ToastContainer/>
    </>
  )
}

export default NewsLetter