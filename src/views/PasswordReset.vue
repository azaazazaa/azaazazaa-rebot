<template>
  <div class="content">
    <form action="reset" class="reset" @submit.prevent="onSubmit">
        <h2>Восстановление доступа к учетной записи</h2>
        <div class="input-field">
          <label for="phone">Номер телефона</label>
          <input
              id="phone"
              type="text"
              placeholder="+79990000000"
              class="input"
          >
        </div>
        <div class="input-field">
          <label for="phone">Вам отправлена смс, введите код из сообщения</label>
          <input
              size=4
              id="phone"
              type="text"
              placeholder="0000"
              class="input input__small"
          >
        </div>
        <button class="btn btn__main">Продолжить</button>
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
        <div class="qustion_field">
          <p>Если не удалось восстановить доступ, напишите на <a href="mailto:rebot@gmail.com">rebot@gmail.com</a></p>
        </div>
          <!-- <small class="helper-text invalid">Email</small> - для информирования после валидации -->
          <!-- <small class="helper-text invalid">Email</small> - для информирования после валидации -->
    </form>
  </div>
</template>

<script>
export default {
  mounted: function () {
    this.$nextTick(function () {
      this.progress = 0
    })
  },
  name: 'Reset',
  data: () => ({
    progress: 0
  }),
  methods: {
    onSubmit () {
      console.log('submit')
      this.progress += 1
    }
  }
}
</script>

<style lang="scss" scoped>
  h2{
      text-align: center;
    }
  .input{
    width: 100%;
    margin-bottom: 15px;
    &__small{
      width: 80px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .reset{
    width: 30%;
    height: 190px;
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
  .qustion_field{
    width: 100%;
    text-align: center;
  }
</style>
