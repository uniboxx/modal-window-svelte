<script>
  // import { onMount } from 'svelte';
  import Button from './lib/ButtonModal.svelte';
  import Modal from './lib/Modal.svelte';

  'keyup', closeModal;

  let hideModal = true;

  function openModal() {
    hideModal = false;
  }
  function closeModal() {
    hideModal = true;
  }
</script>

<svelte:body on:keydown={e => e.key === 'Escape' && closeModal()} />
<Button class="show-modal" label={'Show modal'} on:click={openModal} />

<Modal bind:hideModal />
<div class="overlay" class:hidden={hideModal} on:click={closeModal}></div>

<style lang="stylus">
  .overlay
    position absolute
    top 0
    left 0
    width 100svw
    height 100svh
    background-color rgba(0, 0, 0, 0.6)
    backdrop-filter blur(3px)
    z-index 5
</style>
