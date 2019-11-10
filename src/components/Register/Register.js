import React from 'react'

let Register = ({onRouteChange}) => {
    return (
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-1 mw5 shadow-5 center">
            <main className='pa4 black-80'>
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f3 fw6 ph0 mh0">Register</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6">Name</label>
                        <input className="br2 pa2 input-reset ba bg-transparent" type="text" name="name"  id="name" />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6">Email</label>
                        <input className="br2 pa2 input-reset ba bg-transparent" type="email" name="email-address"  id="email-address" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6">Password</label>
                        <input className="br2 b pa2 input-reset ba bg-transparent" type="password" name="password"  id="password" />
                    </div>
                    </fieldset>
                    <div className="">
                        <input 
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            type="submit" 
                            value="Register"
                            onClick={() => onRouteChange('home')}
                            />
                    </div>
                </div>
            </main>
        </article>
    )
}

export default Register