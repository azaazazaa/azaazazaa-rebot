<template>
  <div class="content">
    <form action="auth" class="auth">
        <h2>Вход в личный кабинет ученика</h2>
        <div class="input-field">
          <label for="phone">Номер телефона</label>
          <input
              id="phone"
              type="text"
              placeholder="+79990000000"
              class="input"
          >
          <!-- <small class="helper-text invalid">Email</small> - для информирования после валидации -->
        </div>
        <div class="input-field">
          <label for="name">Пароль</label>
          <input
              id="name"
              type="password"
              placeholder="******"
              class="input"
          >
          <!-- <small class="helper-text invalid">Email</small> - для информирования после валидации -->
        </div>
        <button class="btn btn__main"><Icon box="0 0 14 11" icon-name="ok" width="14" height="11"><Ok/></Icon>Войти</button>
        <div class="qustion_field">
          <p>Нет аккаунта?</p>
          <router-link
          tag="a"
          to="/registration"
          >
            Регистрация
          </router-link>
        </div>
        <router-link
          tag="a"
          to="/password_reset"
        >
          Забыли Пароль
        </router-link>
    </form>
  </div>
</template>

<script>
import Ok from '@/assets/icons/Ok'
import Icon from '@/components/IconBase'

export default {
  name: 'Auth',
  components: {
    Ok, Icon
  }
}
</script>

<style lang="scss" scoped>
  h2{
      text-align: center;
    }
  .qustion_field{
    width: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .input{
    width: 100%;
    margin-bottom: 15px;
  }
  .auth{
    width: 30%;
    height: 360px;
    margin: auto;
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .input-field{
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  }
  label{
    font-family: $wt-family-base;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.0016px;
    color: $common_text;
    margin-bottom: 8px;
  }
  .btn{
    width: 120px;
  }
</style>
