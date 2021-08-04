<template>
  <div class="content">
    <form action="reg" class="reg" @submit.prevent="onSubmit">
        <h2>Регистрация</h2>
        <div class="input-field">
          <label for="name">Как вас зовут?</label>
          <input
              id="name"
              type="text"
              placeholder="Иван"
              class="input"
              v-model.trim="name"
              v-bind:class="{
                input_invalid: (($v.name.$dirty) && !($v.name.required)) || (($v.name.$dirty) && !($v.name.name)),
                input_success: (($v.name.$dirty) && !($v.name.$invalid))
              }"
          >
          <small class="helper-text invalid" v-if="(($v.name.$dirty) && !($v.name.required))">Поле обязательно для заполнения</small>
          <small class="helper-text invalid" v-if="(($v.name.$dirty) && !($v.name.name))">Неправильный формат имени</small>
        </div>
        <div class="input-field">
          <label for="phone_tel">Номер телефона</label>
          <input
              id="phone_tel"
              type="text"
              placeholder="+79990000000"
              class="input"
              v-model.trim="phone"
              v-bind:class="{
                input_invalid: (($v.phone.$dirty) && !($v.phone.required)) || (($v.phone.$dirty) && !($v.phone.numeric)),
                input_success: (($v.phone.$dirty) && !($v.phone.$invalid))
              }"
          >
          <small class="helper-text invalid" v-if="(($v.phone.$dirty) && !($v.phone.required))">Поле обязательно для заполнения</small>
          <small class="helper-text invalid" v-if="(($v.phone.$dirty) && !($v.phone.numeric))">Телефон должен содержать только цифры</small>
        </div>
        <div class="input-field">
          <div class="checkbox">
            <input class="custom-checkbox" type="checkbox" id="color-1" name="color-1" value="indigo">
            <label class="box" for="color-1">Соглашаюсь с условиями <a class="dark_link" href="#">политики конфиденциальности</a> и принимаю условия <a class="dark_link" href="#">лицензионного соглашения</a></label>
          </div>
        </div>
        <div class="input-field">
          <label for="phone_code">Вам отправлена смс, введите код из сообщения</label>
          <input
              size=4
              id="phone_code"
              type="text"
              placeholder="0000"
              class="input input__small"
          >
        </div>
        <div class="qustion_field">
          <p>Не пришла смс?
            <router-link
            tag="a"
            to="/registration"
            >
              Отправить код повторно
            </router-link>
          </p>
        </div>
        <input type="submit" class="btn btn__main" value="Продолжить">
        <router-link
          tag="a"
          to="/auth"
        >
          Вернуться ко входу в личный кабинет
        </router-link>
    </form>
  </div>
</template>

<script>
import { required, minLength, email, alphaNum, numeric, helpers } from 'vuelidate/lib/validators'

export default {
  name: 'Reg',
  data: () => ({
    email: '',
    password: '',
    phone: '',
    name: '',
    code: ''
  }),
  validations: {
    email: { email, required },
    password: { minLength: minLength(6), required, alphaNum },
    phone: { numeric, required },
    name: { required, name: helpers.regex('name', /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/) },
    code: { numeric, required }
  },
  methods: {
    onSubmit () {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      console.log('submit')
    }
  }
}
</script>

<style lang="scss" scoped>
  h2{
    text-align: center;
  }
  .dark_link{
    font-size: 12px!important;
    line-height: 140%!important;
    color: #222222!important;
    text-decoration: underline;
  }
  .input{
    width: 100%;
    margin-bottom: 15px;
  }
  .reg{
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
    .box{
      font-weight: normal;
      padding-left: 25px;
      font-size: 12px;
      line-height: 140%;
    }
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
  .invalid{
    font-family: 'OpenSans';
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    color: $red;
    margin-top: -15px;
  }
</style>
