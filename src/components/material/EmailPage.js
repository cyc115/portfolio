import React from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'


class EmailPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      fullName: '',
      email: '',
      message: '',
      nameErrMsg: null,
      emailErrMsg: null,
      msgErrMsg: null
    }
    this.onEmailChanged = this.onEmailChanged.bind(this)
    this.onNameChanged = this.onNameChanged.bind(this)
    this.onMessageChanged = this.onMessageChanged.bind(this)
    this.submitMessage = this.submitMessage.bind(this)
  }

  onNameChanged(e) {
    this.setState({ fullName: e.target.value })
  }

  onEmailChanged(e) {
    this.setState({ email: e.target.value })
  }

  onMessageChanged(e) {
    this.setState({ message: e.target.value })
  }

  validEmail() {
    return (this.state.email.includes('@') && this.state.email.includes('.'))
  }
  validMessage() {
    return (this.state.message.length > 0 && this.state.message !== 'Hey there Mike!')
  }
  validName() {
    return this.state.fullName.length !== 0
  }

  submitMessage() {
    if (
      this.validName() &&
      this.validEmail() &&
      this.validMessage()
    ) {
      //Sumbit to server 
      //TODO implement a backend server and use mailgun
      let myEmail = 'yuechuan20@gmail.com'
      let url = `mailto:${myEmail}?cc=${encodeURI(this.state.email)}&subject=${encodeURI('Hi Mike')}&body=${encodeURI(this.state.message)}`
      
      window.open(url, '_blank')
    }

    else {
      //TODO implement fault handling
      console.log('incorrect');
      if (!this.validName()) {
        console.log('incorrect name');
      }
    }
  }
  errors = {
    name: "How could anyone forget their name?",
    emailEmpty: "If you leave it empty I will not be able to reach you~",
    emailWrongFormat: "I suspect this is not a valid email address...",
    messageEmpty: "Beep, sending me an empty email seems to be rather unproductive.",
    messageDefaultStr: 'Just a little more constructive will do...'
  }

  render() {
    return (
      <div>
        <TextField
          id='fullName'
          multiLine={false}
          floatingLabelText='Hi! What is your name?'
          errorText={null}
          fullWidth={true}
          onChange={this.onNameChanged}
        />
        <TextField
          id='email'
          multiLine={false}
          floatingLabelText='Tell me your email so I can get back to you.'
          fullWidth={true}
          onChange={this.onEmailChanged}
        />
        <TextField
          id='message'
          floatingLabelText="Your message here."
          multiLine={true}
          fullWidth={true}
          rows={4}
          defaultValue="Hey there Mike!"
          onChange={this.onMessageChanged}
        />

        <RaisedButton
          id='submit'
          label='Ready to go!'
          primary={true}
          onClick={this.submitMessage}>
        </RaisedButton>
      </div>
    )
  }
}

export default EmailPage