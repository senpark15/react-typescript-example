import * as React from 'react';
import * as validatorjs from 'validatorjs';
import { observer } from 'mobx-react';
import LoginForm from './setup/LoginForm';
import { Redirect } from 'react-router-dom'
import MobxReactForm from 'mobx-react-form';
import authStore from '../store/AuthStore';

@observer
class Login extends React.Component<{}, object> {

  form = new LoginForm();
  render() {

    if (authStore.user) {
      return (
        <Redirect to={'/'} />
      )
    }

    return (
      <div>
        <section className="material-half-bg">
          <div className="cover"></div>
        </section>
        <section className="login-content">
          <div className="logo">
            <h1>Vali</h1>
          </div>
          <div className="login-box">
            <form className="login-form" onSubmit={this.form.onSubmit}>
              <h3 className="login-head"><i className="fa fa-lg fa-fw fa-user"></i>SIGN IN</h3>
              <div className="form-group">
                <label className="control-label" htmlFor={this.form.$('username').id} >{this.form.$('username').label}</label>
                <input className="form-control" type="text" {...this.form.$('username').bind() } />
              </div>
              <div className="form-group">
                <label className="control-label" htmlFor={this.form.$('password').id}>{this.form.$('password').label} </label>
                <input className="form-control" type="password" {...this.form.$('password').bind() } />
              </div>
              <div className="form-group">
                <div className="utility">
                  <div className="animated-checkbox">
                    <label className="semibold-text">
                      <input type="checkbox" /><span className="label-text" >Stay Signed in</span>
                    </label>
                  </div>
                  <p className="semibold-text mb-0"><a data-toggle="flip">Forgot Password ?</a></p>
                </div>
              </div>
              <div className="form-group btn-container">
                <button className="btn btn-primary btn-block" onClick={this.form.onSubmit} ><i className="fa fa-sign-in fa-lg fa-fw"></i>SIGN IN</button>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default Login;
