import React from 'react'

export default function LoginPages() {
    return (
        <div>
<div className="box-parent-login">
  <div className="well bg-white box-login">
    <form role="form">
      <fieldset>
        <div className="form-group ls-login-user">
          <label htmlFor="userLogin">Usuário</label>
          <input className="form-control ls-login-bg-user input-lg" id="userLogin" type="text" aria-label="Usuário" placeholder="darth@vader.com" />
        </div>
        <div className="form-group ls-login-password">
          <label htmlFor="userPassword">Senha</label>
          <input className="form-control ls-login-bg-password input-lg" id="userPassword" type="password" aria-label="Senha" placeholder="123456" />
        </div>
        <a href="#" className="ls-login-forgot">Esqueci minha senha</a>
        <input type="submit" defaultValue="Entrar" className="btn btn-primary btn-lg btn-block" />
        <p className="txt-center ls-login-signup">Não possui um usuário na BuyCompany?
          <a href="#">Cadastre-se agora</a>
        </p>
      </fieldset>
    </form>
  </div>
</div>

        </div>
    )
}
