<script>
  let { label, onclick, classProp } = $props();
</script>

<button class={classProp} {onclick}>{@html label}</button>

<style lang="scss">
  @use '../scss/vars';

  .show-modal {
    display: block;
    font-size: 1.5rem;
    font-weight: 600;
    padding: 1.5rem 3rem;
    margin: 2rem;
    border: none;
    background-color: #fff;
    color: #444;
    border-radius: 10rem;
    cursor: pointer;
    @media screen and (min-width: vars.$sm) {
      margin: 4rem 1.5rem;
    }
  }

  .close-modal {
    position: absolute;
    top: -0.5rem;
    right: 1rem;
    font-size: 3rem;
    color: #333;
    cursor: pointer;
    border: none;
    background: none;
  }
</style>
