import React from 'react'
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
function Chat() {
   const theme = {
      background: '#f5f8fb',
      headerBgColor: 'purple',
      headerFontColor: '#fff',
      headerFontSize: '15px',
      botBubbleColor: 'purple',
      botFontColor: '#fff',
      userBubbleColor: '#fff',
      userFontColor: '#4a4a4a',
   };
   const steps = [
      {
         id: '0',
         message: 'Hello! How may I help you?',
         trigger: '1'
      },
      {
         id: '1',
         options: [
            { value: 1, label: 'Regarding Payment But Done Order Not Recived', trigger: '3' },
            { value: 2, label: 'Regarding Order', trigger: '4' },
         ],
      },
      {
         id: '3',
         message: 'Sorry for the inconvenience.You will get your payment back shortly',
         trigger: '6'
      },
      {
         id: '4',
         message: 'Is Your Order in Transist',
         trigger: '5'
      },
      {
         id: '5',
         options: [
            { value: 1, label: 'YES', trigger: '8' },
            { value: 2, label: 'NO', trigger: '11' },
         ],
      },
      {
         id: '6',
         message: 'Is Your Query Solved',
         trigger: '7'
      },
      {
         id: '7',
         options: [
            { value: 1, label: 'Yes', trigger: '10' },
            { value: 2, label: 'No', trigger: '1' },
         ],
      },
      {
         id: '8',
         message: 'You will recive your Order Soon',
         trigger: '6'
      },
      {
         id: '9',
         message: 'You will receive call from our customer care, shortly.Or you can email us at piyushpar7@gmail.com',
         trigger: '6'
      },
      {
         id: '11',
         message: 'You will receive call from our customer care, shortly.Or you can email us at piyushpar7@gmail.com',
         trigger: '10',
      },
      {
         id: '10',
         message: 'Please Rate The App',
         trigger: '12',

      },
      {
         id: '12',
         user: true,
         trigger: '13'
      },
      {
         id: '13',
         message: 'Thank you!!',
         end: true
      }
   ];
   return (
      <div>
         <ThemeProvider theme={theme}>
            <ChatBot
               headerTitle="ShoppingAdda Assistant"
               floating="true" steps={steps} />
         </ThemeProvider>
      </div>
   )
}

export default Chat;
