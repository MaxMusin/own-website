import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import {media} from './style/mediaQueries'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Close from '../assets/x-circle.svg';
import Send from '../assets/send.svg';
import AlertError from '../assets/alert-triangle.svg';
import Button from './Button'

const FormWrapper = styled.form`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  
  ${media.sm`
    margin-top: 0px;
  `}
`
const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  &:nth-child(3) {
      textarea {
        margin-bottom: 45px;
      }
  }
  
  input,
  textarea {
    font-family: ${(props) => props.theme.font.primary};
    font-size: 16px;
    color: #220e0c;
    letter-spacing: 1.4px;
    border: none;
    border-bottom: 1px solid #E9E1E1;
    padding: 16px 0 12px 0;
    margin-bottom: 32px;
    
    ::placeholder,
    ::-webkit-input-placeholder {
      opacity: 0.36;
      color: #C4ADAD;
    }
    :-ms-input-placeholder {
       opacity: 0.36;
      color: #C4ADAD;
    }
    
    &:focus {
      outline: none;
      border-bottom-color: #C4ADAD;
    }
  }
`

const Label = styled.label`
  font-family: ${(props) => props.theme.font.primary};
  font-size: 14px;
  color: #c4adad;
  letter-spacing: 1.4px;
`

const WrappedToastContainer = styled(ToastContainer).attrs({
  // custom props
})`
  .Toastify__toast--success, 
  .Toastify__toast--error {
    background-image: linear-gradient(90deg, #E35D5B 0%, #E53935 100%);
  }
  .Toastify__toast {
    font-family: ${props => props.theme.font.primary};
    font-size: 14px;
    color: #FFFFFF;
    letter-spacing: 1.4px;
    border-radius: 5px;
    line-height: 22px;
    padding: 8px 10px 12px 12px;
  }
  .Toastify__toast-body b {
    font-weight: bold;
  }
  .Toastify__progress-bar {
    height: 4px;
  }
`;

const CloseWrapper = styled.div`
  margin-left: 8px;
  svg {
    width: 20px;
  }
`

const ToasterContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  svg {
    width: 48px;
    margin-right: 12px;
  }
`

const MyForm = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })
  const [formName, setFormName] = useState("");

  const CloseButton = ({ closeToast }) => (
    <CloseWrapper>
      <Close onClick={closeToast} />
    </CloseWrapper>
  );

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      form.reset()
      toast.success(msg);
    } else {
      const msgError = <ToasterContent><AlertError/><p>{msg}</p></ToasterContent>
      toast.error(msgError);
    }
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const msgConfirmation = <ToasterContent><Send/><p>Thanks, <b>{formName}</b>! I will come back to you ASAP. Cheers!</p></ToasterContent>
    setServerState({ submitting: true })
    axios({
      method: 'post',
      url: 'https://getform.io/f/c97a2bfd-6a2e-4873-a826-88670fb77695',
      data: new FormData(form),
    })
      .then((r) => {
        handleServerResponse(true, msgConfirmation, form)
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error, form)
      })
  }

  const handleChange = (e) => {
    setFormName(e.target.value.trim());
  };

  return (
    <FormWrapper onSubmit={handleOnSubmit}>
      <FormGroup>
        <Label htmlFor="input-name" required="required">
          Full name *
        </Label>
        <input
          type="text"
          name="name"
          id="input-name"
          placeholder="Victoria Doe"
          required="required"
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="input-email" required="required">
          Email *
        </Label>
        <input
          type="email"
          name="email"
          id="input-email"
          placeholder="example@yourdomain.com"
          required="required"
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="textarea-message">Message</Label>
        <textarea
          name="message"
          id="textarea-message"
          placeholder="Hi there …"
          required="required"
        />
      </FormGroup>
      <Button
        type="submit"
        className="btn btn-primary"
        disabled={serverState.submitting}
      >
        Get in touch
      </Button>
      <WrappedToastContainer
        position="bottom-right"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        closeButton={CloseButton}/>
    </FormWrapper>
  )
}

export default MyForm
