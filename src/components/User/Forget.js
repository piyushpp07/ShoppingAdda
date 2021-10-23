import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
// import { useAuth } from "../contexts/AuthContext"
import { useMediaQuery, useTheme } from "@material-ui/core"
import { Link } from "react-router-dom"
import { auth } from '../../firebase'

export default function ForgotPassword() {
   const emailRef = useRef()
   //   const { resetPassword } = useAuth()
   const [error, setError] = useState("")
   const [message, setMessage] = useState("")
   const [loading, setLoading] = useState(false)
   const theme = useTheme();
   const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
   const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
   const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));


   function resetPassword(email) {
      return auth.sendPasswordResetEmail(email)
   }

   async function handleSubmit(e) {
      e.preventDefault()

      try {
         setMessage("")
         setError("")
         setLoading(true)
         await resetPassword(emailRef.current.value)
         setMessage("Check your inbox for further instructions")
      } catch {
         setError("Failed to reset password")
      }

      setLoading(false)
   }

   return (
      <>
         <Card style={{
            marginLeft: matchesXS ? '1em' : matchesSM ? '5em' : matchesMD ? '10em' : '25em',
            marginRight: matchesXS ? '1em' : matchesSM ? '5em' : matchesMD ? '10em' : '25em'
         }}>
            <Card.Body>
               <h2 className="text-center mb-4">Password Reset</h2>
               {error && <Alert variant="danger">{error}</Alert>}
               {message && <Alert variant="success">{message}</Alert>}
               <Form onSubmit={handleSubmit}>
                  <Form.Group id="email">
                     <Form.Label>Email</Form.Label>
                     <Form.Control type="email" ref={emailRef} required />
                  </Form.Group>
                  <Button disabled={loading} style={{ marginTop: '1em' }} className="w-100" type="submit">
                     Reset Password
                  </Button>
               </Form>
               <div className="w-100 text-center mt-3">
                  <Link to="/login">Login</Link>
               </div>
            </Card.Body>
         </Card>
         <div className="w-100 text-center mt-2">
            Need an account? <Link to="/register">Sign Up</Link>
         </div>
      </>
   )
}