<template>
  <header class="header">
    <div class="header__left-side">
      <div class="logo">
        <Icon box="0 -4 77 24" icon-name="logo" width="77" height="24"><Logo/></Icon>
      </div>
      <nav class="menu">
        <ul>
          <li>
            <router-link
            tag="a"
            active-class="active"
            to="/auth"
            >
              Интерактивная обучающая система с управлением роботами
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>

/* import Btn from '@/components/Button' */
import Logo from '@/assets/icons/Logo'
import Icon from '@/components/IconBase'

export default {
  components: {
    Icon, Logo
  }
}
</script>

<style scoped lang="scss">
  .header{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 80px;
    border-bottom: 1px solid #A3A3A3;
    background: $header_color;
    &__left-side{
      margin-left: 70px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
  }
  .menu{
    margin-left: 30px;
    ul{
      margin-left: 0;
      padding-left: 0;
      li{
        list-style-type: none;
        a{
          font-family: Muller;
          font-style: normal;
          font-weight: normal;
          font-size: 20px;
          line-height: 20px;
          color: #A3A3A3;
          text-decoration: none;
        }
        &:first-child{
          padding-left: 30px;
          border-left: 1px solid #A3A3A3;
        }
      }
    }
  }

  @media print {
    .header{
      display: none;
    }
  }
</style>
