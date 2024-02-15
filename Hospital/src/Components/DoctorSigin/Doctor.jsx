import React from 'react'
import * as Components from './Doctor.js';
export default function Doctor() {
    const [signIn, toggle] = React.useState(true);
    return (
        // Creating Account 
       <Components.Container>
    <Components.SignUpContainer signinIn={signIn}>
        <Components.Form>
            <Components.Title>Create Account</Components.Title>
            <Components.Input type='text' placeholder='Doctor Id' />
            <Components.Input type='text' placeholder='Doctor Name' />
            <Components.Input type='text' placeholder='Hospital Name' />
            <Components.Input type='email' placeholder='Email' />
            <Components.Input type='tel' placeholder='Phone Number' />
            <Components.Input type='text' placeholder='Enter Otp' />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Components.Button style={{ fontSize: '10px', padding: '6px 10px', marginRight: '10px' }}>Get OTP</Components.Button>
                <Components.Button style={{ fontSize: '10px', padding: '6px 10px' }}>Verify OTP</Components.Button>
            </div>

            <Components.Input type='text' placeholder='Aadhar Number' style={{ marginBottom: '10px' }} />
            <Components.Input type='password' placeholder='Password' style={{ marginBottom: '10px' }} />
            <Components.Input type='password' placeholder='Confirm Password' style={{ marginBottom: '10px' }} />
            <Components.Button>Register</Components.Button>
        </Components.Form>
    </Components.SignUpContainer>

    <Components.SignInContainer signinIn={signIn}>
        <Components.Form>
            <Components.Title>Doctor Login</Components.Title>
            <Components.Input type='email' placeholder='Doctor Id' style={{ marginBottom: '10px' }} />
            <Components.Input type='password' placeholder='Password' style={{ marginBottom: '10px' }} />
            <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
            <Components.Button>Sign In</Components.Button>
        </Components.Form>
    </Components.SignInContainer>

    <Components.OverlayContainer signinIn={signIn}>
        <Components.Overlay signinIn={signIn}>

            <Components.LeftOverlayPanel signinIn={signIn}>
                <Components.Title>Welcome Back!</Components.Title>
                <Components.Paragraph>
                    To keep connected with us please login with your personal info
                </Components.Paragraph>
                <Components.GhostButton onClick={() => toggle(true)}>
                    Sign In
                </Components.GhostButton>
            </Components.LeftOverlayPanel>

            <Components.RightOverlayPanel signinIn={signIn}>
                <Components.Title>Hello Doctor!</Components.Title>
                <Components.Paragraph>
                    Please Enter Your personal details and start journey with us
                </Components.Paragraph>
                <Components.GhostButton onClick={() => toggle(false)}>
                    Sigin Up
                </Components.GhostButton>
            </Components.RightOverlayPanel>

        </Components.Overlay>
    </Components.OverlayContainer>
</Components.Container>

    )
}