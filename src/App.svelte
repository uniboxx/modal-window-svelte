<script>
  import Button from './lib/ButtonModal.svelte';
  import Modal from './lib/Modal.svelte';
  import { s } from './state.svelte';
</script>

<!-- <svelte:body
  onkeyup={e => (e.key === 'Escape' ? (s.hideModal = true) : null)} /> -->

<div
  class={`overlay ${s.hideModal ? 'hidden' : ''}`}
  onclick={() => (s.hideModal = true)}>
</div>

<Button
  classProp="show-modal"
  label={'Show modal'}
  onclick={() => (s.hideModal = false)} />

<Modal />

<style lang="scss">
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100svw;
    height: 100svh;
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(3px);
    z-index: 5;
  }
</style>
