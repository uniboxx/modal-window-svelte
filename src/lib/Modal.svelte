<script>
  import Button from './ButtonModal.svelte';

  export let hideModal;

  function closeModal() {
    hideModal = true;
  }
</script>

<div class="modal" class:hidden={hideModal}>
  <Button class="close-modal" label={'&times;'} on:click={closeModal} />
  <h1>I'm a modal window 😍</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur.
  </p>
</div>

<style lang="stylus">
  @import '../assets/styl/_variables.styl';

  h1
    font-size 2rem
    margin-bottom 1.5rem

  p
    font-size 1.2rem

  .modal
    position absolute
    top 20%
    width 90%
    left 5%
    max-height 75svh
    overflow-y scroll
    background-color white
    padding 2.5rem
    border-radius 5px
    box-shadow 0 3rem 5rem rgba(0, 0, 0, 0.3)
    z-index 10
    @media screen and (min-width sm)
      width 70%
      left 50%
      transform translate(-50%, -50%)
      top 50%
</style>
