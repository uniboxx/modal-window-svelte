<script>
  import { s } from '../state.svelte';
  import Button from './ButtonModal.svelte';
</script>

<div class={`modal ${s.hideModal ? 'hidden' : ''}`}>
  <Button
    classProp="close-modal"
    label={'&times;'}
    onclick={() => (s.hideModal = true)} />
  <h1>I'm a modal window 😍</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur.
  </p>
</div>

<style lang="scss">
  @use '../scss/vars';

  h1 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  p {
    font-size: 1.2rem;
  }
  .modal {
    position: absolute;
    top: 20%;
    width: 90%;
    left: 5%;
    max-height: 75svh;
    overflow-y: scroll;
    background-color: #fff;
    padding: 2.5rem;
    border-radius: 10px;
    box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);
    z-index: 10;
    transition: 0.3s;
    @media screen and (min-width: vars.$sm) {
      width: 70%;
      left: 50%;
      transform: translate(-50%, -50%);
      top: 30%;
    }
  }
</style>
